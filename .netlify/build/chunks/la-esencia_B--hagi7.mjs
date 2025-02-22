import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Bit",
  "locale": "hr",
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
    "set:html": "<p>Ono što čini svako novorođenče lijepim i ljupkim je njegova Esencija; ona sama po sebi predstavlja njegovu pravu stvarnost…</p>\n<p>Normalan rast Esencije u svakom stvorenju, svakako je vrlo rezidualan, tek započinje…</p>\n<p>Ljudsko tijelo raste i razvija se u skladu s biološkim zakonima vrste, međutim takve mogućnosti same po sebi su vrlo ograničene za Esenciju…</p>\n<p>Neupitno je da Esencija može rasti sama od sebe, bez pomoći, samo u vrlo maloj mjeri…</p>\n<p>Iskreno i bez okolišanja reći ćemo da je spontani i prirodni rast Esencije moguć samo tijekom prve tri, četiri i pet godina života, odnosno u prvoj etapi života…</p>\n<p>Ljudi misle da se rast i razvoj Esencije uvijek odvija kontinuirano, u skladu s mehanikom evolucije, no Univerzalni Gnosticizam jasno uči da to nije tako…</p>\n<p>Kako bi Esencija više rasla, nešto se vrlo posebno mora dogoditi, nešto novo se mora realizirati.</p>\n<p>Želim naglasiti rad na sebi. Razvoj Esencije moguć je samo na temelju svjesnog rada i dobrovoljne patnje…</p>\n<p>Potrebno je razumjeti da se ovaj rad ne odnosi na pitanja profesije, banke, stolarije, zidarstva, popravljanja željezničkih pruga ili uredskih poslova…</p>\n<p>Ovaj rad je za svaku osobu koja je razvila osobnost; radi se o nečemu psihološkom…</p>\n<p>Svi mi znamo da unutar sebe imamo ono što se zove EGO, JA, SEBE, VLASTITO JA…</p>\n<p>Nažalost, Esencija je zatočena, zarobljena, između Ega i to je žalosno.</p>\n<p>Rastopiti psihološko JA, dezintegrirati njegove neželjene elemente, hitno je, neodgodivo, neizbježno… to je smisao rada na sebi.</p>\n<p>Nikada ne bismo mogli osloboditi Esenciju bez prethodne dezintegracije psihološkog JA…</p>\n<p>U Esenciji je Religija, BUDDHA, Mudrost, čestice boli našeg Oca koji je na Nebesima i svi podaci koji su nam potrebni za INTIMNU AUTO-REALIZACIJU BIĆA.</p>\n<p>Nitko ne bi mogao uništiti psihološko JA bez prethodnog uklanjanja neljudskih elemenata koje nosimo u sebi…</p>\n<p>Moramo spaliti u pepeo okrutnost ovog vremena: zavist koja je nažalost postala tajni pokretač djelovanja; nepodnošljivu pohlepu koja je život učinila tako gorkim: odvratno ogovaranje; klevetu koja uzrokuje toliko tragedija; pijanstva; nečistu požudu koja tako ružno miriše; itd., itd., itd.</p>\n<p>Kako se sve te gnusobe budu svodile na kozmičku prašinu, Esencija će se, osim što će se emancipirati, skladno razvijati i rasti…</p>\n<p>Neupitno je da kada psihološko JA umre, u nama zasja Esencija…</p>\n<p>Slobodna Esencija nam daje unutarnju ljepotu; iz te ljepote proizlaze savršena sreća i istinska Ljubav…</p>\n<p>Esencija posjeduje višestruke osjećaje savršenstva i izvanredne prirodne moći…</p>\n<p>Kada “Umremo u Sebi”, kada rastopimo psihološko JA, uživamo u dragocjenim osjetilima i moćima Esencije…</p>"
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
const url = "src/content/docs/hr/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
