(function () {
  const interval = setInterval(() => {
    if (!window.zE) return;

    clearInterval(interval);

    window.zE('messenger:set', 'conversationFields', [
      { id: '46010718065809', value: window.location.href }
    ]);

    console.log('Zendesk field set:', window.location.href);
  }, 200);
})();
