# Bhagavad Gita Quotes

A simple, browser-based quote generator inspired by the Bhagavad Gita. It combines rotating verses, background music, and one-click image export so you can save a quote card and share it easily.

## Features

- Random Bhagavad Gita-inspired quotations
- Two background music tracks with play and pause controls
- Dynamic quote card artwork and gradient backgrounds
- Copy the current quote with one click
- Download the quote card as an image
- Quick links to the English and Telugu PDF editions

## How To Run

1. Open `index.html` in a modern browser.
2. Use the on-screen buttons to change the quote, toggle music, or download the card.

If you prefer, you can also serve the folder with any local static server.

## Controls

- `Next quote` or any arrow key: load a new quote and image
- Click the quote: copy the text to the clipboard
- `Track 1` / `Track 2`: play one background track at a time
- `Space`: toggle the currently active track
- `Esc`: pause the active track
- `BG` or `bg`: unlock the hidden surprise
- `MENU` or `menu`: show the shortcut list

## Project Structure

- `index.html` - app layout and external libraries
- `style.css` - visual styling
- `script.js` - quote rotation, audio controls, copy, and download logic
- `audio/` - background music files
- `books/` - downloadable PDF editions
- `img/` - quote artwork and other images

## Notes

- Clipboard access and image download work best over `localhost` or a secure origin.
- The app uses external CDN libraries for Font Awesome, jQuery, SweetAlert2, and html2canvas.
