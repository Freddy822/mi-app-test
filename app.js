// --- Datos ---
const allQuestions = [
       {
    id: 1,
    question: "¿Qué lesión no está comúnmente asociada a la infección por VIH?",
    options: { a: "Linfoma de Hodgkin", b: "Linfoma no Hodgkin", c: "Candidiasis pseudomembranosa", d: "PUNA" },
    correct: "a",
    free: true
  },
  {
    id: 2,
    question: "¿Qué lesiones podremos ver en infecciones por VIH y en otras entidades con depresión del sistema inmune?",
    options: { a: "Infección por herpes Zoster", b: "Lesiones verrucosas producidas por el virus del papiloma humano", c: "Estomatitis necrotizante", d: "Todas las anteriores" },
    correct: "d",
    free: true
  },
  {
    id: 3,
    question: "¿Qué es un itinerario practicable?",
    options: { a: "Un pasillo con sillas y mesas, pero bien apiladas a los lados", b: "El que puede realizar una persona con movilidad reducida", c: "El que puede realizar una persona con movilidad reducida con ayuda", d: "Un acerado antideslizante" },
    correct: "b",
    free: true
  },
  {
    id: 4,
    question: "Respecto al cociente intelectual, se considera un paciente entrenable aquel cuyo cociente está entre…",
    options: { a: "Menos de 20", b: "70–50", c: "49–35", d: "34–20" },
    correct: "c",
    free: true
  },
  {
    id: 5,
    question: "¿Qué problema cromosómico tiene un paciente con síndrome de Maullido de Gato?",
    options: { a: "Trisomía del 21", b: "Mutación Xq28", c: "Deleción del cromosoma 5", d: "Deleción del cromosoma 7" },
    correct: "c",
    free: true
  },
  // Para demo solo 10 preguntas, completa hasta 400 en producción:
  {
    id: 6,
    question: "¿Cuál es la principal causa de hemorragia digestiva baja?",
    options: { a: "Diverticulosis", b: "Colitis isquémica", c: "Enfermedad inflamatoria intestinal", d: "Cáncer colorrectal" },
    correct: "a",
    free: false
  },
  {
    id: 7,
    question: "¿Qué factor se asocia más a la enfermedad de Alzheimer?",
    options: { a: "Edad avanzada", b: "Tabaquismo", c: "Hipertensión arterial", d: "Diabetes mellitus" },
    correct: "a",
    free: false
  },
  {
    id: 8,
    question: "¿Cuál es la prueba diagnóstica estándar para la diabetes mellitus?",
    options: { a: "Glucosa en ayunas", b: "Prueba de tolerancia a la glucosa", c: "Hemoglobina glicosilada", d: "Perfil lipídico" },
    correct: "c",
    free: false
  },
  {
    id: 9,
    question: "¿Qué órgano se afecta principalmente en la cirrosis hepática?",
    options: { a: "Riñón", b: "Hígado", c: "Páncreas", d: "Bazo" },
    correct: "b",
    free: false
  },
  {
    id: 10,
    question: "¿Qué tipo de células producen insulina?",
    options: { a: "Células alfa", b: "Células beta", c: "Células delta", d: "Células PP" },
    correct: "b",
    free: false
  },
  {
  "id": 11,
  "question": "Si el paciente en el quirófano requiere un tratamiento integral, siempre que se pueda, el orden de actuación sería…",
  "options": {
    "a": "Prótesis, endodoncia, conservadora, periodoncia y cirugía",
    "b": "Endodoncia, prótesis, conservadora y cirugía",
    "c": "Endodoncia, conservadora, periodoncia, cirugía y prótesis",
    "d": "No hay orden"
  },
  "correct": "c",
  "free": false
},
{
  "id": 12,
  "question": "Respecto a la prótesis en pacientes impedidos y en tratamientos con anestesia general optaremos de forma preferente por…",
  "options": {
    "a": "Parciales de resina y esqueléticos",
    "b": "Prótesis fija",
    "c": "Implantes",
    "d": "Completas y desdentar para que no tenga que entrar más en el quirófano en el futuro"
  },
  "correct": "d",
  "free": false
},
{
  "id": 13,
  "question": "¿Qué es un paciente especial?",
  "options": {
    "a": "Se denomina así a todos los pacientes que presentan enfermedades, deficiencias o discapacidades y que precisan modificaciones en el modo de actuación odontológicos.",
    "b": "Se denomina así a todos los pacientes que presentan mal genio y malos modos a la hora de dirigirse a nosotros",
    "c": "Pacientes que toman medicamentos y están controlados",
    "d": "Se denominan así a todos los pacientes que no presentan enfermedades, deficiencias o discapacidades y que no precisan modificaciones en el modo de actuación odontológicos"
  },
  "correct": "a",
  "free": false
},
{
  "id": 14,
  "question": "¿Qué es una RAM moderada?",
  "options": {
    "a": "Aquella banal, de poca importancia y poco tiempo",
    "b": "Aquella que amenaza la vida del paciente",
    "c": "Una RAM tipo C",
    "d": "Aquella RAM que motiva la baja laboral"
  },
  "correct": "d",
  "free": false
},
{
  "id": 15,
  "question": "¿Qué es una RAM tipo C?",
  "options": {
    "a": "La que tiene efectos a largo plazo",
    "b": "La RAM moderada",
    "c": "Farmacológica, guardando relación con la dosis, predecible y frecuentes",
    "d": "Ninguna de las anteriores"
  },
  "correct": "a",
  "free": false
},
{
  "id": 16,
  "question": "Respecto a las pautas de tratamiento en el paciente trasplantado, ¿qué no debemos hacer?",
  "options": {
    "a": "Enjuagues con CLHX",
    "b": "Profilaxis antibiótica tras los tratamientos",
    "c": "Manejo del dolor",
    "d": "Pautar corticoides para evitar grandes inflamaciones tras cirugía"
  },
  "correct": "d",
  "free": false
},
{
  "id": 17,
  "question": "¿Qué agente es ajeno al tratamiento común del paciente trasplantado?",
  "options": {
    "a": "Ciclosporina",
    "b": "Anestésicos locales",
    "c": "Glucocorticoides",
    "d": "Azatioprina"
  },
  "correct": "b",
  "free": false
},
{
  "id": 18,
  "question": "La leucoplasia vellosa es una lesión asociada a pacientes con VIH causada por…",
  "options": {
    "a": "El virus de Epstein-Barr",
    "b": "Hipertrofia por mordisqueo",
    "c": "Candidiasis oral",
    "d": "Liquen plano oral"
  },
  "correct": "a",
  "free": false
},
{
  "id": 19,
  "question": "La hemoglobina glicosilada en el paciente adulto normal debe estar entre…",
  "options": {
    "a": "1.8% - 4%",
    "b": "2.5% - 5.9%",
    "c": "2.2% - 4.8%",
    "d": "8-10%"
  },
  "correct": "b",
  "free": false
},
{
  "id": 20,
  "question": "¿Cuál de las siguientes afirmaciones sobre las reacciones adversas a medicamentos (RAM) es falsa?",
  "options": {
    "a": "Una RAM es una reacción nociva no intencionada que aparece a dosis usadas habitualmente en el ser humano.",
    "b": "Según la clasificación de las RAM de Rawlins la tipo C tiene efectos a largo plazo",
    "c": "Según la clasificación de las RAM de Rawlins la tipo D se debe a mecanismos inmunológicos que no guardan relación con la dosis",
    "d": "Una RAM moderada puede requerir ingreso hospitalario"
  },
  "correct": "c",
  "free": false
},
  {
  "id": 21,
  "question": "¿Cuál de los siguientes fármacos no está directamente relacionado con la reacción adversa de hiperplasia gingival?",
  "options": {
    "a": "Ciclosporina (inmunosupresor)",
    "b": "Omeprazol (protector gástrico)",
    "c": "Fenitoína (antiepiléptico)",
    "d": "Anticonceptivos orales"
  },
  "correct": "b",
  "free": false
},
{
  "id": 22,
  "question": "De los siguientes fármacos, ¿cuál no causa la reacción adversa de coloración extrínseca de las piezas dentales?",
  "options": {
    "a": "Tetraciclina",
    "b": "Clorhexidina",
    "c": "Sales de hierro oral",
    "d": "Amoxicilina + Ácido clavulánico"
  },
  "correct": "d",
  "free": false
},
{
  "id": 23,
  "question": "¿Cuál de los siguientes fármacos no potencia el efecto de los anticoagulantes orales haciendo que aumente el riesgo de sangrado?",
  "options": {
    "a": "Ibuprofeno",
    "b": "Metronidazol",
    "c": "Paracetamol",
    "d": "Clindamicina"
  },
  "correct": "d",
  "free": false
},
{
  "id": 24,
  "question": "¿Cuál de los siguientes fármacos reduce más el efecto de los anticonceptivos orales?",
  "options": {
    "a": "Amoxicilina Clavulánico",
    "b": "Metronidazol",
    "c": "Azitromicina",
    "d": "Doxiciclina"
  },
  "correct": "d",
  "free": false
},
{
  "id": 25,
  "question": "Señale la opción incorrecta acerca de la hepatitis C:",
  "options": {
    "a": "Existen en torno a 130-150 millones de infectados en todo el mundo",
    "b": "Puede evolucionar a infección crónica",
    "c": "Puede desembocar en cirrosis hepática",
    "d": "Es la más grave tras la hepatitis B"
  },
  "correct": "d",
  "free": false
},
{
  "id": 26,
  "question": "Señale la opción incorrecta acerca de la hepatitis B:",
  "options": {
    "a": "Puede desencadenar una hepatitis fulminante",
    "b": "El tratamiento con interferón es muy efectivo",
    "c": "Ante accidente de inoculación, hay que lavar con agua y jabón",
    "d": "La infección aguda dura entre 40 - 180 días"
  },
  "correct": "b",
  "free": false
},
{
  "id": 27,
  "question": "Señale qué lesión está menos comúnmente asociada a la infección por VIH:",
  "options": {
    "a": "Candidiasis eritematosa",
    "b": "Sarcoma de Kaposi",
    "c": "Estomatitis necrotizante",
    "d": "Eritema gingival lineal"
  },
  "correct": "c",
  "free": false
},
{
  "id": 28,
  "question": "Señale la opción incorrecta acerca del manejo odontológico del paciente infectado por VIH:",
  "options": {
    "a": "Se debe estar en contacto con el infectólogo",
    "b": "Ante inoculación accidental el riesgo de contagio con una aguja hueca es bajo (0,3%)",
    "c": "Es ideal actuar con los CD4> 500/m",
    "d": "No actuar con los CD4< 400/ml"
  },
  "correct": "d",
  "free": false
},
{
  "id": 29,
  "question": "¿Cuál de las siguientes lesiones es una lesión observada (Grupo III) en la infección por VIH?",
  "options": {
    "a": "Neuralgia del Trigémino",
    "b": "Virus del Herpes Simple",
    "c": "Virus de la Varicela Zoster",
    "d": "Linfoma no Hodgkin"
  },
  "correct": "a",
  "free": false
},
{
  "id": 30,
  "question": "¿Cuál de las siguientes no es una alteración oral característica del mieloma?",
  "options": {
    "a": "Aumento de prevalencia de caries",
    "b": "Dolor",
    "c": "Parestesias",
    "d": "Disfunción del complejo temporomandibular"
  },
  "correct": "a",
  "free": false
},
{
  "id": 31,
  "question": "Señale la opción correcta acerca de las complicaciones de la radioterapia:",
  "options": {
    "a": "Cuando aparece la mucositis, ésta es irreversible",
    "b": "La disgeusia siempre va precedida de una mucositis",
    "c": "Las caries que presentan estos pacientes, afectan principalmente al surco",
    "d": "Puede aparecer trismo por fibrosis de la musculatura masticatoria"
  },
  "correct": "d",
  "free": false
},
{
  "id": 32,
  "question": "Señale la opción incorrecta acerca de la osteorradionecrosis:",
  "options": {
    "a": "Hueso que ha sido irradiado y se expone al exterior más de tres meses",
    "b": "Se da como consecuencia de disminución del aporte sanguíneo al hueso",
    "c": "La primera opción terapéutica será la resección de la zona afectada",
    "d": "En ella se produce una reparación ósea anormal con células del tejido adiposo"
  },
  "correct": "c",
  "free": false
},
{
  "id": 33,
  "question": "Señale la asociación incorrecta acerca de la graduación de las lesiones de la mucositis según criterios de la OMS de 1979:",
  "options": {
    "a": "Grado 0 - Normalidad",
    "b": "Grado 1 - Ulceración",
    "c": "Grado 2 - Puede ingerir sólidos",
    "d": "Grado 3 - Puede ingerir líquidos"
  },
  "correct": "b",
  "free": false
},
{
  "id": 34,
  "question": "¿Cuál de los siguientes fármacos NO es un inmunosupresor?",
  "options": {
    "a": "Ciclosporina",
    "b": "Glucocorticoides",
    "c": "Pentoxifilina",
    "d": "Azatioprina"
  },
  "correct": "c",
  "free": false
},
{
  "id": 35,
  "question": "¿Cuál de los siguientes signos no es un signo precoz de HTA?",
  "options": {
    "a": "Parestesias",
    "b": "Vértigos",
    "c": "Acúfenos",
    "d": "Somnolencia"
  },
  "correct": "d",
  "free": false
},
{
  "id": 36,
  "question": "Señale la opción correcta acerca de los anestésicos locales y la HTA:",
  "options": {
    "a": "Para procedimientos menores se utilizará mepivacaína",
    "b": "La mepivacaína puede originar convulsiones",
    "c": "Se pueden usar anestésicos con epinefrina",
    "d": "Todas las anteriores son correctas"
  },
  "correct": "d",
  "free": false
},
{
  "id": 37,
  "question": "¿Cuál de las siguientes afirmaciones no se encuentra dentro del protocolo tratamiento odontológico a pacientes con cardiopatía isquémica?",
  "options": {
    "a": "Citas a última hora de la tarde",
    "b": "Monitorización mediante pulsioxímetro",
    "c": "Uso de premedicación para reducir el estrés",
    "d": "Posición semisentada del sillón"
  },
  "correct": "a",
  "free": false
},
{
  "id": 38,
  "question": "Señale la opción incorrecta acerca de la angina de pecho “angor pectoris”:",
  "options": {
    "a": "Se da cuando la obstrucción de la arteria coronaria no es completa",
    "b": "Se produce necrosis del músculo miocárdico",
    "c": "Se alivia con el reposo",
    "d": "Puede actuar como desencadenante el estrés del gabinete"
  },
  "correct": "b",
  "free": false
},
{
  "id": 39,
  "question": "Señale la opción incorrecta acerca de los efectos en la cavidad oral de los fármacos antihipertensivos:",
  "options": {
    "a": "Furosemida – Náuseas",
    "b": "Captopril – Hiperplasia gingival",
    "c": "Nifedipina – Xerostomía",
    "d": "Minoxidil – Cefaleas"
  },
  "correct": "b",
  "free": false
},
{
  "id": 40,
  "question": "Señale la opción incorrecta acerca del coma hipoglucémico:",
  "options": {
    "a": "Ante la duda entre coma hipo o hiperglucémico se habrá de administrar Insulina",
    "b": "Puede darse por abuso de alcohol.",
    "c": "Si el paciente está consciente se le administrará 25 mg de azúcar por vía oral",
    "d": "El paciente presenta pulso fuerte"
  },
  "correct": "a",
  "free": false
},
  {
  id: 41,
  question: "¿Cuál de las siguientes situaciones no se da en la diabetes?",
  options: { a: "Candidiasis", b: "Leucoplasia", c: "Liquen", d: "Xerostomía" },
  correct: "b",
  free: false
},
{
  id: 42,
  question: "¿Cuál de los siguientes signos no se corresponde a un signo característico del síndrome de Cushing?",
  options: { a: "Hipertensión arterial", b: "Insuficiencia cardíaca", c: "Cara de “luna llena”", d: "Dolor abdominal agudo" },
  correct: "d",
  free: false
},
{
  id: 43,
  question: "Paciente que acude a la consulta para realizarse una exodoncia de un 36 y está consumiendo actualmente 35 mg diarios de Hidrocortisona ¿Qué pauta recomendaríamos acerca de su medicación?",
  options: { a: "No se harían modificaciones en su tratamiento", b: "Se habrá de doblar la dosis de Hidrocortisona tanto el día de la intervención como el día después de la misma", c: "Se habrá de doblar la dosis de Hidrocortisona el día de la intervención volviendo a la pauta normal el día después de la misma", d: "Todas las pautas anteriores son erróneas" },
  correct: "c",
  free: false
},
{
  id: 44,
  question: "De los siguientes fármacos ¿cuál estaría encuadrado en la categoría D acerca de riesgo de medicación en el embarazo?",
  options: { a: "Metronidazol", b: "Amoxicilina", c: "Clindamicina", d: "Paracetamol" },
  correct: "a",
  free: false
},
{
  id: 45,
  question: "¿Cuál de las siguientes manifestaciones orales no está íntimamente relacionada con el síndrome de Down?",
  options: { a: "Agenesia", b: "Diastema", c: "Queilitis angular", d: "Todas las anteriores están relacionadas" },
  correct: "d",
  free: false
},
{
  id: 46,
  question: "Indique la afirmación correcta acerca del manejo odontológico del paciente con parálisis cerebral",
  options: { a: "Es preferible el tratamiento quirúrgico periodontal al casual", b: "Concienciar al propio paciente acerca del mantenimiento de una buena higiene oral y control de placa", c: "Evitar extracciones salvando dientes de pronóstico cuestionable", d: "Controlar el babeo" },
  correct: "d",
  free: false
},
{
  id: 47,
  question: "¿Cuál de las siguientes afirmaciones no es una ventaja del tratamiento bajo anestesia general?",
  options: { a: "Los reflejos protectores del paciente están deprimidos", b: "La cooperación del paciente no es necesaria", c: "Amnesia tras la intervención", d: "Todas las anteriores son ventajas" },
  correct: "a",
  free: false
},
{
  id: 48,
  question: "Con respecto a la clasificación ASA ¿qué número ocupa en la clasificación aquel paciente con condición sistémica severa que limita actividades, pero no es incapacitante?",
  options: { a: "ASA II", b: "ASA III", c: "ASA I", d: "Ninguna de las anteriores" },
  correct: "b",
  free: false
},
{
  id: 49,
  question: "De los siguientes fármacos usados en sedación, ¿cuál es inhalatorio?",
  options: { a: "Tiopental", b: "Diazepam", c: "Ketamina", d: "Ninguno de los anteriores" },
  correct: "d",
  free: false
},
{
  id: 50,
  question: "¿Qué fármaco no está contraindicado en paciente con disfunción hepática?",
  options: { a: "Ibuprofeno", b: "Azitromicina", c: "Articaína", d: "Todos están contraindicados" },
  correct: "c",
  free: false
},
{
  id: 51,
  question: "¿Qué lesión pertenece al grupo 3 con respecto al VIH?",
  options: { a: "Infección por citomegalovirus", b: "Manchas melánicas", c: "Herpes simple", d: "Eritema gingival lineal" },
  correct: "b",
  free: false
}
  {
  id: 52,
  question: "Ante la aparición de dolor precordial en un paciente con antecedentes de cardiopatía isquémica, ¿qué es lo que no se debe hacer?",
  options: { a: "Aflojar la prenda ceñida", b: "Poner al paciente en posición de cúbito supino con la cabeza más baja que las piernas", c: "Inicialmente suspender tratamiento odontológico", d: "Administrar nitroglicerina sublingual" },
  correct: "b",
  free: false
},
{
  id: 53,
  question: "Señale la afirmación incorrecta acerca del manejo de las complicaciones agudas de la diabetes",
  options: { a: "La complicación más frecuente es la hipoglucemia", b: "La hipoglucemia se puede dar porque el paciente se ha saltado una comida", c: "Ante un estado comatoso, sin saber si es hipo o hiperglucémico, se tratará como si fuera hiperglucémico administrando insulina", d: "Todas las anteriores son correctas" },
  correct: "c",
  free: false
},
{
  id: 54,
  question: "Señale la afirmación correcta acerca del manejo de la hemorragia postoperatoria",
  options: { a: "Hay que revisar la historia médica buscando antecedentes de hemorragia", b: "Todo gabinete dental ha de tener instrumental básico para el manejo de este problema (pinza, pinza mosquito, porta aguja, sutura)", c: "Si se localiza el vaso responsable de la hemorragia se controlará con suturas y pinza mosquito", d: "Ninguna es falsa, todas son ciertas" },
  correct: "d",
  free: false
},
{
  id: 55,
  question: "Dentro de las clasificaciones de las RAM según la gravedad, indique cuál de los siguientes estadios no se corresponde con dicha clasificación",
  options: { a: "Leve RAM banales, de poca importancia y corta duración", b: "Mortal", c: "Superficial RAM que sólo afecta a nivel cutáneo", d: "Moderada RAM motiva baja laboral o escolar u hospitalario" },
  correct: "c",
  free: false
},
{
  id: 56,
  question: "De los siguientes fármacos, ¿cuál no está principalmente implicado en interacciones?",
  options: { a: "Anticoagulantes orales", b: "Anticonvulsivantes", c: "Antihistamínicos", d: "Hipotensores" },
  correct: "c",
  free: false
},
{
  id: 57,
  question: "¿Cuál de los siguientes efectos de las interacciones farmacológicas es falso?",
  options: { a: "El ibuprofeno – Ácido acetil salicílico (aumenta el riesgo de sangrado)", b: "Antibióticos basados en penicilina – Anticonceptivos orales (Aumenta el efecto de los anticonceptivos orales)", c: "Adrenalina del anestésico local – Betabloqueantes (aumenta el riesgo de crisis hipertensiva)", d: "Todos los efectos de las interacciones farmacológicas anteriormente descritas son verdaderas" },
  correct: "b",
  free: false
},
{
  id: 58,
  question: "Indique la consideración verdadera de las interacciones farmacológicas",
  options: { a: "Nunca son beneficiosas", b: "Por leves y poco probables que sean implican una incompatibilidad absoluta", c: "Disminuye la probabilidad de aparición con el aumento de fármacos consumidos", d: "Todas son falsas" },
  correct: "d",
  free: false
},
{
  id: 59,
  question: "Indique cuál de las siguientes afirmaciones acerca del presente inminente y del futuro de la odontología en pacientes especiales es falsa",
  options: { a: "Aumento de la demanda de tratamiento para minusválidos y pacientes médicamente comprometidos", b: "Aumento de las exigencias de adaptación de nuestro medio y conocimiento para atender a pacientes especiales", c: "Incremento de la investigación acerca de sus condicionantes odontológicos", d: "Disminución de la exigencia de resultados en tratamientos estéticos" },
  correct: "d",
  free: false
},
{
  id: 60,
  question: "De los siguientes materiales según necesidad de descontaminación, indique cuál no es un objeto crítico de obligada esterilización",
  options: { a: "Condensador de endodoncia", b: "Curetas", c: "Fresas", d: "Limas de endodoncia" },
  correct: "d",
  free: false
},
{
  id: 61,
  question: "¿Cuál de los siguientes fármacos, y en qué dosis, administraremos como profilaxis antibiótica de primera elección en adultos alérgicos penicilina?",
  options: { a: "Amoxicilina 2g una hora antes de la intervención", b: "Clindamicina 600 mg una hora antes de la intervención", c: "Eritromicina 500 mg una hora antes de la intervención", d: "Azitromicina 500 mg una hora antes de la intervención" },
  correct: "b",
  free: false
},
{
  id: 62,
  question: "Indique la afirmación verdadera acerca de la hepatitis C",
  options: { a: "Presenta desarrollo sintomático", b: "Las transfusiones y la drogadicción han sido y son las vías de transmisión principal", c: "La vacuna contra la hepatitis C es muy efectiva", d: "Todas las afirmaciones anteriores son falsas, no hay ninguna verdadera" },
  correct: "b",
  free: false
}
  {
  id: 63,
  question: "De las siguientes lesiones orales, ¿cuál no está comúnmente asociada a la infección por VIH?",
  options: { a: "Eritema gingival lineal", b: "Candidiasis seudomembranosa", c: "Aftosis oral recidivante", d: "Leucoplasia vellosa" },
  correct: "c",
  free: false
},
{
  id: 64,
  question: "Acerca del tratamiento odontológico al paciente con VIH, indique la afirmación falsa",
  options: { a: "Siempre hay que estar en contacto con el infectólogo", b: "Lo ideal es actuar con los niveles de CD4 por encima de 800", c: "No se actúa con los niveles CD4 por debajo de 200", d: "Antes de iniciar el tratamiento antirretroviral hay que eliminar focos infecciosos activos" },
  correct: "b",
  free: false
},
{
  id: 65,
  question: "Señale la opción incorrecta con respecto al manejo odontológico del paciente antiagregado:",
  options: { a: "El antiagregante tiene un efecto que dura 7 días", b: "En pacientes antiagregados se puede usar el spray nasal de Desmopresina", c: "El tratamiento es poco efectivo, de ahí la importancia de la profilaxis", d: "El ácido tranexámico aplicado comúnmente en una gasa ayuda a controlar hemorragia" },
  correct: "c",
  free: false
},
{
  id: 66,
  question: "¿Cuál de los siguientes fármacos hemostáticos tópicos tiene efecto astringente?",
  options: { a: "Adrenalina", b: "Sulfato férrico", c: "Gelatina absorbible", d: "Celulosa oxidada" },
  correct: "b",
  free: false
},
{
  id: 67,
  question: "¿Cómo se denomina al cuadro clínico caracterizado por hiperglucemia grave con deshidratación, osmolaridad plasmática elevada y disminución variable del nivel de conciencia?",
  options: { a: "Coma hiperosmolar", b: "Coma hipercetósico", c: "Polineuropatía diabética", d: "Todas las anteriores son falsas" },
  correct: "a",
  free: false
},
{
  id: 68,
  question: "¿Cuál sería el rango de hemoglobina glicosilada típico de un diabético bien controlado?",
  options: { a: "2,2 – 4,8 %", b: "1,8 – 4 %", c: "2,5 – 5,9 %", d: "Ninguno de los anteriores" },
  correct: "d",
  free: false
},
{
  id: 69,
  question: "Señale la afirmación incorrecta acerca del paciente con patología tiroidea:",
  options: { a: "Es conveniente evitar cirugías muy traumáticas en el paciente hipertiroideo", b: "Los pacientes hipotiroideos metabolizan mal los fármacos", c: "En el paciente hipotiroideo la tensión arterial suele estar baja", d: "Los hipotiroideos suelen presentar hiperactividad motora" },
  correct: "d",
  free: false
},
{
  id: 70,
  question: "Señale la afirmación correcta acerca de la relación entre la diabetes y la enfermedad periodontal:",
  options: { a: "La diabetes mal controlada puede considerarse un factor de riesgo para el desarrollo de la enfermedad periodontal", b: "El control metabólico de la diabetes mejora el estado periodontal (alta evidencia)", c: "a y b son correctas", d: "Todas son falsas" },
  correct: "c",
  free: false
},
{
  id: 71,
  question: "Señale la afirmación incorrecta acerca de la enfermedad de Addison:",
  options: { a: "La cavidad oral de estos pacientes presenta un color pardo violáceo", b: "Estos pacientes tienden a la infección postoperatoria (antibióticos antes y después)", c: "Nunca se modificará su dosis de Hidrocortisona ante tratamiento dental", d: "Suelen desarrollar hipertensión con el paso de los años" },
  correct: "c",
  free: false
},
{
  id: 72,
  question: "Con respecto al tratamiento odontológico de pacientes con hepatitis, señale la opción incorrecta:",
  options: { a: "Las complicaciones durante el mismo se suelen derivar de la disfunción hepática originada por la enfermedad", b: "No es necesario evitar administrar fármacos de metabolismo hepático en la fase aguda de la enfermedad", c: "Se suelen producir, en estos pacientes, hemorragias por déficit de factores de coagulación", d: "Para prevenir hemorragias, se recomienda la administración de vitamina K" },
  correct: "b",
  free: false
},
{
  id: 73,
  question: "De los siguientes fármacos ¿Cuál no está contraindicado en pacientes con hepatitis?",
  options: { a: "Aspirina", b: "Prednisona", c: "Codeína", d: "Paracetamol" },
  correct: "b",
  free: false
},
{
  id: 74,
  question: "Con respecto a los pacientes VIH+, señale la opción correcta:",
  options: { a: "El dentista, debe negarse a atender a un paciente VIH+ por el riesgo de contagio", b: "A pacientes con lesiones indicativas de VIH+ se les deberá aconsejar someterse a pruebas de confirmación", c: "Nunca se debe atender a un paciente VIH+ confirmado antes de iniciar la terapia antirretroviral", d: "Todas las opciones anteriores son incorrectas" },
  correct: "b",
  free: false
},
{
  id: 75,
  question: "¿Qué lesión comúnmente asociada a la infección por VIH se localiza en las caras laterales de la lengua y se caracteriza por formaciones pequeñas blancas con ligeras ondulaciones?",
  options: { a: "Candidiasis pseudomembranosa", b: "Leucoplasia vellosa", c: "Queilitis angular", d: "Sarcoma de Kaposi" },
  correct: "b",
  free: false
}
  {
  id: 76,
  question: "¿Cuál de las siguientes manifestaciones clínicas no se corresponde con la paciente menopáusica?",
  options: { a: "Hipersalivación", b: "Osteoporosis", c: "Infecciones urinarias", d: "Obesidad" },
  correct: "a",
  free: false
},
{
  id: 77,
  question: "Señale la opción incorrecta acerca del tratamiento con bisfosfonatos y odontología:",
  options: { a: "En pacientes bajo tratamiento con bisfosfonatos intravenosos, los tratamientos de riesgo se deben hacer antes del mismo o durante los tres primeros meses de tratamiento", b: "En pacientes consumidores de bisfosfonatos orales los tratamientos de riesgo deben realizarse en los tres primeros años", c: "Cuando la prueba CTX es mayor de 15 (pg/ml), el riesgo de osteonecrosis es alto", d: "El Actonel es un bisfosfonato" },
  correct: "c",
  free: false
},
{
  id: 78,
  question: "Señale la afirmación falsa acerca del manejo odontológico del paciente esquizofrénico:",
  options: { a: "Su estado de salud oral será peor cuanto peor sea el grado de esquizofrenia", b: "La Adrenalina del anestésico interacciona con los antipsicóticos", c: "No hay que enfrentarse a ellos", d: "Siempre deben pasar solos al gabinete" },
  correct: "c",
  free: false
},
{
  id: 79,
  question: "Señale cuál de las siguientes afirmaciones se corresponde al tratamiento odontológico del paciente depresivo:",
  options: { a: "Se debe tener un trato paternalista hacia ellos", b: "Hay que darle mucha importancia al tratamiento preventivo", c: "Los depresivos no controlados pueden ser fácilmente tratados al no ser agresivos", d: "Todas son falsas" },
  correct: "b",
  free: false
},
{
  id: 80,
  question: "¿Cuál de las siguientes manifestaciones con respecto a los trastornos de la alimentación es exclusiva de la bulimia?",
  options: { a: "Queilitis angulares", b: "Mordidas abiertas", c: "Xerostomía", d: "Alteración de las glándulas salivares" },
  correct: "d",
  free: false
},
{
  id: 81,
  question: "Señale la opción correcta acerca del paciente autista:",
  options: { a: "El autismo presenta características específicas a nivel oral", b: "El autismo es más prevalente en el sexo femenino", c: "La gravedad del trastorno es directamente proporcional a la inteligencia del paciente", d: "Para la exploración de un paciente autista de alto nivel, ésta será más fácil si usamos el cepillo del paciente en lugar de espejos" },
  correct: "d",
  free: false
},
{
  id: 82,
  question: "¿Cuál de los siguientes síntomas nos ayudará a identificar a un paciente ansioso en el gabinete?",
  options: { a: "Habla rápida y mecánica", b: "Paciente sentado hacia atrás dejado caer en el sillón", c: "Paciente inmóvil", d: "Todas las anteriores son ciertas" },
  correct: "a",
  free: false
},
{
  id: 83,
  question: "Señale la opción correcta con respecto al rango de cociente intelectual y el grado de discapacidad:",
  options: { a: "Severo, 34-20", b: "Moderado: 49-35", c: "Profundo: Menor de 20", d: "Todas son correctas" },
  correct: "d",
  free: false
},
{
  id: 84,
  question: "¿Cuál de las siguientes manifestaciones orales no se corresponde con pacientes con discapacidad física o sensorial?",
  options: { a: "Acortamiento radicular", b: "Microglosia", c: "Hipoplasias", d: "Agenesias" },
  correct: "b",
  free: false
},
{
  id: 85,
  question: "Siguiendo la clasificación de las RAM de Rawlins, la dermatitis de contacto por alergia al látex es:",
  options: { a: "Tipo B I", b: "Tipo B II", c: "Tipo B III", d: "Tipo B IV" },
  correct: "d",
  free: false
},
{
  id: 86,
  question: "¿Si inyectara articaína con epinefrina a un paciente polimedicado, con cuál de los siguientes tratamientos debería tener más cuidado por estar implicado en interacciones farmacológicas potencialmente más graves?",
  options: { a: "Metronidazol", b: "Warfarina", c: "Aspirina", d: "Timolol" },
  correct: "b",
  free: false
},
{
  id: 87,
  question: "De las siguientes complicaciones bucales por radioterapia, ¿cuál no aparece a corto plazo?",
  options: { a: "Disgeusia", b: "Osteorradionecrosis", c: "Xerostomía", d: "Todas las anteriores son complicaciones a corto plazo de la radioterapia" },
  correct: "b",
  free: false
},
{
  id: 88,
  question: "Señale la opción incorrecta con respecto al tratamiento odontológico de pacientes oncológicos:",
  options: { a: "Las extracciones de cordales impactados o incluidos deben realizarse al menos seis semanas antes de iniciar el tratamiento oncológico", b: "Se aconseja la extracción de dientes con bolsas periodontales superiores a 7 mm antes de iniciar el tratamiento, para evitar infecciones", c: "Se deben realizar las extracciones a estos pacientes durante el tratamiento con radioterapia", d: "Durante la radioterapia se debe aplicar flúor de manera tópica" },
  correct: "c",
  free: false
},
{
  id: 89,
  question: "¿Cuál de los siguientes fármacos estaría totalmente contraindicado en un paciente con insuficiencia hepática grave?",
  options: { a: "Amoxicilina", b: "Ibuprofeno", c: "Clindamicina", d: "Lorazepam" },
  correct: "d",
  free: false
},
{
  id: 90,
  question: "¿Cuál de los siguientes medicamentos no se suele utilizar en el tratamiento de la mucositis por radioterapia?",
  options: { a: "Betametasona", b: "Sucralfato", c: "Nistatina", d: "Clindamicina" },
  correct: "d",
  free: false
},
{
  id: 91,
  question: "Señale la asociación incorrecta con respecto a la clasificación de la Presión Arterial:",
  options: { a: "Hipertensión arterial Estado I: diastólica 100-129 mm Hg y sistólica 160-179 mm Hg.", b: "Hipertensión arterial Estado II: Diastólica mayor de 100 mm Hg y sistólica mayor de 160 mm Hg.", c: "Crisis hipertensiva: Diastólica mayor 95 mm Hg y sistólica mayor 165 mm Hg, sintomática.", d: "Tensión arterial prehipertensiva: diastólica 80-89 mmHg y sistólica 120-139 mm Hg." },
  correct: "a",
  free: false
},
{
  id: 92,
  question: "Señale la afirmación incorrecta con respecto a la hipertensión arterial:",
  options: { a: "La hipertensión arterial es un serio problema de salud por su alta prevalencia en la población adulta", b: "Ante una urgencia hipertensiva (PA diastólica ≥ 120 mm Hg) sólo se deberán administrar hipotensores para controlar la PA por vía parenteral y nunca por vía oral", c: "La consulta dental es un lugar de alto riesgo en el que se pueden presentar casos de HTA", d: "Cuando un paciente requiere tratamiento odontológico y no tiene controlada la PA no se deben realizar tratamientos" },
  correct: "b",
  free: false
},
{
  id: 93,
  question: "Paciente que se encuentra sentado en el sillón dental, con antecedentes de epilepsia y dice que escucha un zumbido y ve luces raras. ¿Qué es lo que nunca se debe hacer?",
  options: { a: "Retirar lo antes posible todos los instrumentos dentales de la boca del paciente", b: "Tratar de impedir a toda costa los movimientos convulsivos", c: "Asegurar el mantenimiento de la vía aérea", d: "Si tras cinco minutos continúan las convulsiones administrar anticonvulsivos" },
  correct: "b",
  free: false
},
{
  id: 94,
  question: "¿En cuál de las siguientes enfermedades cardiovasculares puede el odontólogo actuar sobre el paciente, aunque con precaución? (no está contraindicado su tratamiento sin intervención del médico):",
  options: { a: "IAM reciente (menos de tres meses)", b: "Angor inestable", c: "Síndrome de Wolf-Parkinson-White", d: "Ritmos cardíacos extrasinusales" },
  correct: "d",
  free: false
},
{
  id: 95,
  question: "¿Cuál de las siguientes afirmaciones con respecto al hipotiroidismo es falsa?",
  options: { a: "Los niños que padecen hipotiroidismo suelen padecer bradicardia", b: "Los pacientes que padecen hipotiroidismo presentan un buen metabolismo de los fármacos", c: "Los niños que padecen hipotiroidismo suelen tener macroglosia", d: "Los adultos que padecen hipotiroidismo suelen tener una piel pálida y seca" },
  correct: "b",
  free: false
},
{
  id: 96,
  question: "¿Cuál de las siguientes causas de demencias cerebrales es reversible?",
  options: { a: "Drogas", b: "Enfermedad de Parkinson", c: "Enfermedad de Alzheimer", d: "Todas las anteriores son causas de demencias cerebrales reversibles" },
  correct: "a",
  free: false
},
{
  id: 97,
  question: "Señale la afirmación incorrecta con respecto al manejo odontológico del paciente autista:",
  options: { a: "El autismo no se caracteriza por presentar alteraciones específicas a nivel de salud oral", b: "Con el paciente autista siempre se puede establecer una relación interpersonal en el gabinete dental", c: "Al paciente autista habitualmente es necesario sedarlo", d: "Su situación dental suele depender de la ayuda que recibe para la higiene oral de padres/cuidadores" },
  correct: "b",
  free: false
},
{
  id: 98,
  question: "Con respecto a la clasificación de los pacientes psiquiátricos o neurológicos según el punto de vista odontológico señale la afirmación falsa:",
  options: { a: "Los pacientes de tipo A son aquellos en los que no tiene por qué darse un deterioro progresivo con el transcurso del tiempo", b: "Los pacientes de tipo B son aquellos en los que se suele producir un deterioro a medida que pase el tiempo", c: "En los pacientes de Tipo A el tratamiento odontológico no suele requerir de decisiones inmediatas", d: "En los pacientes de tipo B hay que mantener a toda costa los dientes con pronóstico incierto" },
  correct: "d",
  free: false
},
{
  id: 99,
  question: "¿Cuál de las siguientes afirmaciones sobre el manejo odontológico del paciente diabético es falsa?",
  options: { a: "Alta incidencia de caries de cuello", b: "Alta incidencia de enfermedad Periodontal", c: "Dificultad para la cicatrización", d: "Con cualquiera de ellos siempre emplearemos profilaxis antibiótica" },
  correct: "d",
  free: false
}
  {
  id: 100,
  question: "¿Cuál de las siguientes afirmaciones con respecto al manejo odontológico del paciente con síndrome de Addison (patología suprarrenal) es verdadera?",
  options: { a: "El síndrome de Addison se produce por un aumento de secreción de Cortisol", b: "Estos pacientes nunca presentan pigmentación de las mucosas orales", c: "Tienen especial resistencia a padecer infecciones orales", d: "Ante estos pacientes se deberán evitar las situaciones de tensión emocional durante el tratamiento" },
  correct: "d",
  free: false
},
{
  id: 101,
  question: "Indique cuál de los siguientes problemas odontológicos no está especialmente asociado a la enfermedad de Parkinson:",
  options: { a: "Aparición de petequias en la mucosa oral", b: "Dificultad en control y retención de prótesis removibles", c: "Xerostomía", d: "Caries radiculares" },
  correct: "a",
  free: false
},
{
  id: 102,
  question: "¿Cuál de los siguientes hallazgos odontológicos no se observa en el paciente bulímico?",
  options: { a: "Dientes erosionados", b: "Queilitis angular", c: "Dolor Parotídeo al tragar", d: "Alta incidencia de GUNA y PUNA" },
  correct: "c",
  free: false
},
{
  id: 103,
  question: "Con respecto al paciente inmunodeficiente indique la afirmación falsa:",
  options: { a: "No se debe tratar a pacientes con 500 CD4", b: "No se debería tratar a un paciente con menos de 1000 leucocitos/mm³", c: "No se debería tratar a un paciente con menos de 40,000 plaquetas/mm³", d: "Generalmente hay que tomar precauciones en los tratamientos como transfusión de plaquetas y profilaxis antibiótica" },
  correct: "a",
  free: false
},
{
  id: 104,
  question: "De las siguientes lesiones indique cuál no está en el grupo 1 (comúnmente asociada a la infección por VIH) de la clasificación basada en criterios de prevalencia de lesiones y VIH:",
  options: { a: "Candidiasis Eritematosa", b: "Candidiasis Pseudomembranosa", c: "Hiperpigmentación melánica", d: "Sarcoma de Kaposi" },
  correct: "c",
  free: false
},
{
  id: 105,
  question: "De las siguientes lesiones indique cuál no está en el grupo II (lesiones menos comúnmente asociadas a la infección por VIH):",
  options: { a: "Lesiones por virus del Papiloma humano", b: "Leucoplasia Vellosa", c: "Hiperpigmentación melánica", d: "Todas las lesiones anteriores pertenecen al grupo de lesiones menos comúnmente asociadas a la infección por VIH" },
  correct: "b",
  free: false
},
{
  id: 106,
  question: "De las siguientes lesiones indique cuál no está en el grupo III (lesiones probablemente asociadas con la infección por VIH) de la clasificación basada en criterios de prevalencia de lesiones y VIH:",
  options: { a: "Aftosis oral recidivante", b: "Neuralgia del Trigémino", c: "Infecciones virales por Citomegalovirus", d: "Hiperplasia focal epitelial" },
  correct: "c",
  free: false
},
{
  id: 107,
  question: "Con respecto a la clasificación de criterios ASA, indique la asociación correcta:",
  options: { a: "Clase VI: paciente moribundo", b: "Clase III: Paciente con condición sistémica severa que limita actividades y es una constante amenaza a la vida", c: "Clase V: Paciente con muerte cerebral que va al quirófano para la recuperación de órganos", d: "Clase I: Paciente con condición sistémica severa que limita actividades pero que no es ..." },
  correct: "b",
  free: false
},
{
  id: 108,
  question: "¿Cuáles de los siguientes aparatos son requisitos para realizar sedación profunda en la consulta de odontología?",
  options: { a: "Instalación de gases capaz de aportar altos flujos de oxígeno", b: "Laringoscopios", c: "Tubos de Guedel", d: "Todas las anteriores" },
  correct: "d",
  free: false
},
{
  id: 109,
  question: "¿Cuál de las siguientes consideraciones que han de ser tenidas en cuenta a la hora de tratar pacientes epilépticos es falsa?",
  options: { a: "No se recomienda aumentar la dosis de los fármacos anticonvulsivos antes del procedimiento dental", b: "En estos pacientes se indica la sedación sistemáticamente", c: "Los anestésicos locales no interaccionan con los fármacos anticonvulsivos", d: "Se aconsejan las citas a las pocas horas de tomar el fármaco anticonvulsivo" },
  correct: "b",
  free: false
},
{
  id: 110,
  question: "¿Cuál de las siguientes características es FALSA con respecto a los dientes del paciente geriátrico?",
  options: { a: "Pérdida considerable de espesor en la capa de esmalte", b: "Baja prevalencia de caries interproximales", c: "Alta prevalencia de caries radiculares", d: "Dentina altamente mineralizada en zonas periféricas" },
  correct: "b",
  free: false
},
{
  id: 111,
  question: "¿Cuál de las siguientes características no es propia de un paciente geriátrico desdentado total portador de prótesis completa mucosoportada?",
  options: { a: "Reabsorción de la cresta ósea desdentada", b: "Alteración de la oclusión por desestabilización de la prótesis", c: "Tono muscular incrementado en la zona de contacto mucosa - prótesis", d: "Eritemas irritativos en la zona de contacto mucosa - prótesis" },
  correct: "c",
  free: false
},
{
  id: 112,
  question: "¿Cuál de los siguientes medicamentos no es de tenencia obligatoria para las urgencias médicas que se pueden dar en el gabinete dental?",
  options: { a: "Ácido valproico", b: "Aminofilina", c: "Salbutamol", d: "Nifedipina" },
  correct: "a",
  free: false
},
{
  id: 113,
  question: "¿Qué es lo que no se debe hacer ante una emergencia vital en el gabinete odontológico?",
  options: { a: "Aflojar la ropa apretada alrededor del cuello", b: "Realizar la maniobra frente - mentón", c: "Colocar al paciente rápidamente en decúbito prono", d: "Acercar el oído y la mejilla a la boca del paciente para comprobar si hay respiración" },
  correct: "c",
  free: false
},
{
  id: 114,
  question: "De las siguientes enfermedades orales indique cuál no es común en pacientes con alteraciones inmunes.",
  options: { a: "Pénfigo vulgar", b: "Penfigoide mucoso benigno", c: "Eritema multiforme", d: "Chancro sifilítico" },
  correct: "d",
  free: false
},
{
  id: 115,
  question: "Al realizar una analítica a un paciente con alteraciones inmunológicas para proceder a un tratamiento odontológico ¿cuál de las siguientes pruebas no suele ser utilizada?",
  options: { a: "Nivel de la gamma glutamil transpeptidasa", b: "Tasas de inmunoglobulinas séricas", c: "Recuento y fórmula leucocitaria", d: "Valoración funcional de los linfocitos T" },
  correct: "a",
  free: false
},
{
  id: 116,
  question: "Indique la característica verdadera del paciente con síndrome de Down",
  options: { a: "Incidencia de caries más elevada", b: "Mayor incidencia de hipoplasia del esmalte", c: "Baja incidencia de maloclusión", d: "Baja incidencia de respiración bucal" },
  correct: "b",
  free: false
},
{
  id: 117,
  question: "¿Cuál de los siguientes síndromes que pueden producir minusvalía psíquica no es un síndrome craneofacial?",
  options: { a: "Síndrome de Lowe", b: "Síndrome de Apert", c: "Síndrome de Hurler", d: "Síndrome de Carpenter" },
  correct: "a",
  free: false
},
{
  id: 118,
  question: "¿Cuál de las siguientes consideraciones que han de ser retenidas en cuenta a la hora de tratar pacientes epilépticos es falsa?",
  options: { a: "No se recomienda aumentar la dosis de los fármacos anticonvulsivos antes del procedimiento dental", b: "En estos pacientes se indica la sedación sistemáticamente", c: "Los anestésicos locales no interaccionan con los fármacos anticonvulsivantes", d: "Se aconsejan las citas a las pocas horas de tomar el fármaco anticonvulsivo" },
  correct: "b",
  free: false
},
{
  id: 119,
  question: "¿Cuál de las siguientes características es falsa con respecto a los dientes del paciente geriátrico?",
  options: { a: "Pérdida considerable de espesor en la capa de esmalte", b: "Baja prevalencia de caries interproximales", c: "Alta prevalencia de caries radiculares", d: "Dentina altamente mineralizada en zonas periféricas" },
  correct: "b",
  free: false
},
{
  id: 120,
  question: "¿Cuál de las siguientes características no es propia de un paciente geriátrico desdentado total portador de prótesis completa mucosoportada?",
  options: { a: "Reabsorción de la cresta ósea desdentada", b: "Alteración de la oclusión por desestabilización de la prótesis", c: "Tono muscular incrementado en la zona de contacto mucosa - prótesis", d: "Eritemas irritativos en la zona de contacto mucosa - prótesis" },
  correct: "c",
  free: false
},
{
  id: 121,
  question: "De las siguientes afirmaciones con respecto a las situaciones específicas de urgencia que se pueden dar en un gabinete dental indique cuál es falsa",
  options: { a: "La mayoría de las reacciones adversas a los anestésicos son respuestas psicógenas", b: "La aspiración previa y la inyección lenta del anestésico es la mejor prevención de la inyección intravascular inadvertida", c: "Si el paciente está inconsciente pero respira de forma espontánea se le administrará oxígeno al 21%", d: "En las reacciones alérgicas a los anestésicos locales y sus componentes las que afectan al sistema respiratorio son las más frecuentes" },
  correct: "d",
  free: false
},
{
  id: 122,
  question: "Indique la asociación correcta de entre los siguientes microorganismos potencialmente transmisibles y al grupo al que pertenecen según clasificación de microorganismos y procesos morbosos transmisibles en odontología con relación al riesgo de exposición",
  options: { a: "Clase I citomegalovirus", b: "Clase II Rubeola", c: "Clase III Mycobacterium tuberculosis", d: "Clase IV virus de hepatitis B" },
  correct: "d",
  free: false
},
{
  id: 123,
  question: "¿Cuál de las siguientes lesiones orales no está comúnmente asociada a la infección por VIH?",
  options: { a: "Candidiasis seudomembranosa", b: "Candidiasis eritematosa", c: "Angiomatosis epitelioide bacilar", d: "Leucoplasia vellosa" },
  correct: "c",
  free: false
},
{
  id: 124,
  question: "En un paciente con recuento plaquetario de 4.880 plaquetas, ¿cuál de las siguientes no es medida preventiva habitual durante la quimioterapia?",
  options: { a: "Control mecánico de la placa con esponjas", b: "Cepillado meticuloso con cepillo suave", c: "Barras labiales de manteca de cacao", d: "Profilaxis antifúngica con nistatina" },
  correct: "b",
  free: false
}
  {
  id: 125,
  question: "¿Cuál de las siguientes complicaciones orales por radioterapia, aparece a largo plazo?",
  options: { a: "Mucositis", b: "Osteorradionecrosis", c: "Xerostomía", d: "Disgeusia" },
  correct: "b",
  free: false
},
{
  id: 126,
  question: "¿Cuál de las siguientes normas debe observarse en el empleo de fármacos en mujeres gestantes?",
  options: { a: "Fomentar la politerapia y la polifarmacia", b: "Administrar medicamentos para obtener un efecto placebo", c: "Administrar la mayor dosis eficaz de los medicamentos necesarios durante el mayor tiempo posible", d: "No se debe olvidar que cualquier mujer en edad fértil es una gestante potencial" },
  correct: "d",
  free: false
},
{
  id: 127,
  question: "¿Cuál de las siguientes afirmaciones sobre el paciente cardiovascular es falsa?",
  options: { a: "No se aconseja el tratamiento odontológico hasta los 6 meses después de que el paciente haya sufrido IAM", b: "Los fármacos antagonistas del calcio que se emplean como antihipertensivos pueden producir hiperplasia gingival", c: "Los cambios de posición en el sillón dental no afectan a la tensión arterial", d: "Ante pacientes con tratamiento anticoagulante debe considerarse el control del INR el mismo día del tratamiento odontológico" },
  correct: "c",
  free: false
},
{
  id: 128,
  question: "Si durante el tratamiento dental surge dolor precordial en un paciente con patología cardiovascular, ¿cuál de las siguientes afirmaciones es falsa?",
  options: { a: "Aflojar prendas de vestir ceñidas", b: "Nunca se debe administrar ningún analgésico, pues enmascarará los síntomas", c: "Suspender el tratamiento odontológico", d: "Reclinar al paciente, pero llevándolo a una posición semisentada, con la cabeza más alta que las piernas" },
  correct: "b",
  free: false
},
{
  id: 129,
  question: "¿Cuál de las siguientes manifestaciones orales de pacientes que padecen Diabetes Mellitus es falsa?",
  options: { a: "Puede aparecer xerostomía a causa de la disminución del volumen del líquido extracelular debido al aumento de la excreción de orina", b: "Tienen una mayor prevalencia de estomatitis aftosa recidivante que la población en general", c: "Presentan una mayor frecuencia de aparición de abscesos periodontales que la población en general", d: "Su mantenimiento periodontal es más complicado que el de la población general" },
  correct: "b",
  free: false
},
{
  id: 130,
  question: "¿Cuál de las siguientes manifestaciones orales de hipoparatiroidismo es falsa?",
  options: { a: "Exostosis", b: "Anodoncia", c: "Hipoplasia del esmalte", d: "Presencia de pulpolitos" },
  correct: "a",
  free: false
},
{
  id: 131,
  question: "¿Cuál de las siguientes afirmaciones sobre el protocolo de extracciones dentarias del paciente con coagulopatías congénitas es verdadera?",
  options: { a: "La utilización de la anestesia intraligamentosa es de gran utilidad", b: "Siempre que se pueda administrar anestesia Troncular", c: "Realizar las exodoncias generalmente a última hora", d: "Mejor realizar exodoncia que una endodoncia por el riesgo de provocar hematomas si sobrepasamos ápice" },
  correct: "a",
  free: false
},
{
  id: 132,
  question: "En la adaptación del riesgo ASA utilizada en tratamientos ambulatorios odontológicos, ¿cuál de estas afirmaciones es incorrecta?",
  options: { a: "El paciente con ansiedad moderada es un ASA I", b: "Paciente con IAM de más de tres años es ASA III", c: "Una embarazada sana es ASA I", d: "Un paciente con IAM de 3 meses es ASA IV" },
  correct: "c",
  free: false
},
{
  id: 133,
  question: "¿Cuál de estos fármacos no es obligatorio que aparezcan en la unidad farmacológica del botiquín, según la legislación andaluza?",
  options: { a: "Atropina", b: "Captopril", c: "Adrenalina", d: "Teofilina" },
  correct: "b",
  free: false
},
{
  id: 134,
  question: "Señale la respuesta verdadera con respecto a la RCP básica:",
  options: { a: "Debe iniciarse antes de los 6 min de parada", b: "En la fase A se atiende a la ventilación del paciente", c: "La maniobra frente-mentón no debe realizarse hasta el final", d: "En la fase A es útil la cánula de Guedel" },
  correct: "d",
  free: false
},
{
  id: 135,
  question: "La diarrea que se produce tras el consumo de ácido clavulánico, en ocasiones es:",
  options: { a: "Una RAM leve y tipo A", b: "Una RAM leve y tipo B", c: "Una RAM moderada y Tipo C", d: "No se trata de una RAM" },
  correct: "a",
  free: false
},
{
  id: 136,
  question: "Para hacer profilaxis de las RAM no se recomienda:",
  options: { a: "Usar el fármaco sólo si existe indicación", b: "Utilizar medicamentos mono componentes", c: "Prescribir pocos fármacos simultáneamente", d: "Utilizar fármacos conocidos por el dentista" },
  correct: "b",
  free: false
},
{
  id: 137,
  question: "¿Cuál de estos fármacos tiene efecto “antabus”?",
  options: { a: "Metronidazol", b: "Alopurinol", c: "Azitromicina", d: "Doxiciclina" },
  correct: "a",
  free: false
},
{
  id: 138,
  question: "¿En cuál de estos elementos se podría sustituir la esterilización por desinfección de alto nivel?",
  options: { a: "Condensadores de amalgama", b: "Fresas de tallado 26", c: "Puntas de ultrasonido", d: "Fórceps infantiles" },
  correct: "a",
  free: false
},
{
  id: 139,
  question: "Con respecto a la hepatitis B, señale la incorrecta:",
  options: { a: "El 60% cursan como asintomáticas o leves", b: "El 90% se recuperan totalmente", c: "El 50% de los recuperados son HBs negativos", d: "Puede haber portadores crónicos del HBs sin lesión hepática" },
  correct: "c",
  free: false
},
{
  id: 140,
  question: "En un accidente por inoculación de un paciente desconocido, con respecto a la profilaxis frente al VHB debe hacerse:",
  options: { a: "Analizar los anti-HBS de la persona expuesta", b: "Tratar si hay anti-HBS > 10 mU/ml", c: "Tratar al positivo como no vacunado", d: "Todas son ciertas" },
  correct: "a",
  free: false
},
{
  id: 141,
  question: "De entre las lesiones orales comúnmente asociadas al VIH, ¿cuál no corresponde al grupo I?:",
  options: { a: "Candidiasis eritematosa", b: "Estomatitis necrotizante", c: "Sarcoma de Kaposi", d: "Eritema gingival lineal" },
  correct: "b",
  free: false
},
{
  id: 142,
  question: "Con respecto a la mucositis post-radioterapia, señale la incorrecta:",
  options: { a: "Las lesiones aparecen a los 8-15 días del inicio", b: "Suelen desaparecer a los 3-6 meses", c: "Las dosis han de ser superiores a los 10 Gy", d: "Suelen ser muy dolorosas" },
  correct: "b",
  free: false
},
{
  id: 143,
  question: "Con respecto al tratamiento de las complicaciones orales de la radioterapia no es cierto que:",
  options: { a: "Se utilicen enjuagues con bicarbonato", b: "Sea útil la lidocaína en gel", c: "Sea útil el enjuague con limón", d: "Sea útil la amoxicilina" },
  correct: "c",
  free: false
},
{
  id: 144,
  question: "En el Herpes simple y la gingivoestomatitis herpética, ¿qué tipo de tratamiento es selectivo?",
  options: { a: "Amoxicilina", b: "Sulfamidas", c: "Aciclovir", d: "Tetraciclinas" },
  correct: "c",
  free: false
},
{
  id: 145,
  question: "En las candidiasis, ¿qué tratamiento es más selectivo?",
  options: { a: "Aciclovir", b: "Eritromicina", c: "Fluconazol", d: "Penicilina" },
  correct: "c",
  free: false
},
{
  id: 146,
  question: "En un paciente con leucemia, si tuviéramos que hacer una exodoncia de urgencia, ¿qué deberíamos de hacer, como primera medida?",
  options: { a: "Dar oxígeno", b: "Dar concentrado de plaquetas", c: "Dar analgésicos", d: "Dar bismuto coloidal" },
  correct: "b",
  free: false
},
{
  id: 147,
  question: "¿Por qué no se debe realizar restricción física en un niño con osteogénesis imperfecta a la hora de manejarlo en el gabinete odontológico?",
  options: { a: "Diabetes", b: "Fragilidad ósea", c: "Retraso mental", d: "Autismo" },
  correct: "b",
  free: false
},
{
  id: 148,
  question: "Señale la opción falsa: La restricción física debe realizarse:",
  options: { a: "Según normativa legal", b: "Requiere documentación", c: "No debe causar daño físico", d: "En todos los pacientes especiales" },
  correct: "d",
  free: false
},
{
  id: 149,
  question: "En el paciente con fisura palatina debemos tomar precauciones especiales a la hora de:",
  options: { a: "Tomar impresiones", b: "Tallar un diente", c: "Colocar un tornillo de ortodoncia", d: "Administrar anestesia local" },
  correct: "a",
  free: false
}
  {
  id: 150,
  question: "La restricción física en el tratamiento odontológico de minusválidos psicofísicos se utilizará:",
  options: { a: "Con todos los pacientes", b: "Cuando sea absolutamente necesaria", c: "Como primera alternativa de manejo de conducta", d: "Sólo en edades de desarrollo tempranas" },
  correct: "b",
  free: false
},
{
  id: 151,
  question: "Cuando un paciente no coopera y necesita tratamiento dental mínimo (Clase VI de Menious), debe tratarse:",
  options: { a: "Bajo sedación, en citas cortas", b: "Con restricción física en citas cortas", c: "Bajo anestesia general", d: "Con técnicas de desensibilización (decir-mostrar-hacer)" },
  correct: "c",
  free: false
},
{
  id: 152,
  question: "Señale la opción correcta acerca de los comas hipo o hipoglucémicos:",
  options: { a: "El coma hipoglucémico se da por deficiencia absoluta de insulina", b: "El coma hipoglucémico se es de instauración rápida", c: "El coma hipoglucémico se trata con insulina", d: "Ante la duda, el coma en un paciente diabético se tratará como hipoglucémico" },
  correct: "d",
  free: false
},
{
  id: 153,
  question: "Señale cuál de las siguientes afirmaciones es falsa respecto al embarazo y la enfermedad periodontal",
  options: { a: "Durante el embarazo aumenta la vasoconstricción capilar gingival", b: "Se reduce la queratinización epitelial, lo que provoca mayor labilidad a la placa bacteriana", c: "La enfermedad periodontal en el embarazo puede provocar bajo peso del bebé al nacer", d: "Se produce un aumento de prostaglandinas durante el embarazo" },
  correct: "a",
  free: false
},
{
  id: 154,
  question: "Señale la afirmación correcta acerca del granuloma piógeno:",
  options: { a: "Suele aparecer en el primer trimestre", b: "Se suele dar principalmente por palatino del maxilar superior", c: "Está relacionado con el aumento de placa", d: "Ninguna es correcta, todas son falsas" },
  correct: "c",
  free: false
},
{
  id: 155,
  question: "¿Cuál de los siguientes fármacos pertenece a la categoría X (nunca debe darse a pacientes embarazadas) de la clasificación del riesgo de medicación en el embarazo?:",
  options: { a: "Ácido fólico", b: "Paracetamol", c: "Amoxicilina", d: "Estreptomicina" },
  correct: "d",
  free: false
},
{
  id: 156,
  question: "Señale la afirmación falsa acerca del manejo odontológico si la paciente consumidora de anticonceptivos orales:",
  options: { a: "Mayor tendencia a padecer gingivitis", b: "Mayor tendencia a padecer alveolitis seca post-extracción", c: "Mayor tendencia a padecer pulpitis aguda ante caries", d: "Todas son correctas, ninguna es falsa" },
  correct: "c",
  free: false
},
{
  id: 157,
  question: "Acude a consulta una paciente que lleva recibiendo bisfosfonatos por vía intravenosa más de 8 años. ¿Qué procedimientos podemos llevar a cabo?:",
  options: { a: "Cirugía de remodelado óseo", b: "Exodoncias", c: "Cirugía periodontal", d: "Ninguno de los anteriores" },
  correct: "d",
  free: false
},
{
  id: 158,
  question: "¿Cuál de las siguientes afirmaciones acerca del paciente psiquiátrico tipo B (demencia) es incorrecta desde el punto de vista odontológico?:",
  options: { a: "Se deben mantener los dientes con pronóstico incierto a toda costa", b: "Hay que mantener la mayor cantidad posible de dientes pares en oclusión", c: "Poner corona de recubrimiento total en todo diente susceptible", d: "Todas las afirmaciones son correctas" },
  correct: "a",
  free: false
},
{
  id: 159,
  question: "¿Cuál de las siguientes demencias cerebrales es irreversible?:",
  options: { a: "Demencia por drogas", b: "Demencia por Alzheimer", c: "Demencia endocrina", d: "Demencia por sífilis" },
  correct: "b",
  free: false
},
{
  id: 160,
  question: "¿Qué manifestaciones orales nos podemos encontrar en una paciente bulímica?",
  options: { a: "Erosiones dentales", b: "Sensibilidad dentaria", c: "Enfermedad periodontal", d: "Todas las anteriores" },
  correct: "d",
  free: false
},
{
  id: 161,
  question: "¿Cuál de los siguientes síndromes es una cromosomopatía?",
  options: { a: "Síndrome de T Co", b: "Síndrome de Down", c: "Síndrome de W", d: "Ninguno de los anteriores" },
  correct: "b",
  free: false
},
{
  id: 162,
  question: "¿Cuál de las siguientes características orales no suele estar asociada al síndrome de Down?",
  options: { a: "Ausencia de frenillos linguales", b: "Macroglosia", c: "Úvula bífida", d: "Múltiples agenesias" },
  correct: "a",
  free: false
},
{
  id: 163,
  question: "Señale la opción incorrecta acerca de las características clínicas y en manejo odontológico del paciente con parálisis cerebral",
  options: { a: "Suelen requerir un tratamiento multidisciplinario", b: "Suelen requerir tratamiento bajo anestesia general o sedación", c: "Suelen presentar alteraciones en la deglución", d: "Todas las opciones anteriores son correctas" },
  correct: "d",
  free: false
},
{
  id: 164,
  question: "Señale la opción falsa con relación a la clasificación de Menious acerca de las categorías de manejo:",
  options: { a: "Clase II: el paciente razona y acepta eventualmente los procedimientos dentales tras una explicación adecuada", b: "Clase IV: el paciente necesita restricciones físicas y sedación para controlar su comportamiento", c: "Clase V: el paciente no coopera, necesita tratamiento dental mínimo y se le trata con restricción física en citas cortas", d: "Clase I: paciente que se puede tratar rutinariamente y acepta procedimientos dentales" },
  correct: "c",
  free: false
},
{
  id: 165,
  question: "¿Cuál de los siguientes fármacos no se emplean en sedación intravenosa?",
  options: { a: "Sevorane", b: "Propofol", c: "Ketamina", d: "Remifentanilo" },
  correct: "a",
  free: false
},
{
  id: 166,
  question: "Indique la afirmación falsa acerca de las benzodiacepinas",
  options: { a: "Se emplean por su efecto inhibitorio del sistema nervioso central", b: "Tienen efecto amnésico", c: "El flunitrazepam es una benzodiacepina", d: "Todas son verdaderas, ninguna es falsa" },
  correct: "d",
  free: false
},
{
  id: 167,
  question: "Señale la clase ASA en la que se encontraría un paciente con condición sistémica severa que limita actividades, pero no es incapacitante:",
  options: { a: "ASA IV", b: "ASA III", c: "ASA VII", d: "ASA II" },
  correct: "b",
  free: false
},
{
  id: 168,
  question: "Señale la afirmación correcta acerca del tratamiento odontológico bajo anestesia general:",
  options: { a: "Bajo anestesia general se recomienda siempre hacer la fase quirúrgica del tratamiento periodontal", b: "En la preparación para prótesis fija bajo anestesia general, los tallados han de ser subgingivales", c: "Se debe comenzar por los procedimientos restauradores", d: "Todas son falsas" },
  correct: "d",
  free: false
},
{
  id: 169,
  question: "¿En cuál de los siguientes casos, el uso de simpaticomiméticos (adrenalina, epinefrina) asociados a los anestésicos locales estaría contraindicado, en principio?",
  options: { a: "Consumidores de inhibidores de la MAO", b: "Consumidores de antidepresivos tricíclicos", c: "Consumidores de diuréticos tiazídicos", d: "Todos los casos anteriores son contraindicaciones" },
  correct: "d",
  free: false
},
{
  id: 170,
  question: "Señale la afirmación incorrecta con respecto a la endocarditis infecciosa:",
  options: { a: "Estreptococos y estafilococos son los microorganismos más frecuentes", b: "La endocarditis infecciosa también puede ser de origen viral o micótico", c: "Afecta a las válvulas cardíacas, pero nunca a las prótesis valvulares implantadas", d: "Para su profilaxis en adultos se recomienda 2g de amoxicilina una hora antes" },
  correct: "c",
  free: false
},
{
  id: 171,
  question: "Acude a la consulta un paciente para una extracción dentaria simple de un 44 refiere que consume Warfarina y que esa mañana tiene un INR de 2.2. ¿Qué es lo mejor que se podría hacer?",
  options: { a: "Se procederá a realizar la extracción, pues con un INR de 2,2 el riesgo de hemorragia es bajo", b: "Se le indicará al paciente que suspenda la toma de Warfarina durante tres días y entonces se procederá a la extracción", c: "El odontólogo le cambiará la pauta de Warfarina por pauta de heparina y se procederá a la extracción", d: "Todas son barbaridades. A este paciente no se le puede hacer una exodoncia bajo ningún concepto" },
  correct: "a",
  free: false
},
{
  id: 172,
  question: "Señale la opción incorrecta con respecto a los fármacos antiagregantes:",
  options: { a: "Muchas pacientes por encima de 50 años toman aspirina para prevenir posibles problemas cardiovasculares", b: "Si porta stent, se deja la ticlopidina y se retira la aspirina, añadiendo el clopidogrel", c: "Se considera que si el tiempo de hemorragia es menor a 20 minutos no hay mayor riesgo de hemorragia, incluso consumiendo los citados fármacos", d: "Si el stent es farmacológico el paciente ha de estar antiagregado de por vida" },
  correct: "b",
  free: false
},
{
  id: 173,
  question: "Señale la opción incorrecta con respecto a la hemofilia y trastornos de la coagulación:",
  options: { a: "La hemofilia A es una enfermedad derivada del déficit de factor VIII", b: "En hemofílicos B si el nivel de factor está por debajo de 40 %, se hará una reposición", c: "En el paciente que desarrolla anticuerpos contra el factor VIII, se controla su sangrado administrando factor IX", d: "La enfermedad de Von Willebrand es la alteración hematológica más común en hombres y mujeres" },
  correct: "c",
  free: false
},
{
  id: 174,
  question: "Señale la opción incorrecta con respecto al paciente diabético:",
  options: { a: "No existen manifestaciones orales típicas de la Diabetes Mellitus", b: "Rara vez aparecen casos de periodontitis en pacientes diabéticos", c: "Estos pacientes suelen tener mayor prevalencia de caries", d: "Suelen tener mayor prevalencia de síndrome de boca ardiente" },
  correct: "b",
  free: false
}
  {
  id: 175,
  question: "Con respecto a las complicaciones de la diabetes en el gabinete dental, señale la opción correcta:",
  options: { a: "Si el paciente presenta piel seca y caliente y respira rápido, lo más probable es que se trate de una hipoglucemia", b: "Si el paciente presenta un estado de confusión mental y nota náuseas y hambre, lo más probable es que se trate de una hiperglucemia", c: "Si hay dudas sobre diagnóstico de hipo o hiperglucemia, se debe administrar glucosa", d: "La hiperglucemia aparece tras corta evolución y es la complicación más frecuente de la diabetes" },
  correct: "c",
  free: false
}
{
  id: 176,
  question: "El signo de Russel:",
  options: { a: "Se da en los pacientes con esquizofrenia paranoide", b: "Aparece en el paladar de las pacientes bulímicas", c: "Aparece en los nudillos de la anorexia vomitado", d: "Sólo se dan en las anoréxicas vigoréxicas de gimnasio" },
  correct: "c",
  free: false
}
{
  id: 177,
  question: "El \"padre\" de la Odontología en Pacientes especiales es:",
  options: { a: "Dr. Manuel Bratos", b: "Dr. Horace H. Wells", c: "Dr. Manuel L. Album", d: "Lord Chesnut y el Dr. Turtle-Hare" },
  correct: "c",
  free: false
}
{
  id: 178,
  question: "En las mujeres embarazadas, señale la opción incorrecta con respecto a su estado oral:",
  options: { a: "La patología periodontal del embarazo debuta de manera grave pero mejora espontáneamente a medida que avanza el embarazo", b: "Los elevados niveles de estrógenos y progesterona en el embarazo hacen que aumente la inflamación gingival", c: "Las hormonas del embarazo alteran el sustrato de las bacterias orales, lo que provoca su crecimiento", d: "Clínicamente, la encía de la embarazada aumenta de tamaño y presenta tumefacción" },
  correct: "a",
  free: false
}
{
  id: 179,
  question: "Indique la afirmación correcta con respecto al manejo odontológico de la paciente embarazada:",
  options: { a: "El estado periodontal de la embarazada afectará a su periodonto, pero no ocasionará problemas ni a la gestación ni al feto", b: "Se debe evitar la amoxicilina con clavulánico y la aspirina", c: "Bajo ningún concepto se emplearán en embarazadas anestésicos locales con vasoconstrictores", d: "El antibiótico de elección durante el embarazo es la tetraciclina" },
  correct: "b",
  free: false
}
{
  id: 180,
  question: "Señale la afirmación incorrecta con respecto al tratamiento odontológico durante la lactancia:",
  options: { a: "El riesgo principal de las pacientes que se encuentran amamantando viene referido por la secreción de fármacos a través de la leche", b: "Si el tratamiento es esencial, se debe administrar después de dar el pecho al niño", c: "Se preferirá administrar ibuprofeno antes que ácido acetilsalicílico como antiinflamatorio", d: "Se preferirá administrar amoxicilina antes que metronidazol como antibiótico" },
  correct: "d",
  free: false
}
{
  id: 181,
  question: "Señale la afirmación incorrecta con respecto al manejo odontológico de la paciente en tratamiento con anticonceptivos:",
  options: { a: "Suelen presentar mayor incidencia de alveolitis seca tras la extracción de los terceros molares", b: "Los efectos indeseables de los anticonceptivos orales son los mismos que se observan en la cavidad oral de las gestantes", c: "El uso prolongado de anticonceptivos orales con estrógenos puede conducir a la aparición de lesiones periodontales", d: "Los anticonceptivos orales no interaccionan con otros fármacos pues son hormonas naturales del organismo" },
  correct: "d",
  free: false
}
{
  id: 182,
  question: "Señale la opción correcta con respecto al estado odontológico de la paciente postmenopáusica:",
  options: { a: "La osteoporosis es el factor más importante en la patogenia de la periodontitis en la mujer postmenopáusica", b: "El síndrome de ardor bucal es igual de prevalente en hombres y mujeres mayores", c: "El tratamiento hormonal sustitutivo mejora la sintomatología del síndrome de ardor bucal en mujeres postmenopáusicas", d: "Todas las opciones anteriores son correctas" },
  correct: "c",
  free: false
}
{
  id: 183,
  question: "Paciente de 72 años, con antecedentes de consumo de bifosfonatos (BFF) por vía intravenosa durante 11 años, acude a la clínica para realizarse extracciones del 34 y 35. ¿Qué se debe hacer?",
  options: { a: "Se extraerán las piezas como en el caso de pacientes que no consumen bifosfonatos", b: "Se extraerán las piezas usando esponja de fibrina y suturando la herida", c: "Se indicará al paciente que suspenda el consumo de bifosfonatos durante dos semanas y se procederá a la extracción una vez transcurrido ese plazo de tiempo", d: "No se procederá a la extracción hasta que no se cumpla un protocolo marcado por el médico (suspensión 1-3 meses antes)" },
  correct: "d",
  free: false
}
{
  id: 184,
  question: "Señale la opción incorrecta con respecto a las enfermedades sistémicas del anciano con repercusión en el tratamiento odontológico:",
  options: { a: "El tratamiento con antidepresivos tricíclicos suele provocar cuadros de boca seca asociados a patología dental", b: "En caso de demencia senil, cualquier tratamiento odontológico importante ha de hacerse en las fases previas de la enfermedad", c: "La osteoartritis de estos pacientes no afecta al movimiento de la ATM", d: "La enfermedad de Parkinson puede hacer difícil el mantener la prótesis removible en su lugar" },
  correct: "c",
  free: false
}
{
  id: 185,
  question: "¿Cuál de los siguientes cambios en los tejidos dentales no se asocia al envejecimiento?",
  options: { a: "Aparición de perlas de esmalte radiculares", b: "Aumento de la frecuencia de pulpólitos", c: "Aparición de grietas y fisuras en el esmalte", d: "Estrechamiento del diámetro pulpar" },
  correct: "a",
  free: false
}
{
  id: 186,
  question: "Si realizamos un remodelado óseo mandibular en un paciente que lleva 15 años consumiendo bifosfonatos por vía oral, ¿Qué complicación podríamos encontrarnos con más probabilidad?",
  options: { a: "Osteonecrosis mandibular", b: "Cicatrización tórpida de la mucosa oral", c: "Sobreinfección del tejido blando", d: "Imposibilidad de controlar el sangrado" },
  correct: "a",
  free: false
}
{
  id: 187,
  question: "Señale la opción incorrecta con respecto al manejo odontológico del paciente depresivo y maniacodepresivo:",
  options: { a: "Los pacientes con trastorno bipolar suelen ser tratados con litio, lo que puede provocar xerostomía y estomatitis", b: "Los antidepresivos tricíclicos presentan muchas interacciones con otros medicamentos", c: "Los antidepresivos tricíclicos provocan hipersalivación profusa que debe ser tratada con anticolinérgicos", d: "Al administrar anestésicos con adrenalina, se podrá dar un caso raro de hipotensión en pacientes tratados con fenitoína" },
  correct: "c",
  free: false
}
{
  id: 188,
  question: "¿En cuál de las siguientes patologías deberá prescribirse al paciente profilaxis antibiótica ante procedimientos que conllevan sangrado?",
  options: { a: "Comunicación interauricular", b: "Historia previa de infarto de miocardio", c: "Disfunciones valvulares adquiridas", d: "En todas las patologías anteriores se administrará profilaxis antibiótica previa" },
  correct: "c",
  free: false
}
{
  id: 189,
  question: "¿Cuál de los siguientes procedimientos dentales no exige una profilaxis antibiótica previa?",
  options: { a: "Tratamiento endodóntico", b: "Anestesia local intraligamentosa", c: "Anestesia troncular en dentario inferior", d: "Colocación de bandas de ortodoncia" },
  correct: "c",
  free: false
}
{
  id: 190,
  question: "¿Cuál de los siguientes fármacos inyectables no se considera esencial tener en la clínica dental ante situaciones de urgencia /emergencia?",
  options: { a: "Adrenalina", b: "Corticoides", c: "Morfina", d: "Antihistamínicos" },
  correct: "c",
  free: false
}
{
  id: 191,
  question: "Ante un shock anafiláctico, señale la afirmación incorrecta sobre cómo se debería actuar:",
  options: { a: "Administrar adrenalina intramuscular inmediatamente", b: "El shock anafiláctico debe ser tratado con antihistamínicos para revertir la reacción", c: "Las vías aéreas deben mantenerse permeables", d: "Es imprescindible llamar a urgencias" },
  correct: "b",
  free: false
}
{
  id: 192,
  question: "¿Cuál es la definición de shock anafiláctico?",
  options: { a: "Es una reacción alérgica grave que afecta a todo el organismo", b: "Es una reacción localizada que afecta solo a la piel", c: "Es una reacción alérgica que aparece solo en la cavidad oral", d: "Es una reacción producida por una infección bacteriana" },
  correct: "a",
  free: false
}
{
  id: 193,
  question: "¿Qué es la disnea?",
  options: { a: "Sensación de dificultad respiratoria", b: "Dolor torácico", c: "Alteración en el ritmo cardiaco", d: "Pérdida de conciencia" },
  correct: "a",
  free: false
}
{
  id: 194,
  question: "¿Cuál de los siguientes signos es característico de la angina de pecho?",
  options: { a: "Dolor precordial opresivo que cede con reposo", b: "Dolor abdominal intenso", c: "Dolor abdominal difuso", d: "Dolor lumbar" },
  correct: "a",
  free: false
}
{
  id: 195,
  question: "En el tratamiento odontológico del paciente con angina de pecho, la anestesia local debe:",
  options: { a: "Evitarse", b: "Administrarse con vasoconstrictor pero en dosis bajas", c: "Administrarse sin vasoconstrictor", d: "Administrarse en gran cantidad para controlar el dolor" },
  correct: "b",
  free: false
}
{
  id: 196,
  question: "En el paciente con insuficiencia cardiaca congestiva, ¿cuál es la mejor posición para la atención odontológica?",
  options: { a: "Decúbito supino", b: "Semi-Fowler o sentado", c: "Decúbito prono", d: "Decúbito lateral" },
  correct: "b",
  free: false
}
{
  id: 197,
  question: "La insuficiencia renal crónica en el paciente que acude al odontólogo es especialmente relevante por:",
  options: { a: "El riesgo de hemorragia", b: "El riesgo de infección", c: "La toxicidad de los fármacos", d: "Todas las anteriores" },
  correct: "d",
  free: false
}
{
  id: 198,
  question: "En pacientes con epilepsia, ¿qué medida se debe tomar para evitar complicaciones durante la atención odontológica?",
  options: { a: "Administrar siempre anestesia local con vasoconstrictor", b: "Evitar interrupciones en el tratamiento anticonvulsivante", c: "Administrar sedación profunda en todas las sesiones", d: "Evitar cualquier tratamiento dental" },
  correct: "b",
  free: false
}
{
  id: 199,
  question: "¿Cuál es el tratamiento de elección en pacientes con trastornos convulsivos para procedimientos odontológicos?",
  options: { a: "Sedación consciente", b: "Sedación profunda", c: "Anestesia general", d: "Evitar tratamiento dental" },
  correct: "a",
  free: false
}
  {
    id: 200,
    question: "El nódulo como lesión elemental es:",
    options: {
      a: "Una lesión sólida de tejido epitelial",
      b: "Una lesión ulcerada",
      c: "Una lesión de tejido conectivo",
      d: "Una lesión verrucosa"
      },
      correct: "c",
      free: false
  },
  {
  id: 201,
  question: "Cite lo correcto:",
  options: { a: "La fracción C3a se considera responsable de la rotura de la pared celular en la etiopatogenia de las aftas", b: "La fracción C5a ejerce un efecto quimiotáctico sobre los PMN", c: "La fracción C3b es precursora de la C3a", d: "Ninguna de las anteriores es cierta" },
  correct: "b",
  free: false
}
{
  id: 202,
  question: "La vesícula como lesión elemental:",
  options: { a: "Es una lesión circunscrita elevada de > 5mm", b: "Siempre tiene una cubierta muy fina", c: "Puede ser única o múltiple dependiendo si es de origen intraepitelial o subepitelial", d: "Ninguna de las anteriores es cierta" },
  correct: "b",
  free: false
}
{
  id: 203,
  question: "Cite la aseveración incorrecta con respecto a la exploración de los labios:",
  options: { a: "Su piel es una gruesa capa adherida a las fibras musculares subyacentes", b: "La capa muscular está formada por el músculo orbicular y fibras accesorias", c: "El tejido glandular está formado exclusivamente por glándulas salivales formando una capa muy discontinua", d: "Constituyen la pared anterior de la boca y forman una región impar en la que asientan algunas patologías específicas" },
  correct: "a",
  free: false
}
{
  id: 204,
  question: "Si hablamos de degeneración hidrópica es un fenómeno que:",
  options: { a: "Se produce generalmente como un edema y degeneración de la capa espinosa", b: "Se produce generalmente como un edema y degeneración de la capa basal", c: "Se produce de igual manera en todas las capas del epitelio", d: "Se produce sobre todo en las capas más superficiales del epitelio" },
  correct: "b",
  free: false
}
{
  id: 205,
  question: "El epitelio oral es:",
  options: { a: "Plano estratificado", b: "Cilíndrico estratificado", c: "Es un epitelio plano de revestimiento", d: "Es un epitelio queratinizado" },
  correct: "a",
  free: false
}
{
  id: 206,
  question: "Las glándulas de Von Ebner:",
  options: { a: "Se encuentran en el paladar", b: "Se encuentran relacionadas con las papilas fungiformes", c: "Se encuentran relacionadas con las papilas caliciformes", d: "Ninguna es cierta" },
  correct: "c",
  free: false
}
{
  id: 207,
  question: "Cite qué glándulas salivales se consideran de producción mixta:",
  options: { a: "Glándulas de Von Ebner", b: "Glándulas de Blandin", c: "Glándula parótida", d: "Glándulas palatinas" },
  correct: "b",
  free: false
}
{
  id: 208,
  question: "Cite cuál de los siguientes dolores no se considera visceral:",
  options: { a: "Dolor dental", b: "Dolor glandular", c: "Dolor del pénfigo vulgar", d: "Dolor vascular" },
  correct: "a",
  free: false
}
{
  id: 209,
  question: "Cite lo incorrecto con respecto a la exploración de un paciente con cefalea en racimos:",
  options: { a: "Suele despertarle", b: "Suele ser bilateral", c: "Es poco frecuente comparada con otras cefaleas", d: "Afecta principalmente a los hombros" },
  correct: "d",
  free: false
}
{
  id: 210,
  question: "Las situaciones de emergencia más frecuentes en una consulta dental son todas las señaladas menos la siguiente (indicarla):",
  options: { a: "Lipotimia", b: "Hipotensión ortostática", c: "Infarto de miocardio", d: "Accidente cerebrovascular agudo" },
  correct: "d",
  free: false
}
{
  id: 211,
  question: "¿Qué tratamiento no debe utilizarse en caso de ataque epiléptico en la consulta?",
  options: { a: "Vía aérea libre", b: "Diazepam", c: "Estirar en el suelo", d: "Eufilina" },
  correct: "d",
  free: false
}
{
  id: 212,
  question: "Los dentistas tienen un riesgo superior a otras profesiones de contraer la hepatitis B debido a que:",
  options: { a: "Por la persistencia del virus en sangre, líquido crevicular y saliva", b: "Porque el virus atraviesa el látex de los guantes ya que debido a su pequeño tamaño atraviesa los poros nanométricos del material del que están hechos los guantes", c: "a y b son correctas", d: "Los dentistas no tienen un riesgo superior a otras profesiones de contraer la hepatitis B" },
  correct: "a",
  free: false
}
{
  id: 213,
  question: "El pénfigo vulgar es:",
  options: { a: "Es un trastorno cutáneo autoinmunitario caracterizado por ampollas en la piel y en las membranas mucosas", b: "Un trastorno cutáneo de etiología múltiple que se diagnostica por Inmunofluorescencia directa", c: "Un trastorno de la mucosa oral que se diagnostica por ELISA", d: "Ninguna de las anteriores es correcta por una u otra razón" },
  correct: "a",
  free: false
}
{
  id: 214,
  question: "La enfermedad de Behçet es una enfermedad inflamatoria y multisistémica de curso crónico. Entre los síntomas de la enfermedad se destacan:",
  options: { a: "Las úlceras orales", b: "Las úlceras orales, en los ojos y en los testículos", c: "Estomatitis aftosa, úlceras genitales y uveítis", d: "Las úlceras orales, plantares y palmares" },
  correct: "c",
  free: false
}
{
  id: 215,
  question: "El síndrome de Down es una anomalía cromosómica que consiste en:",
  options: { a: "Una diploidía del cromosoma 21", b: "Una trisomía del cromosoma 23", c: "Tres copias del cromosoma 21", d: "Una translocación de la región centriolar del cromosoma 23" },
  correct: "c",
  free: false
}
{
  id: 216,
  question: "En pacientes con cardiopatías isquémicas que requieran anestesia:",
  options: { a: "Se consultará previamente con el cardiólogo", b: "Se utilizarán directamente anestésicos que no contengan vasoconstrictores", c: "Se empleará óxido nitroso inhalado", d: "No se harán tratamientos odontológicos que requieran anestesia" },
  correct: "a",
  free: false
}
{
  id: 217,
  question: "Los pacientes afectos de diabetes mellitus:",
  options: { a: "Pobremente controlados están bajo un gran riesgo de desarrollar infecciones y pueden manifestar retardo en la curación de las heridas", b: "Tienen el mismo riesgo de desarrollar infecciones, aunque suelen manifestar retardo en la curación de las heridas", c: "Pobremente controlados no tienen mayor riesgo de desarrollar infecciones, pero pueden manifestar retardo en la curación de las heridas", d: "Ninguna de las anteriores" },
  correct: "a",
  free: false
}
{
  id: 218,
  question: "La ciclosporina A es un fármaco inmunosupresor muy utilizado en trasplantados que tiene consecuencias orales",
  options: { a: "Incremento de la periodontitis", b: "Un cuadro de hinchazón con marcado carácter inflamatorio, encía hiperémica y tendencia a la hemorragia", c: "Xerostomía", d: "Menor número de mastocitos en el líquido crevicular" },
  correct: "b",
  free: false
}
{
  id: 219,
  question: "Los incrementos de las gingivitis en mujeres grávidas es debida a:",
  options: { a: "El estado de gravidez debilita las mucosas", b: "Se da un incremento y modificación de la microbiota oral", c: "El déficit nutricional hace que las encías se inflamen y sangren", d: "Ninguna de las anteriores" },
  correct: "b",
  free: false
}
{
  id: 220,
  question: "El tratamiento quirúrgico periodontal de pacientes diabéticos incontrolados:",
  options: { a: "Está desaconsejado", b: "Está prohibido", c: "Está contraindicado", d: "Debe tener precauciones especiales" },
  correct: "d",
  free: false
}
{
  id: 221,
  question: "Los tejidos afectados en la enfermedad periodontal son:",
  options: { a: "El epitelio gingival, ligamento periodontal y hueso alveolar", b: "El epitelio bucal, ligamento periodontal y hueso alveolar", c: "La mucosa gingival y hueso alveolar", d: "El epitelio gingival y la mucosa gingival" },
  correct: "a",
  free: false
}
{
  id: 222,
  question: "El signo cardinal que define a la enfermedad periodontal es:",
  options: { a: "El sangrado gingival", b: "La movilidad dentaria", c: "El dolor", d: "La inflamación" },
  correct: "a",
  free: false
}
{
  id: 223,
  question: "El edema gingival es producido por:",
  options: { a: "Incremento de la permeabilidad vascular", b: "Disminución de la permeabilidad vascular", c: "Disminución de la presión osmótica", d: "Ninguna es cierta" },
  correct: "a",
  free: false
}
{
  id: 224,
  question: "¿Qué antibiótico debe evitarse en pacientes con mononucleosis infecciosa?",
  options: { a: "Penicilina", b: "Amoxicilina", c: "Clindamicina", d: "Azitromicina" },
  correct: "b",
  free: false
}
  {
  id: 225,
  question: "La esclerosis múltiple se define como",
  options: { a: "Es una enfermedad autoinmunitaria que afecta al sistema nervioso central", b: "Afecta más a las mujeres que a los hombres", c: "Es una enfermedad autoinmunitaria que afecta al cerebro", d: "Es una enfermedad autoinmunitaria que afecta a la médula espinal" },
  correct: "a",
  free: false
},
{
  id: 226,
  question: "El lupus eritematoso sistémico es",
  options: { a: "Una enfermedad inflamatoria del tejido conectivo producida por la aparición de autoanticuerpos", b: "Una alteración hematológica que conlleva la aparición de múltiples petequias en los distintos aparatos y sistemas", c: "Una enfermedad caracterizada por una hipertricosis que confiere al enfermo un aspecto \"de hombre-lobo\"", d: "a, b y c son correctas" },
  correct: "a",
  free: false
},
{
  id: 227,
  question: "Los pacientes sometidos a quimioterapia antineoplásica suelen presentar xerostomía, este síntoma incrementa los niveles de microbiota y subsecuentemente el riesgo; para combatirla pueden utilizarse ciertas estrategias:",
  options: { a: "Uso de dentífricos adaptados", b: "Uso de colutorios exentos de alcohol", c: "a y b son correctas", d: "No hay tratamiento" },
  correct: "c",
  free: false
},
{
  id: 228,
  question: "Los pacientes que están bajo tratamientos anticoagulantes, presentan una modificación de los cuadros estomatológicos",
  options: { a: "Cambios en las proporciones de las especies microbianas orales", b: "Similares a los de las mujeres grávidas", c: "Caracterizados por un incremento de las poblaciones de Gramnegativos anaeróbicos", d: "Todas las anteriores" },
  correct: "d",
  free: false
},
{
  id: 229,
  question: "La enfermedad de von Willebrand",
  options: { a: "Es un trastorno congénito", b: "Es consecuencia de un déficit de plaquetas", c: "Mejora con aspirina", d: "a,b, c son correctas" },
  correct: "a",
  free: false
},
{
  id: 230,
  question: "En el paciente epiléptico",
  options: { a: "Se debe interrumpir el tratamiento en una crisis convulsiva", b: "Hay que asegurar el mantenimiento de la vía aérea", c: "No deben restringirse los movimientos y hay que aflojar la ropa", d: "a y c son correctas" },
  correct: "b",
  free: false
},
{
  id: 231,
  question: "El eritema gingival lineal es:",
  options: { a: "Se presenta como una banda o línea rojiza a lo largo de la encía", b: "Aparece más frecuentemente en los dientes anteriores", c: "Puede estar acompañada o no de sangrado y malestar", d: "a, b y c son correctas" },
  correct: "d",
  free: false
},
{
  id: 232,
  question: "¿En cuál de los siguientes pacientes no es necesario el uso de profilaxis antibiótica?",
  options: { a: "Paciente portador de Stents un año", b: "Diabéticos Tipo I", c: "Paciente portador de prótesis de cadera", d: "Paciente con artritis reumatoide" },
  correct: "a",
  free: false
},
{
  id: 233,
  question: "Según la clasificación de las reacciones adversas a medicamentos de Rawlins, qué tipo de reacción es aquella definida como “idiosincrática, se deben a mecanismos inmunológicos, no guardan relación con la dosis, son impredecibles e infrecuentes, pero pueden ser fatales.”",
  options: { a: "Tipo E", b: "Tipo D", c: "Tipo C", d: "Tipo B" },
  correct: "d",
  free: false
},
{
  id: 234,
  question: "Señale la opción incorrecta acerca de las interacciones farmacológicas",
  options: { a: "La amoxicilina reduce el efecto de los anticonceptivos orales", b: "El Metronidazol puede producir efecto Antabus combinado con el alcohol", c: "Los AINES pueden potenciar la acción de los anticoagulantes orales pudiendo provocar hemorragia postquirúrgica", d: "La Eritromicina es un fármaco del que no se conocen interacciones farmacológicas" },
  correct: "d",
  free: false
},
{
  id: 235,
  question: "¿Cuál de las siguientes familias de fármacos no produce dolor e inflamación de las glándulas salivales?",
  options: { a: "Pilocarpinas", b: "AINES", c: "Antitiroideos", d: "Antipsicóticos" },
  correct: "a",
  free: false
},
{
  id: 236,
  question: "Acude a la clínica paciente alérgico a penicilinas con un proceso infeccioso. El paciente refiere consumir Ciclosporina y Digoxina. ¿Qué fármaco no prescribiremos bajo ningún concepto por las posibles interacciones medicamentosas?",
  options: { a: "Clindamicina", b: "Azitromicina", c: "Doxiciclina", d: "Ninguno de los fármacos anteriores, pues todos presentan interacción con los fármacos que consume el paciente" },
  correct: "b",
  free: false
},
{
  id: 237,
  question: "¿Cuál de los siguientes objetos se considera semicrítico (que necesita esterilización o desinfección de alto nivel) a la hora de establecer las necesidades de descontaminación del material?",
  options: { a: "Botones del equipo dental", b: "Limas de endodoncia", c: "Fórceps", d: "Espejos intraorales" },
  correct: "b",
  free: false
},
{
  id: 238,
  question: "¿Qué es lo que no se debe hacer ante un accidente de inoculación del Virus Hepatitis B?",
  options: { a: "Lavar la herida con agua y jabón", b: "Chupar la herida y escupir para poder eliminar la sangre contaminada", c: "Obtener muestras de sangre en el momento, del accidentado y del paciente", d: "Lavar la herida con povidona yodada" },
  correct: "b",
  free: false
},
{
  id: 239,
  question: "Señale la afirmación incorrecta acerca del virus de la Hepatitis C",
  options: { a: "Es una enfermedad poco común en el ámbito odontológico", b: "Su desarrollo es asintomático", c: "No se posee vacuna contra dicha enfermedad", d: "Tiende a la cronificación" },
  correct: "a",
  free: false
},
{
  id: 240,
  question: "¿Cuál de las siguientes lesiones no es una lesión comúnmente asociada a la infección por VIH?",
  options: { a: "Candidiasis pseudomembranosa", b: "Leucoplasia Vellosa", c: "Aftosis oral recidivante", d: "PUNA" },
  correct: "d",
  free: false
},
{
  id: 241,
  question: "Señale la opción incorrecta acerca del tratamiento odontológico del paciente con VIH:",
  options: { a: "El odontólogo debe ponerse en contacto con el infectólogo", b: "Antes de iniciar el tratamiento con retroviral hay que eliminar las caries", c: "Antes de iniciar el tratamiento con retroviral hay que eliminar los focos infecciosos", d: "Está contraindicado actuar cuando el paciente tenga los CD4 < 500/mL" },
  correct: "d",
  free: false
},
{
  id: 242,
  question: "Señale la opción falsa acerca de las pautas de tratamiento dental del paciente con leucemia.",
  options: { a: "La quimioterapia puede producir náuseas", b: "Anestesia troncular en la mandíbula siempre que sea posible", c: "Utilizar la profilaxis antibiótica", d: "Disminuir el estrés en la medida de lo posible" },
  correct: "b",
  free: false
},
{
  id: 243,
  question: "¿Cuál de las siguientes es una medida preventiva durante la quimioterapia y la radioterapia?",
  options: { a: "Lubricación de labios y mucosas", b: "Realizar Extracciones preventivas", c: "Aplicar Aciclovir", d: "A y C son medidas preventivas a aplicar durante la quimioterapia y la radioterapia." },
  correct: "d",
  free: false
},
{
  id: 244,
  question: "Señale la opción correcta acerca del manejo odontológico del paciente sometido a radioterapia del cáncer de cabeza y cuello:",
  options: { a: "La radioterapia de cabeza y cuello no predispone a infecciones candidiásicas", b: "Los enjuagues fluorurados no son imprescindibles en el caso de xerostomía y caries rampante", c: "No es recomendable realizar exodoncias antes de la radioterapia en maxilar y mandíbula", d: "Puede producir placas de fibrosis en los músculos (trismo de MMSS)" },
  correct: "d",
  free: false
},
{
  id: 245,
  question: "Señale la opción correcta acerca de la auto inmunosupresión:",
  options: { a: "Se dirige a evitar posible rechazo postrasplante", b: "Se presenta con mayor frecuencia en la pirazinamida autógena", c: "La inmunosupresión no aumenta el riesgo de displasia ni de neoplasias orales", d: "Disminuye las defensas inmunológicas" },
  correct: "d",
  free: false
},
{
  id: 246,
  question: "Señale la opción correcta acerca del tratamiento odontológico del paciente trasplantado:",
  options: { a: "Son susceptibles de presentar hiperplasia gingival", b: "No necesitan tratamiento con antibióticos", c: "No requieren medidas profilácticas post-trasplante", d: "Son desaconsejables los tratamientos que interfieran a fin de la quimioterapia general" },
  correct: "a",
  free: false
},
{
  id: 247,
  question: "¿Cuál de los siguientes signos no es un signo clínico precoz de la ICFA?",
  options: { a: "Disnea", b: "Vértigo", c: "Taquicardia", d: "Intolerancia al ejercicio" },
  correct: "b",
  free: false
},
{
  id: 248,
  question: "Señale la opción incorrecta acerca del tratamiento odontológico del paciente con ICFA:",
  options: { a: "Los fármacos simpaticomiméticos pueden interferir con la adrenalina del anestésico local", b: "La duración de la consulta ha de ser lo más larga posible", c: "Se deben utilizar fármacos con vasoconstrictores con precauciones", d: "En caso de utilizar anestésico con adrenalina, se utilizará siempre la menor concentración posible" },
  correct: "b",
  free: false
},
{
  id: 249,
  question: "Señale la opción incorrecta acerca del protocolo de tratamiento odontológico del paciente con cardiopatía reumática:",
  options: { a: "Antes debe clarificarse si tiene antibioterapia", b: "Medicación suele ser TA con antibioticoterapia", c: "Pueden necesitar profilaxis oral previa", d: "Si el cuadro clínico permanece asintomático, no requiere tratamiento ni antibioticoterapia" },
  correct: "d",
  free: false
}
  {
  id: 250,
  question: "¿Cuál de los siguientes indicadores es el factor predictivo menor del riesgo cardíaco?",
  options: { a: "Insuficiencia cardíaca descompensada", b: "Ángor inestable", c: "Arritmias cardíacas grave", d: "Historia de hipertensión" },
  correct: "d",
  free: false
},
{
  id: 251,
  question: "¿Cuál de las siguientes causas no es una causa provocadora de arritmias?",
  options: { a: "Enfermedad Cardíaca", b: "Accidente Cerebro Vascular", c: "Desequilibrio electrolítico", d: "EPOC" },
  correct: "b",
  free: false
},
{
  id: 252,
  question: "Señale la opción incorrecta acerca de la gingivitis gravídica del embarazo:",
  options: { a: "Produce halitosis", b: "Puede ser dolorosa", c: "Las papilas interdentarias no suelen ser afectadas", d: "Se da entre el 2do y octavo mes del embarazo más frecuente" },
  correct: "c",
  free: false
},
{
  id: 253,
  question: "¿Cuál de los siguientes fármacos pertenece a la categoría D (teratogénicos potenciales en animales, en casos extremos debe considerarse su uso si los beneficios son superiores a los riesgos), de la clasificación de riesgo de medicación en el embarazo?",
  options: { a: "Talidomida", b: "Clindamicina", c: "Ketoconazol", d: "Metotrexato" },
  correct: "d",
  free: false
},
{
  id: 254,
  question: "Señale la opción incorrecta acerca de los anticonceptivos orales:",
  options: { a: "Las mujeres en tratamiento con estos fármacos presentan mayores niveles de la especie prevalente en la flora gingival", b: "Las mujeres en tratamiento con estos fármacos experimentan un aumento de dos a tres veces en la incidencia de estomatitis localizada después de la extracción del 3er molar mandibular", c: "Sus múltiples interacciones farmacológicas es el mayor riesgo que presentan", d: "Los fármacos tranquilizantes no presentan interacción con ellos" },
  correct: "d",
  free: false
},
{
  id: 255,
  question: "¿Cuál de las siguientes manifestaciones no es propia de la menopausia?",
  options: { a: "Palpitaciones", b: "Sofocos", c: "Hipersaliva", d: "Prurito" },
  correct: "c",
  free: false
},
{
  id: 256,
  question: "Con respecto al tratamiento con bifosfonato, señale la opción correcta:",
  options: { a: "En los bifosfonatos orales el período de riesgo no suele aparecer hasta pasados los 3 primeros años del inicio del tratamiento", b: "No es necesario realizar interconsulta con el médico", c: "La cirugía oral en pacientes bajo tratamiento con bifosfonato intravenoso es un procedimiento probablemente seguro", d: "El tratamiento periodontal básico es el contraindicado en pacientes bajo tratamiento con bifosfonatos orales" },
  correct: "a",
  free: false
},
{
  id: 257,
  question: "Señale la opción incorrecta acerca de los valores del telopéptido carboxiterminal de la telomerasa con respecto al riesgo de osteonecrosis:",
  options: { a: "Entre 300 y 600 pg/ml el riesgo de osteonecrosis es ninguno", b: "Menor de 100 pg/ml el riesgo de osteonecrosis es moderado", c: "Entre 150 y 299 el riesgo de osteonecrosis es de ninguno a mínimo", d: "Todas las opciones son correctas, no hay opción incorrecta" },
  correct: "b",
  free: false
},
{
  id: 258,
  question: "Señale la opción correcta acerca del manejo odontológico del paciente con demencia:",
  options: { a: "En el paciente con demencia hay que valorar su capacidad cognitiva", b: "Prevenir la aparición de patología oral", c: "Debe realizarse un plan de tratamiento individualizado a cada paciente", d: "Todas las anteriores son correctas" },
  correct: "d",
  free: false
},
{
  id: 259,
  question: "¿Cuál de las siguientes demencias es exclusivamente irreversible?",
  options: { a: "Demencia por tumor cerebral", b: "Demencia por alcohol", c: "Demencia sifilítica", d: "Demencia pugilística" },
  correct: "d",
  free: false
},
{
  id: 260,
  question: "¿Cuál de los siguientes fármacos empleados para tratar enfermedades mentales causa agranulocitosis?",
  options: { a: "Benzodiacepina", b: "Clozapina", c: "Promacina", d: "Risperidona" },
  correct: "b",
  free: false
},
{
  id: 261,
  question: "Señale la opción incorrecta acerca del manejo odontológico del paciente con depresión:",
  options: { a: "Tratamiento curativo diferido hasta controlar el cuadro (salvo el de urgencia)", b: "Limitar la adrenalina en los anestésicos por la interacción medicamentosa", c: "Dar confianza al paciente aplicando el principio de paternalismo", d: "Instaurar precozmente el tratamiento preventivo" },
  correct: "c",
  free: false
},
{
  id: 262,
  question: "¿Qué patología mental nos ayudará a diagnosticar el signo de Russell?",
  options: { a: "Bulimia", b: "Anorexia", c: "Demencia", d: "Depresión" },
  correct: "a",
  free: false
},
{
  id: 263,
  question: "¿Cuál de las siguientes manifestaciones orales es común a la anorexia y bulimia nerviosa?",
  options: { a: "Erosión dental", b: "Sensibilidad dentaria", c: "Enfermedad periodontal", d: "Caries dental" },
  correct: "a",
  free: false
},
{
  id: 264,
  question: "¿Cuál de los siguientes síndromes es un síndrome craneofacial?",
  options: { a: "Síndrome de Hunter", b: "Síndrome de Hurler", c: "Síndrome de Down", d: "Síndrome de Crouzon" },
  correct: "d",
  free: false
},
{
  id: 265,
  question: "¿Cuál de las siguientes características no es una característica craneofacial típicamente encontrada en el paciente con Síndrome de Down?",
  options: { a: "Reducción del seno maxilar", b: "Pliegues epicántico", c: "Depresión del puente nasal", d: "Cuello corto" },
  correct: "d",
  free: false
},
{
  id: 266,
  question: "¿Cuál de las siguientes características odontológicas no es propia del paciente con parálisis cerebral?",
  options: { a: "Hipoplasia en dentición primaria", b: "Presencia de dientes supernumerarios", c: "Alta incidencia de traumatismos dentales", d: "Hiperplasia gingival con tratamiento con hidantoína" },
  correct: "b",
  free: false
},
{
  id: 267,
  question: "¿Cuál de las siguientes técnicas de control es una técnica de enfoque físico?",
  options: { a: "Decir, mostrar, hacer", b: "Sedación", c: "Uso de abrebocas", d: "Ninguna es correcta" },
  correct: "c",
  free: false
},
{
  id: 268,
  question: "¿Cuál de los siguientes supuestos es una ventaja del uso de anestesia general en odontología?",
  options: { a: "Presencia de amnesia tras la intervención", b: "Los reflejos protectores del paciente están deprimidos", c: "Tratamiento de mayor coste económico", d: "La anestesia general presenta un factor de riesgo que incrementa la prevalencia y duración de la bacteriemia" },
  correct: "a",
  free: false
},
{
  id: 269,
  question: "Señale la opción incorrecta acerca de la sedación consciente:",
  options: { a: "Deprime mínimamente el nivel de conciencia", b: "Permite al paciente mantener la suficiencia respiratoria de manera independiente", c: "Produce ansiolisis", d: "Requiere monitorización constante del paciente" },
  correct: "d",
  free: false
},
{
  id: 270,
  question: "Según la clasificación ASA, ¿en qué clase clasificaríamos a un paciente cuya única patología es que padece diabetes mellitus tipo II?",
  options: { a: "Clase I", b: "Clase II", c: "Clase III", d: "Clase IV" },
  correct: "b",
  free: false
},
{
  id: 271,
  question: "¿Se consideran efectos colaterales de los tratamientos antihipertensivos?",
  options: { a: "Xerostomía", b: "Infecciones herpéticas", c: "Tendencia hemorrágica", d: "Solo b y c" },
  correct: "a",
  free: false
},
{
  id: 272,
  question: "¿Cuándo debemos dar profilaxis antibiótica frente a la endocarditis bacteriana en un paciente diagnosticado de síndrome de Dandy-Walker?",
  options: { a: "Derivación peritoneo a aurícula derecha", b: "Derivación a aurícula", c: "Sólo si hay soplo cardiaco", d: "En cualquier tipo de derivación" },
  correct: "a",
  free: false
},
{
  id: 273,
  question: "¿De qué manera y por qué la sarcoidosis puede interferir con nuestro tratamiento odontológico?",
  options: { a: "Puede producir inflamación sintomática de las glándulas salivales", b: "Puede provocar xerostomía en algunos casos", c: "Es una enfermedad multisistémica con posible afectación renal, hepática u ocular", d: "Todas las anteriores" },
  correct: "d",
  free: false
},
{
  id: 274,
  question: "¿Qué broncodilatadores se suelen usar en el control diario del asma?",
  options: { a: "Salbutamol, Terbutalina", b: "Fenoterol, Rimiterol", c: "Ipratropio, Tiotropio", d: "a y b son correctas" },
  correct: "d",
  free: false
},
  {
  id: 275,
  question: "En un paciente heroinómano, ¿qué válvula y qué germen suelen estar implicados en la endocarditis bacteriana:",
  options: { a: "Válvula mitral y Streptococcus viridans", b: "Válvula tricúspide e Staphylococcus aureus", c: "Válvula tricúspide y Candida albicans", d: "Válvula aórtica y Pseudomonas aeruginosa" },
  correct: "b",
  free: false
},
{
  id: 276,
  question: "¿Cuáles de los siguientes fármacos son susceptibles de producir colitis pseudomembranosa?",
  options: { a: "Clindamicina", b: "Lincomicina", c: "Eritromicina", d: "Todos los anteriores" },
  correct: "d",
  free: false
},
{
  id: 277,
  question: "¿Cuáles son los principales problemas que podemos encontrar con un paciente afecto de enfermedad de Crohn al plantear tratamiento dental?",
  options: { a: "Alteraciones en la coagulación", b: "Necesidad de corticoides suplementarios", c: "Déficit nutritivo", d: "Todas las anteriores" },
  correct: "d",
  free: false
},
{
  id: 278,
  question: "¿Con cuáles de los siguientes fármacos interaccionan los antiácidos?",
  options: { a: "Penicilina V", b: "Eritromicina", c: "Tetraciclinas", d: "c y también con digoxina y Fe" },
  correct: "d",
  free: false
},
{
  id: 279,
  question: "¿Cuál es el mecanismo de acción de los AINES que los contraindica en casos de úlcera péptica?",
  options: { a: "Acción directa frente a la mucosa gástrica", b: "Inhibición de la síntesis de prostaglandinas", c: "Estimulación de la hormona pancreática", d: "Todas las anteriores" },
  correct: "b",
  free: false
},
{
  id: 280,
  question: "Ante una pigmentación de la mucosa oral, debemos hacer el diagnóstico diferencial con:",
  options: { a: "Melanoma", b: "Enfermedad de Addison", c: "Síndrome de Nelson", d: "Todas las anteriores" },
  correct: "d",
  free: false
},
{
  id: 281,
  question: "En el shock anafiláctico, ¿cuál de los siguientes enunciados es falso?",
  options: { a: "Hipotensión", b: "Broncoespasmo", c: "Eritema cutáneo", d: "Hipertensión" },
  correct: "d",
  free: false
},
{
  id: 282,
  question: "En el hipotiroidismo primario se encuentra:",
  options: { a: "Disminución de TSH", b: "Disminución de hormonas tiroideas (T3 y T4)", c: "Aumento de TSH", d: "b y c" },
  correct: "d",
  free: false
},
{
  id: 283,
  question: "En insuficiencia suprarrenal, ¿qué hallazgo se presenta siempre?",
  options: { a: "Disminución de cortisol, aumento de ACTH", b: "ACTH disminuida", c: "ACTH normal", d: "Disminución de ACTH y cortisol" },
  correct: "a",
  free: false
},
{
  id: 284,
  question: "En la meningitis por enterovirus:",
  options: { a: "El diagnóstico se realiza por estudio del líquido cefalorraquídeo", b: "Deja secuelas permanentes", c: "Es más frecuente en jóvenes y niños", d: "a y c son correctas" },
  correct: "d",
  free: false
},
{
  id: 285,
  question: "En el bocio simple, ¿qué afirmación es falsa?",
  options: { a: "Es hiperfuncionante", b: "Es más frecuente en mujeres", c: "Puede presentar síntomas y nódulos", d: "Se acompaña de hipertiroidismo" },
  correct: "d",
  free: false
},
{
  id: 286,
  question: "En la ETS de tercera generación, ¿cuál es más frecuente?",
  options: { a: "Papilomavirus", b: "Gonococo", c: "Treponema", d: "Clamidias" },
  correct: "a",
  free: false
},
{
  id: 287,
  question: "¿Para qué microorganismo se administra tetraciclina en el ojo del recién nacido?",
  options: { a: "Gonococo", b: "Treponema", c: "Herpes simple", d: "Estreptococo" },
  correct: "a",
  free: false
},
{
  id: 288,
  question: "En la meningitis del recién nacido, ¿cuál es la causa más frecuente?",
  options: { a: "Herpes simple", b: "Enterobacterias", c: "Meningococo", d: "Neumococo" },
  correct: "b",
  free: false
},
{
  id: 289,
  question: "Ante un paciente con insuficiencia cardíaca debemos tener cuidado con:",
  options: { a: "Posibles hemorragias intestinales", b: "Posible afectación hepática", c: "Disminución del filtrado renal", d: "Todo lo anterior" },
  correct: "d",
  free: false
},
{
  id: 290,
  question: "El síndrome de Marfan se asocia frecuentemente a:",
  options: { a: "Insuficiencia tricuspídea", b: "Estenosis tricuspídea", c: "Prolapso mitral", d: "Estenosis mitral" },
  correct: "c",
  free: false
},
{
  id: 291,
  question: "Paciente hipertenso en tratamiento con β-bloqueantes. ¿Qué anestesia usarías?",
  options: { a: "Lidocaína 1:100.000", b: "Lidocaína 1:80.000", c: "Lidocaína 1:50.000", d: "Lidocaína sin vasoconstrictor" },
  correct: "d",
  free: false
},
{
  id: 292,
  question: "¿Qué cantidad de anestésico se puede usar en cada paciente (adulto sano promedio)?",
  options: { a: "6–7 carpules", b: "7–8 carpules", c: "8–9 carpules", d: "4.4 mg/kg de mepivacaína o lidocaína" },
  correct: "d",
  free: false
},
{
  id: 293,
  question: "¿Por qué no deben usarse vasoconstrictores en pacientes con angina o infarto reciente?",
  options: { a: "Favorecen la recanalización del calcio", b: "Favorecen fenómenos de reentrada", c: "Eliminan potasio", d: "a y b son correctas" },
  correct: "d",
  free: false
},
{
  id: 294,
  question: "Ante un paciente hipertenso tratado con propanolol y clorotiazida, si prescribimos un antibiótico debemos:",
  options: { a: "Tener en cuenta que el diurético disminuye el flujo renal", b: "Escoger un antibiótico no cardiotóxico", c: "Unir siempre un AINE", d: "Usar dos antibióticos complementarios" },
  correct: "a",
  free: false
},
{
  id: 295,
  question: "Los anestésicos son más cardiotóxicos cuando:",
  options: { a: "Hay bajas concentraciones de K y Na", b: "Hay altas concentraciones de Ca++", c: "Cuanto más largo es su grupo alcohólico", d: "a y c son correctas" },
  correct: "d",
  free: false
},
{
  id: 296,
  question: "¿Qué fármaco presenta importante intolerancia gástrica?",
  options: { a: "Furosemida", b: "Clorotiazida", c: "Ácido etacrínico", d: "Espironolactona" },
  correct: "c",
  free: false
},
{
  id: 297,
  question: "¿Cuál es el efecto colateral más importante de los antihipertensivos de acción central?",
  options: { a: "Sedación", b: "Sequedad de boca", c: "Depresión", d: "a y b son correctas" },
  correct: "d",
  free: false
},
{
  id: 298,
  question: "Tratamiento dental de urgencia en paciente infartado se realiza con anestesia local:",
  options: { a: "A los 2 meses postinfarto", b: "Entre 3 y 6 meses", c: "Entre 6 y 8 meses", d: "Entre 8 y 10 meses" },
  correct: "a",
  free: false
},
{
  id: 299,
  question: "Criterios mayores de Jones en valvulopatías:",
  options: { a: "Artralgias y fiebre", b: "Carditis y poliartritis", c: "Eritema marginado y ASLO elevado", d: "Todos los anteriores" },
  correct: "b",
  free: false
},
  {
  id: 300,
  question: "¿Qué medidas tomarías ante un paciente que refiere ser hipertenso?",
  options: { a: "Remitirlo al médico de cabecera", b: "Solicitar pruebas bioquímicas", c: "Análisis de orina y sedimento", d: "Todas las anteriores" },
  correct: "d",
  free: false
},
{
  id: 301,
  question: "Efectos colaterales orales de los antihipertensivos:",
  options: { a: "Queilitis comisural", b: "Hiperplasia gingival", c: "Reacciones liquenoides", d: "Todos los anteriores" },
  correct: "d",
  free: false
},
{
  id: 302,
  question: "¿Quiénes se consideran pacientes con riesgo de endocarditis infecciosa?",
  options: { a: "Portadores de prótesis valvulares", b: "Antecedentes de fiebre reumática", c: "Síndrome de Down", d: "Solo a y b" },
  correct: "d",
  free: false
},
{
  id: 303,
  question: "¿Qué procedimientos odontológicos implican riesgo en un paciente con alto riesgo de endocarditis?",
  options: { a: "Tratamiento de conducto", b: "Colocación de prótesis inmediata", c: "Tallado para funda", d: "Todos los anteriores" },
  correct: "d",
  free: false
},
{
  id: 304,
  question: "¿Cuánta lidocaína hay en un carpule al 2%?",
  options: { a: "18 mg", b: "34 mg", c: "36 mg", d: "54 mg" },
  correct: "c",
  free: false
},
{
  id: 305,
  question: "Paciente toma aspirina. ¿Cuántos días antes de una extracción debes tener en cuenta el riesgo de hemorragia?",
  options: { a: "1 semana", b: "5 días", c: "10 días", d: "12 días" },
  correct: "c",
  free: false
},
{
  id: 306,
  question: "¿Qué es el tiempo de protrombina?",
  options: { a: "Mide la vía intrínseca de coagulación", b: "Se altera con déficit de factores VIII y IX", c: "Tiempo normal: 12–14 segundos", d: "Se afecta con déficit de vitamina B12" },
  correct: "c",
  free: false
},
{
  id: 307,
  question: "Complicaciones ante tratamiento dental en paciente con corticoides post-trasplante cardíaco:",
  options: { a: "Hipertensión", b: "Cataratas", c: "Adelgazamiento exagerado", d: "Todas las anteriores" },
  correct: "d",
  free: false
},
{
  id: 308,
  question: "¿Qué vía anestésica es adecuada para extracción de un diente 34 en paciente anticoagulado?",
  options: { a: "Bloqueo del nervio alveolar inferior", b: "Infiltrativa", c: "Intraligamentaria", d: "b y c" },
  correct: "d",
  free: false
},
{
  id: 309,
  question: "¿Cuál no es una prueba de coagulación sanguínea?",
  options: { a: "Tiempo de tromboplastina parcial activada", b: "Tiempo de protrombina", c: "Tiempo de coagulación", d: "Concentración de fibrinógeno" },
  correct: "c",
  free: false
},
{
  id: 310,
  question: "¿Qué es la amiodarona?",
  options: { a: "Antibiótico para endocarditis", b: "Anticoagulante oral", c: "Antiarrítmico para taquicardia auricular resistente a digoxina", d: "Diurético ahorrador de potasio" },
  correct: "c",
  free: false
},
{
  id: 311,
  question: "¿En qué tratamiento antihipertensivo está contraindicado el uso de vasoconstrictor en anestesia?",
  options: { a: "Metildopa", b: "Guanetidina", c: "Espironolactona", d: "Captopri" },
  correct: "b",
  free: false
},
{
  id: 312,
  question: "¿Cuál sería el efecto más indeseado durante el tratamiento dental en paciente que toma antihipertensivos?",
  options: { a: "Hipertensión reactiva", b: "Hipotensión postural", c: "Taquicardia", d: "Bradicardia" },
  correct: "b",
  free: false
},
{
  id: 313,
  question: "Paciente alérgico a penicilinas que ha tenido infarto hace 10 meses. ¿Pauta antibiótica para endocarditis?",
  options: { a: "2g penicilina 1h antes, 1g a las 6h", b: "1g eritromicina 2.5h antes, 500mg a las 6h", c: "1g amoxicilina 1h antes", d: "600mg clindamicina 1h antes" },
  correct: "d",
  free: false
},
{
  id: 314,
  question: "¿Qué simpaticolítico no provoca cambios posturales significativos en el paciente dental?",
  options: { a: "Clonidina", b: "Debrisoquina", c: "Guanfacina", d: "Guanetidina" },
  correct: "c",
  free: false
},
{
  id: 315,
  question: "¿Qué diurético puede agravar la intolerancia gástrica si administramos a su vez un AINE de uso dental?",
  options: { a: "Tiazidas", b: "Amilorida", c: "Triamtereno", d: "Ácido etacrínico" },
  correct: "d",
  free: false
},
{
  id: 316,
  question: "¿Cuál de los siguientes fármacos antihipertensivos pueden producir alteración del gusto?",
  options: { a: "Vasodilatadores", b: "Inhibidores neuronales adrenérgicos", c: "Bloqueantes B-adrenérgicos", d: "A y C" },
  correct: "d",
  free: false
},
{
  id: 317,
  question: "En un paciente anciano hipertenso que acude a consulta dental, ¿cuál es el fármaco antihipertensivo de primera elección que probablemente esté tomando?",
  options: { a: "Simpaticolíticos", b: "Vasodilatadores", c: "Diuréticos", d: "A y C" },
  correct: "c",
  free: false
},
{
  id: 318,
  question: "¿Cuál de los siguientes fármacos no es antiagregante plaquetario?",
  options: { a: "Dipiridamol", b: "Meprobamato", c: "Triclopidina", d: "Sulfinpirazona" },
  correct: "b",
  free: false
},
{
  id: 319,
  question: "Ante un paciente que acude a consulta dental y está recibiendo tratamiento con heparina, además del tiempo de protrombina, ¿qué solicitaría?",
  options: { a: "Tiempo de sangrado", b: "Tiempo parcial de tromboplastina", c: "Recuento plaquetario", d: "B y C" },
  correct: "d",
  free: false
},
{
  id: 320,
  question: "Si aparece sangrado en un paciente que recibe derivados de cumarina, ¿qué administraría?",
  options: { a: "Vitamina K2", b: "Sulfato de protamina", c: "Vitamina K1 (5-25 mg)", d: "A y B" },
  correct: "c",
  free: false
},
{
  id: 321,
  question: "La reanimación cardiopulmonar puede presentar las siguientes complicaciones, ¿cuál o cuáles?",
  options: { a: "Aspiración pulmonar", b: "Distensión gástrica", c: "Fracturas costales", d: "Todas las anteriores" },
  correct: "d",
  free: false
},
{
  id: 322,
  question: "¿Cuándo realizaría tratamiento dental en un paciente que ha sufrido un infarto de miocardio?",
  options: { a: "Al mes", b: "Entre 3-6 meses", c: "Al año", d: "A los 2 años" },
  correct: "b",
  free: false
},
{
  id: 323,
  question: "Los pacientes portadores de cardiopatías congénitas presentan mayor predisposición a:",
  options: { a: "Hemorragias", b: "Abscesos cerebrales tras infecciones dentales", c: "Endocarditis", d: "Todo lo anterior" },
  correct: "d",
  free: false
},
{
  id: 324,
  question: "Se considera que los pacientes afectados de Síndrome de Down tienen mayor predisposición a presentar:",
  options: { a: "Labio leporino", b: "Paladar hendido", c: "Mordida cruzada posterior", d: "Todo lo anterior" },
  correct: "d",
  free: false
}
  {
  id: 325,
  question: "¿Cuál es la forma de presentación más frecuente en el paciente con parálisis cerebral?",
  options: { a: "Espástica (50%)", b: "Atetoide (15-25%)", c: "Atáxica", d: "Rígida" },
  correct: "a",
  free: false
},
{
  id: 326,
  question: "La talidomida es un hipnótico de graves efectos teratogénicos, que produce:",
  options: { a: "Deformación de las extremidades", b: "Alteraciones faciales", c: "Retraso mental", d: "Solo A y B" },
  correct: "d",
  free: false
},
{
  id: 327,
  question: "¿En cuáles de las siguientes patologías se presenta hidrocefalia?",
  options: { a: "Autismo", b: "Síndrome de Dandy-Walker", c: "Sarcoidosis", d: "Síndrome de Down" },
  correct: "b",
  free: false
},
{
  id: 328,
  question: "Sobre el paladar hendido, es correcto que:",
  options: { a: "Es de etiología desconocida", b: "Afecta más al sexo femenino", c: "Se puede asociar al Síndrome de Pierre-Robin", d: "Todo lo anterior es correcto" },
  correct: "d",
  free: false
},
{
  id: 329,
  question: "Se consideran efectos adversos de los neurolépticos:",
  options: { a: "Hipotensión ortostática", b: "Taquicardias", c: "Trombocitopenias", d: "Todas las anteriores" },
  correct: "d",
  free: false
},
{
  id: 330,
  question: "¿Qué material de impresión se considera selectivo para tomar impresiones en un paciente discapacitado mentalmente?",
  options: { a: "Alginato", b: "Silicona fluida", c: "Silicona pesada", d: "Cualquiera de los anteriores" },
  correct: "a",
  free: false
},
{
  id: 331,
  question: "¿Cuál de las siguientes causas de subnormalidad se caracteriza por una alteración metabólica?",
  options: { a: "Síndrome de Turner (alteración cromosómica)", b: "Síndrome de Cri Du Chat (alteración cromosómica)", c: "Síndrome de Lesch-Nyhan", d: "B y C" },
  correct: "c",
  free: false
},
{
  id: 332,
  question: "Al realizar tratamiento dental en un paciente discapacitado, debemos:",
  options: { a: "Tomar impresiones con silicona fluida", b: "Realizar prótesis en materiales radiolúcidos", c: "Si hay indicación de profilaxis antibiótica, debe realizarse en cualquier procedimiento", d: "B y C" },
  correct: "d",
  free: false
},
{
  id: 333,
  question: "Cuando un paciente presenta paladar hendido, debemos estar alerta por la posible presencia de patologías asociadas, como:",
  options: { a: "Cerebrales", b: "Cardiovasculares", c: "Articulares", d: "Respiratorias" },
  correct: "a",
  free: false
},
{
  id: 334,
  question: "El Síndrome de Down se asocia frecuentemente a:",
  options: { a: "Defectos del canal auriculoventricular", b: "Comunicación interventricular", c: "Tetralogía de Fallot", d: "Son ciertas A y B" },
  correct: "d",
  free: false
},
{
  id: 335,
  question: "El problema dental más importante en el Síndrome de Down es:",
  options: { a: "Defecto del canal auriculoventricular", b: "Alta incidencia de caries", c: "Afectación periodontal", d: "Paladar hendido" },
  correct: "c",
  free: false
},
{
  id: 336,
  question: "La posición normal de trabajo en un paciente con Síndrome de Down puede ser cualquiera menos:",
  options: { a: "Sentado", b: "Semisentado", c: "Tumbado con el cabezal recto", d: "Tumbado con el cabezal en hiperextensión" },
  correct: "d",
  free: false
},
{
  id: 337,
  question: "El autismo se asocia frecuentemente con:",
  options: { a: "Alergias a antibióticos", b: "Epilepsia del lóbulo temporal", c: "Paladar hendido", d: "Conducta desordenada" },
  correct: "b",
  free: false
},
{
  id: 338,
  question: "En el Síndrome de Down, se espera mayor incidencia de procesos infecciosos por:",
  options: { a: "Inmunodeficiencia congénita", b: "Diabetes concomitante", c: "Periodontitis severa", d: "Pobre higiene" },
  correct: "a",
  free: false
},
{
  id: 339,
  question: "El tratamiento en pacientes con hidrocefalia puede verse complicado por:",
  options: { a: "Presencia de úvula bífida", b: "Alteraciones auditivas", c: "Epilepsia", d: "B y C" },
  correct: "d",
  free: false
},
{
  id: 340,
  question: "Si un paciente con paladar hendido va a recibir tratamiento dental, usted pensará en la posible presencia de patologías asociadas, como:",
  options: { a: "Patología renal", b: "Afección hepática", c: "Afectación cardiovascular", d: "A y C" },
  correct: "d",
  free: false
},
{
  id: 341,
  question: "En un paciente autista:",
  options: { a: "Los IMAO y ADT que recibe pueden complicar el tratamiento dental", b: "La epilepsia del lóbulo frontal se presenta en el 30% de los casos", c: "No hay patología oral propiamente dich", d: "A y C" },
  correct: "a",
  free: false
},
{
  id: 342,
  question: "En un paciente con distrofia muscular:",
  options: { a: "Hay disminución en la incidencia de caries", b: "Hay aumento de procesos periodontales", c: "Es frecuente la presencia de maloclusiones", d: "B y C" },
  correct: "d",
  free: false
},
{
  id: 343,
  question: "Un paciente se considera discapacitado cuando presenta un coeficiente de inteligencia:",
  options: { a: "Entre 80-90%", b: "Por debajo del 70%", c: "Inferior al 50%", d: "Por debajo del 30%" },
  correct: "b",
  free: false
},
{
  id: 344,
  question: "¿Por qué se caracteriza el síndrome de Lesch-Nyhan?",
  options: { a: "Hipoplasia de esmalte", b: "Automasticación de lengua y labios", c: "Retraso mental severo", d: "Hipotensión muscular" },
  correct: "b",
  free: false
},
{
  id: 345,
  question: "¿Cuál es el enfoque primordial a la hora del tratamiento dental en pacientes con retraso mental?",
  options: { a: "Cirugía reconstructiva", b: "Profilaxis antibiótica", c: "Prevención", d: "Tratamiento ortodóntico" },
  correct: "c",
  free: false
},
{
  id: 346,
  question: "¿Qué fármaco neuroléptico produce cambios en el electrocardiograma?",
  options: { a: "Haloperidol", b: "Olanzapina", c: "Risperidona", d: "Tioridazina" },
  correct: "d",
  free: false
},
{
  id: 347,
  question: "Ante un paciente discapacitado por talidomida, podemos encontrar a nivel oral:",
  options: { a: "Hipoplasia de esmalte", b: "Alteraciones morfológicas linguales", c: "Paladar hendido", d: "Todo lo anterior" },
  correct: "d",
  free: false
},
{
  id: 348,
  question: "El tratamiento dental de un paciente con hidrocefalia puede verse complicado por:",
  options: { a: "Infección en shunt ventrículo-auricular", b: "Retraso mental", c: "Alteraciones visuales", d: "Todo lo anterior" },
  correct: "d",
  free: false
},
{
  id: 349,
  question: "En qué procesos es de esperar con más frecuencia procesos inmunológicos congénitos:",
  options: { a: "Lupus eritematoso sistémico (LES)", b: "Liquen plano", c: "Síndrome de Down", d: "Tetralogía de Fallot" },
  correct: "c",
  free: false
}
  {
  id: 350,
  question: "¿Qué pacientes suelen autolesionarse (hábito de la pica)?",
  options: { a: "Enfermedad de Tay-Sachs", b: "Enfermedad de Gaucher", c: "Síndrome de Lesch-Nyhan", d: "Síndrome de Cri du chat" },
  correct: "c",
  free: false
},
{
  id: 351,
  question: "El material de impresión en un paciente con retraso mental es:",
  options: { a: "Alginatos", b: "Mercaptanos", c: "Silicona base", d: "Silicona regular" },
  correct: "a",
  free: false
},
{
  id: 352,
  question: "¿Qué no es frecuente encontrar en un paciente con síndrome de Down?",
  options: { a: "Lengua protrusiva y grande", b: "Clase II molar", c: "Ausencia de papilas filiformes", d: "Labios gruesos, secos y fisurados" },
  correct: "b",
  free: false
},
{
  id: 353,
  question: "La causa congénita más frecuente de discapacidad física es:",
  options: { a: "Síndrome de Down", b: "Parálisis cerebral", c: "Hidrocefalia", d: "Espina bífida" },
  correct: "b",
  free: false
},
{
  id: 354,
  question: "En los enfermos que padecen discapacidad por talidomida, no es verdad que tengan:",
  options: { a: "Deformidad de las extremidades", b: "Focomelia", c: "Inteligencia normal", d: "Defectos oculares y de las orejas" },
  correct: "c",
  free: false
}
  {
  id: 355,
  question: "Es necesaria una profilaxis antibiótica en un paciente con:",
  options: { a: "Hidrocefalia", b: "Parálisis cerebral", c: "Espina bífida", d: "Hidrocefalia con catéter válvula" },
  correct: "d",
  free: false
},
{
  id: 356,
  question: "¿Cuál es el fármaco de primera elección en una crisis hipertensiva en la clínica dental?",
  options: { a: "Nitroglicerina", b: "Captopril", c: "Furosemida", d: "Atropina" },
  correct: "b",
  free: false
},
{
  id: 357,
  question: "Una paciente refiere sensación de quemazón bucal y uso de antihipertensivos. ¿Cuál es el más probable responsable?",
  options: { a: "Enalapril", b: "Amlodipino", c: "Furosemida", d: "Monoxidil" },
  correct: "b",
  free: false
},
{
  id: 358,
  question: "La Tioridazina utilizada en la enfermedad de Parkinson produce:",
  options: { a: "Diarrea", b: "Sialorrea", c: "Vómitos", d: "Cambios en el electrocardiograma" },
  correct: "d",
  free: false
},
{
  id: 359,
  question: "¿Cuál es el enfoque primordial en el tratamiento dental de pacientes con retraso mental?",
  options: { a: "Cirugía ortognática", b: "Prevención", c: "Ortodoncia correctiva", d: "Implantes dentales" },
  correct: "b",
  free: false
}
  {
  id: 360,
  question: "El tratamiento dental de un paciente con hidrocefalia puede verse complicado por:",
  options: { a: "Infección en shunt ventrículo-auricular", b: "Retraso mental", c: "Alteraciones visuales", d: "Todo lo anterior" },
  correct: "d",
  free: false
},
{
  id: 361,
  question: "Señale la opción correcta con respecto al manejo odontológico del paciente con ángor inestable:",
  options: { a: "No se podrán tratar de ninguna forma", b: "Eviten cualquier vasoconstrictor en la anestesia", c: "Es indispensable la anestesia general", d: "Es útil asociar oxazepam y nitroglicerina" },
  correct: "d",
  free: false
},
{
  id: 362,
  question: "El paciente con paladar hendido puede presentar con más frecuencia que un paciente normal:",
  options: { a: "Alteraciones cardiovasculares", b: "Alteraciones oculares", c: "Alteraciones renales", d: "A y B" },
  correct: "d",
  free: false
},
{
  id: 363,
  question: "La epilepsia del lóbulo temporal aparece en un 30% de los pacientes con:",
  options: { a: "Síndrome de Down", b: "Hidrocefalia", c: "Autismo", d: "Espina bífida" },
  correct: "c",
  free: false
},
{
  id: 364,
  question: "En la esclerosis múltiple, ¿qué nos puede interferir para el manejo dental?",
  options: { a: "Alteraciones cardiovasculares", b: "Patología renal concomitante", c: "Alteraciones hepáticas", d: "Nada de lo anterior es frecuente en esclerosis múltiple" },
  correct: "d",
  free: false
},
{
  id: 365,
  question: "¿Cuáles crees que son los principios conservadores que debe tener un odontólogo frente a un discapacitado físico y/o psíquico?",
  options: { a: "Evitar procedimientos invasivos innecesarios", b: "Utilizar técnicas de comunicación adaptadas", c: "Garantizar un ambiente tranquilo y accesible", d: "Todas las anteriores" },
  correct: "d",
  free: false
},
{
  id: 366,
  question: "Señale la respuesta correcta frente a la distrofia muscular a nivel oral:",
  options: { a: "Aumento del tono de los músculos faciales", b: "Aumento de los reflejos protectores", c: "No existe riesgo de aspiración", d: "Presencia de maloclusiones" },
  correct: "d",
  free: false
},
{
  id: 367,
  question: "¿Qué fármaco puede producir cambios electrocardiográficos importantes durante una consulta dental?",
  options: { a: "Penicilina y Vancomicina", b: "Tiazidas", c: "Tetraciclinas", d: "Tioridazina" },
  correct: "d",
  free: false
},
{
  id: 368,
  question: "En el síndrome de Down:",
  options: { a: "Es muy frecuente la epilepsia", b: "Las papilas fungiformes pueden desaparecer", c: "Es frecuente la presencia de úvula bífida", d: "Los premolares están ausentes en un 15% de los casos" },
  correct: "d",
  free: false
},
{
  id: 369,
  question: "¿Cuál de las siguientes causas de subnormalidad se caracteriza por una alteración metabólica?",
  options: { a: "Síndrome de Turner", b: "Síndrome de Cri du chat", c: "Síndrome de Lesch-Nyhan", d: "Ninguna de las anteriores" },
  correct: "c",
  free: false
},
{
  id: 370,
  question: "A la hora de realizar el tratamiento dental en un paciente discapacitado, debemos:",
  options: { a: "Tomar impresiones con silicona fluida", b: "Realizar las prótesis en material radiolúcido", c: "En cualquier procedimiento dental, si hay indicación de profilaxis ATB debe realizarse", d: "B y C" },
  correct: "c",
  free: false
},
{
  id: 371,
  question: "En síndrome de Down:",
  options: { a: "El 45% de los pacientes tienen alteraciones renales", b: "Es frecuente la presencia de parálisis cerebral", c: "El 46% tiene una clase I", d: "A y C" },
  correct: "a",
  free: false
},
{
  id: 372,
  question: "En un paciente con hidrocefalia, ¿cuándo debe realizarse profilaxis antibiótica?",
  options: { a: "Cuando un catéter vaya a vías genitourinarias", b: "Cuando un catéter vaya a seno frontal", c: "Cuando un catéter vaya a peritoneo", d: "Cuando un catéter vaya a ventrículo izquierdo" },
  correct: "d",
  free: false
},
{
  id: 373,
  question: "En un paciente con discapacidad por talidomida:",
  options: { a: "La inteligencia está disminuida", b: "Es frecuente la presencia de hipoplasia de dentina", c: "Se puede presentar paladar hendido", d: "B y C" },
  correct: "d",
  free: false
},
{
  id: 374,
  question: "¿Cuál de los siguientes síndromes se caracteriza por una alteración congénita del sistema nervioso central, pudiendo ser causa de subnormalidad?",
  options: { a: "Síndrome de Klinefelter", b: "Síndrome de Turner", c: "Síndrome de Lesch-Nyhan", d: "A y C" },
  correct: "c",
  free: false
}
  {
  id: 375,
  question: "El tratamiento dental en un paciente con hidrocefalia puede complicarse por la presencia de:",
  options: { a: "Presencia frecuente de úvula bífida", b: "Alteraciones auditivas", c: "Infecciones en shunt ventrículo-auricular", d: "Nada de lo anterior" },
  correct: "c",
  free: false
},
{
  id: 376,
  question: "¿En qué procesos debe usted esperar procesos inmunológicos congénitos más frecuentemente?",
  options: { a: "Lupus eritematoso sistémico", b: "Liquen plano", c: "Mieloma", d: "Síndrome de Down" },
  correct: "d",
  free: false
},
{
  id: 377,
  question: "¿En cuál de los siguientes pacientes especiales considera usted que merece especial atención por nuestra parte, ya que por su patología tiene alta predisposición a la infección?",
  options: { a: "Hipertenso", b: "Esquizofrénico", c: "Diabético", d: "Discapacitado físico" },
  correct: "c",
  free: false
},
{
  id: 378,
  question: "A la hora de realizar tratamiento odontológico en un paciente afectado de SIDA, ¿cuál es el elemento que más nos puede interferir en nuestra actuación?",
  options: { a: "Presencia de sarcoma de Kaposi", b: "Presencia de linfopenia", c: "Respuestas mitogénicas reducidas", d: "Trombocitopenias (púrpuras trombocitopénica)" },
  correct: "d",
  free: false
},
{
  id: 379,
  question: "En un paciente seropositivo, paciente suyo, con frecuentes procesos infecciosos que usted trata y vuelven a aparecer, ¿qué medicación daría de forma concomitante al margen de la específica?",
  options: { a: "Colutorios, sobre todo los de altas concentraciones de alcohol, que desinfectan más", b: "Cremas con altas concentraciones de flúor", c: "Folatos y vitamina B12", d: "Severos planes de prevención" },
  correct: "d",
  free: false
},
{
  id: 380,
  question: "Con respecto al uso del Fluconazol para el tratamiento de la candidiasis oral en el paciente seropositivo, diga lo correcto:",
  options: { a: "Se puede dar una dosis única mensual", b: "El Fluconazol tiene una vida media más corta que el ketoconazol", c: "El Fluconazol interfiere con la warfarina", d: "Se recomienda su uso en embarazo y lactancia" },
  correct: "c",
  free: false
},
{
  id: 381,
  question: "Describe la pauta de tratamiento que utilizaría ante un cuadro de estomatitis herpética en un sujeto seropositivo:",
  options: { a: "Aciclovir 200 mg oral / 5 veces / 24 hs", b: "5-13 mg/kg de peso iv / 8 hs / 10-14 días", c: "Ambas anteriores", d: "Ninguna de las anteriores" },
  correct: "b",
  free: false
},
{
  id: 382,
  question: "Diga lo verdadero con respecto a SIDA que se presenta en un niño:",
  options: { a: "La enfermedad neurológica es una complicación muy rara", b: "La linfopenia es frecuente", c: "La esplenomegalia puede ser el primer signo con el que debuta la enfermedad", d: "La neumonía no es frecuente en el desarrollo de la enfermedad" },
  correct: "b",
  free: false
},
{
  id: 383,
  question: "No se considera alteración oral en relación con el SIDA pediátrico la presencia de:",
  options: { a: "Candidiasis oral", b: "Leucoplasia vellosa", c: "Parotiditis", d: "Estomatitis herpética" },
  correct: "c",
  free: false
},
{
  id: 384,
  question: "La leucoplasia vellosa se considera:",
  options: { a: "Enfermedad indicadora de SIDA, al igual que el sarcoma de Kaposi", b: "Enfermedad indicadora de SIDA, al igual que el herpes simple recidivante, cuando persiste más de un mes", c: "Signo precursor de desarrollo de SIDA, al igual que la micosis oral", d: "No se considera enfermedad indicadora de SIDA" },
  correct: "a",
  free: false
}
  {
  id: 385,
  question: "¿Cuál de las siguientes afirmaciones no es correcta?",
  options: { a: "El período de incubación del HIV es variable", b: "El paciente VIH puede desarrollar encefalopatías", c: "Es rara la presencia de púrpura trombocitopénica", d: "Todas son ciertas" },
  correct: "c",
  free: false
},
{
  id: 386,
  question: "Para hacer regresar las lesiones orales del sarcoma de Kaposi en un paciente con SIDA, utilizaría:",
  options: { a: "Prednisona", b: "Vincristina", c: "Ciclofosfamida", d: "Vinblastina intralesional" },
  correct: "d",
  free: false
},
{
  id: 387,
  question: "Ante un paciente con SIDA que presenta herpes simple, ¿qué fármaco no utilizaría de la siguiente relación?",
  options: { a: "Foscarnet", b: "Viradavina", c: "Cimetidina", d: "Aciclovir" },
  correct: "c",
  free: false
},
{
  id: 388,
  question: "En cuál de las siguientes enfermedades se produce deterioro de la inmunidad celular:",
  options: { a: "Lepra", b: "Hepatitis crónica", c: "Diabetes Mellitus", d: "Todo lo anterior" },
  correct: "d",
  free: false
},
{
  id: 389,
  question: "¿Cuál de los siguientes fármacos no utilizaría en un paciente seropositivo?",
  options: { a: "Codeína", b: "Nistatina", c: "Aspirina (agrava tendencia hemorrágica)", d: "Paracetamol" },
  correct: "c",
  free: false
},
{
  id: 390,
  question: "¿Qué signos orales buscaría ante la sospecha de un paciente seropositivo?",
  options: { a: "Candidiasis oral", b: "Verrugas orales", c: "Gingivitis y periodontitis", d: "Todo lo anterior" },
  correct: "d",
  free: false
},
{
  id: 391,
  question: "¿Cuál de los siguientes fármacos no utilizaría en un paciente seropositivo?",
  options: { a: "Amoxicilina", b: "Eritromicina", c: "Ácido acetilsalicílico", d: "Acetaminofén" },
  correct: "c",
  free: false
},
{
  id: 392,
  question: "¿En qué paciente seropositivo, según la vía de contagio, habría que considerar seriamente la posibilidad de realizar profilaxis antibiótica antes de un tratamiento dental?",
  options: { a: "En paciente que se contagió vía sexual", b: "Por transfusión sanguínea", c: "Cirujanos durante una intervención", d: "En ningún caso" },
  correct: "d",
  free: false
},
{
  id: 393,
  question: "Es conocida la tendencia hemorrágica de los pacientes seropositivos. Si usted fuera a realizar extracciones múltiples, ¿qué haría en forma preoperatoria?",
  options: { a: "Podría dar un concentrado de plaquetas", b: "Podría dar una profilaxis antibiótica", c: "Podría dar épsilon aminocaproico", d: "Podría dar corticoides" },
  correct: "c",
  free: false
},
{
  id: 394,
  question: "Si un paciente acude a su consulta dental diagnosticado de sífilis en el período tardío, ¿cuál sería la principal manifestación oral que podría observar?",
  options: { a: "Liquen plano", b: "Candidiasis", c: "Reacciones liquenoides", d: "Ninguna de las anteriores" },
  correct: "d",
  free: false
},
{
  id: 395,
  question: "En el tratamiento de la xerostomía en un paciente con SIDA, ¿qué sustitutivo de saliva con mucina o metilcelulosa utilizaría?",
  options: { a: "Control dietético", b: "Flúor", c: "Enjuagues con clorhexidina", d: "A y B" },
  correct: "d",
  free: false
},
{
  id: 396,
  question: "La inmunodeficiencia selectiva de IgA puede asociarse a nivel oral con:",
  options: { a: "Úlceras orales", b: "Candidiasis oral", c: "Herpes labial", d: "A y B" },
  correct: "d",
  free: false
},
{
  id: 397,
  question: "¿Qué fármaco antiviral usado en el tratamiento del SIDA puede producir hiperpigmentación y edema lingual?",
  options: { a: "Foscarnet", b: "AZT (de muy baja incidencia)", c: "Ganciclovir", d: "Citidina" },
  correct: "b",
  free: false
},
{
  id: 398,
  question: "¿Qué puede aparecer en un paciente con SIDA que está siendo tratado con AZT y se le asocia acetaminofén?",
  options: { a: "Anemia severa", b: "Linfopenia", c: "Granulocitopenia severa", d: "Policitemia" },
  correct: "c",
  free: false
},
{
  id: 399,
  question: "La inmunodeficiencia selectiva de IgA puede no asociarse a:",
  options: { a: "Infecciones respiratorias recurrentes", b: "Alergia atópica", c: "Enfermedades autoinmunes", d: "Caries severa y enfermedad periodontal severa" },
  correct: "d",
  free: false
},
{
  id: 400,
  question: "Las enfermedades autoinmunes pueden asociarse a la inmunodeficiencia selectiva de IgA. Señale la falsa:",
  options: { a: "Lupus eritematoso", b: "Púrpura trombocitopénica", c: "Síndrome de Sjögren", d: "Enfermedad celíaca" },
  correct: "b",
  free: false
},
];

