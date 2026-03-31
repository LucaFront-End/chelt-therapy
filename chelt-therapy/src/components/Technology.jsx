import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { technologyContent } from '../data/content';
import './Technology.css';

const WAVE_COLORS = ['#E03030', '#C850C0', '#8B5CF6', '#6366F1', '#4F6AFF', '#2E8FE8', '#1AACDC', '#0EA5A5'];

function WaveformSVG({ mode }) {
    const patterns = {
        'CW (Continuo)':     'M0,50 L400,50',
        'Pulsado I':         'M0,80 L25,80 25,20 65,20 65,80 90,80 90,20 130,20 130,80 155,80 155,20 195,20 195,80 220,80 220,20 260,20 260,80 285,80 285,20 325,20 325,80 350,80 350,20 400,20',
        'Pulsado II':        'M0,80 L40,80 40,20 60,20 60,80 100,80 100,20 120,20 120,80 160,80 160,20 180,20 180,80 220,80 220,20 240,20 240,80 280,80 280,20 300,20 300,80 340,80 340,20 360,20 360,80 400,80',
        'Pulsado III':       'M0,80 L60,80 60,20 80,20 80,80 140,80 140,20 160,20 160,80 220,80 220,20 240,20 240,80 300,80 300,20 320,20 320,80 400,80',
        'Personalizado I':   'M0,80 L20,80 20,40 40,40 40,80 60,80 60,20 80,20 80,80 120,80 120,40 140,40 140,80 160,80 160,20 180,20 180,80 220,80 220,40 240,40 240,80 260,80 260,20 280,20 280,80 320,80 320,40 340,40 340,80 360,80 360,20 380,20 380,80 400,80',
        'Personalizado II':  'M0,80 L30,80 30,50 50,50 50,20 70,20 70,50 90,50 90,80 130,80 130,50 150,50 150,20 170,20 170,50 190,50 190,80 230,80 230,50 250,50 250,20 270,20 270,50 290,50 290,80 330,80 330,50 350,50 350,20 370,20 370,50 390,50 390,80 400,80',
        'Superpulsado I':    'M0,80 L12,80 12,12 18,12 18,80 52,80 52,12 58,12 58,80 92,80 92,12 98,12 98,80 132,80 132,12 138,12 138,80 172,80 172,12 178,12 178,80 212,80 212,12 218,12 218,80 252,80 252,12 258,12 258,80 292,80 292,12 298,12 298,80 332,80 332,12 338,12 338,80 372,80 372,12 378,12 378,80 400,80',
        'Superpulsado II':   'M0,80 L8,80 8,12 12,12 12,80 38,80 38,12 42,12 42,80 68,80 68,12 72,12 72,80 98,80 98,12 102,12 102,80 128,80 128,12 132,12 132,80 158,80 158,12 162,12 162,80 188,80 188,12 192,12 192,80 218,80 218,12 222,12 222,80 248,80 248,12 252,12 252,80 278,80 278,12 282,12 282,80 308,80 308,12 312,12 312,80 338,80 338,12 342,12 342,80 368,80 368,12 372,12 372,80 400,80',
        'Estocástico I':     'M0,50 Q10,15 20,60 Q35,85 45,35 Q55,10 70,55 Q80,90 95,40 Q105,5 120,65 Q135,95 145,30 Q160,10 175,60 Q185,85 200,45 Q215,15 230,55 Q240,80 255,35 Q270,10 285,65 Q295,90 310,40 Q325,15 340,55 Q355,85 370,30 Q385,10 400,50',
        'Estocástico II':    'M0,50 Q15,20 25,65 Q40,90 55,25 Q65,5 80,70 Q90,85 105,30 Q120,10 135,60 Q150,95 165,35 Q175,5 190,70 Q205,90 220,25 Q235,10 250,65 Q260,85 275,35 Q290,5 305,70 Q315,95 330,30 Q345,10 360,65 Q375,90 400,50',
        'Personalizado III': 'M0,80 L10,80 10,25 16,25 16,80 22,80 22,25 28,25 28,80 34,80 34,25 40,25 40,80 90,80 90,25 96,25 96,80 102,80 102,25 108,25 108,80 114,80 114,25 120,25 120,80 170,80 170,25 176,25 176,80 182,80 182,25 188,25 188,80 194,80 194,25 200,25 200,80 250,80 250,25 256,25 256,80 262,80 262,25 268,25 268,80 274,80 274,25 280,25 280,80 330,80 330,25 336,25 336,80 342,80 342,25 348,25 348,80 354,80 354,25 360,25 360,80 400,80',
        'Superpulsado III':  'M0,80 L8,80 8,25 12,25 12,80 16,80 16,25 20,25 20,80 24,80 24,25 28,25 28,80 32,80 32,25 36,25 36,80 40,80 40,25 44,25 44,80 100,80 100,25 104,25 104,80 108,80 108,25 112,25 112,80 116,80 116,25 120,25 120,80 124,80 124,25 128,25 128,80 132,80 132,25 136,25 136,80 200,80 200,25 204,25 204,80 208,80 208,25 212,25 212,80 216,80 216,25 220,25 220,80 224,80 224,25 228,25 228,80 300,80 300,25 304,25 304,80 308,80 308,25 312,25 312,80 316,80 316,25 320,25 320,80 324,80 324,25 328,25 328,80 400,80',
        'Estocástico III':   'M0,80 L180,80 180,12 220,12 220,80 400,80',
        'CW Modulado':       'M0,60 Q25,20 50,60 Q75,100 100,60 Q125,20 150,60 Q175,100 200,60 Q225,20 250,60 Q275,100 300,60 Q325,20 350,60 Q375,100 400,60',
        'Analgésico (E²C)':  'M0,80 L15,80 15,35 Q22,10 29,35 L29,80 45,80 45,55 Q50,30 55,55 L55,80 85,80 85,20 Q92,5 99,20 L99,80 120,80 120,45 Q127,15 134,45 L134,80 165,80 165,30 Q170,10 175,30 L175,80 200,80 200,60 Q208,25 216,60 L216,80 250,80 250,15 Q257,5 264,15 L264,80 290,80 290,50 Q296,20 302,50 L302,80 335,80 335,40 Q342,10 349,40 L349,80 380,80 380,25 Q387,8 394,25 L394,80 400,80',
        'Fotobiomodulación (PBM)': 'M0,50 Q10,30 20,50 Q30,70 40,50 Q50,30 60,50 Q70,70 80,50 Q90,30 100,50 Q110,70 120,50 Q130,30 140,50 Q150,70 160,50 Q170,30 180,50 Q190,70 200,50 Q210,30 220,50 Q230,70 240,50 Q250,30 260,50 Q270,70 280,50 Q290,30 300,50 Q310,70 320,50 Q330,30 340,50 Q350,70 360,50 Q370,30 380,50 Q390,70 400,50',
    };
    return (
        <svg viewBox="0 0 400 100" className="tech__wave-svg" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="50" x2="400" y2="50" className="tech__wave-grid" />
            <line x1="0" y1="25" x2="400" y2="25" className="tech__wave-grid tech__wave-grid--faint" />
            <line x1="0" y1="75" x2="400" y2="75" className="tech__wave-grid tech__wave-grid--faint" />
            {[0,50,100,150,200,250,300,350,400].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="100" className="tech__wave-grid tech__wave-grid--faint" />
            ))}
            {/* Wave path */}
            <path d={patterns[mode] || patterns['CW (Continuo)']} className="tech__wave-line" key={mode} />
            {/* Glow duplicate */}
            <path d={patterns[mode] || patterns['CW (Continuo)']} className="tech__wave-glow" key={mode + '-glow'} />
        </svg>
    );
}

