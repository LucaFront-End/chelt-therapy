import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { heroContent } from '../data/content';
import { ArrowRight, Shield, Award, Activity, ChevronDown } from 'lucide-react';
import './Hero.css';

function AnimatedNumber({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started) setStarted(true);
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        let start = 0;
        const duration = 1800;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [started, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

/* Animated dot grid canvas */
function DotGrid() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let time = 0;

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;
            ctx.clearRect(0, 0, w, h);
            
            const spacing = 40;
            const cols = Math.ceil(w / spacing);
            const rows = Math.ceil(h / spacing);
            
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing + spacing / 2;
                    const y = j * spacing + spacing / 2;
                    
                    // Gentle wave effect
                    const wave = Math.sin(time * 0.01 + i * 0.3 + j * 0.2) * 0.5 + 0.5;
                    const radius = 1 + wave * 1.2;
                    const alpha = 0.06 + wave * 0.08;
                    
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(24, 96, 166, ${alpha})`;
                    ctx.fill();
                }
            }
            time++;
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="hero__dot-grid" />;
}

export default function Hero() {
    const ref = useScrollReveal();

    return (
        <section className="hero" ref={ref}>
            {/* Animated backgrounds */}
            <DotGrid />
            <div className="hero__mesh">
                <div className="hero__mesh-blob hero__mesh-blob--1" />
                <div className="hero__mesh-blob hero__mesh-blob--2" />
                <div className="hero__mesh-blob hero__mesh-blob--3" />
            </div>

            <div className="container hero__container">
                <div className="hero__center reveal">
                    <div className="hero__badge">
                        <span className="hero__badge-dot" />
                        <span>Tecnología de Última Generación</span>
                    </div>

                    <h1 className="hero__title">
                        <span className="hero__title-line hero__title-line--reveal">5 Terapias.</span>
                        <span className="hero__title-line hero__title-line--accent hero__title-line--reveal">Un Solo Equipo.</span>
                    </h1>

                    <p className="hero__subtitle">{heroContent.subtitle}</p>

                    <div className="hero__actions">
                        <a href="#contacto" className="btn btn--primary btn--lg hero__cta-primary">
                            {heroContent.cta}
                            <ArrowRight size={18} />
                        </a>
                        <a href="#que-es" className="btn btn--outline btn--lg">
                            Conocer Más
                        </a>
                    </div>
                </div>

                {/* Animated Stats Bar */}
                <div className="hero__stats-bar reveal reveal-delay-2">
                    <div className="hero__stats-glow" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">
                            <AnimatedNumber target={5} />
                        </span>
                        <span className="hero__stat-text">Terapias<br/>Integradas</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">
                            <AnimatedNumber target={90} suffix="K+" />
                        </span>
                        <span className="hero__stat-text">Publicaciones<br/>Científicas</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">
                            <AnimatedNumber target={16} />
                        </span>
                        <span className="hero__stat-text">Modos de<br/>Emisión</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">
                            <AnimatedNumber target={8} />
                        </span>
                        <span className="hero__stat-text">Longitudes<br/>de Onda</span>
                    </div>
                </div>

                {/* Trust Strip */}
                <div className="hero__trust reveal reveal-delay-3">
                    <div className="hero__trust-pill">
                        <Shield size={14} /> Certificación CE
                    </div>
                    <div className="hero__trust-pill">
                        <Award size={14} /> Líder Mundial
                    </div>
                    <div className="hero__trust-pill">
                        <Activity size={14} /> Control Térmico IA
                    </div>
                </div>

                {/* Scroll indicator */}
                <a href="#que-es" className="hero__scroll-indicator reveal reveal-delay-3">
                    <span>Explorar</span>
                    <ChevronDown size={16} />
                </a>
            </div>
        </section>
    );
}
