import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { media } from '../data/content';
import './Navbar.css';

const LINKS = [
    { href: '#que-es', label: '¿Qué es?' },
    { href: '#terapias', label: 'Terapias' },
    { href: '#tecnologia', label: 'Tecnología' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <a href="#" className="navbar__brand">
                    <img src={media.bruceMediaLogo} alt="Bruce Médica" className="navbar__logo-img" />
                </a>

                <div className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
                    {LINKS.map((l) => (
                        <a key={l.href} href={l.href} className="navbar__link" onClick={() => setOpen(false)}>
                            {l.label}
                        </a>
                    ))}
                    <a href="#contacto" className="btn btn--primary navbar__cta" onClick={() => setOpen(false)}>
                        Solicitar Demo
                    </a>
                </div>

                <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Menú">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
}
