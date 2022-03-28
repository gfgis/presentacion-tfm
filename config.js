var config = {
  style: "mapbox://styles/giuls0917/cl06xtvwe005514rormyr8smk",
  accessToken:
    "pk.eyJ1IjoiZ2l1bHMwOTE3IiwiYSI6ImNranlqM2RpYzBzMTcybm53NDcyMHhleWwifQ.qqOs_Y1d36x-WQYI_sww5g",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "dark",
  use3dTerrain: true,
  title: "Sostenibilidad Urbana de la ciudad de Turín",
  subtitle:
    "Una aproximación basada en indicadores para medias y grandes ciudades",
  byline: "Proyecto Final de Máster - Giulia Ferrari",
  footer: "",
  chapters: [
    {
      id: "Ch1a_objetivos",
      alignment: "right",
      title: "Introducción",
      description:
        "Este informe tiene como objetivo evaluar el escenario actual de la ciudad de Turín a escala urbana e intraurbana en términos de su sostenibilidad. Para tal propósito este estudio se apoya en una serie de indicadores creados por la 'Agencia d’Ecologìa Urbana de Barcelona' en el año 2010.",
      image: "",
      location: {
        center: [7.72275, 45.12798],
        zoom: 8.17,
        pitch: 50.74,
        bearing: 27.98,
      },
      onChapterEnter: [
        {
          layer: "area_to_linea-ahr8es",
          opacity: 1,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "area_to_linea-ahr8es",
          opacity: 0.75,
        },
      ],
    },
    {
      id: "Ch1b_Area_Estudio",
      alignment: "right",
      title: " ",
      description:
        "La ciudad tiene una extención 130 km2, y viene separada en tres grandes partes por sus dos ríos principales:",
      image: "",
      location: {
        center: [7.70223, 45.06002],
        zoom: 10.84,
        pitch: 46.03,
        bearing: 27.98,
        speed: 0.5,
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: " ",
      onChapterEnter: [
        {
          layer: "area_to_linea-ahr8es",
          opacity: 0.75,
        },
      ],
      onChapterExit: [
        {
          layer: "circoscrizioni-63kg0n",
          opacity: 0,
        },
        {
          layer: "area_to_linea-ahr8es",
          opacity: 0.5,
        },
        {
          layer: "vpeatones-barrios-dyfzyw",
          opacity: 0,
        },
        {
          layer: "barrios-lineas-dhu9vw",
          opacity: 0,
        },
        {
          layer: "pserv-basics-9gyovn",
          opacity: 0,
        },
        {
          layer: "palazzi-9xohjo",
          opacity: 0.7,
        },
        {
          layer: "PServicios",
          opacity: 0,
        },
      ],
    },
    {
      id: "Ch1c_Dora",
      alignment: "right",
      hidden: false,
      title: " ",
      image: "",
      description:
        "La Dora, que atraviesa la ciudad en dirección este - oeste;",
      location: {
        center: [7.64019, 45.08769],
        zoom: 14.5,
        pitch: 65.0,
        bearing: 64.8,
        bearing: 27.98,
        speed: 0.3,
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: " ",
      onChapterEnter: [
        {
          layer: "circoscrizioni-63kg0n",
          opacity: 0,
        },
        {
          layer: "PServicios",
          opacity: 0,
        },
        {
          layer: "pserv-basics-9gyovn",
          opacity: 0,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "carreggiata-9oh3yv",
          opacity: 0,
        },
        {
          layer: "barrios-lineas-dhu9vw",
          opacity: 0,
        },
        {
          layer: "area_to_linea-ahr8es",
          opacity: 0.5,
          duration: 5000,
        },
        {
          layer: "palazzi-9xohjo",
          opacity: 0.7,
        },
      ],
      onChapterExit: [
        {
          layer: "pserv-basics-9gyovn",
          opacity: 0,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "carreggiata-9oh3yv",
          opacity: 0,
        },
        {
          layer: "area_to_linea-ahr8es",
          opacity: 0.5,
        },
        {
          layer: "palazzi-9xohjo",
          opacity: 0.7,
        },
        {
          layer: "barrios-lineas-dhu9vw",
          opacity: 0,
        },
      ],
    },
    {
      id: "Ch1d_Po",
      alignment: "left",
      title: "",
      image: "",
      description: "y el Po, que fluye en direcció norte - sur.",
      location: {
        center: [7.67292, 45.04004],
        zoom: 13.67,
        pitch: 67.65,
        bearing: 49.59,
        speed: 0.3,
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      onChapterEnter: [
        {
          layer: "area_to_linea-ahr8es",
          opacity: 0.5,
        },
        {
          layer: "palazzi-9xohjo",
          opacity: 0.7,
        },
      ],
      onChapterExit: [
        {
          layer: "area_to_linea-ahr8es",
          opacity: 0.7,
        },
        {
          layer: "palazzi-9xohjo",
          opacity: 0.5,
        },
      ],
    },
    {
      id: "Ch1e_Morfo",
      alignment: "right",
      title: "",
      image: "",
      description:
        "La ciudad es prevalentemente plana, con excepción de la porción de la colina a Este de la ciudad o a la derecha del río Po.",
      location: {
        center: [7.67607, 45.02929],
        zoom: 13.94,
        pitch: 84.0,
        bearing: 74.4,
        speed: 0.3,
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      onChapterEnter: [
        {
          layer: "palazzi-9xohjo",
          opacity: 0.7,
        },
      ],
      onChapterExit: [
        {
          layer: "palazzi-9xohjo",
          opacity: 0,
        },
      ],
    },
    {
      id: "Ch1f_datos_esenc",
      alignment: "right",
      title: " ",
      image: " ",
      description: "Turín está subdividida en 8 macro zonas administrativas,",
      location: {
        center: [7.6655, 45.0422],
        zoom: 12.1,
        pitch: 47.52,
        bearing: 29.56,
      },
      onChapterEnter: [
        {
          layer: "circoscrizioni-63kg0n",
          opacity: 1,
        },
        {
          layer: "barrios-lineas-dhu9vw",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "barrios-lineas-dhu9vw",
          opacity: 1,
        },
        {
          layer: "circoscrizioni-63kg0n",
          opacity: 0,
        },
      ],
    },
    {
      id: "Ch1g_datos_esenc",
      alignment: "right",
      title: " ",
      image: " ",
      description:
        "Y 23 barrios. En términos de población, Turín tiene una perdida de 20.000 habitantes entre el periodo de 2011-2021, alcanzando en septiembre de este ultimo año 852.223 habitantes.",
      location: {
        center: [7.6655, 45.0422],
        zoom: 11.84,
        pitch: 47.52,
        bearing: 29.56,
      },
      onChapterEnter: [
        {
          layer: "barrios-lineas-dhu9vw",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "pserv-basics-9gyovn",
          opacity: 0,
        },
        {
          layer: "barrios-lineas-dhu9vw",
          opacity: 0,
        },
        {
          layer: "palazzi-9xohjo",
          opacity: 1,
        },
      ],
    },
    {
      id: "Ch1_fin",
      alignment: "right",
      title: "Los indicadores:",
      image: "./assets/LISTADO_INDI.png",
      description:
        "Se utiliza un total de diez indicadores repartidos en seis ambitos o ejes de sostenibilidad:",
      location: {
        center: [7.67894, 45.0545],
        zoom: 14.35,
        pitch: 82.5,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      onChapterEnter: [
        {
          layer: "pserv-basics-9gyovn",
          opacity: 0,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "carreggiata-9oh3yv",
          opacity: 0,
        },
        {
          layer: "palazzi-9xohjo",
          opacity: 1,
        },
        {
          layer: "area_to_linea-ahr8es",
          opacity: 0.5,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "carreggiata-9oh3yv",
          opacity: 0,
        },
        {
          layer: "area_to_linea-ahr8es",
          opacity: 0.5,
        },
      ],
    },
    {
      id: "Ch2_a",
      alignment: "right",
      title: "Reparto del viario público",
      image: " ",
      description:
        " El objetivo principal de este indicador es identificar donde y si se respeta la función mixta del viario público urbano mediante una extensión adecuada del eje peatonal, en un espacio que tradicionalmente viene utilizado/planeado predominantemente por/para el vehículo privado.",
      location: {
        center: [7.67555, 45.05981],
        zoom: 14.2,
        pitch: 40.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      onChapterEnter: [
        {
          layer: "carreggiata-9oh3yv",
          opacity: 1,
        },
        {
          layer: "palazzi-9xohjo",
          opacity: 0.5,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "carreggiata-9oh3yv",
          opacity: 0,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0.7,
        },
      ],
    },
    {
      id: "Ch2_b",
      alignment: "right",
      title: " ",
      image: " ",
      description:
        "Vpeatones% = superficie del viario peatonal / superficie del viario total.",
      location: {
        center: [7.67555, 45.05981],
        zoom: 14.05,
        pitch: 40.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: "carreggiata-9oh3yv",
          opacity: 0,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 1,
        },
        {
          layer: "palazzi-9xohjo",
          opacity: 0.3,
        },
      ],
      onChapterExit: [
        {
          layer: "vpeatones-bto0ry",
          opacity: 1,
        },
        {
          layer: "carreggiata-9oh3yv",
          opacity: 0,
        },
      ],
    },
    {
      id: "Ch2_c",
      alignment: "right",
      title:
        "Vpeatones% = superficie del viario peatonal / superficie del viario total",
      image: " ",
      description:
        "La red del viario viene segmentada por una malla hexagonal de 0.5 hectarias para obtener datos a un mayor nivel de detalle. En verde oscuro es posible apreciar zonas con una proporción 'adecuada' de viario peatonal, mientras que en rojo se observan aquellas partes del viario donde hay carencia de espacios peatonales.",
      location: {
        center: [7.67061, 45.05955],
        zoom: 15.6,
        pitch: 59.5,
        bearing: -61.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      onChapterEnter: [
        {
          layer: "carreggiata-9oh3yv",
          opacity: 0,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "palazzi-9xohjo",
          opacity: 0.3,
        },
      ],
      onChapterExit: [
        {
          layer: "vpeatones-bto0ry",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "area_to_linea-ahr8es",
          opacity: 0.5,
        },
        {
          layer: "vpeatones-barrios-dyfzyw",
          opacity: 1,
        },
      ],
    },
    {
      id: "Ch2_d",
      alignment: "right",
      title: "Vpeatones por barrios",
      image: " ",
      description:
        "Ningún barrio cumple con la superficie minima esperada de peatonal, que debería ser como mínimo un 60%, sino que el mayor resultado obtenido corresponde a 55% de superficie peatonal.",
      location: {
        center: [7.70343, 45.04905],
        zoom: 11.4,
        pitch: 0.0,
        bearing: 22.83,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: "vpeatones-barrios-dyfzyw",
          opacity: 1,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "vpeatones-barrios-dyfzyw",
          opacity: 1,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
          duration: 5000,
        },
      ],
    },
    {
      id: "Ch3_a",
      alignment: "right",
      title: "Proximidad de la población a los servicios basicos",
      image: "",
      description:
        "El objetivo de este indicador es asegurar un mínimo de servicios básicos de proximidad para la población, en términos de equipamientos públicos, redes de transporte público, comercios de proximidad y espacios verdes.",
      location: {
        center: [7.67066, 45.04649],
        zoom: 13.27,
        pitch: 63.0,
        bearing: -31.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: "vpeatones-barrios-dyfzyw",
          opacity: 0,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
        },
        {
          layer: "pserv-basics-9gyovn",
          opacity: 0.7,
        },
      ],
      onChapterExit: [
        {
          layer: "vpeatones-barrios-dyfzyw",
          opacity: 0,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
        },
        {
          layer: "pserv-basics-9gyovn",
          opacity: 0.7,
        },
      ],
    },
    {
      id: "Ch3_b",
      alignment: "right",
      title: "Secciones censales con acceso al numero mínimo de servicios",
      image: "",
      description:
        "El objetivo de este indicador es asegurar un mínimo de servicios básicos de proximidad para la población, en términos de equipamientos públicos, redes de transporte público, comercios de proximidad y espacios verdes.",
      location: {
        center: [7.67066, 45.04649],
        zoom: 13.27,
        pitch: 63.0,
        bearing: -31.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: "vpeatones-barrios-dyfzyw",
          opacity: 0,
        },
        {
          layer: "pserv-basics-9gyovn",
          opacity: 0.7,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
          duration: 5000,
        },
      ],
      onChapterExit: [
        {
          layer: "vpeatones-barrios-dyfzyw",
          opacity: 0,
        },
        {
          layer: "pserv-basics-9gyovn",
          opacity: 0.7,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
          duration: 5000,
        },
        {
          layer: "barrios-lineas-dhu9vw",
          opacity: 0,
        },
        {
          layer: "circoscrizioni-63kg0n",
          opacity: 0,
        },
      ],
    },
    {
      id: "Ch3_c",
      alignment: "right",
      title: "Barrios",
      image: "",
      description: " ",
      location: {
        center: [7.68382, 45.0576],
        zoom: 11.47,
        pitch: 11.5,
        bearing: 24.71,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [
        {
          layer: "circoscrizioni-63kg0n",
          opacity: 0,
        },
        {
          layer: "barrios-lineas-dhu9vw",
          opacity: 0,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
        },
        {
          layer: "vpeatones-barrios-dyfzyw",
          opacity: 0,
        },
        {
          layer: "pserv-basics-9gyovn",
          opacity: 0,
        },
        {
          layer: "PServicios",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "vpeatones-barrios-dyfzyw",
          opacity: 0,
        },
        {
          layer: "pserv-basics-9gyovn",
          opacity: 0,
        },
        {
          layer: "vpeatones-bto0ry",
          opacity: 0,
        },
        {
          layer: "PServicios",
          opacity: 1,
        },
      ],
    },
  ],
};
