// Runs in ISOLATED world — bridges chrome.storage state to a DOM
// data attribute that the MAIN world script can read.

function syncState(enabled) {
  document.documentElement.dataset.claudeIncognitoEnabled = enabled ? 'true' : 'false';
}

chrome.storage.local.get({ enabled: true }, (result) => {
  syncState(result.enabled);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.enabled !== undefined) {
    syncState(changes.enabled.newValue);
  }
});