// --- Variables estado ---
let isPaidUser = false;
let simQuestions = [];
let simIndex = 0;
let simCorrect = 0;
let simIncorrect = 0;

// --- Funciones ---

// Mostrar todas preguntas en "¿Cuánto Sabes?"
function renderAllQuestions() {
  const container = document.getElementById("conocimiento-preguntas");
  container.innerHTML = "";

  const pool = isPaidUser ? allQuestions : allQuestions.filter(q => q.free);

  pool.forEach(q => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    const p = document.createElement("p");
    p.textContent = `${q.id}. ${q.question}`;
    questionDiv.appendChild(p);

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";

    Object.entries(q.options).forEach(([key, text]) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = `${key.toUpperCase()}: ${text}`;
      btn.dataset.correct = (key === q.correct).toString();

      btn.addEventListener("click", () => {
        if (btn.classList.contains("correct") || btn.classList.contains("incorrect")) return;

        if (btn.dataset.correct === "true") {
          btn.classList.add("correct");
        } else {
          btn.classList.add("incorrect");
        }
      });

      optionsDiv.appendChild(btn);
    });

    questionDiv.appendChild(optionsDiv);
    container.appendChild(questionDiv);
  });

  // Mostrar u ocultar botón pago
  document.getElementById("pay-btn").style.display = isPaidUser ? "none" : "block";
}

