import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Vida",
  "locale": "kea",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Vida",
    "order": 6
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
    "set:html": "<p>Na terrenu di vida prátiku, nu ta diskubri sénpri kontrasti ki ta kurto-nu. Pessoas riku ku mágnífiku rezidénsia i txeu amizadi, as vezes ta sufri terrivelmenti. .. Proletáriu úmidis di piku i pá i pesoas di klasi média, ta vive as vezes na felisidadi konpletu.</p>\n<p>Txeu arkimilhonáriu ta sufri di inpotênsia seksual i matrona riku ta txora amargamenti infidelidadi di maridu…</p>\n<p>Rikus di tera ta parse abutri entri gaiola di oru, na es ténpus li es ka pode vive sen “guarda-kostas”…</p>\n<p>Ómis di stadu ta rasta kadia, nunka es ka sta libri, es ta anda pa tudu lugar kunpanhadu di jenti armadu ti denti…</p>\n<p>Nu studa es situason más kuidadu. Nu meste sabe kuzé ki é vida. Kada kun ta libri di da se opinion sima el kre…</p>\n<p>Dipendi di kel ki es ta fla, sertamenti ningen ka sabe nada, vida ta rezulta un prubléma ki ningen ka ta ntende…</p>\n<p>Kantu jenti ta deseja konta-nu di grasa stória di se vida, es ta sita akontesimentu, nómi i apelidu, data, etc., i es ta sinti satisfason kantu es ta faze se rilatu…</p>\n<p>Kes pobre jenti la ta ignora ma se rilatu sta inkonpletu pamodi eventu, nómi i data, é so aspetu sterna di filmi, falta aspetu interna…</p>\n<p>É urjenti konxe “stadu di konsiénsia”, pa kada eventu ta kurresponde tal stadu ánimiku.</p>\n<p>Stadu é interior i eventu é esterior, akontesimentu esternu ka é tudu…</p>\n<p>Ntende pa stadu interior kes bon dispuzison ô maus, preokupason, dipreson, supersison, medu, suspeita, mizerikórdia, auto-konsiderason, sobri-stimason di Si mésmu; stadu di sinti felis, stadu di gódju, etc., etc., etc.</p>\n<p>Inkutivelmenti stadu interior pode kurresponde izatamenti ku akontesimentu esterior ô ser orijinadu pa es, ô ka ten ningen relason ku es…</p>\n<p>En tudu kazu stadu i eventu é diferenti. Ka sénpri susesus ta kurresponde izatamenti ku stadu afin.</p>\n<p>Stadu interior di un eventu agradável pode ka kurresponde ku el. Stadu interior di un eventu dizagradável pode ka kurresponde ku el. Akontesimentu speradu duranti txeu ténpu, kantu es ben nu sinti ma staba falta algun kuza…</p>\n<p>Sertamenti staba falta stadu interior korrespondenti ki devia kunbina ku akontesimentu esterior…</p>\n<p>Txeu vez akontesimentu ki ka staba speradu ta ben ser kel ki más bon mumentu el da-nu…</p>"
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
const url = "src/content/docs/kea/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kea/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kea/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
