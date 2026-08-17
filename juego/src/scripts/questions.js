// ============================================
// Mac Quest — Banco de Preguntas sobre Macintosh
// Basado en la presentación interactiva histórica de Apple
// ============================================

export const questions = {
  easy: [
    {
      question: "¿En qué fecha exacta fue presentado el Macintosh 128K por Steve Jobs en Cupertino?",
      options: ["12 de octubre de 1977", "24 de enero de 1984", "15 de marzo de 1996", "20 de diciembre de 2001"],
      correctIndex: 1,
      category: "Fundación"
    },
    {
      question: "¿Cuál fue la primera computadora comercial de Apple en incluir una Interfaz Gráfica de Usuario (GUI) y un ratón?",
      options: ["Apple II", "Apple Lisa", "Macintosh 128K", "NeXT Cube"],
      correctIndex: 1,
      category: "Hardware"
    },
    {
      question: "¿En qué año se lanzó al mercado la computadora Apple II?",
      options: ["1976", "1977", "1981", "1984"],
      correctIndex: 1,
      category: "Historia"
    },
    {
      question: "¿Qué eslogan célebre acompañó la presentación del Macintosh en 1984?",
      options: ["Think Different", "Power is Beauty", "For the rest of us", "The Computer for Tomorrow"],
      correctIndex: 2,
      category: "Manifiesto"
    },
    {
      question: "¿Qué renombrado director de cine dirigió el famoso comercial de televisión '1984' transmitido durante el Super Bowl?",
      options: ["Steven Spielberg", "Ridley Scott", "George Lucas", "James Cameron"],
      correctIndex: 1,
      category: "Cultura"
    },
    {
      question: "¿Cuál fue la razón principal por la que la computadora Apple Lisa fue un fracaso comercial a pesar de sus innovaciones?",
      options: ["No tenía monitor", "Costaba casi $10,000 USD y su funcionamiento era lento", "No incluía teclado", "No permitía guardar archivos"],
      correctIndex: 1,
      category: "Lisa"
    },
    {
      question: "¿Cómo operaban las computadoras antes de la llegada de la interfaz gráfica y el mouse?",
      options: ["Mediante pantallas táctiles", "Mediante líneas de comando en pantallas monocromáticas de fósforo verde o blanco", "Únicamente por tarjetas perforadas", "Con comandos de voz"],
      correctIndex: 1,
      category: "Computación"
    },
    {
      question: "¿Qué nombre recibió la interfaz visual traslúcida y brillante presentada en Mac OS X en el año 2001?",
      options: ["Platinum UI", "Aqua UI", "Metro UI", "Snow White"],
      correctIndex: 1,
      category: "Interfaz"
    },
    {
      question: "¿Qué empresa fundada por Steve Jobs en 1985 fue adquirida por Apple en 1996 para servir de base a su nuevo sistema operativo?",
      options: ["NeXT", "Pixar", "Xerox PARC", "Commodore"],
      correctIndex: 0,
      category: "NeXT"
    },
    {
      question: "¿Qué dispositivo presentado en 2007 derivó directamente de Mac OS X adaptando la interfaz al control multitáctil?",
      options: ["iPad", "iPod Classic", "iPhone (iOS)", "Apple Watch"],
      correctIndex: 2,
      category: "Ecosistema"
    },
    {
      question: "¿Qué sistema operativo presentado en 2024 marca la frontera más reciente de Apple en computación espacial?",
      options: ["tvOS", "iPadOS", "visionOS", "watchOS"],
      correctIndex: 2,
      category: "Futuro"
    },
    {
      question: "¿Qué componente central del sistema operativo del Mac se introdujo desde System 1 para gestionar carpetas, documentos y la papelera?",
      options: ["Terminal", "Finder", "Dashboard", "Control Strip"],
      correctIndex: 1,
      category: "Sistema"
    },
    {
      question: "¿Quién fue la diseñadora encargada de la iconografía gráfica bitmap del primer Macintosh en 1984?",
      options: ["Jony Ive", "Susan Kare", "Hartmut Esslinger", "Jerry Manock"],
      correctIndex: 1,
      category: "Diseño"
    },
    {
      question: "¿Cómo se llamaban los primeros sistemas operativos de disco de la serie Apple II anteriores a la era gráfica?",
      options: ["MS-DOS y PC-DOS", "Apple DOS y ProDOS", "System 1 y System 2", "A/UX y Copland"],
      correctIndex: 1,
      category: "Sistemas"
    },
    {
      question: "¿En qué mes y año fue lanzado comercialmente Mac OS X?",
      options: ["Enero de 1996", "Marzo de 2001", "Junio de 2007", "Septiembre de 2015"],
      correctIndex: 1,
      category: "Mac OS X"
    },
    {
      question: "¿Qué capacidad de memoria RAM incluía el Macintosh original de 1984?",
      options: ["64 KB", "128 KB", "512 KB", "1 MB"],
      correctIndex: 1,
      category: "Hardware"
    },
    {
      question: "¿En qué año se separó iPadOS como sistema operativo propio enfocado en productividad y pantallas grandes?",
      options: ["2010", "2015", "2019", "2022"],
      correctIndex: 2,
      category: "Ecosistema"
    },
    {
      question: "¿Por qué monto económico adquirió Apple a la compañía NeXT en diciembre de 1996?",
      options: ["$100 millones de dólares", "$429 millones de dólares", "$1,000 millones de dólares", "$2,500 millones de dólares"],
      correctIndex: 1,
      category: "NeXT"
    },
    {
      question: "¿En qué año se lanzaron los sistemas operativos watchOS y tvOS?",
      options: ["2007", "2010", "2015", "2019"],
      correctIndex: 2,
      category: "Ecosistema"
    },
    {
      question: "¿Qué tecnología de procesador integraba la computadora Apple Lisa de 1983?",
      options: ["Intel 8086", "Motorola 68000 @ 5 MHz", "PowerPC 601", "Apple M1"],
      correctIndex: 1,
      category: "Hardware"
    }
  ],
  normal: [
    {
      question: "¿Cuál era la limitación técnica estructural más grave del Mac OS Clásico (1984 - 2001)?",
      options: ["No permitía carpetas anidadas", "Carecía de multitarea real preventiva y memoria protegida", "No podía conectarse a impresoras", "Solo funcionaba en monitores monocromáticos"],
      correctIndex: 1,
      category: "Arquitectura"
    },
    {
      question: "¿Qué sucedía en el Mac OS Clásico si una sola aplicación en ejecución sufría un fallo crítico?",
      options: ["El sistema cerraba la aplicación normalmente", "Toda la computadora se congelaba y requería un reinicio forzado", "Se abría una ventana del Finder indicando el error", "El sistema cambiaba a modo comando"],
      correctIndex: 1,
      category: "Arquitectura"
    },
    {
      question: "¿Cómo se llamó el fallido proyecto interno de Apple en 1996 que intentó reconstruir el sistema operativo mediante un microkernel?",
      options: ["A/UX", "Copland", "Rhapsody", "Platinum"],
      correctIndex: 1,
      category: "Proyectos"
    },
    {
      question: "¿Qué ejecutivo de Apple canceló el proyecto Copland en 1996 e inició la búsqueda externa de un nuevo sistema operativo?",
      options: ["John Sculley", "Gil Amelio", "Michael Spindler", "Steve Wozniak"],
      correctIndex: 1,
      category: "Historia"
    },
    {
      question: "¿Qué sistema operativo basado en UNIX lanzó Apple en febrero de 1988 para servidores y entorno académico?",
      options: ["NeXTSTEP", "A/UX (Apple Unix)", "ProDOS", "Darwin"],
      correctIndex: 1,
      category: "UNIX"
    },
    {
      question: "¿En qué estándar o versión de UNIX se basó el sistema A/UX en 1988?",
      options: ["BSD 4.4", "AT&T System V Release 2.2", "POSIX 1.0", "Solaris 2.0"],
      correctIndex: 1,
      category: "UNIX"
    },
    {
      question: "¿Qué nombre recibió el tema estético e interfaz gráfica introducido formalmente en Mac OS 8 en 1997?",
      options: ["Aqua UI", "Platinum UI", "Flat Design", "Classic Grey"],
      correctIndex: 1,
      category: "Interfaz"
    },
    {
      question: "¿Quiénes fueron los diseñadores del chasis e ingeniería industrial del Macintosh 128K original?",
      options: ["Jony Ive y Steve Jobs", "Jerry Manock y Hartmut Esslinger", "Susan Kare y Bill Atkinson", "Andy Hertzfeld y Rod Holt"],
      correctIndex: 1,
      category: "Diseño"
    },
    {
      question: "¿Cuál fue la última versión publicada de la era del Mac OS Clásico antes del despliegue total de Mac OS X?",
      options: ["System 7.5.3", "Mac OS 8.6", "Mac OS 9.2.2", "Mac OS X 10.0"],
      correctIndex: 2,
      category: "Sistemas"
    },
    {
      question: "¿Qué elemento del chasis del Macintosh 128K reflejaba su diseño portátil y 'amigable' todo-en-uno?",
      options: ["Una batería extraíble", "Un asa superior integrada para transportarlo", "Una funda de piel de regalo", "Teclado inalámbrico"],
      correctIndex: 1,
      category: "Hardware"
    },
    {
      question: "¿Qué resolución y dimensiones de pantalla tenía el tubo CRT monocromático del Macintosh 128K?",
      options: ["12 pulgadas a 640x480 píxeles", "9 pulgadas monocromo a 512x342 píxeles", "14 pulgadas a 800x600 píxeles", "15 pulgadas a 1024x768 píxeles"],
      correctIndex: 1,
      category: "Hardware"
    },
    {
      question: "¿Qué tecnología de interacción gráfica incluye el sistema visionOS en Apple Vision Pro?",
      options: ["Pantalla táctil resistiva", "Renderizado foveado y rastreo ocular en 3D", "Teclado virtual flotante exclusivo", "Joysticks físicos adheribles"],
      correctIndex: 1,
      category: "Tecnología"
    },
    {
      question: "¿En qué consistía la diferencia entre la multitarea cooperativa (Mac OS Clásico) y la multitarea preventiva (Mac OS X)?",
      options: ["La cooperativa cerraba programas solos", "En la cooperativa las apps decidían cuándo ceder la CPU; en la preventiva el kernel UNIX gestiona el tiempo de CPU", "La preventiva solo funcionaba con Internet", "No había diferencia técnica"],
      correctIndex: 1,
      category: "Arquitectura"
    },
    {
      question: "¿Cuál es la base tecnológica y núcleo de código abierto subyacente que impulsa a Mac OS X y a todo el ecosistema de Apple?",
      options: ["Apple DOS", "Darwin (Mach kernel / BSD)", "System 7 Core", "Copland Kernel"],
      correctIndex: 1,
      category: "Kernel"
    },
    {
      question: "¿En qué año fue lanzada la computadora Apple Lisa?",
      options: ["1981", "1983", "1984", "1986"],
      correctIndex: 1,
      category: "Lisa"
    },
    {
      question: "¿Cuántos años abarcó la arquitectura original del Mac OS Clásico (desde System 1 hasta Mac OS 9)?",
      options: ["5 años", "10 años", "17 años", "25 años"],
      correctIndex: 2,
      category: "Historia"
    },
    {
      question: "¿Cuál fue la principal consecuencia técnica y corporativa de la cancelación de Copland en 1996?",
      options: ["Apple dejó de fabricar computadoras", "Obligó a Apple a buscar un sistema operativo fuera, provocando la compra de NeXT y el regreso de Steve Jobs", "Apple adoptó Microsoft Windows", "Se decidió usar System 7 sin cambios"],
      correctIndex: 1,
      category: "Estrategia"
    },
    {
      question: "¿Qué paradigma de interacción de usuario introdujo System 1 en 1984 que sigue vigente en la computación actual?",
      options: ["Terminal de comandos en pantalla dividida", "Finder, barra de menú superior persistente, ventanas arrastrables y el paradigma del Escritorio", "Sistema de pestañas y botones 3D", "Control por gestos de ratón sin menú"],
      correctIndex: 1,
      category: "Interfaz"
    },
    {
      question: "Según los datos de la presentación, ¿cuántos dispositivos activos en todo el mundo ejecutan actualmente sistemas derivados del núcleo de Mac OS X?",
      options: ["500 millones", "1,000 millones", "Más de 2.2 mil millones", "5 mil millones"],
      correctIndex: 2,
      category: "Ecosistema"
    },
    {
      question: "¿Qué dos componentes físicos fundamentales estaban integrados dentro de la carcasa todo-en-uno del Macintosh de 1984?",
      options: ["Impresora y escáner", "Monitor CRT y circuitería interna", "Disco duro gigante y teclado", "Fuente de poder externa y lector de casetes"],
      correctIndex: 1,
      category: "Hardware"
    }
  ],
  hard: [
    {
      question: "¿Qué cita textual se utiliza en la diapositiva 1 para describir el papel del proyecto Apple Lisa frente al Macintosh?",
      options: ["Lisa fue el fracaso más grande que arruinó la década de los 80", "Lisa fue el laboratorio heroico que absorbió el costo del futuro para que el Macintosh pudiera democratizarlo", "El Lisa demostró que los comandos de texto nunca pasarían de moda", "Sin Lisa, Apple jamás habría construido impresoras"],
      correctIndex: 1,
      category: "Citas"
    },
    {
      question: "¿Qué tres pilares técnicos y de diseño resumen la revolución del Macintosh 128K en la diapositiva 2?",
      options: ["Teclado extendido, procesador de 32 bits y color", "Para el resto de nosotros (GUI), Diseño Todo-en-Uno (CRT/asa) y el Comercial 1984 (Ridley Scott)", "Disquetera doble, disco duro interno y módem", "Red local, soporte UNIX y batería portátil"],
      correctIndex: 1,
      category: "Pilares"
    },
    {
      question: "¿Qué texto compone exactamente el Manifiesto del Macintosh 128K destacado en la diapositiva 2?",
      options: ["La tecnología debe ser compleja para garantizar su potencia", "La simplicidad no es solo la ausencia de desorden. Es un estado de armonía donde el diseño y la utilidad son inseparables", "El diseño es secundario cuando el hardware es rápido", "Cada computadora debe tener su lenguaje de comandos"],
      correctIndex: 1,
      category: "Manifiesto"
    },
    {
      question: "¿Qué tres tecnologías o componentes forman la arquitectura del núcleo de Mac OS X según la ficha técnica de la diapositiva 5?",
      options: ["MS-DOS / Windows NT / OS/2", "UNIX / Mach kernel / BSD", "ProDOS / System 7 / Copland", "Linux / Android / WebOS"],
      correctIndex: 1,
      category: "Kernel"
    },
    {
      question: "¿Qué cita textual describe la fusión entre NeXTSTEP y Apple en la diapositiva 5?",
      options: ["Apple compró NeXT únicamente por las patentes de hardware", "NeXTSTEP trajo la arquitectura; Apple trajo el alma y la escala. Juntos crearon el sistema más avanzado del planeta", "NeXTSTEP reemplazó por completo la marca Apple", "La compra de NeXT fue un arreglo temporal"],
      correctIndex: 1,
      category: "Citas"
    },
    {
      question: "¿Qué formato de disquetes utilizaban los sistemas Apple DOS y ProDOS en las computadoras Apple II?",
      options: ["Disquetes de 3.5 pulgadas", "Disquetes de 5.25 pulgadas", "Discos de 8 pulgadas", "Cartuchos magnéticos"],
      correctIndex: 1,
      category: "Almacenamiento"
    },
    {
      question: "¿Qué sector específico buscaba atender el sistema operativo A/UX de 1988 según el catálogo histórico de la diapositiva 4?",
      options: ["Videojuegos domésticos", "Universidades y servidores gubernamentales sobre hardware de alto costo", "Diseño gráfico básico para niños", "Estaciones de radio am"],
      correctIndex: 1,
      category: "UNIX"
    },
    {
      question: "¿En qué año fundó Steve Jobs la empresa NeXT tras haber sido apartado de sus funciones en Apple?",
      options: ["1983", "1985", "1989", "1993"],
      correctIndex: 1,
      category: "Historia"
    },
    {
      question: "¿Qué dos características clave definieron al sistema Mac OS X en su lanzamiento de marzo de 2001 (Paso 02 en la diapositiva 5)?",
      options: ["Interfaz de línea de comandos sin gráficos", "Interfaz Aqua intuitiva combinada con un núcleo UNIX con memoria protegida y multitarea real", "Compatibilidad exclusiva con discos de 5.25 pulgadas", "Eliminación del Finder y de la barra de menú"],
      correctIndex: 1,
      category: "Mac OS X"
    },
    {
      question: "¿Qué conclusión histórica se expone al cierre de la presentación en la diapositiva 6?",
      options: ["El Macintosh fue superado y olvidado", "La visión de 1984 de una computadora personal intuitiva no murió con el hardware beige: vive en cada pantalla y experiencia espacial que utilizamos en el siglo XXI", "Las pantallas táctiles terminaron con el Mac", "El futuro de la informática es regresar a las líneas de comando"],
      correctIndex: 1,
      category: "Legado"
    },
    {
      question: "¿Qué diferencia de interfaz existía entre el Apple II (1977) y el Apple Lisa (1983) descrita en la diapositiva 1?",
      options: ["El Apple II usaba pantalla a color y Lisa monocromática", "El Apple II funcionaba con líneas de comando de texto; el Lisa introdujo la primera Interfaz Gráfica de Usuario (GUI) con mouse", "El Apple II no tenía teclado", "Ninguna, usaban la misma interfaz"],
      correctIndex: 1,
      category: "Evolución"
    },
    {
      question: "¿Qué caracterizaba a los sistemas operativos antes de la llegada de la computación gráfica personal descritos en la editorial de la diapositiva 1?",
      options: ["Interfaces táctiles de fósforo azul", "Máquinas complejas con líneas de comando, pantallas monocromáticas oscuras y texto en fósforo verde o blanco", "Gráficos tridimensionales renderizados en tiempo real", "Comandos de voz en pantallas gigantes"],
      correctIndex: 1,
      category: "Pre-Mac"
    },
    {
      question: "¿Qué problemas específicos provocaron la cancelación del proyecto Copland en 1996 según la diapositiva 4?",
      options: ["Retrasos masivos, incompatibilidades graves y la dificultad de reconstruir Mac OS con microkernel desde cero", "Falta de presupuesto económico", "Ningún desarrollador quiso programar", "El procesador Motorola dejó de fabricarse"],
      correctIndex: 0,
      category: "Copland"
    },
    {
      question: "¿Qué dispositivos integran el ecosistema derivado del núcleo de Mac OS X según el árbol genealógico de la diapositiva 6?",
      options: ["iPhone (iOS), iPad (iPadOS), Apple Watch (watchOS), Apple TV (tvOS) y Apple Vision Pro (visionOS)", "Únicamente computadoras Mac Pro", "Servidores A/UX y computadoras NeXT Cube", "Dispositivos Apple II y Apple III"],
      correctIndex: 0,
      category: "Ecosistema"
    },
    {
      question: "¿Qué función específica cumplen watchOS y tvOS en el ecosistema según la diapositiva 6?",
      options: ["Reemplazar al sistema operativo del Mac en oficinas", "Microsistemas de tiempo real adaptados para sensores biométricos en la muñeca y entretenimiento en el hogar", "Servir como editores de código", "Controlar la fabricación industrial"],
      correctIndex: 1,
      category: "Sistemas"
    },
    {
      question: "¿Qué innovación de interacción aporta iPadOS desde 2019 dentro de la familia de sistemas de Apple?",
      options: ["Eliminación de aplicaciones de terceros", "Optimización para productividad modular, lápiz óptico y pantallas táctiles de gran formato", "Regreso a las líneas de comando monocromáticas", "Control mediante teclado físico sin soporte táctil"],
      correctIndex: 1,
      category: "iPadOS"
    },
    {
      question: "¿Qué nombre recibía originalmente la serie de software del Mac entre 1984 y 1997 antes de llamarse oficialmente 'Mac OS'?",
      options: ["Apple OS", "System Software (System 1 al 7)", "Lisa OS", "Darwin OS"],
      correctIndex: 1,
      category: "System"
    },
    {
      question: "¿En qué año se lanzó Mac OS 8, marcando la adopción formal del nombre 'Mac OS'?",
      options: ["1984", "1991", "1997", "2001"],
      correctIndex: 2,
      category: "Mac OS"
    },
    {
      question: "¿Qué característica técnica de visionOS permite optimizar el procesamiento gráfico al reducir el consumo en la visión periférica del usuario?",
      options: ["Pantalla de fósforo verde", "Renderizado foveado combinado con rastreo ocular", "Multitarea cooperativa", "Desactivación de sombras 2D"],
      correctIndex: 1,
      category: "visionOS"
    },
    {
      question: "¿Qué dos etapas o pasos estructuran la transición histórica de NeXT a Mac OS X descrita en la diapositiva 5?",
      options: ["Paso 01: Adquisición de NeXT (NeXTSTEP, 1996); Paso 02: Lanzamiento de Mac OS X con interfaz Aqua y núcleo UNIX (2001)", "Paso 01: Creación de A/UX; Paso 02: Cancelación de Copland", "Paso 01: Lanzamiento de Lisa; Paso 02: Lanzamiento del iPhone", "Paso 01: Lanzamiento de System 1; Paso 02: Lanzamiento de Mac OS 9"],
      correctIndex: 0,
      category: "Transición"
    }
  ]
};

export function getQuestionsByDifficulty(difficulty = 'easy') {
  return questions[difficulty] || questions.easy;
}

export function getMixedQuestions(difficulty = 'easy') {
  const diffQuestions = getQuestionsByDifficulty(difficulty);
  const shuffled = [...diffQuestions].sort(() => Math.random() - 0.5);
  return shuffled;
}
