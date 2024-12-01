
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 2715, hash: 'da00b917b9038757cd49d1d817ba6965ed6ca94d33605658eda29369e5952b58', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1133, hash: 'a65946218bec18a24dad9170b28a42305e9fd7ffe34bd768adba3ccb246d7e43', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-CLSF6E72.css', {size: 3338, hash: '9M/TFw7PlxU', text: () => import('./assets-chunks/styles-CLSF6E72_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
