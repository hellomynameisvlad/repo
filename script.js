const translations = {
  en: {
    title: "Welcome",
    description: "This is a test page.",
    cta: "Start Chat"
  },
  no: {
    title: "Velkommen",
    description: "Dette er en testside.",
    cta: "Start chat"
  },
  sv: {
    title: "Välkommen",
    description: "Detta är en testsida.",
    cta: "Starta chatt"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  const t = translations[lang];

  document.getElementById("title").innerText = t.title;
  document.getElementById("description").innerText = t.description;
  document.getElementById("cta").innerText = t.cta;
}

// Load saved language or default to English
const savedLang = localStorage.getItem("lang") || "en";
applyLang(savedLang);