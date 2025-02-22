import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Diferitele Euri",
  "locale": "ro",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Diferitele Euri",
    "order": 10
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
    "set:html": "<p>Mamiferul Rațional numit greșit om, nu posedă, de fapt, o individualitate definită.</p>\n<p>Incontestabil, această lipsă de unitate psihologică la Umanoid este cauza atâtor dificultăți și amărăciuni.</p>\n<p>Corpul fizic este o unitate completă și funcționează ca un întreg organic, cu excepția cazului în care este bolnav.</p>\n<p>Totuși, viața interioară a Umanoidului nu este în niciun caz o unitate psihologică.</p>\n<p>Cel mai grav dintre toate acestea, în ciuda a ceea ce spun diversele școli de tip Pseudo-Ezoteric și Pseudo-Ocultist, este absența organizării psihologice în adâncul fiecărui subiect.</p>\n<p>Cu siguranță, în astfel de condiții, nu există o muncă armonioasă ca un întreg în viața interioară a oamenilor.</p>\n<p>Umanoidul, în ceea ce privește starea sa interioară, este o multiplicitate psihologică, o sumă de „Eu-ri”.</p>\n<p>Ignoranții iluminați ai acestei epoci întunecate, venerează „EU”-l, îl divinizează, îl așează pe altare, îl numesc „ALTER EGO”, „EU SUPERIOR”, „EU DIVIN” etc., etc., etc.</p>\n<p>Nu vor să-și dea seama „Știutorii” din această epocă neagră în care trăim, că „Eu Superior” sau „Eu Inferior” sunt două secțiuni ale aceluiași Ego pluralizat…</p>\n<p>Umanoidul nu are cu siguranță un „EU Permanent”, ci o multitudine de diferite „Eu-ri” Inumane și absurde.</p>\n<p>Bietul animal intelectual numit greșit om este asemănător cu o casă în dezordine, unde în loc de un stăpân, există mulți slujitori care vor întotdeauna să comande și să facă ce le vine la îndemână…</p>\n<p>Cea mai mare eroare a Pseudo-Ezoterismului și Pseudo-Ocultismului ieftin este să presupună că ceilalți posedă sau că se are un „EU Permanent și Imutabil”, fără început și fără sfârșit…</p>\n<p>Dacă cei care gândesc astfel și-ar trezi conștiința, fie și pentru o clipă, ar putea evidenția clar singuri că Umanoidul rațional nu este niciodată același pentru mult timp…</p>\n<p>Mamiferul intelectual, din punct de vedere psihologic, se schimbă continuu…</p>\n<p>Să ne gândim că, dacă o persoană se numește Luis, este întotdeauna Luis, este ceva ca o glumă de foarte prost gust…</p>\n<p>Acel subiect pe care îl numim Luis are în sine alți „Eu-ri”, alte ego-uri, care se exprimă prin personalitatea sa în diferite momente și, deși lui Luis nu-i place lăcomia, altui „Eu” din el — să-i spunem Pepe — îi place lăcomia și așa mai departe…</p>\n<p>Nicio persoană nu este aceeași în mod continuu, într-adevăr nu trebuie să fii foarte înțelept pentru a-ți da seama pe deplin de nenumăratele schimbări și contradicții ale fiecărui subiect…</p>\n<p>A presupune că cineva posedă un „EU Permanent și Imutabil” echivalează, desigur, cu un abuz față de aproapele și față de sine…</p>\n<p>În interiorul fiecărei persoane trăiesc multe persoane, mulți „Eu-ri”, acest lucru îl poate verifica singură și în mod direct orice persoană trează, conștientă…</p>"
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
const url = "src/content/docs/ro/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
