<template>
  <div id="section1">
    <div class="p12s1fondoFwhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            <span v-for="(item, index) in p12s1title" :key="index">
              <strong v-if="item.p12s1titleF">{{item.p12s1titleT}}</strong>
              <span v-else>{{item.p12s1titleT}}</span>
            </span>
          </h2>
          <br />
          <div role="tablist" style="max-width: 800px; margin: 0 auto;">
            <b-card no-body class="mb-1" v-for="(item, index) in p12s1list" :key="index">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle="'accordion-'+index" class="buttonTurqueza">
                  <div class="text-left">
                  <font-awesome-icon :icon="['fas', 'asterisk']" />
                  {{item.p12s1Preg}}
                  </div>
                </b-button>
              </b-card-header>
              <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <p class="text-justify" 
                    v-for="(item1, index1) in item.p12s1Resp" :key="index1"> {{item1}} </p>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <br />
          <a :href="p12s1Url">
            <h3>
              {{$t("p12s1title2")}}
            </h3>
          </a>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p12s1title": [
      {
        "p12s1titleF": true,
        "p12s1titleT": "Frequently asked questions about professional practices in companies"
      }
    ],
    "p12s1title2": "We have more frequently asked questions about practices here!",
    "p12s1list": [
      {
        "p12s1Preg":
          "What should I do to get an internship in companies?",
        "p12s1Resp": [
          "The first step is to get in touch with us through registration on our portal, by sending your CV by email or by calling us for a first explanatory contact."
          , "With your data and CV we can contact you and carry out an interview where we will explain in detail our way of working and the process will clarify your interests, concerns and the internship destination you have in mind."
        ]
      },
      {
        "p12s1Preg":
          "Does AICAD Business School only manage internships or job offers as well?",
        "p12s1Resp": [
          "Our team manages exclusively internship selection processes, not work."
        ]
      },
      {
        "p12s1Preg": "What do I need to do an internship?",
        "p12s1Resp": [
          "First, you must be a student or have recently obtained a university degree. Likewise, you must have an internship agreement or the approval of your university. In addition, you should acquire the documentation required by the legal regulations of each country in the case of doing an internship abroad."
        ]
      },
      {
        "p12s1Preg":
          "How long does it take AICAD Business School to help me find the practice I am looking for?",
        "p12s1Resp": [
          "The duration of the process cannot be determined exactly, since it depends on how long you will take to decide if you want to move forward in our process, how many interviews you will have to do, how long it takes the company to decide whether they approve or reject you and finally, of the period of time it takes to process your internship agreement and obtain all the signatures necessary for its validation."
          , "If you decide to move forward in the process and we can present companies of your interest, the time to receive an answer is generally one or two weeks. The internship agreement can take between one to four weeks, depending on the university."
        ]
      },
      {
        "p12s1Preg":
          "Why don’t internship offers contain the name of the companies that offer the internship? And how to know the name of the company?",
        "p12s1Resp": [
          "This strategy aims to ensure that we only present students who meet the profile we are looking for. In fact, in the list of internship offers in companies you will find the job and company description, tasks and requirements, but not the name of the company making the offer."
          , "If you get through the interviews and prove to have the needed profile, our team will let you know the name of the company. By then, you will have all the information you need to decide whether or not you are interested in submitting your application for the internship, or you prefer to terminate the process and consider other offers."
        ]
      },
      {
        "p12s1Preg": "Are the interviews that I must carry out face-to-face or on distance?",
        "p12s1Resp": [
          "Interviews can be in both modalities, but it depends on you, your geographic location and where you want to undergo the internship. The companies offering internships generally agree to have the  interviews by phone or Skype in case you are far away and cannot arrive."
        ]
      },
      {
        "p12s1Preg":
          "How much time do I have to decide whether or not to formally submit my candidacy for internship?",
        "p12s1Resp": [
          "After getting through the interview process, knowing the details of the offer, the general conditions and also the name of the company, we always recommend taking two to four days to think and decide whether or not you want to apply for the position. However, you are free to take the time you need to make a decision. The only risk is that another student might get the vacancy."
        ]
      },
      {
        "p12s1Preg": "What is my account?",
        "p12s1Resp": [
          "My Account is the online space on our platform where you can access once you have got through the first interview with our team. In this space you can receive information about the regulations, the process and the general conditions, which will facilitate the decision whether to start the process or terminate it."
        ]
      },
      {
        "p12s1Preg":
          "How do I get the username and password to enter the portal?",
        "p12s1Resp": [
          "The username and password with which you can access My Account are obtained only when you get through the first interview with our team. Only then will you receive an email with all your credentials necessary to access."
        ]
      },
      {
        "p12s1Preg":
          "Are all the services offered by AICAD Business School free of charge or do I have to pay something?",
        "p12s1Resp": [
          "Our services are paid, since we are a private consulting agency and we carry out selection processes in order to ensure professional internship for students in safe and viable conditions, with the help of a large team of professionals from different disciplines. All the offers that we publish have been written by our consultants, who are also in charge of guaranteeing a proper search of experienced companies."
        ]
      },
      {
        "p12s1Preg":
          "When and why should I pay for the services of AICAD Business School?",
        "p12s1Resp": [
          "You will only have to pay the fees for the procedures if the company you have chosen approves your candidacy. If they reject you, you will not have to pay anything. In the case that they accept you but you change your mind, you will have to pay a cancellation fee, since we will have invested time and effort to manage your process."
        ]
      },
      {
        "p12s1Preg":
          "When will I need to pay the fees if they approve my candidacy?",
        "p12s1Resp": [
          "Once we inform you that your application has been approved, you will have three business days to confirm your application and thus reserve your position for an internship."
        ]
      },
      {
        "p12s1Preg":
          "Does accepting the General Conditions of the process mean that I have to pay?",
        "p12s1Resp": [
          "No, accepting the General Conditions is simply to show that you agree with our entire process, regulations and fees, but you are not obligated to pay. As we mentioned before, it will depend on your decision to submit your application voluntarily and then be approved by the company. You only pay the fee if you get the internship offer from the company."
        ]
      },
      {
        "p12s1Preg":
          "Can I terminate the process at AICAD Business School and cancel my application at any time?",
        "p12s1Resp": [
          "Yes, you can do it at any time. If you decide to terminate the process before deciding to formally submit your application to a company you will not have to make any payment. You will only have to pay a cancellation fee if the company has approved your application and you decide toto terminate the process."
        ]
      },
      {
        "p12s1Preg":
          "Can I resume the contact and start a new process again after having terminated the previous process with AICAD Business School?",
        "p12s1Resp": [
          "Yes of course. You can resume the process and contact us whenever you want, except in cases where you have not complied with the General Conditions of the previous process."
        ]
      }
    ]
  },
  "es":{
    "p12s1title": [
      {
        "p12s1titleF": true,
        "p12s1titleT": "Preguntas frecuentes sobre las prácticas profesionales en empresas"
      }
    ],
    "p12s1title2": "¡Tenemos más preguntas frecuentes sobre prácticas aquí!",
    "p12s1list": [
      {
        "p12s1Preg":
          "¿Qué debo hacer para conseguir una práctica en empresas?",
        "p12s1Resp": [
          "El primer paso es ponerte en contacto con nosotros a través del registro en nuestro portal, enviando tu CV por correo electrónico o llamarnos por teléfono para un primer contacto explicativo."
          , "Con tus datos y CV podremos contactarte y realizar una entrevista en donde te explicaremos y detallaremos nuestra forma de trabajar y el proceso, a la vez que iremos conociendo tus intereses, inquietudes y el destino de práctica que tienes en mente."
        ]
      },
      {
        "p12s1Preg":
          "¿AICAD Business School únicamente gestiona ofertas de práctica o también ofertas de trabajo?",
        "p12s1Resp": [
          "Nuestro equipo se dedica exclusivamente a gestionar procesos de selección de práctica, no de trabajo."
        ]
      },
      {
        "p12s1Preg": "¿Qué necesito para hacer una práctica?",
        "p12s1Resp": [
          "En primer lugar, debes ser estudiante o haber obtenido el título universitario recientemente. Igualmente, debes disponer de un convenio de prácticas o de la aprobación de tu universidad. Además de la documentación que exige la normativa legal de cada país en el caso de hacer una práctica en el extranjero."
        ]
      },
      {
        "p12s1Preg":
          "¿Cuánto se tarda AICAD Business School en ayudarme a encontrar la práctica que busco?",
        "p12s1Resp": [
          "No se puede determinar con exactitud la duración del proceso, ya que depende de cuánto tiempo tomarás para decidir si deseas avanzar en nuestro proceso, de cuántas entrevistas deberás hacer, de cuánto tiempo toma la empresa para decidir si te aprueban o rechazan y por último, del lapso de tiempo que tome tramitar tu convenio de práctica y conseguir todas las firmas necesarias para su validez."
          , "Si decides avanzar en el proceso y podemos presentarte empresas de tu interés, el tiempo para recibir una respuesta es generalmente de una o dos semanas. El trámite del convenio de prácticas puede tomar entre una y cuatro semanas, dependiendo de la universidad."
        ]
      },
      {
        "p12s1Preg":
          "¿Por qué las ofertas de prácticas no tienen el nombre de las empresas que las oferta? ¿Y cómo saberlo?",
        "p12s1Resp": [
          "Esta estrategia tiene como objetivo asegurarnos de presentar únicamente a estudiantes que cumplan con los el perfil que estamos buscando. En efecto, en el listado de ofertas de prácticas en empresas encontrarás la descripción del puesto y de la empresa, las tareas y los requisitos, más no el nombre de la empresa que realiza la oferta. Esta estrategia tiene como objetivo asegurarnos de presentar únicamente a estudiantes que cumplan con los el perfil que estamos buscando. En efecto, en el listado de ofertas de prácticas en empresas encontrarás la descripción del puesto y de la empresa, las tareas y los requisitos, más no el nombre de la empresa que realiza la oferta."
          , "Si apruebas las entrevistas y demuestras tener el perfil que se busca, nuestro equipo te hará saber de qué empresa se trata. Para ese entonces contarás con toda la información que necesitas para decidir si te interesa o no presentar tu candidatura al puesto de prácticas, abandonar el proceso o evaluar otras ofertas."
        ]
      },
      {
        "p12s1Preg": "¿Las entrevistas que debo realizar son presenciales o a distancia?",
        "p12s1Resp": [
          "Las entrevistas pueden ser en ambas modalidades, pero ello depende de ti, de tu ubicación geográfica y en dónde desees realizar la práctica en empresas. Las empresas que ofrecen las prácticas están de acuerdo con hacer entrevistas por teléfono o por Skype en caso de que te encuentres lejos y no puedas movilizarte."
        ]
      },
      {
        "p12s1Preg":
          "¿Cuánto tiempo tengo para decidir si deseo o no presentar mi candidatura formalmente a la práctica?",
        "p12s1Resp": [
          "Luego de haber pasado por el proceso de entrevistas con nosotros, de saber los detalles de la oferta y de las condiciones generales, además del nombre de la empresa, aconsejamos siempre tomarse de dos a cuatro días para pensar y decidir si deseas o no presentarte ante la empresa. Sin embargo, eres libre de tomar el tiempo que consideres pertinente, el único riesgo es que otro estudiante obtenga la vacante."
        ]
      },
      {
        "p12s1Preg": "¿Qué es My Account?",
        "p12s1Resp": [
          "My Account es el espacio en línea de nuestra plataforma al que podrás acceder una vez que hayas aprobado la primera entrevista con nuestro equipo. En este espacio podrás recibir información sobre la normativa, el proceso y las condiciones generales, lo que les facilitará la decisión de comenzar a tramitar con nosotros o si prefieren abandonar."
        ]
      },
      {
        "p12s1Preg":
          "¿Cómo obtengo el usuario y la contraseña para entrar en el portal?",
        "p12s1Resp": [
          "El usuario y contraseña con los que podrás acceder a My Account se obtienen únicamente cuando apruebas la primera entrevista con nuestro equipo. Solo así recibirás un correo electrónico con todos los detalles para acceder."
        ]
      },
      {
        "p12s1Preg":
          "¿Todos los servicios que ofrece AICAD Business School sin gratis o debo pagar algo?",
        "p12s1Resp": [
          "Nuestros servicios son de pago, ya que somos una consultora privada de recursos humanos y realizamos procesos de selección entre estudiantes y empresas con el fin de hacer una práctica profesional en condiciones seguras y viables, con la ayuda de un gran equipo de profesionales de distintas disciplinas del conocimiento. Todas las ofertas que hemos publicado han sido escritas por nuestros consultores, quienes también se encargan de garantizar la búsqueda de empresas de respaldo y con trayectoria."
        ]
      },
      {
        "p12s1Preg":
          "¿Cuándo y por qué debo pagar los servicios de AICAD Business School?",
        "p12s1Resp": [
          "Solo deberás pagar las tarifas por los trámites si la empresa que has elegido te aprueba. Si te rechazan, no deberás pagar nada. En el caso que te acepten pero cambias de opinión, tendrás que pagar una tasa de cancelación, ya que habremos invertido tiempo y esfuerzo para gestionar tu proceso."
        ]
      },
      {
        "p12s1Preg":
          "¿Cuánto tiempo tendría para pagar las tasas si me aprueban?",
        "p12s1Resp": [
          "Dispondrás de tres días laborales para cancelar y así reservar tu puesto en la práctica, una vez te informemos que tu candidatura ha sido aprobada."
        ]
      },
      {
        "p12s1Preg":
          "¿Aceptar las Condiciones generales del proceso significa que tengo que pagar?",
        "p12s1Resp": [
          "No, el aceptar las Condiciones generales es simplemente demostrar que estás de acuerdo con todo nuestro proceso, la normativa y las tasas, pero no estás obligado a pagar. Como te mencionamos anteriormente, va a depender de tu decisión de presentar tu candidatura voluntariamente y luego ser aprobado por la empresa. Solo pagas la tasa si consigues la práctica en empresas."
        ]
      },
      {
        "p12s1Preg":
          "¿Se puede abandonar el proceso de AICAD Business School y cancelar mi candidatura cuando quiera?",
        "p12s1Resp": [
          "Sí, lo puedes hacer en cualquier momento. Si decides abandonar el proceso antes de decidir presentar tu candidatura formalmente a una empresa no tendrás que cancelar nada. Solo deberás pagar una tasa de cancelar una tasa de cancelación en el caso de que la empresa haya aprobado tu candidatura y decidas abandonar."
        ]
      },
      {
        "p12s1Preg":
          "¿Puedo retomar contacto y volver a comenzar un nuevo proceso después de haber abandonado el proceso anterior con AICAD Business School?",
        "p12s1Resp": [
          "Sí, por supuesto. Puedes retomar el proceso y contactarnos siempre que lo desees, excepto en los casos en donde no hayas cumplidos con las Condiciones generales del proceso anterior."
        ]
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p12s1Url: "https://www.aicad.es/preguntas-frecuentes-practicas-curriculares/"
    };
  },
  computed: {
    p12s1title() {
      return this.$t("p12s1title");
    },
    p12s1list() {
      return this.$t("p12s1list");
    }
  }
};
</script>
