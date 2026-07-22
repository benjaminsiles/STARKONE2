// Injects real, pre-rendered HTML into each built page's <div id="root">
// so search engines (and users on slow connections) get the actual page
// content immediately, with no JavaScript execution required. The client
// bundle then hydrates onto this markup (see src/main.jsx and friends).
//
// Run after `vite build` (client) and `vite build --ssr src/entry-server.jsx
// --outDir .ssr-build` have both completed. See package.json "build" script.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const ssrEntryPath = resolve(root, '.ssr-build/entry-server.js');

const pages = [
  { html: 'dist/index.html', render: 'renderHome' },
  { html: 'dist/about/index.html', render: 'renderAbout' },
  { html: 'dist/events/index.html', render: 'renderEvents' },
  { html: 'dist/privacy-policy/index.html', render: 'renderPrivacyPolicy' },
];

async function main() {
  const serverEntry = await import(pathToFileURL(ssrEntryPath).href);

  for (const page of pages) {
    const htmlPath = resolve(root, page.html);
    const template = await readFile(htmlPath, 'utf-8');

    if (!template.includes('<div id="root"></div>')) {
      throw new Error(`${page.html}: expected an empty <div id="root"></div> to inject into`);
    }

    const markup = serverEntry[page.render]();
    const withMarkup = template.replace(
      '<div id="root"></div>',
      `<div id="root">${markup}</div>`
    );

    await writeFile(htmlPath, withMarkup, 'utf-8');
    console.log(`prerendered ${page.html} (${markup.length.toLocaleString()} chars of markup)`);
  }

  await rm(resolve(root, '.ssr-build'), { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
