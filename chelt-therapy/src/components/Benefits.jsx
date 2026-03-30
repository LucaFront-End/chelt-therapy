import { useScrollReveal } from '../hooks/useScrollReveal';
import { benefitsContent } from '../data/content';
import { HeartPulse, ShieldCheck, Activity, RefreshCw, Timer, Brain } from 'lucide-react';
import './Benefits.css';

const ICONS = { HeartPulse, ShieldCheck, Activity, RefreshCw, Timer, Brain };
const ACCENTS = ['#E03030', '#3B82F6', '#F59E0B', '#10B981', '#8B5CF6', '#EC4899'];

export default function Benefits() {
    const ref = useScrollReveal();

    return (
        <section className="benefits section section--alt" id="beneficios" ref={ref}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="tag section-header__tag">
                        <span className="tag__dot" />
                        {benefitsContent.tag}
                    </span>
                    <h2 className="section-header__title">{benefitsContent.title}</h2>
                    <p className="section-header__subtitle">{benefitsContent.subtitle}</p>
                </div>

                <div className="benefits__grid">
                    {benefitsContent.items.map((item, i) => {
                        const Icon = ICONS[item.icon];
                        return (
                            <div
                                className={`benefits__card reveal reveal-delay-${(i % 3) + 1}`}
                                key={i}
                                style={{ '--card-accent': ACCENTS[i] }}
                            >
                                <div className="benefits__card-top">
                                    <span className="benefits__card-num">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="benefits__card-icon">
                                        <Icon size={22} strokeWidth={2} />
                                    </div>
                                </div>
                                <h3 className="benefits__card-title">{item.title}</h3>
                                <p className="benefits__card-desc">{item.desc}</p>
                                <div className="benefits__card-line" />
                            </div>
                        );
                    })}
                </div>

                <div className="benefits__highlight reveal reveal-delay-2">
                    <div className="benefits__highlight-item">
                        <span className="benefits__highlight-value">90,000+</span>
                        <span className="benefits__highlight-label">Publicaciones científicas que respaldan las tecnologías</span>
                    </div>
                    <div className="benefits__highlight-divider" />
                    <div className="benefits__highlight-item">
                        <span className="benefits__highlight-value">5 en 1</span>
                        <span className="benefits__highlight-label">Único dispositivo que integra cinco terapias sinérgicas</span>
                    </div>
                    <div className="benefits__highlight-divider" />
                    <div className="benefits__highlight-item">
                        <span className="benefits__highlight-value">95°C</span>
                        <span className="benefits__highlight-label">Gradiente de choque térmico para máxima eficacia</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
