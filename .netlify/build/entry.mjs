import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_B9twvODy.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/books.astro.mjs');
const _page3 = () => import('./pages/_lang_/books.astro.mjs');
const _page4 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.3_@netlify+blobs@8.1.1_@types+node@22.10.5_jiti@1.21.7_rollup@4.30.1_sass@1.83.4_typescript@5.7.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@astrojs+starlight@0.30.5_astro@5.1.3_@netlify+blobs@8.1.1_@types+node@22.10.5_jiti@1.2_85a566938a49a29c5119297fdb2e5ec7/node_modules/@astrojs/starlight/routes/static/404.astro", _page1],
    ["src/pages/books.astro", _page2],
    ["src/pages/[lang]/books.astro", _page3],
    ["node_modules/.pnpm/@astrojs+starlight@0.30.5_astro@5.1.3_@netlify+blobs@8.1.1_@types+node@22.10.5_jiti@1.2_85a566938a49a29c5119297fdb2e5ec7/node_modules/@astrojs/starlight/routes/static/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "a0a07059-41c8-4563-88e9-0b9ed7fc91ba"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
