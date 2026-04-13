// Service worker — sets default state on install and keeps badge in sync.

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get({ enabled: true }, (result) => {
    // Only set default if not already configured
    if (result.enabled === undefined) {
      chrome.storage.local.set({ enabled: true });
    }
    updateBadge(result.enabled !== false);
  });
});

// Keep badge in sync across all tabs
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.enabled !== undefined) {
    updateBadge(changes.enabled.newValue);
  }
});

function updateBadge(enabled) {
  const text = enabled ? 'ON' : 'OFF';
  const color = enabled ? '#16a34a' : '#9ca3af';
  chrome.action.setBadgeText({ text });
  chrome.action.setBadgeBackgroundColor({ color });
}
