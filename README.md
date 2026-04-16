# Claude Incognito

A browser extension that automatically enables incognito (temporary) mode for every new conversation on [claude.ai](https://claude.ai).

## Why?

When you chat with Claude in normal mode, your conversations may be used by Anthropic to train and improve future models. Incognito mode (also called temporary mode) opts you out — **your conversation content won't be stored or used for model training**.

Claude.ai does offer a manual incognito toggle, but you have to remember to enable it every single time you start a new chat. This extension removes that friction — once installed, **every new conversation is automatically incognito**. No extra clicks, no forgetting.

## How It Works

The extension intercepts the API request sent when you start a new conversation and sets `is_temporary = true` in the request body. This is the same flag Claude.ai uses internally when you manually toggle incognito mode.

- Works silently in the background — no UI changes on the Claude.ai page
- One-click toggle in the extension popup to turn it on or off
- Badge indicator shows current status (ON / OFF)

## Install

### Chrome

[**Install from Chrome Web Store**](https://chromewebstore.google.com/detail/claude-incognito/fcnlmbmmgemeagoladldclaaaobkhmhl)

<details>
<summary>Manual install (for development)</summary>

1. Download or clone this repository
2. Go to `chrome://extensions`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select the repository folder

</details>

### Firefox (128+)

[**Install from Firefox Add-ons**](https://addons.mozilla.org/en-US/firefox/addon/claude-incognito/)

<details>
<summary>Manual install (for development)</summary>

1. Go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select `manifest.json` from the repository folder

</details>

## Usage

Click the extension icon to toggle incognito mode on or off. The badge text shows the current state:

- **ON** (green) — all new conversations will be incognito
- **OFF** (gray) — normal behavior, no interception

> Note: The setting only affects **new conversations**. Toggling mid-conversation has no effect on the current chat.

## Privacy

This extension:

- Stores only a single on/off preference locally
- Does not collect, transmit, or share any data
- Does not read your conversation content
- Makes no network requests of its own

See [Privacy Policy](privacy-policy.md) for details.

## License

MIT
