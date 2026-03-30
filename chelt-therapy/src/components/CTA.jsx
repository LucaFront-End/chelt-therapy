import { useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ctaContent } from '../data/content';
import { submitFormToWix } from '../lib/wixClient';
import { User, Mail, Phone, Building2, Stethoscope, UserCircle, HelpCircle, MapPin, ChevronRight, ChevronLeft, Send, CheckCircle2, Loader2 } from 'lucide-react';
import './CTA.css';

const STEPS = [
    { id: 'name', question: '¿Cómo te llamas?', subtitle: 'Queremos conocerte mejor' },
    { id: 'email', question: '¿Cuál es tu correo electrónico?', subtitle: 'Para enviarte la información de CHELT Therapy' },
    { id: 'phone', question: '¿Cuál es tu teléfono?', subtitle: 'Para coordinar la demostración' },
    { id: 'role', question: '¿Quién eres?', subtitle: 'Selecciona tu perfil profesional' },
    { id: 'state', question: '¿De qué estado eres?', subtitle: 'Para conectarte con el representante más cercano' },
    { id: 'consent', question: 'Casi listo', subtitle: 'Solo confirma estos permisos' },
];

const ROLES = [
    { value: 'clinica', label: 'Clínica / Hospital', icon: Building2 },
    { value: 'terapeuta', label: 'Terapeuta', icon: Stethoscope },
    { value: 'medico', label: 'Médico', icon: UserCircle },
    { value: 'otro', label: 'Otro', icon: HelpCircle },
];

const STATES = [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas',
    'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima', 'Durango',
    'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco',
    'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca',
    'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa',
    'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz',
    'Yucatán', 'Zacatecas',
];

