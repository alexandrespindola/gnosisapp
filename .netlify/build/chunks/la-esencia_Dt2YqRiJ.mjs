import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Suština",
  "locale": "sr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Suština",
    "order": 4
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Ono što čini svako novorođenče lepim i divnim jeste njegova Suština; ona sama po sebi predstavlja njegovu pravu stvarnost…</p>\n<p>Normalan rast Suštine u svakom biću je, sigurno, veoma rezidualan, tek u začetku…</p>\n<p>Ljudsko telo raste i razvija se u skladu sa biološkim zakonima vrste, međutim, te mogućnosti su same po sebi veoma ograničene za Suštinu…</p>\n<p>Nesumnjivo je da Suština može rasti sama od sebe bez pomoći, u veoma maloj meri…</p>\n<p>Iskreno i bez okolišanja ćemo reći da je spontani i prirodni rast Suštine moguć samo tokom prve tri, četiri i pet godine života, to jest, u prvoj fazi života…</p>\n<p>Ljudi misle da se rast i razvoj Suštine uvek odvija kontinuirano, u skladu sa mehanikom evolucije, ali Univerzalni Gnosticizam jasno uči da se to ne dešava tako…</p>\n<p>Da bi Suština više rasla, nešto veoma posebno mora da se dogodi, nešto novo mora da se uradi.</p>\n<p>Želim da se naglašeno osvrnem na rad na sebi. Razvoj Suštine je moguć samo na osnovu svesnih napora i dobrovoljnih patnji…</p>\n<p>Neophodno je razumeti da se ti napori ne odnose na pitanja profesije, banaka, stolarstva, zidarstva, popravke železničkih pruga ili kancelarijskih poslova…</p>\n<p>Ovaj rad je za svaku osobu koja je razvila ličnost; radi se o nečemu psihološkom…</p>\n<p>Svi mi znamo da u sebi imamo ono što se zove EGO, JA, MOJE SOPSTVO, SEBE…</p>\n<p>Nažalost, Suština je zarobljena, zatvorena, između EGO-a i to je žalosno.</p>\n<p>Rastvaranje psihološkog JA, dezintegracija njegovih nepoželjnih elemenata, je hitno, neizbežno, neodložno… to je smisao rada na sebi.</p>\n<p>Nikada ne bismo mogli osloboditi Suštinu bez prethodne dezintegracije psihološkog JA…</p>\n<p>U Suštini je Religija, BUDA, Mudrost, čestice bola našeg Oca koji je na Nebesima i svi podaci koji su nam potrebni za INTIMNU AUTO-REALIZACIJU BIĆA.</p>\n<p>Niko ne bi mogao uništiti psihološko JA bez prethodnog eliminisanja neljudskih elemenata koje nosimo u sebi…</p>\n<p>Moramo svesti u pepeo monstruoznu okrutnost ovih vremena: zavist koja je, nažalost, postala tajni pokretač akcije; nepodnošljivu pohlepu koja je učinila život tako gorkim: odvratnu zlonamernost; klevetu koja izaziva toliko tragedija; pijanstva; prljavu požudu koja tako ružno miriše; itd., itd., itd.</p>\n<p>Kako se sve te gnusobe budu svodile na kosmičku prašinu, Suština će se, osim što će se emancipovati, skladno razvijati i rasti…</p>\n<p>Nesumnjivo je da kada psihološko JA umre, u nama zasija Suština…</p>\n<p>Slobodna Suština nam donosi intimnu lepotu; iz te lepote izviru savršena sreća i prava Ljubav…</p>\n<p>Suština poseduje mnogostruke osećaje savršenstva i izvanredne prirodne moći…</p>\n<p>Kada “Umremo u Sebi”, kada rastvorimo psihološko JA, uživamo u dragocenim osećanjima i moćima Suštine…</p>"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const url = "src/content/docs/sr/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
