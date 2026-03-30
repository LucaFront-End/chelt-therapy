export const heroContent = {
    tag: 'CHELT Therapy',
    title: '5 Terapias.\nUn Solo Dispositivo.',
    subtitle: 'El sistema más avanzado del mundo que integra laserterapia, crioterapia, termoterapia, choque térmico y sinergia THEAL-CRIO en un único equipo.',
    cta: 'Solicitar Demostración',
    ctaSecondary: 'Descubrir Más',
};

export const marqueeStats = [
    { value: '5', label: 'Terapias Integradas' },
    { value: '90K+', label: 'Publicaciones Científicas' },
    { value: '-40°C', label: 'Crioterapia' },
    { value: '+95°C', label: 'Choque Térmico' },
    { value: '16', label: 'Modos de Emisión' },
    { value: '8', label: 'Longitudes de Onda' },
];

export const whatIsContent = {
    tag: 'Innovación Médica',
    title: '¿Qué es CHELT Therapy?',
    subtitle: 'Cinco tecnologías integradas en un solo dispositivo para resultados terapéuticos excepcionales y rápidos.',
    description: 'CHELT Therapy es el dispositivo médico más avanzado del mundo, desarrollado por Mectronic Medicale. Integra cinco tecnologías terapéuticas —aire seco frío y caliente, laserterapia THEAL, choque térmico y sinergia THEAL-CRIO— con un sistema de control térmico patentado que maximiza los resultados con total seguridad.',
    features: [
        { icon: 'Zap', title: 'Resultados Rápidos', desc: 'Combinación sinérgica de terapias para recuperación acelerada.' },
        { icon: 'Shield', title: 'Control Patentado', desc: 'Sistema de monitoreo térmico tisular en tiempo real.' },
        { icon: 'Settings', title: '16 Modos', desc: 'Desde CW hasta pulso único, burst y modo antiinflamatorio.' },
        { icon: 'Target', title: 'Personalizable', desc: 'Combina longitudes de onda para cada patología y paciente.' },
    ],
};

export const therapiesContent = {
    tag: '5 Tecnologías',
    title: 'Cinco Almas, Un Solo Producto',
    subtitle: 'Cada terapia potencia a las demás para lograr resultados que ningún dispositivo individual puede alcanzar.',
    therapies: [
        {
            id: 'cryo',
            name: 'Crioterapia',
            temp: '-40°C',
            color: 'cryo',
            icon: 'Snowflake',
            shortDesc: 'Aire frío seco controlado',
            description: 'Utiliza aire frío seco a -40°C mientras monitorea y controla la temperatura tisular del paciente. Provoca vasoconstricción profunda, retarda el metabolismo celular y genera hiperemia reactiva intensa.',
            benefits: ['Acción antiinflamatoria potenciada', 'Efecto analgésico por reducción de conducción nerviosa', 'Bioestimulación tisular profunda'],
        },
        {
            id: 'thermo',
            name: 'Termoterapia',
            temp: '+60°C',
            color: 'thermo',
            icon: 'Flame',
            shortDesc: 'Aire caliente seco terapéutico',
            description: 'Aire caliente seco controlado que estimula la vasodilatación, aumenta el flujo sanguíneo local y relaja la musculatura. Complementa la crioterapia en protocolos de contraste térmico.',
            benefits: ['Vasodilatación y aumento de flujo sanguíneo', 'Relajación muscular profunda', 'Mejora de la elasticidad tisular'],
        },
        {
            id: 'laser',
            name: 'THEAL Laser',
            temp: '4-8λ',
            color: 'laser',
            icon: 'Radiation',
            shortDesc: 'Laserterapia de alta intensidad',
            description: 'Emisión láser de alta intensidad con 4 a 8 longitudes de onda combinables. Abarca desde LLLT (baja energía) hasta alta intensidad, con 16 modos de emisión preconfigurados.',
            benefits: ['Penetración tisular profunda y selectiva', 'Biostimulación y regeneración celular', 'Efecto antiinflamatorio y analgésico'],
        },
        {
            id: 'shock',
            name: 'Choque Térmico',
            temp: '95°C Δ',
            color: 'shock',
            icon: 'Bolt',
            shortDesc: 'Gradiente térmico ultrarrápido',
            description: 'Genera choques térmicos de hasta 95°C de diferencia en menos de 1 segundo, con control térmico de los tejidos. Activa una intensa gimnasia vascular que acelera la curación natural.',
            benefits: ['Gimnasia vascular intensa', 'Aceleración del proceso de curación', 'Reducción inmediata del dolor'],
        },
        {
            id: 'synergy',
            name: 'Sinergia THEAL-CRIO',
            temp: 'Combo',
            color: 'synergy',
            icon: 'Merge',
            shortDesc: 'Efecto combinado exclusivo',
            description: 'La combinación sinérgica entre laserterapia THEAL y crioterapia potencia los efectos individuales de cada terapia, logrando resultados que ninguna puede alcanzar por separado.',
            benefits: ['Efecto terapéutico multiplicado', 'Tiempos de tratamiento reducidos', 'Mayor profundidad de acción'],
        },
    ],
};