// Simulación - Mostrar pregunta actual
function renderSimQuestion() {
  const container = document.getElementById("simulacion-pregunta");
  const resumen = document.getElementById("simulacion-resumen");
  resumen.classList.add("hidden");
  container.innerHTML = "";

  if (simIndex >= simQuestions.length) {
    // Mostrar resumen
    resumen.innerHTML = `
      <p><span class="correct-count">Correctas: ${simCorrect}</span></p>
      <p><span class="incorrect-count">Incorrectas: ${simIncorrect}</span></p>
      <p>Total: ${simCorrect + simIncorrect}</p>
      <p>${simCorrect >= 20 ? "<strong style='color:#003366'>¡Aprobaste!</strong>" : "<strong style='color:#b00020'>No aprobaste</strong>"}</p>
    `;
    resumen.classList.remove("hidden");
    return;
  }

  const q = simQuestions[simIndex];

  const questionDiv = document.createElement("div");
  questionDiv.className = "question";

  const p = document.createElement("p");
  p.textContent = `${simIndex + 1}. ${q.question}`;
  questionDiv.appendChild(p);

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  Object.entries(q.options).forEach(([key, text]) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = `${key.toUpperCase()}: ${text}`;
    btn.dataset.correct = (key === q.correct).toString();

    btn.addEventListener("click", () => {
      if (btn.classList.contains("correct") || btn.classList.contains("incorrect")) return;

      if (btn.dataset.correct === "true") {
        btn.classList.add("correct");
        simCorrect++;
      } else {
        btn.classList.add("incorrect");
        simIncorrect++;
      }

      // Deshabilitar todas las opciones
      Array.from(optionsDiv.children).forEach(b => b.disabled = true);

      // Pasar a siguiente pregunta con pequeño delay
      setTimeout(() => {
        simIndex++;
        renderSimQuestion();
      }, 700);
    });

    optionsDiv.appendChild(btn);
  });

  questionDiv.appendChild(optionsDiv);
  container.appendChild(questionDiv);
}

