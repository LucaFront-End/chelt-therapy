import { marqueeStats } from '../data/content';
import './Marquee.css';

export default function Marquee() {
    const doubled = [...marqueeStats, ...marqueeStats];
    return (
        <div className="marquee">
            <div className="marquee__track">
                {doubled.map((s, i) => (
                    <div className="marquee__item" key={i}>
                        <span className="marquee__value">{s.value}</span>
                        <span className="marquee__label">{s.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
