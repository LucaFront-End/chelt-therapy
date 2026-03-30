import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhatIsChelt from './components/WhatIsChelt';
import Therapies from './components/Therapies';
import Technology from './components/Technology';
import Benefits from './components/Benefits';
import Applications from './components/Applications';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhatIsChelt />
        <Therapies />
        <Technology />
        <Benefits />
        <Applications />
        <CTA />
      </main>
      <Footer />

      <a href="https://wa.link/go5v9l" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.382L1.054 31.2l6.012-1.932A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.302 22.594c-.39 1.098-1.936 2.01-3.154 2.276-.834.178-1.922.32-5.588-1.2-4.688-1.944-7.702-6.71-7.936-7.02-.226-.31-1.846-2.462-1.846-4.696 0-2.234 1.168-3.332 1.584-3.788.39-.426.916-.608 1.208-.608.276 0 .554.002.796.014.256.012.598-.096.936.714.348.834 1.18 2.878 1.284 3.086.104.208.174.452.036.728-.13.282-.198.456-.39.702-.194.244-.408.546-.584.734-.194.208-.396.432-.17.848.226.416 1.006 1.66 2.16 2.688 1.484 1.322 2.734 1.734 3.124 1.926.39.192.618.162.844-.096.234-.262.994-1.156 1.258-1.552.262-.398.526-.33.886-.198.364.13 2.302 1.086 2.696 1.284.394.198.656.296.752.46.098.164.098.948-.292 2.046z"/>
        </svg>
      </a>
    </>
  );
}
