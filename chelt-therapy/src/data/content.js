export const heroContent = {
    tag: 'TECNOLOGÍA DE ÚLTIMA GENERACIÓN',
    title: '5 Terapias.\nUn Solo Equipo.',
    subtitle: 'El sistema más avanzado del mundo que integra laserterapia THEAL, crioterapia, termoterapia, choque térmico y sinergia THEAL-CRIO en un único equipo.',
    cta: 'Solicitar Demostración',
    ctaSecondary: 'Conocer Más',
};

export const marqueeStats = [
    { value: '5', label: 'Terapias Integradas' },
    { value: '90K+', label: 'Investigaciones Científicas' },
    { value: '-40°C', label: 'Crioterapia Seca' },
    { value: '95°C', label: 'Choque Térmico' },
    { value: '16', label: 'Modos de Emisión' },
    { value: '8', label: 'Longitudes de Onda' },
    { value: '92W', label: 'Potencia Media' },
    { value: '7', label: 'Patentes Internacionales' },
];

export const whatIsContent = {
    tag: 'Innovación Médica',
    title: '¿Qué es CHELT Therapy?',
    subtitle: 'Cryo High Energy Laser Therapy — cinco tecnologías terapéuticas integradas en un solo equipo con control térmico vobulado patentado que maximiza los resultados con total seguridad.',
    description: 'El dispositivo CHELT integra las funcionalidades de la fototerapia adaptiva THEAL Therapy con crioterapia y termoterapia a aire seco, combinando laserterapia a baja energía (LLLT) y alta intensidad. El operador puede utilizar las distintas longitudes de onda de forma flexible y personalizada, variando la potencia de emisión para tratar patologías diversas con los aplicadores más adecuados, transfiriendo la energía a los tejidos de forma más rápida y eficaz.',
    features: [
        { icon: 'Zap', title: 'Recuperación Rápida', desc: 'La crioterapia a -40°C limita la extravasación sanguínea y la PBM de THEAL anticipa la rehabilitación.' },
        { icon: 'Shield', title: 'Control Térmico Vobulado', desc: 'Tecnología patentada que modula la emisión para mantener la temperatura dentro de umbrales de seguridad predefinidos.' },
        { icon: 'Settings', title: '16 Modos de Emisión', desc: 'Desde CW hasta modos pulsados, superpulsados, estocásticos y los patentados E²C y PBM.' },
        { icon: 'Target', title: 'Personalizable', desc: 'Hasta 8 longitudes de onda combinables y potencia de emisión variable para cada patología.' },
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
            shortDesc: 'Aire frío seco con control térmico vobulado',
            description: 'Utiliza aire frío seco a -40°C con control térmico vobulado. Provoca una fuerte vasoconstricción superficial y profunda que ralentiza el metabolismo celular, genera una intensa hiperemia reactiva y reduce la velocidad de conducción de las fibras nerviosas.',
            benefits: ['Acción antiinflamatoria potenciada', 'Efecto analgésico por reducción de conducción nerviosa', 'Bioestimulación tisular profunda'],
        },
        {
            id: 'thermo',
            name: 'Termoterapia',
            temp: '+55°C',
            color: 'thermo',
            icon: 'Flame',
            shortDesc: 'Aire caliente seco regulable 35°C-55°C',
            description: 'Emite aire caliente seco con temperatura regulable entre 35°C y 55°C. El aire, penetrando en profundidad en los tejidos, provoca una intensa vasodilatación mientras la temperatura tisular es monitorizada y controlada. El resultado es un profundo relajamiento muscular, mayor movilidad articular, regeneración de los tejidos y reducción del dolor gracias a la inhibición de las señales nociceptivas.',
            benefits: ['Intensa vasodilatación controlada', 'Relajación muscular y mayor movilidad articular', 'Reducción del dolor por inhibición nociceptiva'],
        },
        {
            id: 'shock',
            name: 'Choque Térmico',
            temp: '95°C Δ',
            color: 'shock',
            icon: 'Bolt',
            shortDesc: 'Gradiente térmico ultrarrápido',
            description: 'Genera choques térmicos de hasta 95°C en menos de 1 segundo con control térmico de los tejidos biológicos. La consecuente gimnasia vascular, generada por la sinergia entre crioterapia y termoterapia a aire seco, acelera la curación, reduce el dolor y mejora la acción antiinflamatoria.',
            benefits: ['Gimnasia vascular intensificada', 'Aceleración del proceso natural de curación', 'Reducción del dolor y mejora antiinflamatoria'],
        },
        {
            id: 'laser',
            name: 'Laserterapia THEAL',
            temp: '92W',
            color: 'laser',
            icon: 'Radiation',
            shortDesc: 'Fototerapia adaptiva patentada',
            description: 'Fototerapia adaptiva con hasta 8 longitudes de onda combinables y 16 modos de emisión. Gestiona dolores agudos y crónicos, edemas, lesiones, llagas y patologías musculoesqueléticas. Esta tecnología patentada, ya de por sí resolutiva en muchas aplicaciones, se vale de las otras funcionalidades de CHELT para garantizar una gama de terapias aún más amplia y avanzada.',
            benefits: ['Gestión de dolores agudos y crónicos', 'Tratamiento de edemas, lesiones y llagas', 'Biostimulación y regeneración celular (PBM)'],
        },
        {
            id: 'synergy',
            name: 'Sinergia THEAL-CRIO',
            temp: 'Combo',
            color: 'synergy',
            icon: 'Merge',
            shortDesc: 'Efecto combinado exclusivo',
            description: 'El aire frío seco a -40°C actúa como vector de la laserterapia THEAL: la vasoconstricción superficial inducida facilita una mayor penetración del haz láser en los tejidos más profundos, permitiendo administrar dosis energéticas elevadas que favorecen la biomodulación de los tejidos biológicos.',
            benefits: ['Mayor penetración del haz láser', 'Dosis energéticas elevadas en profundidad', 'Biomodulación tisular superior'],
        },
    ],
};