export default function CTA() {
    const ref = useScrollReveal();
    const sectionRef = useRef(null);
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState('next');
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [form, setForm] = useState({
        name: '', email: '', phone: '', role: '', state: '',
        consentMarketing: false, consentPrivacy: false,
    });

    const current = STEPS[step];
    const totalSteps = STEPS.length;

    const canAdvance = () => {
        switch (current.id) {
            case 'name': return form.name.trim().length > 1;
            case 'email': return /\S+@\S+\.\S+/.test(form.email);
            case 'phone': return form.phone.trim().length >= 8;
            case 'role': return form.role !== '';
            case 'state': return form.state !== '';
            case 'consent': return form.consentPrivacy;
            default: return false;
        }
    };

    const goNext = async () => {
        if (!canAdvance()) return;
        if (step === totalSteps - 1) {
            setSubmitting(true);
            setSubmitError(null);
            try {
                const roleLabel = ROLES.find(r => r.value === form.role)?.label || form.role;
                await submitFormToWix({ ...form, role: roleLabel });
                setSubmitted(true);
                setTimeout(() => {
                    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            } catch (err) {
                console.error('Wix CMS Error:', err);
                setSubmitError('Hubo un error al enviar. Intentá de nuevo.');
            } finally {
                setSubmitting(false);
            }
            return;
        }
        setDirection('next');
        setStep(s => s + 1);
    };

    const goBack = () => { if (step > 0) { setDirection('prev'); setStep(s => s - 1); } };
    const handleKeyDown = (e) => { if (e.key === 'Enter') { e.preventDefault(); goNext(); } };

    if (submitted) {
        const firstName = form.name.split(' ').find(w => !['Dr.', 'Dra.', 'Lic.', 'Ing.'].includes(w)) || form.name;
        const roleLabel = ROLES.find(r => r.value === form.role)?.label || '';
        return (
            <section className="cta section" id="contacto" ref={sectionRef}>
                <div className="container">
                    <div className="cta__success cta__success--visible">
                        <div className="cta__success-icon"><CheckCircle2 size={64} strokeWidth={1.5} /></div>
                        <h2 className="cta__success-title">¡Gracias por tu consulta, <span className="cta__success-name">{firstName}</span>!</h2>
                        <p className="cta__success-text">Tu solicitud como <strong>{roleLabel}</strong> en <strong>{form.state}</strong> ha sido registrada. Un representante te contactará a <strong>{form.email}</strong> pronto.</p>
                        <a href={ctaContent.whatsappUrl} className="btn btn--primary btn--lg" target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp</a>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="cta section section--alt" id="contacto" ref={ref}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="tag section-header__tag"><span className="tag__dot" />{ctaContent.tag}</span>
                    <h2 className="section-header__title">{ctaContent.title}</h2>
                </div>
                <div className="cta__wizard reveal reveal-delay-1">
                    <div className="cta__progress">
                        <div className="cta__progress-bar" style={{ width: `${((step + 1) / totalSteps) * 100}%` }} />
                        <span className="cta__progress-text">{step + 1} / {totalSteps}</span>
                    </div>
                    <div className={`cta__step cta__step--${direction}`} key={step}>
                        <h3 className="cta__step-question">{current.question}</h3>
                        <p className="cta__step-subtitle">{current.subtitle}</p>
                        <div className="cta__step-body">
                            {current.id === 'name' && (
                                <div className="cta__input-wrap">
                                    <User className="cta__input-icon" size={20} />
                                    <input type="text" className="cta__input cta__input--large" placeholder="Tu nombre completo" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} onKeyDown={handleKeyDown} />
                                </div>
                            )}
                            {current.id === 'email' && (
                                <div className="cta__input-wrap">
                                    <Mail className="cta__input-icon" size={20} />
                                    <input type="email" className="cta__input cta__input--large" placeholder="correo@institucion.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} onKeyDown={handleKeyDown} />
                                </div>
                            )}
                            {current.id === 'phone' && (
                                <div className="cta__input-wrap">
                                    <Phone className="cta__input-icon" size={20} />
                                    <input type="tel" className="cta__input cta__input--large" placeholder="+52 55 1234 5678" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} onKeyDown={handleKeyDown} />
                                </div>
                            )}
                            {current.id === 'role' && (
                                <div className="cta__role-grid">
                                    {ROLES.map(r => { const Icon = r.icon; return (
                                        <button key={r.value} className={`cta__role-card ${form.role === r.value ? 'cta__role-card--active' : ''}`} onClick={() => setForm(f => ({ ...f, role: r.value }))}>
                                            <Icon size={28} strokeWidth={1.5} /><span>{r.label}</span>
                                        </button>
                                    ); })}
                                </div>
                            )}
                            {current.id === 'state' && (
                                <div className="cta__input-wrap">
                                    <MapPin className="cta__input-icon" size={20} />
                                    <select className="cta__input cta__input--large cta__select" value={form.state} onChange={e => setForm(f => ({ ...f, state: e.target.value }))}>
                                        <option value="">Selecciona tu estado</option>
                                        {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                            )}
                            {current.id === 'consent' && (
                                <div className="cta__consent-list">
                                    <label className="cta__consent-item">
                                        <input type="checkbox" checked={form.consentMarketing} onChange={e => setForm(f => ({ ...f, consentMarketing: e.target.checked }))} className="cta__checkbox" />
                                        <span>Acepto recibir comunicaciones de Marketing.</span>
                                    </label>
                                    <label className="cta__consent-item">
                                        <input type="checkbox" checked={form.consentPrivacy} onChange={e => setForm(f => ({ ...f, consentPrivacy: e.target.checked }))} className="cta__checkbox" />
                                        <span>He leído y acepto la <a href="#" className="cta__consent-link">Política de Privacidad</a>.</span>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="cta__nav">
                        <button className="cta__nav-back" onClick={goBack} disabled={step === 0}><ChevronLeft size={18} /> Atrás</button>
                        <button className={`btn btn--primary btn--lg cta__nav-next ${!canAdvance() || submitting ? 'cta__nav-next--disabled' : ''}`} onClick={goNext} disabled={!canAdvance() || submitting}>
                            {submitting ? (<><Loader2 size={16} className="cta__spinner" /> Enviando...</>) : step === totalSteps - 1 ? (<><Send size={16} /> Solicitar Demo</>) : (<>Siguiente <ChevronRight size={18} /></>)}
                        </button>
                    </div>
                    {submitError && <p className="cta__error">{submitError}</p>}
                    <div className="cta__quick-contact">
                        <span>¿Contacto directo?</span>
                        <a href={ctaContent.whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta__wa-link">WhatsApp →</a>
                        <span className="cta__separator">·</span>
                        {ctaContent.phones.map((p, i) => <a key={i} href={`tel:${p.replace(/\s/g, '')}`} className="cta__phone-link">{p}</a>)}
                    </div>
                </div>
            </div>
        </section>
    );
}
