function detectLocalesFromPath() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes("/sv/")) {
    return { pageLocale: "sv-SE", widgetLocale: "sv" };
  }

  if (path.includes("/no/")) {
    return { pageLocale: "nb-NO", widgetLocale: "no" };
  }

  if (path.includes("/en/")) {
    return { pageLocale: "en-US", widgetLocale: "en-US" };
  }

  return { pageLocale: "en-US", widgetLocale: "en-US" };
}

const { pageLocale, widgetLocale } = detectLocalesFromPath();

window.zESettings = {
  webWidget: {
    locale: widgetLocale
  }
};

(function () {
  const s = document.createElement("script");
  s.id = "ze-snippet";
  s.src = "https://static.zdassets.com/ekr/snippet.js?key=8606effb-1605-4270-b14f-6dfc98da5003";
  s.async = true;

  s.onload = function () {
    const timer = setInterval(() => {
      if (!window.zE) return;

      clearInterval(timer);

      zE("messenger:set", "conversationFields", [
        { id: "26983370877724", value: pageLocale }
      ]);

      zE("messenger:set", "locale", widgetLocale);

      console.log("pageLocale:", pageLocale);
      console.log("widgetLocale:", widgetLocale);
    }, 200);
  };

  document.head.appendChild(s);
})();
