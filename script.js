function detectLangFromPath() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes("/sv/")) return "sv-SE";
  if (path.includes("/no/")) return "nb-NO";
  if (path.includes("/en/")) return "en-US";

  return "en-US";
}

function applyLang(locale) {
  const lang = locale.split("-")[0];

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

  const titleEl = document.getElementById("title");
  const descEl = document.getElementById("description");
  const ctaEl = document.getElementById("cta");

  if (titleEl) titleEl.innerText = t.title;
  if (descEl) descEl.innerText = t.description;
  if (ctaEl) ctaEl.innerText = t.cta;

  document.documentElement.lang = lang;
}

const pageLocale = detectLangFromPath();
applyLang(pageLocale);

const script = document.createElement("script");
script.id = "ze-snippet";
script.src = "https://static.zdassets.com/ekr/snippet.js?key=a9cae50f-cf32-493d-9478-656245c0e674";
script.async = true;

script.onload = function () {
  let tries = 0;
  const maxTries = 40;

  const timer = setInterval(() => {
    tries++;

    if (window.zE) {
      clearInterval(timer);

      zE("messenger:set", "locale", pageLocale);

      zE("messenger:set", "conversationFields", [
        { id: "26983370877724", value: pageLocale }
      ]);

      console.log("Zendesk locale set to:", pageLocale);
    }

    if (tries >= maxTries) {
      clearInterval(timer);
      console.warn("Zendesk did not become ready in time");
    }
  }, 250);
};

document.head.appendChild(script);
