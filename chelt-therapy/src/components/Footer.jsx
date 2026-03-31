import { media } from '../data/content';
import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src={media.bruceMediaLogo} alt="Bruce Médica" className="footer__logo-img" />
                        </div>
                        <p className="footer__brand-desc">Distribuidor exclusivo de CHELT Therapy en México. Tecnología médica avanzada para rehabilitación.</p>
                    </div>
                    <div className="footer__links-group">
                        <h4 className="footer__links-title">Navegación</h4>
                        <ul className="footer__links">
                            <li><a href="#que-es">¿Qué es CHELT?</a></li>
                            <li><a href="#terapias">Terapias</a></li>
                            <li><a href="#tecnologia">Tecnología</a></li>
                            <li><a href="#beneficios">Beneficios</a></li>
                        </ul>
                    </div>
                    <div className="footer__links-group">
                        <h4 className="footer__links-title">Contacto</h4>
                        <ul className="footer__links">
                            <li><a href="tel:+525576182226">+52 55 7618 2226</a></li>
                            <li><a href="tel:+525555750108">+52 55 5575 0108</a></li>
                            <li><a href="https://wa.link/go5v9l" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                            <li><a href="https://www.brucemedica.com.mx" target="_blank" rel="noopener noreferrer">brucemedica.com.mx</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__copy">© {year} Bruce Médica. Todos los derechos reservados.</p>
                    <p className="footer__legal">CHELT Therapy® es una marca de Mecmedix.</p>
                </div>
            </div>
        </footer>
    );
}
