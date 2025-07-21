export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Diseño e implementación de medidas de control de riesgos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diseño e implementación de medidas de control de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Controles de ingeniería en seguridad y salud en el trabajo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Controles administrativos y procedimientos de trabajo seguro ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Permisos de trabajo seguro',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Rotación de personal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Icontec Internacional. (2012). GTC 45: Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional. Guía Técnica Colombiana.',
      link:
        'https://posipedia.com.co/wp-content/uploads/2021/04/15-MARZO-.-MATERIAL-DE-APOYO-PREVENCIÓN-DE-PELIGROS-EN-EL-ADMINISTRACIÓN-PUBLICA-GENERALIDADES.pdf',
    },
    {
      referencia:
        'Resolución 2400 de 1979 (Ministerio del Trabajo). Por la cual se establecen disposiciones sobre vivienda, higiene y seguridad industrial en los establecimientos de trabajo. 22 de mayo de 1979.',
      link:
        'https://www.bogotajuridica.gov.co/sisjur/normas/Norma1.jsp?i=53565',
    },
    {
      referencia:
        'López Salcedo, A. de J. & García Guiliany, J. E. (2024). Eficacia de las capacitaciones en Seguridad y Salud en el Trabajo en tres empresas de la ciudad de Barranquilla. Gestión de la seguridad y la salud en el trabajo, 6(2), 14-24.',
      link:
        'https://www.researchgate.net/publication/384605932_Eficacia_de_las_capacitaciones_en_Seguridad_y_Salud_en_el_Trabajo_en_tres_empresas_de_la_ciudad_de_Barranquilla',
    },
    {
      referencia:
        'Twind. (2023). Guía de Permisos de Trabajo en Colombia: Seguridad Laboral.',
      link: 'https://twind.io/co/guia-de-permisos-de-trabajo-en-colombia/',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. 11 de julio de 2012.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48365',
    },
    {
      referencia:
        'SafetyCulture. (2024). ¿Qué es un equipo de protección personal? Equipo de Protección Personal (EPP).',
      link:
        'https://safetyculture.com/es/temas/seguridad-sobre-el-equipo-de-proteccion-personal/',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de riesgos',
      significado:
        'Evaluación de peligros presentes para determinar la magnitud de los riesgos.',
    },
    {
      termino: 'Capacitación en SST',
      significado:
        'Formación sobre prácticas seguras y uso de EPP en el entorno laboral.',
    },
    {
      termino: 'Certificación del EPP',
      significado:
        'Acreditación de que un equipo cumple estándares de calidad y seguridad.',
    },
    {
      termino: 'Checklists',
      significado:
        'Listas de verificación utilizadas para identificar peligros y verificar cumplimiento.',
    },
    {
      termino: 'Control administrativo',
      significado:
        'Políticas y procedimientos para reducir exposición al riesgo, sin eliminarlo completamente.',
    },
    {
      termino: 'Control de ingeniería',
      significado:
        'Solución técnica que elimina o reduce el riesgo en la fuente.',
    },
    {
      termino: 'Cultura de seguridad',
      significado:
        'Valores y prácticas compartidas que promueven el comportamiento seguro.',
    },
    {
      termino: 'EPP',
      significado:
        'Equipo de protección personal usado para reducir riesgos físicos al trabajador.',
    },
    {
      termino: 'Inspección de seguridad',
      significado:
        'Revisión sistemática de condiciones laborales para detectar riesgos.',
    },
    {
      termino: 'ISO 45001',
      significado:
        'Norma internacional para sistemas de gestión de seguridad y salud en el trabajo.',
    },
    {
      termino: 'Jerarquía de controles',
      significado:
        'Orden descendente de medidas de control: eliminación, sustitución, ingeniería, administrativas y EPP.',
    },
    {
      termino: 'LOTO',
      significado:
        'Procedimiento de bloqueo y etiquetado para prevenir energización accidental durante mantenimiento.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'Actividades periódicas para asegurar el funcionamiento seguro de equipos.',
    },
    {
      termino: 'Normativa colombiana',
      significado:
        'Conjunto de leyes y reglamentos que regulan la SST, como el Decreto 1072 del 2015.',
    },
    {
      termino: 'Permiso de trabajo',
      significado:
        'Documento que autoriza realizar tareas de alto riesgo, bajo condiciones seguras.',
    },
    {
      termino: 'Riesgo laboral',
      significado:
        'Probabilidad de ocurrencia de daño derivado del entorno de trabajo.',
    },
    {
      termino: 'Rotación de personal',
      significado:
        'Cambio planificado de funciones para reducir exposición a riesgos físicos y psicosociales.',
    },
    {
      termino: 'SG-SST',
      significado:
        'Sistema de gestión de seguridad y salud en el trabajo que busca prevenir accidentes y enfermedades laborales.',
    },
    {
      termino: 'Ventilación localizada',
      significado: 'Sistema que captura contaminantes en el punto de origen.',
    },
    {
      termino: 'What-If',
      significado:
        'Técnica de análisis que plantea preguntas hipotéticas para identificar riesgos potenciales.',
    },
  ],
}
