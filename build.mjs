// Builds index.html (the installable PWA) from src/app.html (the app itself).
// src/app.html is also what gets published as the claude.ai artifact.
import { readFileSync, writeFileSync } from "node:fs";

const src = readFileSync(new URL("./src/app.html", import.meta.url), "utf8");
const split = src.indexOf('<div class="app">');
if (split < 0) throw new Error('src/app.html must contain <div class="app">');
const head = src.slice(0, split).trim();
const body = src.slice(split).trim();

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#14201A">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Putting">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icons/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}[hidden]{display:none!important}img{max-width:100%}</style>
${head}
</head>
<body>
<script>window.__PUTTING_LOG_PWA__ = true;</script>
${body}
</body>
</html>
`;
writeFileSync(new URL("./index.html", import.meta.url), html);
console.log("Wrote index.html");
