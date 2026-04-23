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

window.zESettings = {
  webWidget: {
    locale: pageLocale
  }
};

(function () {
  const s = document.createElement("script");
  s.id = "ze-snippet";
  s.src = "https://static.zdassets.com/ekr/snippet.js?key=a9cae50f-cf32-493d-9478-656245c0e674";
  s.async = true;

  s.onload = function () {
    let tries = 0;
    const maxTries = 50;

    const timer = setInterval(() => {
      tries += 1;

      if (!window.zE) {
        if (tries >= maxTries) {
          clearInterval(timer);
          console.warn("Zendesk did not become ready in time");
        }
        return;
      }

      try {
        zE("messenger:set", "conversationFields", [
          { id: "26983370877724", value: pageLocale }
        ]);

        zE("messenger:set", "locale", pageLocale);

        console.log("conversation_locale sent:", pageLocale);
        clearInterval(timer);
      } catch (e) {
        if (tries >= maxTries) {
          clearInterval(timer);
          console.error("Failed to set conversation fields:", e);
        }
      }
    }, 200);
  };

  document.head.appendChild(s);
})();
