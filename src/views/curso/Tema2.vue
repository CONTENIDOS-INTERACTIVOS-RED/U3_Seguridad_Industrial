<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Permisos de trabajo seguro'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los permisos de trabajo son una herramienta administrativa esencial dentro del sistema de gestión de seguridad y salud en el trabajo, especialmente en entornos industriales y operativos, donde se desarrollan actividades críticas. Se definen como documentos formales y obligatorios que autorizan la realización de tareas específicas que conllevan riesgos significativos para la seguridad de los trabajadores, el entorno o la operación misma.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')


    h2 Tipos de permisos de trabajo

    p(data-aos="fade-left").mb-4 Existen distintos tipos de permisos, clasificados, según la naturaleza del riesgo o del entorno operativo. A continuación se presentan los más comunes:

    .bg-full-width.bg-color-7
      .px-4.px-md-5.py-4


        .row.justify-content-center.mb-0.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/2.png', alt='')
          .col-lg-8
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/3.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Permiso de trabajo en espacios confinados
                p.text-center Autoriza el ingreso a las áreas con ventilación limitada y riesgos de asfixia, atrapamiento o tóxicos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/4.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Permiso para trabajos en caliente
                p.text-center Aplica a tareas con fuentes de ignición como soldadura, corte o uso de llama abierta.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Permiso para trabajos eléctricos
                p.text-center Se utiliza en intervenciones sobre equipos eléctricos o instalaciones energizadas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Permiso de trabajo en altura
                p.text-center Necesario para labores que se ejecutan a más de 1.80 m de altura.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Permiso para manipulación de sustancias químicas peligrosas
                p.text-center Requiere control estricto por el riesgo de exposición, derrames o reacciones

    

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Cada tipo de permiso requiere una evaluación especializada y un control riguroso, porque las actividades implicadas suelen presentar peligros específicos que, si no se gestionan adecuadamente, pueden derivar en accidentes graves o fatales.


    h2 Proceso de autorización

    .row.mb-4
      .col-lg-8
        p(data-aos="fade-left").mb-4 El proceso de emisión de un permiso de trabajo, implica pasos sistemáticos y coordinados:
    
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 1. Identificación clara de la actividad a realizar.
          p.mb-0 2. Evaluación de riesgos asociados.
          p.mb-0 3. Definición de medidas de control y prevención.
          p.mb-0 4. Verificación de condiciones previas (desactivación de equipos, señalización, limpieza del área).
          p.mb-0 5. Asignación de responsables y supervisores.
          p.mb-0 6. Firma de autorización por los individuos competentes.
          p.mb-0 7. Cierre y verificación del permiso al finalizar la tarea.

        p(data-aos="fade-left") Este proceso asegura que se cumplan todos los requisitos, antes de iniciar la actividad, garantizando un enfoque estructurado y seguro.

    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")

    .bg-full-width.bg-color-7
      .px-4.px-md-5.py-4

        h2 Función cultural y organizacional

        .row.mb-5
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left").mb-4 Los permisos de trabajo no solo previenen riesgos físicos, también fomentan una cultura de planificación y responsabilidad, promoviendo una actitud proactiva frente a los peligros potenciales. Además:
        
            .bg-color-9.p-4(data-aos="fade-left").mb-4
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Facilitan la trazabilidad de acciones y responsabilidades.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Permiten una rendición de cuentas efectiva.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Resultan fundamentales para investigaciones posteriores y procesos de mejora continua.

            p(data-aos="fade-left") Este proceso asegura que se cumplan todos los requisitos, antes de iniciar la actividad, garantizando un enfoque estructurado y seguro.

        h2 Integración con otros sistemas

        p.mb-4 Un aspecto clave es su integración con otros sistemas de control, como:

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/11.svg", style="max-width: 80px").mx-auto
                .col-lg
                  p.mb-0 Inspecciones preoperacionales.
        
          .col-lg-4
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/12.svg", style="max-width: 80px").mx-auto
                .col-lg
                  p.mb-0 Análisis de Trabajo Seguro (ATS).

          .col-lg-4
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/13.svg", style="max-width: 80px").mx-auto
                .col-lg
                  p.mb-0 #[em Checklists] o listas de verificación.
        
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/14.svg", style="max-width: 80px").mx-auto
                .col-lg
                  p.mb-0 Sistemas de bloqueo y etiquetado LOTO. 
        
          .col-lg-4
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/15.svg", style="max-width: 80px").mx-auto
                .col-lg
                  p.mb-0 Gestión de cambios.

          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/16.svg", data-aos="zoom-in", style="max-width: 400px").mx-auto


        p.mb-4 Esta integración permite una cobertura integral de los factores de riesgo, evitando que queden aspectos críticos sin evaluar.

        h4 Uso de tecnología
    
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") La digitalización ha modernizado la gestión de permisos, aportando beneficios como:
    
        .bg-color-9.p-4(data-aos="fade-left").mb-4
          ul.lista-ul--color.color-dark.mb-4
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Mayor trazabilidad.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Reducción de errores humanos.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Acceso remoto a permisos y documentos.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Supervisión en tiempo real mediante plataformas en la nube y aplicaciones móviles.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Capacitación continua del personal.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Notificaciones automáticas y archivos de evidencia digital.

        p(data-aos="fade-left") Estas herramientas refuerzan la cultura de seguridad, haciendo más efectiva la comunicación y el cumplimiento normativo.


          
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
    
        
              
    
        
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.sepresst.com.mx/2019/09/28/jerarquia-de-controles-de-riesgos/" target="_blank" rel="noopener noreferrer") Joel, H. (2019). Jerarquía de Controles de Riesgos. Servicios Preventivos de Seguridad y Salud en el Trabajo. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=zGg3ysmjqnk" target="_blank" rel="noopener noreferrer") Inversiones Grupo Didásko. (2020). ART | Análisis de Riesgo de la tarea | Formaciones SISO [video]. YouTube.

         

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

    

</template>
