import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { therapiesContent } from '../data/content';
import { Snowflake, Flame, Radiation, Zap as Bolt, Merge, Check, ChevronDown } from 'lucide-react';
import './Therapies.css';

const ICONS = { Snowflake, Flame, Radiation, Bolt, Merge };

export default function Therapies() {
    const ref = useScrollReveal();
    const [active, setActive] = useState(0);

    return (
        <section className="therapies section section--alt" id="terapias" ref={ref}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="tag section-header__tag">
                        <span className="tag__dot" />
                        {therapiesContent.tag}
                    </span>
                    <h2 className="section-header__title">{therapiesContent.title}</h2>
                    <p className="section-header__subtitle">{therapiesContent.subtitle}</p>
                </div>

                <div className="therapies__accordion reveal reveal-delay-1">
                    {therapiesContent.therapies.map((t, i) => {
                        const Icon = ICONS[t.icon];
                        const isActive = active === i;

                        return (
                            <div
                                key={t.id}
                                className={`therapies__item ${isActive ? 'therapies__item--active' : ''}`}
                                style={{ '--t-color': `var(--color-${t.color})` }}
                                onClick={() => setActive(i)}
                            >
                                {/* Header row — always visible */}
                                <div className="therapies__item-header">
                                    <div className="therapies__item-left">
                                        <div className="therapies__item-icon">
                                            <Icon size={20} strokeWidth={2} />
                                        </div>
                                        <div className="therapies__item-meta">
                                            <h3 className="therapies__item-name">{t.name}</h3>
                                            <span className="therapies__item-short">{t.shortDesc}</span>
                                        </div>
                                    </div>
                                    <div className="therapies__item-right">
                                        <span className="therapies__item-temp">{t.temp}</span>
                                        <ChevronDown size={18} className="therapies__item-chevron" />
                                    </div>
                                </div>

                                {/* Expandable detail */}
                                <div className="therapies__item-body">
                                    <div className="therapies__item-body-inner">
                                        <p className="therapies__item-desc">{t.description}</p>
                                        <ul className="therapies__item-benefits">
                                            {t.benefits.map((b, j) => (
                                                <li key={j}>
                                                    <Check size={15} strokeWidth={2.5} />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
