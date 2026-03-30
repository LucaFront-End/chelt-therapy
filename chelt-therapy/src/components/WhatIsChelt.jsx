import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { whatIsContent } from '../data/content';
import { Zap, Shield, Settings, Target, ArrowRight, Snowflake, Thermometer, Radiation } from 'lucide-react';
import './WhatIsChelt.css';

const ICONS = { Zap, Shield, Settings, Target };

export default function WhatIsChelt() {
    const ref = useScrollReveal();

    return (
        <section className="what-is section" id="que-es" ref={ref}>
            <div className="container">
                {/* Top: Split hero */}
                <div className="what-is__top">
                    <div className="what-is__top-left reveal">
                        <span className="tag">
                            <span className="tag__dot" />
                            {whatIsContent.tag}
                        </span>
                        <h2 className="what-is__title">{whatIsContent.title}</h2>
                        <p className="what-is__desc">
                            Cinco tecnologías terapéuticas integradas en un solo equipo — con un sistema de control térmico patentado que maximiza los resultados con total seguridad.
                        </p>
                        <a href="#terapias" className="what-is__link">
                            Explorar las 5 terapias <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="what-is__top-right reveal reveal-delay-2">
                        <div className="what-is__visual">
                            {/* Animated rings */}
                            <div className="what-is__ring what-is__ring--1" />
                            <div className="what-is__ring what-is__ring--2" />
                            <div className="what-is__ring what-is__ring--3" />
                            <div className="what-is__ring what-is__ring--4" />

                            {/* Center Device */}
                            <div className="what-is__center">
                                <img 
                                    src="/chelt-device.png" 
                                    alt="Equipo CHELT Therapy" 
                                    className="what-is__device-img" 
                                />
                            </div>

                            {/* Premium Floating Cards */}
                            <div className="what-is__glass-card what-is__glass-card--cryo">
                                <div className="what-is__gc-icon">
                                    <Snowflake size={18} />
                                </div>
                                <div className="what-is__gc-data">
                                    <span className="what-is__gc-title">Crioterapia Seca</span>
                                    <span className="what-is__gc-value">-40°C</span>
                                </div>
                            </div>
                            
                            <div className="what-is__glass-card what-is__glass-card--thermo">
                                <div className="what-is__gc-icon">
                                    <Thermometer size={18} />
                                </div>
                                <div className="what-is__gc-data">
                                    <span className="what-is__gc-title">Termoterapia</span>
                                    <span className="what-is__gc-value">+95°C</span>
                                </div>
                            </div>

                            <div className="what-is__glass-card what-is__glass-card--laser">
                                <div className="what-is__gc-icon">
                                    <Radiation size={18} />
                                </div>
                                <div className="what-is__gc-data">
                                    <span className="what-is__gc-title">Láser Nd:YAG</span>
                                    <span className="what-is__gc-value">8 Longitudes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats row */}
                <div className="what-is__stats reveal reveal-delay-1">
                    <div className="what-is__stat">
                        <span className="what-is__stat-value">5</span>
                        <span className="what-is__stat-label">Terapias integradas</span>
                    </div>
                    <div className="what-is__stat-divider" />
                    <div className="what-is__stat">
                        <span className="what-is__stat-value">90K<span className="what-is__stat-plus">+</span></span>
                        <span className="what-is__stat-label">Publicaciones científicas</span>
                    </div>
                    <div className="what-is__stat-divider" />
                    <div className="what-is__stat">
                        <span className="what-is__stat-value">16</span>
                        <span className="what-is__stat-label">Modos de emisión</span>
                    </div>
                    <div className="what-is__stat-divider" />
                    <div className="what-is__stat">
                        <span className="what-is__stat-value">8</span>
                        <span className="what-is__stat-label">Longitudes de onda</span>
                    </div>
                </div>

                {/* Feature cards */}
                <div className="what-is__grid">
                    {whatIsContent.features.map((f, i) => {
                        const Icon = ICONS[f.icon];
                        return (
                            <div className={`what-is__card reveal reveal-delay-${i + 1}`} key={i}>
                                <div className="what-is__card-icon">
                                    <Icon size={20} strokeWidth={2} />
                                </div>
                                <div className="what-is__card-content">
                                    <h3 className="what-is__card-title">{f.title}</h3>
                                    <p className="what-is__card-desc">{f.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