export const technologyContent = {
    tag: 'Tecnología',
    title: 'Potencia y Precisión Sin Precedentes',
    subtitle: 'Controla longitudes de onda, potencia y modos de emisión para tratamientos completamente personalizados.',
    wavelengths: [
        { nm: '660', desc: 'Luz roja visible — alta absorción en hemoglobina, bioestimulación superficial y cicatrización', depth: '15%' },
        { nm: '810', desc: 'Infrarrojo cercano — penetración media, absorción en citocromos, efecto fotobiomodulador', depth: '35%' },
        { nm: '915', desc: 'Infrarrojo — absorción por agua y hemoglobina, equilibrio entre profundidad y efecto térmico', depth: '50%' },
        { nm: '940', desc: 'Infrarrojo — alta absorción en oxihemoglobina, efecto vascular y antiinflamatorio', depth: '58%' },
        { nm: '980', desc: 'Infrarrojo — pico de absorción en agua, efecto térmico controlado para tejido profundo', depth: '68%' },
        { nm: '1064', desc: 'Nd:YAG — mínima absorción superficial, máxima penetración en tejido muscular y articular', depth: '85%' },
        { nm: '1120', desc: 'Infrarrojo profundo — absorción en lípidos y agua, alcance a estructuras profundas', depth: '90%' },
        { nm: 'MLS', desc: 'Emisión sincronizada de doble longitud de onda con efecto antiinflamatorio y analgésico combinado', depth: '75%' },
    ],
    modes: [
        'CW (Continuo)', 'Pulsado I', 'Pulsado II', 'Pulsado III',
        'Personalizado I', 'Personalizado II', 'Superpulsado I', 'Superpulsado II',
        'Burst I', 'Burst II', 'Pulso Único', 'Antiinflamatorio',
        'Bioestimulación', 'Analgésico', 'Regenerativo', 'Drenaje',
    ],
};

export const benefitsContent = {
    tag: 'Beneficios Clínicos',
    title: '¿Por Qué Elegir CHELT Therapy?',
    subtitle: 'Resultados terapéuticos superiores respaldados por más de 90.000 publicaciones científicas.',
    items: [
        { icon: 'HeartPulse', title: 'Anti-inflamatorio', desc: 'La vasoconstricción profunda y crioterapia controlada reducen la inflamación de forma más eficaz que métodos convencionales.' },
        { icon: 'ShieldCheck', title: 'Analgésico', desc: 'Reduce la velocidad de conducción nerviosa y genera hiperemia reactiva, logrando un alivio del dolor rápido y duradero.' },
        { icon: 'Activity', title: 'Gimnasia Vascular', desc: 'El choque térmico genera entrenamiento vascular intenso, acelerando la recuperación natural del cuerpo.' },
        { icon: 'RefreshCw', title: 'Regeneración Tisular', desc: 'La combinación de THEAL Laser y crioterapia estimula la reparación celular y la regeneración de tejidos dañados.' },
        { icon: 'Timer', title: 'Tratamientos Rápidos', desc: 'La sinergia de 5 terapias reduce significativamente los tiempos de sesión frente a tratamientos convencionales.' },
        { icon: 'Brain', title: 'Tratamiento Personalizado', desc: '16 modos de emisión y 8 longitudes de onda para adaptar cada sesión al paciente y patología específica.' },
    ],
};

export const applicationsContent = {
    tag: 'Aplicaciones',
    title: 'Áreas de Tratamiento',
    subtitle: 'CHELT Therapy abarca un amplio espectro de condiciones musculoesqueléticas y de rehabilitación.',
    areas: [
        'Lesiones musculares', 'Tendinopatías', 'Patología ligamentaria',
        'Artropatías', 'Edema y hematomas', 'Dolor cervical y lumbar',
        'Rehabilitación deportiva', 'Neuropatías', 'Cicatrización de heridas',
        'Síndrome del túnel carpiano', 'Fascitis plantar', 'Epicondilitis',
    ],
};

export const ctaContent = {
    tag: 'Contacto',
    title: 'Solicita tu Demostración',
    phones: ['+52 55 7618 2226', '+52 55 5575 0108'],
    whatsappUrl: 'https://wa.link/go5v9l',
};

export const media = {
    heroImage: '/hero-chelt.jpg',
    bruceMediaLogo: '/bruce-medica-logo.png',
};
