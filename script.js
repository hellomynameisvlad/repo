const translations = {
  en: {
    langAttr: "en",
    title: "Welcome",
    description: "This is a test page.",
    cta: "Start Chat"
  },
  no: {
    langAttr: "no",
    title: "Velkommen",
    description: "Dette er en testside.",
    cta: "Start chat"
  },
  sv: {
    langAttr: "sv",
    title: "Välkommen",
    description: "Detta är en testsida.",
    cta: "Starta chatt"
  }
};

function detectLangFromPath() {
  const path = window.location.pathname;
  if (path.includes('/no/')) return 'no';
  if (path.includes('/sv/')) return 'sv';
  return 'en';
}

function applyLang(lang) {
  const t = translations[lang] || translations.en;
  document.documentElement.lang = t.langAttr;
  document.getElementById('title').innerText = t.title;
  document.getElementById('description').innerText = t.description;
  document.getElementById('cta').innerText = t.cta;
}

applyLang(detectLangFromPath());
