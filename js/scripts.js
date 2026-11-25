const translations = {
  es: {
    "disc.text": "Página de humor: personaje, organizaciones y hechos totalmente ficticios.",

    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.education": "Formación",
    "nav.skills": "Habilidades",
    "nav.hobbies": "Hobbies",

    "about.location": "Villa Imaginaria, España (ficticia)",
    "about.lead": "Político de larga trayectoria y reputación intachable, según él mismo. Hombre de palabra, aunque no siempre de la misma.",

    "exp.title": "Experiencia",
    "exp1.role": "Político de alta reputación",
    "exp1.company": "Partido Imaginario Unido (ficticio)",
    "exp1.desc": "Más de 20 años de carrera pública impecable según mis propias notas de prensa. Especialista en inaugurar cosas que ya estaban inauguradas.",
    "exp1.date": "2000 - Presente",
    "exp2.role": "Presidente honorífico de Los Amigos del Maletín S.L.",
    "exp2.company": "Organización criminal de opereta (ficticia)",
    "exp2.desc": "Coordinación de reuniones secretas en el reservado de una churrería. Planificación fiscal creativa con residencia en la isla inventada de Villa Evasión.",
    "exp2.date": "2010 - Presente",

    "edu.title": "Formación",
    "edu1.degree": "Máster en Oratoria Vacía y Promesas Electorales",
    "edu1.school": "Universidad Inexistente de Villa Imaginaria",
    "edu1.date": "1995 - 1999",

    "skills.title": "Habilidades",
    "skills.s1": "Cortar cintas inaugurales con tijera dorada",
    "skills.s2": "Responder preguntas sin contestar nada",
    "skills.s3": "Sonreír en fotos con maletines",
    "skills.langTitle": "Idiomas",
    "skills.lang1": "Español: nativo",
    "skills.lang2": "Inglés: nivel intermedio",

    "hob.title": "Hobbies",
    "hob.text": "Soy una persona romántica y apasionada: me entrego a todo lo que hago, desde un buen discurso hasta una cena a la luz de las velas."
  },
  en: {
    "disc.text": "Humor page: character, organizations and events are entirely fictional.",

    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.hobbies": "Hobbies",

    "about.location": "Imaginary Town, Spain (fictional)",
    "about.lead": "Long-serving politician of spotless reputation, according to himself. A man of his word, though not always the same one.",

    "exp.title": "Experience",
    "exp1.role": "Highly reputable politician",
    "exp1.company": "United Imaginary Party (fictional)",
    "exp1.desc": "Over 20 years of flawless public service, according to my own press releases. Specialist in inaugurating things that were already inaugurated.",
    "exp1.date": "2000 - Present",
    "exp2.role": "Honorary President of The Friends of the Briefcase Ltd.",
    "exp2.company": "Comic-opera criminal organization (fictional)",
    "exp2.desc": "Coordinating secret meetings in the back room of a churro shop. Creative tax planning with residence on the made-up island of Tax Haven Bay.",
    "exp2.date": "2010 - Present",

    "edu.title": "Education",
    "edu1.degree": "Master's in Empty Rhetoric and Electoral Promises",
    "edu1.school": "Nonexistent University of Imaginary Town",
    "edu1.date": "1995 - 1999",

    "skills.title": "Skills",
    "skills.s1": "Cutting ribbons with a golden pair of scissors",
    "skills.s2": "Answering questions without answering anything",
    "skills.s3": "Smiling in photos holding briefcases",
    "skills.langTitle": "Languages",
    "skills.lang1": "Spanish: native",
    "skills.lang2": "English: intermediate",

    "hob.title": "Hobbies",
    "hob.text": "I am a romantic and passionate person: I give myself fully to everything I do, from a great speech to a candlelit dinner."
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var text = translations[lang][el.dataset.i18n];
    if (text) el.innerHTML = text;
  });
  document.getElementById("lang-toggle").textContent = lang === "es" ? "EN" : "ES";
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.getElementById("lang-toggle").addEventListener("click", function () {
  setLang(document.documentElement.lang === "es" ? "en" : "es");
});

var savedLang = "es";
try { savedLang = localStorage.getItem("lang") || "es"; } catch (e) {}
setLang(savedLang);