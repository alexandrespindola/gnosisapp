import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Bit",
  "locale": "bs",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Bit",
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
    "set:html": "<p>Ono što čini lijepim i ljupkim svako novorođenče je njegova Esencija; ona sama po sebi predstavlja njegovu istinsku stvarnost…</p>\n<p>Normalan rast Esencije u svakom biću, zasigurno je vrlo rezidualan, tek započinje…</p>\n<p>Ljudsko tijelo raste i razvija se u skladu s biološkim zakonima vrste, međutim takve mogućnosti su same po sebi vrlo ograničene za Esenciju…</p>\n<p>Neupitno je da Esencija može rasti sama po sebi bez pomoći, u vrlo maloj mjeri…</p>\n<p>Iskreno i bez okolišanja reći ćemo da je spontani i prirodni rast Esencije moguć samo tijekom prve tri, četiri i pet godina života, to jest, u prvoj etapi života…</p>\n<p>Ljudi misle da se rast i razvoj Esencije uvijek odvija kontinuirano, u skladu s mehanikom evolucije, no Universalni Gnosticizam jasno uči da to nije tako…</p>\n<p>Kako bi Esencija više rasla, nešto se vrlo posebno mora dogoditi, nešto novo se mora realizirati.</p>\n<p>Želim se naglasiti na rad na sebi. Razvoj Esencije moguć je samo na temelju svjesnih radova i dobrovoljnih patnji…</p>\n<p>Potrebno je razumjeti da se ti radovi ne odnose na pitanja profesije, banke, stolarije, zidarstva, popravka željezničkih pruga ili uredske poslove…</p>\n<p>Ovaj rad je za svaku osobu koja je razvila osobnost; radi se o nečemu psihološkom…</p>\n<p>Svi mi znamo da unutar sebe imamo ono što se zove EGO, JA, MOJE JA, SEBE…</p>\n<p>Nažalost, Esencija je zarobljena, zatvorena, između EGA i to je žalosno.</p>\n<p>Rastopiti psihološko JA, dezintegrirati njegove neželjene elemente, hitno je, neodgodivo, neizbježno… to je smisao rada na sebi.</p>\n<p>Nikada ne bismo mogli osloboditi Esenciju bez prethodne dezintegracije psihološkog JA…</p>\n<p>U Esenciji je Religija, BUDDHA, Mudrost, čestice boli našeg Oca koji je na Nebesima i svi podaci koji su nam potrebni za INTIMNU SAMO-REALIZACIJU BIĆA.</p>\n<p>Nitko ne bi mogao uništiti psihološko JA bez prethodnog uklanjanja neljudskih elemenata koje nosimo u sebi…</p>\n<p>Moramo spaliti u pepeo okrutnost čudovišnu ovih vremena: zavist koja je nažalost postala tajni pokretač akcije; nepodnošljiva pohlepa koja je život učinila tako gorkim: odvratno ogovaranje; kleveta koja uzrokuje toliko tragedija; pijanstva; prljava požuda koja tako ružno miriše; itd., itd., itd.</p>\n<p>Kako se sve te gnusobe pretvaraju u kozmičku prašinu, Esencija će se, osim što će se emancipirati, rasti i razvijati harmonično…</p>\n<p>Neupitno, kada psihološko JA umre, u nama zasja Esencija…</p>\n<p>Slobodna Esencija nam daje unutarnju ljepotu; iz takve ljepote izvire savršena sreća i istinska Ljubav…</p>\n<p>Esencija posjeduje višestruke osjećaje savršenstva i izvanredne prirodne moći…</p>\n<p>Kada “Umiremo u Sebi”, kada rastopimo psihološko JA, uživamo u dragocjenim osjećajima i moćima Esencije…</p>"
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
const url = "src/content/docs/bs/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
