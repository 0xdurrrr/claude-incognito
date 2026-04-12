const toggle = document.getElementById('toggle');
const status = document.getElementById('status');

function render(enabled) {
  toggle.checked = enabled;
  status.textContent = enabled
    ? 'New chats will be incognito'
    : 'Incognito mode disabled';
  status.className = 'status ' + (enabled ? 'on' : 'off');
}

chrome.storage.local.get({ enabled: true }, (result) => {
  render(result.enabled);
});

toggle.addEventListener('change', () => {
  const enabled = toggle.checked;
  chrome.storage.local.set({ enabled });
  render(enabled);
});
