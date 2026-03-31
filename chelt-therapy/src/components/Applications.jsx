import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Applications.css';

/* Realistic anatomical polygon data extracted from react-body-highlighter */
const ANTERIOR_MUSCLES = {
    headLevel: [
        '42.4489796 2.85714286 40 11.8367347 42.0408163 19.5918367 46.122449 23.2653061 49.7959184 25.3061224 54.6938776 22.4489796 57.5510204 19.1836735 59.1836735 10.2040816 57.1428571 2.44897959 49.7959184 0', // head
        '55.5102041 23.6734694 50.6122449 33.4693878 50.6122449 39.1836735 61.6326531 40 70.6122449 44.8979592 69.3877551 36.7346939 63.2653061 35.1020408 58.3673469 30.6122449', // right neck
        '28.9795918 44.8979592 30.2040816 37.1428571 36.3265306 35.1020408 41.2244898 30.2040816 44.4897959 24.4897959 48.9795918 33.877551 48.5714286 39.1836735 37.9591837 39.5918367', // left neck
    ],
    shoulderLevel: [
        '78.3673469 53.0612245 79.5918367 47.755102 79.1836735 41.2244898 75.9183673 37.9591837 71.0204082 36.3265306 72.244898 42.8571429 71.4285714 47.3469388', // right deltoids
        '28.1632653 47.3469388 21.2244898 53.0612245 20 47.755102 20.4081633 40.8163265 24.4897959 37.1428571 28.5714286 37.1428571 26.9387755 43.2653061', // left deltoids
    ],
    spineLevel: [
        '51.8367347 41.6326531 51.0204082 55.1020408 57.9591837 57.9591837 67.755102 55.5102041 70.6122449 47.3469388 62.0408163 41.6326531', // right chest
        '29.7959184 46.5306122 31.4285714 55.5102041 40.8163265 57.9591837 48.1632653 55.1020408 47.755102 42.0408163 37.5510204 42.0408163', // left chest
        '56.3265306 59.1836735 57.9591837 64.0816327 58.3673469 77.9591837 58.3673469 92.6530612 56.3265306 98.3673469 55.1020408 104.081633 51.4285714 107.755102 51.0204082 84.4897959 50.6122449 67.3469388 51.0204082 57.1428571', // right abs
        '43.6734694 58.7755102 48.5714286 57.1428571 48.9795918 67.3469388 48.5714286 84.4897959 48.1632653 107.346939 44.4897959 103.673469 40.8163265 91.4285714 40.8163265 78.3673469 41.2244898 64.4897959', // left abs
        '68.5714286 63.2653061 67.3469388 57.1428571 58.7755102 59.5918367 60 64.0816327 60.4081633 83.2653061 65.7142857 78.7755102 66.5306122 69.7959184', // right obliques
        '33.877551 78.3673469 33.0612245 71.8367347 31.0204082 63.2653061 32.244898 57.1428571 40.8163265 59.1836735 39.1836735 63.2653061 39.1836735 83.6734694', // left obliques
    ],
    armLevel: [
        '16.7346939 68.1632653 17.9591837 71.4285714 22.8571429 66.122449 28.9795918 53.877551 27.755102 49.3877551 20.4081633 55.9183673', // left biceps
        '71.4285714 49.3877551 70.2040816 54.6938776 76.3265306 66.122449 81.6326531 71.8367347 82.8571429 68.9795918 78.7755102 55.5102041', // right biceps
        '69.3877551 55.5102041 69.3877551 61.6326531 75.9183673 72.6530612 77.5510204 70.2040816 75.5102041 67.3469388', // right triceps
        '22.4489796 69.3877551 29.7959184 55.5102041 29.7959184 60.8163265 22.8571429 73.0612245', // left triceps
        '6.12244898 88.5714286 10.2040816 75.1020408 14.6938776 70.2040816 16.3265306 74.2857143 19.1836735 73.4693878 4.48979592 97.5510204 0 100', // left forearm 1
        '84.4897959 69.7959184 83.2653061 73.4693878 80 73.0612245 95.1020408 98.3673469 100 100.408163 93.4693878 89.3877551 89.7959184 76.3265306', // right forearm 1
        '77.5510204 72.244898 77.5510204 77.5510204 80.4081633 84.0816327 85.3061224 89.7959184 92.244898 101.22449 94.6938776 99.5918367', // right forearm 2
        '6.93877551 101.22449 13.4693878 90.6122449 18.7755102 84.0816327 21.6326531 77.1428571 21.2244898 71.8367347 4.89795918 98.7755102', // left forearm 2
    ],
    hipLevel: [
        '52.6530612 110.204082 54.2857143 124.897959 60 110.204082 62.0408163 100 64.8979592 94.2857143 60 92.6530612 56.7346939 104.489796', // right abductors
        '47.755102 110.612245 44.8979592 125.306122 42.0408163 115.918367 40.4081633 113.061224 39.5918367 107.346939 37.9591837 102.44898 34.6938776 93.877551 39.5918367 92.244898 41.6326531 99.1836735 43.6734694 105.306122', // left abductors
    ],
    legLevel: [
        '34.6938776 98.7755102 37.1428571 108.163265 37.1428571 127.755102 34.2857143 137.142857 31.0204082 132.653061 29.3877551 120 28.1632653 111.428571 29.3877551 100.816327 32.244898 94.6938776', // left quad 1
        '63.2653061 105.714286 64.4897959 100 66.9387755 94.6938776 70.2040816 101.22449 71.0204082 111.836735 68.1632653 133.061224 65.3061224 137.55102 62.4489796 128.571429 62.0408163 111.428571', // right quad 1
        '38.7755102 129.387755 38.3673469 112.244898 41.2244898 118.367347 44.4897959 129.387755 42.8571429 135.102041 40 146.122449 36.3265306 146.530612 35.5102041 140', // left quad 2
        '59.5918367 145.714286 55.5102041 128.979592 60.8163265 113.877551 61.2244898 130.204082 64.0816327 139.591837 62.8571429 146.530612', // right quad 2
        '32.6530612 138.367347 26.5306122 145.714286 25.7142857 136.734694 25.7142857 127.346939 26.9387755 114.285714 29.3877551 133.469388', // left quad 3
        '71.8367347 113.061224 73.877551 124.081633 73.877551 140.408163 72.6530612 145.714286 66.5306122 138.367347 70.2040816 133.469388', // right quad 3
        '33.877551 140 34.6938776 143.265306 35.5102041 147.346939 36.3265306 151.020408 35.1020408 156.734694 29.7959184 156.734694 27.3469388 152.653061 27.3469388 147.346939 30.2040816 144.081633', // left knee
        '65.7142857 140 72.244898 147.755102 72.244898 152.244898 69.7959184 157.142857 64.8979592 156.734694 62.8571429 151.020408', // right knee
        '71.4285714 160.408163 73.4693878 153.469388 76.7346939 161.22449 79.5918367 167.755102 78.3673469 187.755102 79.5918367 195.510204 74.6938776 195.510204', // right calf 1
        '24.8979592 194.693878 27.755102 164.897959 28.1632653 160.408163 26.122449 154.285714 24.8979592 157.55102 22.4489796 161.632653 20.8163265 167.755102 22.0408163 188.163265 20.8163265 195.510204', // left calf 1
        '72.6530612 195.102041 69.7959184 159.183673 65.3061224 158.367347 64.0816327 162.44898 64.0816327 165.306122 65.7142857 177.142857', // right calf 2
        '35.5102041 158.367347 35.9183673 162.44898 35.9183673 166.938776 35.1020408 172.244898 35.1020408 176.734694 32.244898 182.040816 30.6122449 187.346939 26.9387755 194.693878 27.3469388 187.755102 28.1632653 180.408163 28.5714286 175.510204 28.9795918 169.795918 29.7959184 164.081633 30.2040816 158.77551', // left calf 2
    ]
};

