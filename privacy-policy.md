# Privacy Policy — Claude Incognito

**Last updated:** April 12, 2026

## Overview

Claude Incognito is a browser extension that forces incognito (temporary) mode for new conversations on claude.ai. It operates entirely on your local device and does not collect, transmit, or share any user data.

## Data Collection

This extension does **not** collect any personal data. Specifically:

- No analytics or telemetry
- No user tracking
- No cookies set by the extension
- No data sent to external servers or third parties

## Local Storage

The extension stores a single boolean preference (`enabled`) in `chrome.storage.local` to remember whether the feature is turned on or off. This data:

- Never leaves your device
- Is not shared with any third party
- Can be cleared by uninstalling the extension

## Network Activity

The extension intercepts fetch requests made by the claude.ai page to its own API (`https://claude.ai/api/completion`) and modifies the `is_temporary` parameter in the request body. It does **not**:

- Make any network requests of its own
- Send data to any server other than claude.ai's existing API
- Read or store conversation content

## Permissions

| Permission | Why it's needed |
|---|---|
| `storage` | Store the on/off toggle preference locally |
| `host_permissions: https://claude.ai/*` | Inject content scripts that intercept and modify API requests on claude.ai |

## Changes to This Policy

If this policy is updated, the new version will be published alongside the extension update with an updated date above.

## Contact

For questions about this privacy policy, open an issue at the extension's GitHub repository.
