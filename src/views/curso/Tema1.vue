<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Diseño e implementación de medidas de control de riesgos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El diseño e implementación de medidas de control de riesgos y peligros en Seguridad y Salud en el Trabajo (SST), constituye uno de los pilares fundamentales para garantizar ambientes laborales seguros, saludables y productivos. Este proceso no solo representa la continuación lógica del proceso de identificación de peligros y evaluación de riesgos, sino que también implica una acción estratégica y consciente que refleja el compromiso de la organización con el bienestar de sus trabajadores, la protección de sus activos humanos y la sostenibilidad operativa a largo plazo.
    
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          p En el marco de un Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), el diseño de estas medidas debe alinearse con principios esenciales como:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La prevención proactiva.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 El cumplimiento de la legislación vigente.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La mejora continua.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La participación activa de todos los niveles de la organización, especialmente de los trabajadores.
        p La efectividad de las medidas de control, depende de su correcta estructuración conforme a la jerarquía internacionalmente aceptada, que prioriza las estrategias de control en el siguiente orden:

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema6/2.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="4%" y="23%" numero="+")
                h5 Eliminación
                p Es la medida más eficiente. Implica eliminar completamente el peligro. Ejemplos: rediseñar procesos, eliminar sustancias peligrosas, modificar tareas para erradicar el riesgo.
    
              .bg-color-white.box-shadow.p-3(x="14.5%" y="39%" numero="+")
                h5 Sustitución
                p Reemplaza el agente, proceso o material peligroso por uno menos riesgoso. Ejemplos: sustituir un solvente tóxico por otro ecológico o menos dañino para la salud y el medio ambiente.
    
              .bg-color-white.box-shadow.p-3(x="8.5%" y="56%" numero="+")
                h5 Controles de ingeniería
                p Intervenciones físicas o tecnológicas que actúan sobre la fuente del peligro. Ejemplos: ventilación industrial, cerramientos de maquinaria, aislamiento acústico, dispositivos de protección automática.
    
              .bg-color-white.box-shadow.p-3(x="9.5%" y="72.5%" numero="+")
                h5 Controles administrativos
                p Cambios organizacionales y procedimientos que reducen la exposición al riesgo. Ejemplos: rotación de personal, pausas activas, señalización, límites de exposición, programas de capacitación y campañas de sensibilización.
    
              .bg-color-white.box-shadow.p-3(x="4%" y="89.5%" numero="+")
                h5 Equipos de Protección Personal (EPP)
                p Última línea de defensa ante riesgos no eliminados por otras medidas. Su efectividad depende de la selección adecuada, uso correcto, mantenimiento y capacitación. No deben usarse como única medida de protección.
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema6/3.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Este esquema jerarquizado permite a las organizaciones implementar medidas de control más eficaces, priorizando aquellas que eliminan o reducen el riesgo en la fuente, antes de recurrir a medidas dependientes del comportamiento humano o al uso de equipos de protección personal.

    .bg-full-width.bg-color-11
      .p-4.p-md-5
        h2(data-aos="fade-left") Proceso de implementación y gestión continua
        p.mb-5 Para que las medidas de control sean efectivas, la organización debe elaborar un <b>plan de acción detallado</b> que contemple:
        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema6/4.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 Asignación clara de responsabilidades.

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema6/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 Cronogramas definidos.

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema6/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Recursos adecuados.
    
    p.mb-5 La formación y sensibilización continua de los trabajadores, es esencial para garantizar la comprensión y aplicación de las medidas, promoviendo una cultura de seguridad que supere las obligaciones legales y se convierta en un valor organizacional.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/7.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La implementación debe realizarse de forma sistemática, gradual y monitoreada, permitiendo la detección de dificultades y la realización de ajustes oportunos. Este proceso debe incluir:
    
        .bg-color-13.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Validación y seguimiento de las medidas.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Indicadores de desempeño.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Auditorías internas.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Revisiones periódicas.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mecanismos de retroalimentación.
          p Todo ello asegura la sostenibilidad y la mejora continua de las acciones implementadas.
          p.mb-0 Asimismo, es crucial considerar la evolución de los procesos productivos, la incorporación de nuevas tecnologías y los cambios en las condiciones laborales, para actualizar las estrategias de control, frente a riesgos nuevos o emergentes.

    .bg-full-width.bg-color-7
      .p-4.p-md-5
        h2.mb-5(data-aos="fade-left") Cultura organizacional y marco legal
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema6/8.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") La integración de las medidas de control en la cultura organizacional, es un factor determinante para el éxito. La seguridad y la salud deben ser valores compartidos, apoyados en:
        
            .bg-color-13.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cultura preventiva.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Responsabilidad colectiva.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Liderazgo visible.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Comunicación efectiva.
            p Reconocer las buenas prácticas y sancionar conductas inseguras, refuerza esta cultura, promoviendo un compromiso colectivo. Desde el marco legal, muchos países exigen sistemas formales. En Colombia, por ejemplo, el Decreto 1072 del 2015 obliga a las empresas a implementar un Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), con enfoque preventivo y sistemático. Las empresas deben:
        
        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema6/9.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 Identificar peligros.

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema6/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 Evaluar riesgos.

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema6/11.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Adoptar medidas de control efectivas.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema6/3.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Todo bajo la supervisión de autoridades laborales y de salud, quienes pueden imponer sanciones ante el incumplimiento. Además del cumplimiento normativo, este proceso fortalece la reputación institucional y la confianza de los trabajadores.
    
    h2(data-aos="fade-left") Sectores de alto riesgo y metodologías avanzadas
    p.mb-5 En sectores como construcción, minería, manufactura, transporte y salud, se requiere un enfoque más riguroso. Para una gestión más precisa y efectiva de los riesgos, se recomienda utilizar metodologías especializadas:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/12.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="HACCP (Análisis de Peligros y Puntos Críticos de Control)") Identifica puntos críticos en los procesos donde pueden ocurrir peligros y establece controles específicos. Muy usado en la industria alimentaria.
          p(numero="2" titulo="FMEA (Análisis de Modos de Falla y Efectos)") Evalúa cómo pueden fallar los procesos y qué efectos tendrían, permitiendo priorizar intervenciones. Común en manufactura y salud.
          p(numero="3" titulo="HAZOP (<em>Hazard and Operability Study</em>)") Técnica sistemática que identifica desviaciones peligrosas en procesos, principalmente en industrias químicas y de procesos complejos.
                

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Controles de ingeniería en seguridad y salud en el trabajo
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema6/13.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Los controles de ingeniería, son uno de los pilares fundamentales en la jerarquía de control de riesgos en Seguridad y Salud en el Trabajo (SST). A diferencia de los controles administrativos o del uso de Equipos de Protección Personal (EPP), estas medidas actúan directamente sobre los procesos, instalaciones y equipos, abordando las causas raíz de los riesgos laborales y creando condiciones de trabajo más seguras, permanentes y sostenibles.
    
        .bg-color-13.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Características claves de los controles de ingeniería:
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Eliminan o reducen significativamente, la exposición al riesgo.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Intervienen estructural y técnicamente, en el entorno laboral.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 No dependen exclusivamente del comportamiento del trabajador.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Representan una inversión rentable a mediano y largo plazo.
    
    h2(data-aos="fade-left") Tipos de controles de ingeniería
    p.mb-5 A continuación, se describen los principales tipos de controles de ingeniería utilizados en Seguridad y Salud en el Trabajo:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/14.png")
            .col-lg-7
              h5 Ventilación
              p Fundamental en espacios donde se manipulan agentes químicos o materiales peligrosos. Puede ser:
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>General</b>: renueva el aire del área completa.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Localizada</b>: capta contaminantes en el punto de origen (ej. campanas extractoras, cabinas, filtros).
              p <b>Ventajas</b>: mejora la calidad del aire, protege la salud respiratoria.
        
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/15.png")
            .col-lg-7
              h5 Enclavamientos (<em>lockout/tagout</em>)
              p Sistemas que impiden el funcionamiento accidental o no autorizado de maquinaria, durante el mantenimiento, inspección o reparación.
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Incluye bloqueos automáticos, sensores y dispositivos de seguridad.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Evita arranques inesperados.
              p <b>Beneficio principal</b>: prevención de amputaciones, electrocuciones y otros accidentes graves.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/16.png")
            .col-lg-7
              h5 Aislamiento de energía (LOTO)
              p Procedimiento crítico que asegura la desconexión y etiquetado de todas las fuentes de energía antes de intervenir equipos.
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Involucra candados, etiquetas de advertencia y protocolos.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Es un estándar de cumplimiento internacional.
              p <b>Ventajas</b>: seguridad garantizada durante trabajos de alto riesgo.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/17.png")
            .col-lg-7
              h5 Diseño seguro de maquinaria
              p Adquisición y adaptación de equipos que cumplan con normativas técnicas y de seguridad.
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Protecciones físicas, paradas de emergencia, controles accesibles.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Señalización clara y ergonomía.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Reduce riesgos en operación, inspección y mantenimiento.
              p <b>Beneficio</b>: disminuye la probabilidad de errores humanos y fallas técnicas.
    
    .bg-full-width.bg-color-11.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema6/18.svg", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            p(data-aos="fade-left").mb-4 A continuación, se aborda de manera integral la implementación, sostenibilidad y rentabilidad, de los controles de ingeniería en el ámbito de la seguridad y salud en el trabajo, destacando su relevancia normativa y su impacto en la prevención de riesgos laborales.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/19.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Los controles de ingeniería, representan soluciones robustas, sostenibles y altamente eficaces para la gestión del riesgo laboral. Su correcta aplicación a través de ventilación, enclavamientos, aislamiento de energía y diseño seguro de maquinaria:
    
        .bg-color-13.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Protege la vida y la salud de los trabajadores.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Fomenta una cultura de prevención proactiva.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Asegura el cumplimiento legal y técnico.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Aumenta la sostenibilidad y competitividad empresarial.
        p Estas medidas no solo son técnicas, sino también estratégicas, al consolidarse como una inversión clave para organizaciones comprometidas con la seguridad, la salud y la responsabilidad social.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Controles administrativos y procedimientos de trabajo seguro 
    
    p.mb-5 La seguridad en el entorno laboral es esencial para proteger la integridad física y mental de los trabajadores, así como para consolidar una cultura organizacional basada en la prevención de accidentes y enfermedades laborales. En este marco, los controles administrativos y los procedimientos de trabajo seguro, actúan como herramientas claves para gestionar y reducir los riesgos inherentes a las actividades laborales. A diferencia de los controles de ingeniería, estas medidas no actúan sobre el entorno físico, sino que regulan la forma en que las personas realizan sus tareas:

    TabsC.color-acento-botones.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Capacitación" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Capacitación
            p Formación planificada y contextualizada sobre SST. Incluye aspectos técnicos, legales, conductuales y de cultura preventiva. 
            p <b>Beneficios</b>: incrementa el conocimiento, promueve el autocuidado y mejora el desempeño en seguridad.

    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/20.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Permisos de trabajo" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Permisos de trabajo
            p Documentos autorizados que regulan actividades de alto riesgo (trabajos en altura, espacios confinados, intervención eléctrica, etc.). 
            p <b>Beneficios</b>: aseguran condiciones seguras antes de iniciar la tarea.

    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/21.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Rotación de personal" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Rotación de personal
            p Alternancia de tareas para evitar exposiciones prolongadas a riesgos físicos, ergonómicos o psicosociales. 
            p <b>Beneficios</b>: previene fatiga, lesiones musculoesqueléticas y estrés laboral.

          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/22.png', alt='', style="width: 100%;")
    
    h2.mb-5(data-aos="fade-left") Capacitación en Seguridad y Salud en el Trabajo

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/23.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La capacitación es un pilar estratégico dentro de los controles administrativos. Más allá de ser una obligación legal, se trata de una <b>inversión esencial</b> para garantizar ambientes seguros, saludables y eficientes. Para ser efectiva, debe ser:
    
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Sistemática</b>: con diagnósticos previos, planificación y seguimiento.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Contextualizada</b>: adaptada a los riesgos reales de cada área de trabajo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Actualizada</b>: considerando normativa vigente, tecnología, lecciones aprendidas.

    h2(data-aos="fade-left") Contenidos esenciales
    p.mb-5 En cuanto a los contenidos esenciales, los programas deben abordar tanto aspectos preventivos como reactivos, incluyendo:

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-2.order-lg-1
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 01
                p.text-center Identificación de peligros y evaluación de riesgos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/26.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 02
                p.text-center Medidas de control y buenas prácticas operativas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 03
                p.text-center Uso correcto de EPP.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/28.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 04
                p.text-center Ergonomía, señalización y cultura preventiva.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema6/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 05
                p.text-center Actuación en situaciones de emergencia.
    
          .col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/24.png', alt='')

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema6/30.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") La capacitación debe incorporar también un componente conductual, orientado a la transformación de la cultura organizacional. Esto incluye:
        
            .bg-color-13.p-4.mb-3(data-aos="fade-left")
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Fomento del reporte voluntario de actos y condiciones inseguras.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Participación en comités de seguridad.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Comunicación abierta sobre temas de seguridad.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Reconocimiento de buenas prácticas.

        h2(data-aos="fade-left") Evaluación de la eficacia de la formación
        p.mb-5 Para asegurar la efectividad del proceso formativo, es indispensable establecer mecanismos de evaluación, tales como:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-6.p-2(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema6/31.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 Pruebas de conocimiento.

          .col-lg-3.mb-3.mb-lg-0
            .bg-color-6.p-2(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema6/32.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 Simulacros y ejercicios prácticos.

          .col-lg-3.mb-3.mb-lg-0
            .bg-color-6.p-2(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema6/33.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 Auditorías internas y entrevistas.
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-6.p-2(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema6/34.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 04
                  p.mb-0 Encuestas de retroalimentación.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema6/35.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La medición del impacto debe vincularse con indicadores de desempeño en seguridad, como:
    
        .bg-color-13.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Tasa de incidentes.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Índice de siniestralidad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Observación de comportamientos seguros.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Percepción del clima organizacional.
    
    h2.mb-5(data-aos="fade-left") Impacto estratégico

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/36.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Una capacitación bien estructurada tiene múltiples beneficios estratégicos:
    
        .bg-color-10.p-5.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Reducción de costos por accidentes, incapacidades y sanciones.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mejora de la productividad y eficiencia operativa.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Disminución de la rotación de personal.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Fortalecimiento de la imagen institucional y reputación ética.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mayor competitividad frente a clientes y partes interesadas.
        p La capacitación en Seguridad y Salud en el Trabajo, no debe percibirse como una carga burocrática, sino como un proceso continuo y transformador que incide directamente en el bienestar de los trabajadores y en la sostenibilidad del negocio. Junto con otras medidas administrativas como los permisos de trabajo y la rotación de tareas, constituye un pilar esencial para construir entornos laborales seguros, resilientes y comprometidos con una verdadera cultura de prevención.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://zyght.com/blog/es/que-es-la-jerarquia-de-controles-criticos-y-como-aplicarlos/ " target="_blank" rel="noopener noreferrer") Zyght. (s.f.). ¿Qué es la Jerarquía de Controles Operacionales y cómo aplicarlos? 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://open.spotify.com/episode/5LbLWbRxPGeAqo1txBCHL2?si=5B8MpvpaQo2DtLMS7Pui1w" target="_blank" rel="noopener noreferrer") Spotify. (s.f.). 4. Más allá del Ruido: Optimización de Alarmas en Plantas Químicas con HAZOP [video].  

         

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema6',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Gestión de la higiene y la seguridad industrial',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Cuál es el objetivo principal de la higiene industrial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mejorar la productividad en las empresas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Controlar los riesgos ambientales que puedan afectar la salud de los trabajadores.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Controlar los riesgos ergonómicos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evaluar el desempeño en seguridad vial industrial.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué función cumple la seguridad industrial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evaluar los riesgos fisicos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Eliminar los riesgos ambientales.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Prevenir accidentes y enfermedades laborales.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Incrementar la competitividad empresarial.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes no es un factor de riesgo higiénico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Agentes biológicos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Agentes químicos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Agentes físicos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Comportamientos inseguros.',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué herramienta se utiliza para evaluar los riesgos laborales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Encuesta de clima organizacional.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Matriz de identificación de peligros y evaluación de riesgos.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Programa de inspecciones.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Programa de incentivos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué agente físico puede evaluarse en la higiene industrial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ruido.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Estrés laboral.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Violencia intrafamiliar.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Mal clima organizacional.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
