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
        titulo:
          'Metodologías de identificación de peligros (<em>checklists</em>, inspecciones, análisis preliminar de riesgos)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evaluación cualitativa y cuantitativa de riesgos',
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
        'Castejón Vilella, E. Guardino Solá, X. & Baraza Sánchez, X. (2014). Higiene industrial. Editorial UOC.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/57709?page=23',
    },
    {
      referencia:
        'Falagán Rojo, M. J. (2009). Higiene industrial aplicada. Fundación Luis Fernández Velasco. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/59633 ',
    },
    {
      referencia:
        'Martín Blanco, V. Sánchez Rivero, J. M. & Enriquez Palomino, A. (2014). Seguridad industrial: puesta en servicio, mantenimiento e inspección de equipos e instalaciones. FC Editorial. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/114073?page=1 ',
    },
    {
      referencia:
        'García Laureano, R. (2019). Seguridad y salud. MF0075. Editorial Tutor Formación. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/111572 ',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2012). GTC 45: Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional. Ministerio de Trabajo.',
      link: ' http://132.255.23.82/sipnvo/normatividad/GTC_45_DE_2012.pdf',
    },
    {
      referencia:
        'Resolución 2400 de 1979 (Ministerio de Trabajo y Seguridad Social). Por el cual se establecen disposiciones sobre vivienda, higiene y seguridad industrial en los establecimientos de trabajo. 22 de mayo de 1979. ',
      link:
        'https://www.bogotajuridica.gov.co/sisjur/normas/Norma1.jsp?i=53565',
    },
  ],
  glosario: [
    {
      termino: 'Accidente de trabajo',
      significado:
        'suceso repentino que sobreviene por causa o con ocasión del trabajo y que produce una lesión orgánica, una perturbación funcional, una invalidez o la muerte.',
    },
    {
      termino: 'Análisis de riesgos',
      significado:
        'proceso para comprender la naturaleza del peligro y determinar el nivel de riesgo.',
    },
    {
      termino: 'Condición insegura',
      significado:
        'cualquier característica del ambiente laboral que puede generar un accidente o enfermedad laboral.',
    },
    {
      termino: 'Control del riesgo',
      significado:
        'medida que se implementa para eliminar o reducir un riesgo a un nivel aceptable.',
    },
    {
      termino: 'Enfermedad laboral',
      significado:
        'patología contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral.',
    },
    {
      termino: 'Evaluación de riesgos',
      significado:
        'proceso global para estimar la magnitud del riesgo y decidir si el riesgo es o no tolerable.',
    },
    {
      termino: 'Factor de riesgo',
      significado:
        'elemento del entorno laboral que puede causar daño a la salud o integridad del trabajador.',
    },
    {
      termino: 'Matriz de riesgos',
      significado:
        'herramienta para identificar y valorar los riesgos asociados a las actividades laborales.',
    },
    {
      termino: 'Peligro',
      significado:
        'fuente, situación o acto con potencial para causar daño en términos de lesión o enfermedad.',
    },
    {
      termino: 'Prevención',
      significado:
        'conjunto de medidas anticipadas para evitar o reducir los riesgos laborales.',
    },
    {
      termino: 'Probabilidad',
      significado:
        'posibilidad de que ocurra un evento o exposición peligrosa en determinadas condiciones.',
    },
    {
      termino: 'Riesgo',
      significado:
        'combinación de la probabilidad de que ocurra un evento y sus consecuencias.',
    },
    {
      termino: 'Riesgo aceptable',
      significado:
        'nivel de riesgo que se ha determinado tolerable para ser asumido por la organización.',
    },
    {
      termino: 'Seguridad y salud en el trabajo',
      significado:
        'disciplina que se enfoca en la prevención de lesiones y enfermedades laborales.',
    },
    {
      termino: 'Sistema de gestión',
      significado:
        'conjunto de elementos interrelacionados utilizados para establecer políticas y objetivos de una organización.',
    },
  ],
}