export const technologyContent = {
    tag: 'Tecnología',
    title: 'Hasta 8 Longitudes de Onda para Máxima Flexibilidad',
    subtitle: 'Combina y regula 4, 6 u 8 longitudes de onda con 16 modalidades de emisión para obtener el mejor efecto terapéutico.',
    wavelengths: [
        { nm: '450', desc: 'Excelente absorción por hemoglobina y melanina. Óptimo efecto bactericida, ideal para aplicaciones en ámbito dental, quirúrgico y vascular.', depth: '8%' },
        { nm: '650', desc: 'Absorbida principalmente por la melanina, con óptimo intercambio energético superficial. Inhibe la proliferación bacteriana y promueve el crecimiento celular, curando heridas, llagas y úlceras.', depth: '15%' },
        { nm: '780', desc: 'Estimula la regeneración de los tejidos nerviosos mediante la producción de ATP, favoreciendo la recuperación neurológica.', depth: '30%' },
        { nm: '810', desc: 'Activa el proceso oxidativo de la hemoglobina, acelerando la producción de ATP. Favorece la regeneración de tejidos musculares y tendinosos.', depth: '45%' },
        { nm: '905', desc: 'Absorbida por los principales cromóforos, incrementa la cantidad de oxígeno disponible para las células, apoyando los procesos naturales de curación.', depth: '55%' },
        { nm: '980', desc: 'Con la modalidad E²C interactúa con el sistema nervioso periférico para un rápido efecto antálgico, gracias también al Gate Control.', depth: '68%' },
        { nm: '1064', desc: 'Altamente direccionable, dirige la dosis justa de energía sobre la noxa. Excelente sinergia entre efecto antálgico y control de procesos inflamatorios, además de activación profunda de procesos metabólicos.', depth: '85%' },
        { nm: '1210', desc: 'Absorbida por el agua, convierte en calor la energía transmitida por el láser. Crea gradientes térmicos a nivel tisular, estimulando microcirculación y oxigenación celular.', depth: '92%' },
    ],
    modes: [
        'CW (Continuo)', 'Pulsado I', 'Pulsado II', 'Pulsado III',
        'Personalizado I', 'Personalizado II', 'Superpulsado I', 'Superpulsado II',
        'Estocástico I', 'Estocástico II', 'Personalizado III', 'Superpulsado III',
        'Estocástico III', 'CW Modulado', 'Analgésico (E²C)', 'Fotobiomodulación (PBM)',
    ],
};

export const benefitsContent = {
    tag: 'Beneficios Clínicos',
    title: '¿Por Qué Elegir CHELT Therapy?',
    subtitle: 'Eficacia demostrada científicamente. Única, segura y eficaz. Se adapta a las características únicas de cada paciente.',
    items: [
        { icon: 'HeartPulse', title: 'Anti-inflamatorio', desc: 'La vasoconstricción profunda de la crioterapia a -40°C y la sinergia con THEAL reducen la inflamación de forma más eficaz que métodos convencionales.' },
        { icon: 'ShieldCheck', title: 'Analgésico Rápido', desc: 'El 98% de los pacientes reporta un alivio inmediato del dolor. La modalidad E²C y el Gate Control reducen la conducción nerviosa periférica.' },
        { icon: 'Activity', title: 'Gimnasia Vascular', desc: 'La producción de óxido nítrico (NO) por fotobiomodulación causa vasodilatación, mientras la crioterapia genera vasoconstricción: este entrenamiento vascular acelera la curación.' },
        { icon: 'RefreshCw', title: 'Recuperación Rápida', desc: 'La crioterapia a -40°C limita la extravasación sanguínea y permite diagnósticos instrumentales precoces. La PBM de THEAL anticipa la rehabilitación.' },
        { icon: 'Timer', title: 'Heridas y Queloides', desc: 'Optimiza el mecanismo de PBM para la regeneración tisular en heridas patológicas, post-operatorias y post-traumáticas. Mejora cicatrices y queloides.' },
        { icon: 'Brain', title: 'Tratamiento Personalizado', desc: 'Más de 130 mil millones de combinaciones terapéuticas posibles para adaptar cada sesión a las características únicas del paciente.' },
    ],
};

export const applicationsContent = {
    tag: 'Aplicaciones Clínicas',
    title: 'Áreas de Tratamiento',
    subtitle: 'Indicada para todas las patologías agudas y crónicas del aparato locomotor.',
    areas: [
        'Patologías de la columna', 'Neuropatías', 'Hernia discal',
        'Radiculopatías', 'Inflamaciones nerviosas', 'Lesiones musculares',
        'Cicatrices y tejido fibrótico', 'Lesiones tendineas', 'Patologías tendineas',
        'Edemas quirúrgicos', 'Edemas traumáticos', 'Heridas y queloides',
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