export default function Technology() {
    const ref = useScrollReveal();
    const [activeWave, setActiveWave] = useState(0);
    const [activeMode, setActiveMode] = useState(0);

    const w = technologyContent.wavelengths[activeWave];

    return (
        <section className="tech section" id="tecnologia" ref={ref}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="tag section-header__tag">
                        <span className="tag__dot" />
                        {technologyContent.tag}
                    </span>
                    <h2 className="section-header__title">{technologyContent.title}</h2>
                    <p className="section-header__subtitle">{technologyContent.subtitle}</p>
                </div>

                {/* ─── Wavelengths ─── */}
                <div className="tech__block reveal reveal-delay-1">
                    <div className="tech__block-label">Longitudes de Onda</div>
                    <div className="tech__wave-selector">
                        {technologyContent.wavelengths.map((wl, i) => (
                            <button
                                key={i}
                                className={`tech__wave-btn ${activeWave === i ? 'tech__wave-btn--active' : ''}`}
                                onClick={() => setActiveWave(i)}
                                style={{ '--wc': WAVE_COLORS[i] }}
                            >
                                <span className="tech__wave-btn-indicator" />
                                <span className="tech__wave-btn-nm">{wl.nm}<span className="tech__wave-btn-unit">nm</span></span>
                            </button>
                        ))}
                    </div>

                    <div className="tech__wave-detail" key={activeWave}>
                        <div className="tech__wave-detail-left">
                            <div className="tech__wave-detail-nm" style={{ color: WAVE_COLORS[activeWave] }}>{w.nm} nm</div>
                            <div className="tech__wave-detail-desc">{w.desc}</div>
                        </div>
                        <div className="tech__wave-detail-right">
                            <div className="tech__wave-depth-label">Penetración tisular</div>
                            <div className="tech__wave-depth-track">
                                <div className="tech__wave-depth-layers">
                                    <span>Epidermis</span>
                                    <span>Dermis</span>
                                    <span>Tejido profundo</span>
                                </div>
                                <div className="tech__wave-depth-bar">
                                    <div className="tech__wave-depth-fill" style={{ width: w.depth, background: WAVE_COLORS[activeWave] }} />
                                </div>
                                <div className="tech__wave-depth-pct" style={{ color: WAVE_COLORS[activeWave] }}>{w.depth}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ─── Emission Modes ─── */}
                <div className="tech__block reveal reveal-delay-2">
                    <div className="tech__block-label">Modos de Emisión</div>

                    <div className="tech__oscilloscope">
                        <div className="tech__osc-header">
                            <div className="tech__osc-title">
                                <span className="tech__osc-dot" />
                                {technologyContent.modes[activeMode]}
                            </div>
                            <span className="tech__osc-num">Modo {String(activeMode + 1).padStart(2, '0')} / 16</span>
                        </div>
                        <div className="tech__osc-screen">
                            <WaveformSVG mode={technologyContent.modes[activeMode]} />
                        </div>
                    </div>

                    <div className="tech__mode-grid">
                        {technologyContent.modes.map((m, i) => (
                            <button
                                key={i}
                                className={`tech__mode-btn ${activeMode === i ? 'tech__mode-btn--active' : ''}`}
                                onClick={() => setActiveMode(i)}
                            >
                                <span className="tech__mode-btn-num">{String(i + 1).padStart(2, '0')}</span>
                                <span className="tech__mode-btn-name">{m}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
