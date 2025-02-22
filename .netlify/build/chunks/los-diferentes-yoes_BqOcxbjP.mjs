import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ba Ngai ya Kokesena",
  "locale": "ln",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Ba Ngai ya Kokesena",
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
    "set:html": "<p>Nyama ya libota ya bamɛmɛlɛ oyo babengi yango na lokuta moto, azali mpenza na bomoto oyo eyebani malamu te.</p>\n<p>Na ntembe te kozanga bomoko oyo ya mayele na moto, ezali ntina ya mikakatano mpe mawa mingi.</p>\n<p>Nzoto ya mosuni ezali bomoko ya mobimba mpe esalaka lokola eloko mobimba ya bomoi, longola kaka soki ezali kobɛla.</p>\n<p>Kasi, bomoi ya kati ya moto ezali ata moke te bomoko ya mayele.</p>\n<p>Likambo ya mabe koleka na kati ya makambo nyonso oyo, ata ndenge biteyelo ndenge na ndenge ya lolenge ya Seudo-Esoterique mpe Seudo-Occultiste elobi, ezali kozanga ebongiseli ya mayele na kati ya motema ya moto na moto.</p>\n<p>Ya solo na bantango ya ndenge wana, mosala ya boyokani ezali te lokola mobimba, na bomoi ya kati ya bato.</p>\n<p>Moto, na kotala ezalela na ye ya kati, azali ebele ya mayele, lisangá ya “Ngai”.</p>\n<p>Bato bazangi boyebi oyo batángá kelasi ya eleko oyo ya molili, bazali kosambela “Ngai”, bazali kokómisa yango nzambe, bazali kotya yango na bitumbelo, bazali kobenga yango “ALTER EGO”, “NGAYI YA LIKOLO”, “NGAYI YA NZAMBE”, mpe bongo na bongo.</p>\n<p>Balingi koyeba te “bayebi mingi” ya eleko oyo ya moindo oyo tozali na yango, ete “Ngai ya Likoló” to “Ngai ya Nse”, ezali biteni mibale ya Ego kaka oyo ekómi ebele…</p>\n<p>Ya solo moto azali na “Ngai ya Ntango Nyonso” te kasi ebele ya “Ngai” ndenge na ndenge oyo ezali na nse ya bomoto mpe ya bozoba.</p>\n<p>Nyama moke ya mayele oyo babengi yango na lokuta moto, azali lokola ndako oyo ebebá epai wapi na esika ya nkolo moko, ezali na basaleli mingi oyo balingi ntango nyonso kokamba mpe kosala oyo ezali kosepelisa bango…</p>\n<p>Libunga monene ya Seudo-Esoterisme mpe Seudo-Occultisme ya ntalo moke, ezali kokanisa ete basusu bazali na yango to ete moto azali na “Ngai ya Ntango Nyonso mpe oyo ebongwanaka te” oyo ezali na ebandeli te mpe na nsuka te…</p>\n<p>Soki baoyo bazali kokanisa bongo balamukaki na mayele ata moke, bakokaki komonisa polele bango moko, ete moto ya mayele azali ata mokolo moko te ndenge moko ntango molai…</p>\n<p>Nyama ya libota ya bamɛmɛlɛ ya mayele, na kotala makanisi, ezali kobongwana ntango nyonso…</p>\n<p>Kokanisa ete soki moto abengi nkombo Luis azali ntango nyonso Luis, ezali lokola lisɛki ya mabe mpenza…</p>\n<p>Moto oyo babengi Luis azali na kati na ye “Ngai” mosusu, ba ego mosusu, oyo emonisaka na nzela ya bomoto na ye na bantango ndenge na ndenge mpe atako Luis alingi lokoso te, “Ngai” mosusu na kati na ye —tóbenga ye Pepe— alingi lokoso mpe bongo na bongo…</p>\n<p>Moto moko te azali ndenge moko ntango nyonso, ya solo esengeli te kozala moto ya mayele mingi mpo na koyeba malamu bambongwana mpe bokutani oyo ezali ebele na moto na moto…</p>\n<p>Kokanisa ete moto moko azali na “Ngai ya Ntango Nyonso mpe oyo ebongwanaka te” ekokani mpenza na kobebisa mozalani mpe mpo na ye moko…</p>\n<p>Na kati ya moto na moto bafandi bato mingi, “Ngai” mingi, oyo moto nyonso oyo alamuki, oyo azali na mayele, akoki kokutana na yango mpe na ndenge ya sikisiki.</p>"
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
const url = "src/content/docs/ln/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ln/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ln/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