const ZONES = [
    { id: 'spine', label: 'Columna y Neuropatías', color: '#EF4444', conditions: ['Hernia discal', 'Radiculopatías', 'Inflamaciones nerviosas', 'Neuropatías agudas y crónicas'], key: 'spineLevel' },
    { id: 'shoulder', label: 'Lesiones Musculares', color: '#3B82F6', conditions: ['Lesiones de tejidos blandos', 'Cicatrices musculares', 'Tejido fibrótico', 'Recidivas por mala cicatrización'], key: 'shoulderLevel' },
    { id: 'arm', label: 'Lesiones Tendineas', color: '#F59E0B', conditions: ['Patologías tendineas agudas', 'Patologías tendineas crónicas', 'Estados inflamatorios tendineos', 'Reducción de uso de fármacos'], key: 'armLevel' },
    { id: 'hip', label: 'Edemas', color: '#10B981', conditions: ['Edemas quirúrgicos', 'Edemas traumáticos', 'Reabsorción rápida por óxido nítrico', 'Reducción de inflamación post-operatoria'], key: 'hipLevel' },
    { id: 'leg', label: 'Heridas y Queloides', color: '#EC4899', conditions: ['Heridas patológicas', 'Heridas post-operatorias', 'Heridas post-traumáticas', 'Queloides y cicatrices'], key: 'legLevel' },
];

