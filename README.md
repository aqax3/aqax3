# Putting Log

A phone app for disc golf putting practice with a set of five putters.

- **Session goals:** pick how many putts the session is (50, 100, 150, 200, 300 or no goal). A progress bar and the round heading ("Round 12 of 20") show how far along you are, and the app tells you when you hit the goal.
- **Practice:** pick a distance (meters by default, feet optional; presets out to Circle 2), throw all five putters, tap each one that went in, then tap **Log round**. Made a mistake? **Undo last round** puts the round back so you can fix it.
- **Stats:** make % overall, by distance, by putter (shows which disc or throw slot misses most), C1X %, longest run of makes, and your trend per session. Filter by 7 days, 30 days or all time.
- **History:** every session with a breakdown by distance and by putter.
- **Bag:** name and color your five putters, switch feet/meters, copy a JSON backup.

It works offline and installs to your home screen. Your data is saved on the device (in the browser's local storage).

## Install on your phone

1. Host the repo with GitHub Pages: **Settings → Pages → Deploy from a branch**, then pick the branch and the `/ (root)` folder.
2. Open the Pages URL on your phone.
   - **iPhone (Safari):** Share → **Add to Home Screen**.
   - **Android (Chrome):** ⋮ menu → **Install app** (or **Add to Home screen**).

## Develop

The app lives in `src/app.html`. After editing it, regenerate the installable page:

```sh
node build.mjs   # writes index.html
```

Files:

| File | Purpose |
| --- | --- |
| `src/app.html` | The app: markup, styles, logic |
| `build.mjs` | Wraps the app into `index.html` with the PWA head tags |
| `index.html` | Generated page that you host |
| `manifest.webmanifest`, `sw.js`, `icons/` | Home-screen install and offline support |
