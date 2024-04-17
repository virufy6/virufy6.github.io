import Card1 from '~/assets/static/images/aboutUs/card1.png'
import Card2 from '~/assets/static/images/aboutUs/card2.png'
import Card3 from '~/assets/static/images/aboutUs/card3.png'
import Card4 from '~/assets/static/images/aboutUs/card4.png'
import Card5 from '~/assets/static/images/aboutUs/card5.png'
import Card7 from '~/assets/static/images/aboutUs/card7.png'
export const faq = {
  sectionSearchQuestion: {
    title: '¿Cómo podemos ayudar?',
    descriptionFirstSearch:
      'Introduzca una palabra clave o un tema en el cuadro de búsqueda',
    secondDescriptionSearch:
      'o elija una categoría para encontrar rápidamente la ayuda que necesita',
  },
  sectionCardsQuestionsTopics: {
    title: 'TEMAS FRECUENTES',
    cards: [
      {
        route: Card1,
        name: '',
        text: 'Aplicación Virufy',
      },
      {
        route: Card2,
        name: '',
        text: 'Acerca de Virufy',
      },
      {
        route: Card3,
        name: '',
        text: 'Acerca de la IA',
      },
      {
        route: Card4,
        name: '',
        text: 'Finanzas',
      },
      {
        route: Card5,
        name: '',
        text: 'Privacidad',
      },
      {
        route: Card7,
        name: '',
        text: 'Otros',
      },
    ],
  },
  frequentQuestions: [
    {
      id: 1,
      category: 'Aplicación Virufy',
      faqs: [
        {
          id: 10,
          title:
            '¿Cuándo y cómo dará la aplicación los resultados de la predicción COVID-19?',
          text: 'Actualmente, nuestra aplicación solo sirve para recopilar datos. No podemos lanzar una aplicación de predicción de COVID-19 sin la aprobación de los departamentos de salud pública de cada país y estudios clínicos para validar la tecnología de IA en las condiciones locales. Este proceso puede llevar algunas semanas o meses dependiendo de la velocidad del socio gubernamental. Virufy agradece la colaboración de las autoridades sanitarias y los hospitales para poner la tecnología a disposición de la población de forma gratuita y optimizar el uso de las costosas pruebas PCR sólo cuando sea necesario.',
        },
        {
          id: 11,
          title:
            '¿Dónde puedo descargar la aplicación? Estará disponible para iOS y Android?',
          text: 'La aplicación estará disponible para su descarga en https://virufy.org/app, ya que en algunos países necesitamos la aprobación gubernamental o médica para poner nuestra aplicación en las tiendas de aplicaciones oficiales. La aplicación puede conectarse a y desde un smartphone. Por lo tanto, es compatible con cualquier sistema operativo, incluidos iOS o Android.',
        },
      ],
    },
    {
      id: 2,
      category: 'Acerca de Virufy',
      faqs: [
        {
          id: 20,
          title: '¿Cómo se creó esta iniciativa?',
          text: 'Cuando estalló la pandemia, el fundador de Virufy, Amil, sabía que los teléfonos inteligentes eran omnipresentes y que el COVID afectaba a la nariz, la garganta y los pulmones. Su hipótesis era que los sonidos de la respiración y la tos podían analizarse con aprendizaje automático para detectar patrones de COVID. Deseoso de lograr un impacto positivo, orquestó un estudio clínico con 362 pacientes en un prestigioso hospital universitario. El equipo original de Virufy, que empezó con estudiantes graduados en IA de Stanford, se amplió a voluntarios de universidades de todo el mundo. Como embajador de One Young World Japan que ha viajado a más de una docena de países, Amil comprende la perspectiva global y cómo una solución basada en un smartphone puede ser utilizada por personas de todo el mundo.',
        },
        {
          id: 21,
          title: '¿Qué hará su organización?',
          text: 'El objetivo de Virufy es crear el mayor conjunto de datos de sonidos de tos ferina del mundo generando un movimiento en el que millones de personas aporten colectivamente sus datos para luchar contra nuestro enemigo común, la tos ferina. Como empresa sin ánimo de lucro 501(c)(3), libre de trámites burocráticos institucionales y con un equipo diverso en 20 países, estamos bien posicionados para hacerlo realidad. Una vez aprobadas por las autoridades sanitarias locales, las aplicaciones para teléfonos inteligentes que permiten realizar pruebas rápidas y gratuitas del COVID se lanzarán en los países de renta baja. Estas aplicaciones permitirán realizar pruebas anónimas a gran escala para frenar la propagación del virus. Esperamos unir a personas de todo el mundo en nuestro esfuerzo por detener el COVID y crear un nuevo paradigma de colaboración mundial. Queremos crear un futuro en el que la propagación comunitaria de enfermedades infecciosas se reduzca en gran medida, ya que la población mundial puede detectar sus enfermedades en una fase temprana gracias a las aplicaciones para teléfonos inteligentes.',
        },
      ],
    },
    {
      id: 3,
      category: 'Acerca de la IA',
      faqs: [
        {
          id: 30,
          title: '¿Por qué se distingue la tos COVID-19?',
          text: 'Al igual que otras enfermedades respiratorias, COVID-19 daña la garganta y los pulmones, creando diferencias detectables en los patrones de tos. Por consiguiente, los sonidos de la tos pueden analizarse para detectar la COVID-19. En todo el Planeta, esta idea está siendo investigada activamente por varias instituciones de prestigio, entre ellas Carnegie Mellon (CMU), el MIT y Cambridge. Por ejemplo, la investigación realizada por la Universidad de Cambridge demostró que un simple clasificador binario de aprendizaje automático es capaz de clasificar a los pacientes positivos para COVID-19 a través de los sonidos de la respiración y la tos con gran precisión. Del mismo modo, los investigadores de la CMU identificaron 18 características de la voz que distinguen a los pacientes COVID-19 positivos y entrenaron un modelo académico para detectar COVID-19 con gran precisión.',
        },
        {
          id: 31,
          title: '¿Cómo detectará COVID-19 el algoritmo de IA de Virufy?',
          text: 'Basándose en investigaciones anteriores, Virufy está desarrollando un algoritmo de IA que puede utilizarse para predecir con exactitud una infección por COVID-19 en cuestión de minutos a partir de grabaciones de sonidos de tos. Sin embargo, a diferencia de las investigaciones anteriores sobre la tos por COVID-19 que se centraban en la población estadounidense, Virufy pretende recopilar datos de múltiples lugares de todo el mundo. Como iniciativa dirigida por estudiantes con voluntarios de varios países, Virufy está desarrollando un modelo de diagnóstico de COVID-19 con una mayor inclusión racial y espacial a través de datos que incluyen una gama de etnias y diferencias fonológicas específicas de la comunidad.',
        },
      ],
    },
  ],
}
