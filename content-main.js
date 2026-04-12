// Runs in MAIN world at document_start — patches window.fetch
// to force is_temporary=true on new conversation creation.

(function () {
  const originalFetch = window.fetch;

  window.fetch = function (input, init) {
    const url = typeof input === 'string' ? input : input instanceof Request ? input.url : String(input);
    const method = (init?.method || (input instanceof Request ? input.method : 'GET')).toUpperCase();

    if (method === 'POST' && url.includes('/completion')) {
      const enabled = document.documentElement.dataset.claudeIncognitoEnabled;
      if (enabled === 'true') {
        const body = init?.body ?? (input instanceof Request ? null : undefined);
        if (typeof body === 'string') {
          try {
            const parsed = JSON.parse(body);
            if (parsed.create_conversation_params) {
              parsed.create_conversation_params.is_temporary = true;
              const newInit = Object.assign({}, init, { body: JSON.stringify(parsed) });
              return originalFetch.call(this, input, newInit);
            }
          } catch (_) {
            // Not JSON — pass through
          }
        }
      }
    }

    return originalFetch.apply(this, arguments);
  };
})();