/* Render the realistic SVG */
function BodySVG({ activeZone, onZoneHover }) {
    return (
        <svg viewBox="0 0 100 200" className="apps__body-svg" xmlns="http://www.w3.org/2000/svg">
            <g className="apps__body-outline">
                {ZONES.map((zone, i) => {
                    const isActive = activeZone === i;
                    const polygons = ANTERIOR_MUSCLES[zone.key] || [];

                    return (
                        <g 
                            key={zone.id}
                            className={`apps__body-zone ${isActive ? 'apps__body-zone--active' : ''}`}
                            style={{ '--zc': zone.color }}
                            onMouseEnter={() => onZoneHover(i)}
                            onClick={() => onZoneHover(i)}
                        >
                            {polygons.map((pts, j) => (
                                <polygon key={j} points={pts} />
                            ))}
                        </g>
                    );
                })}
            </g>
        </svg>
    );
}

export default function Applications() {
    const ref = useScrollReveal();
    const [activeZone, setActiveZone] = useState(null);

    const active = activeZone !== null ? ZONES[activeZone] : null;

    return (
        <section className="apps section" ref={ref}>
            <div className="apps__dark-bg">
                <div className="container">
                    <div className="section-header apps__header reveal">
                        <span className="tag apps__tag">
                            <span className="tag__dot apps__tag-dot" />
                            Aplicaciones Clínicas
                        </span>
                        <h2 className="section-header__title apps__title">Áreas de Tratamiento</h2>
                        <p className="section-header__subtitle apps__subtitle">
                            Indicada para todas las patologías agudas y crónicas del aparato locomotor.
                        </p>
                    </div>

                    <div className="apps__body-layout reveal reveal-delay-1">
                        {/* Left: zone list */}
                        <div className="apps__zone-list">
                            {ZONES.map((z, i) => (
                                <button
                                    key={z.id}
                                    className={`apps__zone-btn ${activeZone === i ? 'apps__zone-btn--active' : ''}`}
                                    style={{ '--zc': z.color }}
                                    onMouseEnter={() => setActiveZone(i)}
                                    onClick={() => setActiveZone(i)}
                                >
                                    <span className="apps__zone-dot" />
                                    <span className="apps__zone-name">{z.label}</span>
                                    <span className="apps__zone-count">{z.conditions.length}</span>
                                </button>
                            ))}
                        </div>

                        {/* Center: SVG body */}
                        <div className="apps__body-wrap">
                            <BodySVG activeZone={activeZone} onZoneHover={setActiveZone} />
                        </div>

                        {/* Right: detail panel */}
                        <div className="apps__detail-panel">
                            {active ? (
                                <div className="apps__detail" key={active.id} style={{ '--dc': active.color }}>
                                    <div className="apps__detail-dot" />
                                    <h3 className="apps__detail-title">{active.label}</h3>
                                    <div className="apps__detail-conditions">
                                        {active.conditions.map((c, j) => (
                                            <div className="apps__detail-item" key={j} style={{ animationDelay: `${j * 0.08}s` }}>
                                                <span className="apps__detail-item-line" />
                                                <span>{c}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="apps__detail-placeholder">
                                    <p>Seleccioná una zona del cuerpo para ver las condiciones tratables</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="apps__bottom reveal reveal-delay-2">
                        <span className="apps__bottom-num">5</span>
                        <span className="apps__bottom-text">categorías de patologías del aparato locomotor tratables con un solo dispositivo</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
