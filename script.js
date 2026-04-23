function detectLangFromPath() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes("/sv/")) return "sv-SE";
  if (path.includes("/no/")) return "nb-NO";
  if (path.includes("/en/")) return "en-US";
  return "en-US";
}

const pageLocale = detectLangFromPath();

window.zESettings = {
  webWidget: {
    locale: pageLocale
  },
  messaging: {
    conversationFields: [
      {
        id: "26983370877724",
        value: pageLocale
      }
    ]
  }
};

(function () {
  const s = document.createElement("script");
  s.id = "ze-snippet";
  s.src = "https://static.zdassets.com/ekr/snippet.js?key=a9cae50f-cf32-493d-9478-656245c0e674";
  s.async = true;
  document.head.appendChild(s);
})();
