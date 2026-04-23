function detectLangFromPath() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes("/sv/")) return "sv";
  if (path.includes("/no/")) return "nb"; // use nb for Norwegian Bokmål
  if (path.includes("/en/")) return "en";
  return "en";
}

function applyLang(lang) {
  const translations = {
    en: {
      title: "Welcome",
      description: "This is a test page.",
      cta: "Start Chat"
    },
    nb: {
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

  const t = translations[lang] || translations.en;
  document.getElementById("title").innerText = t.title;
  document.getElementById("description").innerText = t.description;
  document.getElementById("cta").innerText = t.cta;
}

const pageLang = detectLangFromPath();
applyLang(pageLang);

const script = document.createElement("script");
script.id = "ze-snippet";
script.src = "https://static.zdassets.com/ekr/snippet.js?key=a9cae50f-cf32-493d-9478-656245c0e674";

script.onload = function () {
  if (window.zE) {
    zE("messenger:set", "locale", pageLang);
  }
};

document.body.appendChild(script);