// Iniciar simulación
function startSimulacion() {
  simCorrect = 0;
  simIncorrect = 0;
  simIndex = 0;

  const pool = isPaidUser ? allQuestions : allQuestions.filter(q => q.free);
  simQuestions = [];

  if (pool.length < 33) {
    alert("No hay suficientes preguntas disponibles para la simulación.");
    return;
  }

  while (simQuestions.length < 33) {
    const r = pool[Math.floor(Math.random() * pool.length)];
    if (!simQuestions.includes(r)) simQuestions.push(r);
  }

  renderSimQuestion();
}

// Manejo menú secciones
document.querySelectorAll(".section").forEach(el => {
  el.addEventListener("click", () => {
    const sec = el.dataset.section;

    document.getElementById("conocimiento").classList.add("hidden");
    document.getElementById("simulacion").classList.add("hidden");

    if (sec === "conocimiento") {
      document.getElementById("conocimiento").classList.remove("hidden");
      renderAllQuestions();
    }
    if (sec === "simulacion") {
      document.getElementById("simulacion").classList.remove("hidden");
      startSimulacion();
    }
  });
});

// Entrada a la app
document.getElementById("entryScreen").addEventListener("click", () => {
  document.getElementById("entryScreen").classList.add("hidden");
  document.getElementById("mainApp").classList.remove("hidden");
});
  
// Manejo botón desbloqueo pago
document.getElementById("pay-btn").addEventListener("click", () => {
  isPaidUser = true;
  alert("Has desbloqueado todas las preguntas.");
  renderAllQuestions();
});
