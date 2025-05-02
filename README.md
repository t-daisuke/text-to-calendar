# Text to Calendar Chrome Extension

A simple Chrome extension that allows you to quickly add selected text as an event to Google Calendar.

## Features

- Add selected text as a calendar event with just two clicks
- Works with any text selection in the browser
- Opens Google Calendar in a new tab with the selected text as the event title

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files

## Usage

1. Select any text on a webpage
2. Right-click on the selected text
3. Click "Add to Calendar" from the context menu
4. A new tab will open with Google Calendar's event creation page, with the selected text as the event title

## Technical Details

- Built with Chrome Extension Manifest V3
- Uses Chrome's Context Menus API
- No authentication required
- Lightweight and fast

## Files

- `manifest.json`: Extension configuration
- `background.js`: Service worker handling context menu and calendar integration

## Development

To modify the extension:

1. Make changes to the source files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test the changes

## License

MIT License 