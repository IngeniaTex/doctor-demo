// ============================================================
// CONTENIDO DEL SITIO
// Edita este archivo para personalizar la landing: nombre del
// doctor, logo, textos, horarios, contacto, redes, etc.
// ============================================================

const site = {
  brand: {
    name: 'Dra. Valentina Rojas',
    specialty: 'Cardiología',
    logo: '/images/logo.svg',
    logoWhite: '/images/logo-white.svg',
    tagline:
      'Atención cardiovascular integral con un enfoque humano, preventivo y basado en evidencia.',
  },

  contact: {
    phone: '+52 999 748 8654',
    whatsapp: '529997488654',
    whatsappMessage: 'Quiero cotizar esta pagina web',
    email: 'citas@dravalentinarojas.com',
    address: 'Av. Reforma 123, Piso 4, Col. Juárez, CDMX 06600',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Paseo+de+la+Reforma+123,+Ju%C3%A1rez,+Ciudad+de+M%C3%A9xico&z=16&output=embed',
  },

  social: [
    { icon: 'fa6-brands:square-facebook', url: 'https://facebook.com/' },
    { icon: 'fa6-brands:instagram', url: 'https://instagram.com/' },
    { icon: 'fa6-brands:linkedin', url: 'https://linkedin.com/' },
    { icon: 'fa6-brands:youtube', url: 'https://youtube.com/' },
  ],

  nav: [
    { label: 'Inicio', to: 'home' },
    { label: 'Sobre mí', to: 'about' },
    { label: 'Servicios', to: 'services' },
    { label: 'Testimonios', to: 'testimonials' },
    { label: 'Preguntas', to: 'faq' },
    { label: 'Contacto', to: 'contact' },
  ],

  hero: [
    {
      title: 'Cuida tu corazón <br /> con quien sabe escucharlo.',
      subTitle:
        'Más de 15 años dedicados a la prevención, diagnóstico y tratamiento <br /> de enfermedades cardiovasculares.',
      bgImg: '/images/hero-bg7.jpg',
    },
    {
      title: 'Diagnóstico preciso, <br /> tratamiento a tu medida.',
      subTitle:
        'Ecocardiograma, Holter, prueba de esfuerzo y consulta especializada <br /> en un solo lugar.',
      bgImg: '/images/hero-bg8.jpg',
    },
    {
      title: 'Tu salud cardiovascular <br /> en buenas manos.',
      subTitle:
        'Agenda tu cita hoy y recibe una atención cercana, clara y sin prisas.',
      bgImg: '/images/hero-bg.jpg',
    },
  ],

  highlights: [
    {
      bg: 'purple',
      icon: '/icons/icon1.svg',
      title: 'Especialista certificada',
      subTitle:
        'Certificación vigente por el Consejo Mexicano de Cardiología y formación en el Instituto Nacional de Cardiología.',
    },
    {
      bg: 'green',
      icon: '/icons/icon2.svg',
      title: 'Citas el mismo día',
      subTitle:
        'Agenda flexible de lunes a sábado. Atención de urgencias cardiológicas con cita prioritaria.',
    },
    {
      bg: 'red',
      icon: '/icons/icon3.svg',
      title: 'Estudios en consultorio',
      subTitle:
        'Electrocardiograma, ecocardiograma y Holter realizados en la misma consulta, sin traslados.',
    },
  ],

  about: {
    heading: 'Sobre mí',
    headingSub:
      'Conoce a la especialista que cuidará de tu corazón <br /> y el enfoque con el que trabajo cada día.',
    title: 'Medicina cardiovascular cercana, preventiva y basada en evidencia.',
    text:
      'Soy médica cardióloga egresada de la UNAM con especialidad en el Instituto Nacional de Cardiología "Ignacio Chávez". A lo largo de mi carrera he atendido a más de 4,000 pacientes, siempre con la convicción de que un buen diagnóstico empieza por escuchar.<br /><br />Mi consulta combina tecnología de diagnóstico de última generación con el tiempo necesario para explicarte, con claridad, qué le sucede a tu corazón y cuáles son tus opciones. Creo firmemente en la prevención: la mayoría de las enfermedades cardiovasculares pueden evitarse con un acompañamiento adecuado.',
    photo: '/images/member2.jpg',
    avatar: {
      img: '/images/avatar1.png',
      name: 'Dra. Valentina Rojas',
      designation: 'Cardióloga · Céd. Prof. 1234567',
    },
    schedule: [
      { day: 'Lunes', hours: '9:00 – 18:00' },
      { day: 'Martes', hours: '9:00 – 18:00' },
      { day: 'Miércoles', hours: '9:00 – 18:00' },
      { day: 'Jueves', hours: '9:00 – 18:00' },
      { day: 'Viernes', hours: '9:00 – 15:00' },
      { day: 'Sábado', hours: '9:00 – 13:00' },
      { day: 'Domingo', hours: 'Cerrado' },
    ],
  },

  services: {
    heading: 'Servicios',
    headingSub:
      'Todo lo que necesitas para cuidar tu salud cardiovascular, <br /> desde la prevención hasta el seguimiento.',
    items: [
      {
        icon: 'healthicons:heart-outline',
        bg: 'purple',
        title: 'Consulta cardiológica',
        text: 'Valoración completa, historia clínica, exploración física y plan de tratamiento personalizado.',
      },
      {
        icon: 'material-symbols:ecg-heart-outline',
        bg: 'green',
        title: 'Electrocardiograma',
        text: 'Registro de la actividad eléctrica del corazón con interpretación inmediata en consulta.',
      },
      {
        icon: 'healthicons:ultrasound-scanner-outline',
        bg: 'red',
        title: 'Ecocardiograma',
        text: 'Ultrasonido cardiaco para evaluar estructura, válvulas y función del corazón.',
      },
      {
        icon: 'healthicons:stethoscope-outline',
        bg: 'orange',
        title: 'Holter 24 h',
        text: 'Monitoreo continuo del ritmo cardiaco para detectar arritmias que no aparecen en un ECG.',
      },
      {
        icon: 'healthicons:running-outline',
        bg: 'dip-blue',
        title: 'Prueba de esfuerzo',
        text: 'Evaluación de la respuesta del corazón al ejercicio para detectar isquemia y capacidad física.',
      },
      {
        icon: 'healthicons:blood-pressure-outline',
        bg: 'blue',
        title: 'Control de hipertensión',
        text: 'Seguimiento y ajuste de tratamiento para mantener la presión arterial en rangos seguros.',
      },
    ],
  },

  stats: [
    { icon: 'healthicons:award-trophy-outline', bg: 'purple', number: '15+', title: 'Años de experiencia' },
    { icon: 'healthicons:people-outline', bg: 'green', number: '4,000+', title: 'Pacientes atendidos' },
    { icon: 'healthicons:heart-outline', bg: 'orange', number: '98%', title: 'Pacientes satisfechos' },
    { icon: 'healthicons:i-certificate-paper-outline', bg: 'dip-blue', number: '3', title: 'Certificaciones vigentes' },
  ],

  video: {
    thumb: '/images/video-block-img.jpg',
    src: 'https://www.youtube.com/embed/SqcY0GlETPk',
  },

  appointment: {
    heading: 'Agenda tu cita',
    headingSub:
      'Completa el formulario y te confirmaremos tu cita por teléfono o WhatsApp <br /> en menos de 24 horas.',
    // Opciones del selector "Motivo de consulta"
    reasons: [
      'Consulta general de cardiología',
      'Electrocardiograma',
      'Ecocardiograma',
      'Holter 24 h',
      'Prueba de esfuerzo',
      'Control de hipertensión',
      'Segunda opinión',
    ],
    // Clave de https://web3forms.com — reemplázala por la tuya para recibir los correos
    web3formsKey: 'REEMPLAZA_CON_TU_ACCESS_KEY',
  },

  testimonials: {
    heading: 'Lo que dicen mis pacientes',
    headingSub:
      'La confianza de quienes ya han puesto su corazón en mis manos <br /> es mi mejor carta de presentación.',
    items: [
      {
        img: '/images/avatar2.png',
        name: 'Laura Méndez',
        designation: 'Paciente desde 2019',
        subTitle:
          'La Dra. Rojas se tomó el tiempo de explicarme cada resultado. Por primera vez entendí qué pasaba con mi presión y cómo controlarla.',
      },
      {
        img: '/images/avatar3.png',
        name: 'Roberto Salinas',
        designation: 'Paciente desde 2021',
        subTitle:
          'Me detectó una arritmia que dos médicos anteriores habían pasado por alto. Profesional, cercana y muy clara.',
      },
      {
        img: '/images/avatar4.png',
        name: 'Carmen Ortiz',
        designation: 'Paciente desde 2020',
        subTitle:
          'Hacer el ecocardiograma en el mismo consultorio me ahorró semanas de espera. Excelente atención de principio a fin.',
      },
      {
        img: '/images/avatar1.png',
        name: 'Javier Domínguez',
        designation: 'Paciente desde 2022',
        subTitle:
          'Después de mi infarto, su seguimiento fue clave para recuperar la confianza. Siempre disponible para resolver dudas.',
      },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes',
    img: '/images/faq-img.png',
    bgImg: '/shape/faq-bg.svg',
    items: [
      {
        title: '¿Cuándo debo acudir con un cardiólogo?',
        content:
          'Si tienes dolor en el pecho, palpitaciones, falta de aire, mareos frecuentes o antecedentes familiares de enfermedad cardiaca. También se recomienda una valoración preventiva a partir de los 40 años o si tienes hipertensión, diabetes o colesterol alto.',
      },
      {
        title: '¿Necesito ir en ayuno a la consulta?',
        content:
          'No es necesario para la consulta ni para el electrocardiograma o ecocardiograma. Si te solicitamos estudios de laboratorio, te indicaremos las condiciones de ayuno con anticipación.',
      },
      {
        title: '¿Qué debo llevar a mi primera cita?',
        content:
          'Identificación, estudios previos (electrocardiogramas, análisis, ecocardiogramas), lista de medicamentos que tomas actualmente y, si es posible, un registro reciente de tu presión arterial.',
      },
      {
        title: '¿Aceptan seguros de gastos médicos?',
        content:
          'Sí. Trabajamos con las principales aseguradoras del país. Consulta con nuestro equipo la cobertura de tu póliza antes de tu cita.',
      },
      {
        title: '¿Cuánto dura una consulta?',
        content:
          'La primera consulta dura entre 45 y 60 minutos para poder revisar tu historial con calma. Las consultas de seguimiento duran aproximadamente 30 minutos.',
      },
    ],
  },

  footer: {
    bgImg: '/images/footer-bg.png',
    quickLinks: [
      { label: 'Sobre mí', to: 'about' },
      { label: 'Servicios', to: 'services' },
      { label: 'Agenda tu cita', to: 'appointment' },
      { label: 'Preguntas frecuentes', to: 'faq' },
    ],
    credit: 'INGENIATEX',
    creditUrl: 'https://ingeniatex.com',
  },
};

export default site;
