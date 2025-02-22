import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Dragul Ego",
  "locale": "ro",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Dragul Ego",
    "order": 11
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
    "set:html": "<p>Întrucât superior și inferior sunt două secțiuni ale aceluiași lucru, nu strică să stabilim următorul corolar: “EU SUPERIOR, EU INFERIOR” sunt două aspecte ale aceluiași EGO tenebros și pluralizat.</p>\n<p>Așa-numitul “EU DIVIN” sau “EU SUPERIOR”, “ALTER EGO” sau ceva de genul, este, cu siguranță, un șiretlic al “LUI EU ÎNSUMI”, o formă de AUTO-AMĂGIRE.</p>\n<p>Când EUL vrea să continue aici și dincolo, se Auto-Amăgește cu falsul concept de EU Divin Nemuritor…</p>\n<p>Niciunul dintre noi nu are un “Eu” adevărat, permanent, imuabil, etern, inefabil, etc., etc., etc.</p>\n<p>Niciunul dintre noi nu are cu adevărat o adevărată și autentică Unitate a Ființei; din păcate, nici măcar nu posedăm o legitimă individualitate.</p>\n<p>Eul, deși continuă dincolo de mormânt, are totuși un început și un sfârșit.</p>\n<p>Eul, EU, nu este niciodată ceva individual, unitar, unitotal. Evident, EUL este “EU-RI”.</p>\n<p>În Tibetul Oriental, “EU-RILE” sunt numite “AGREGATE PSIHICE” sau pur și simplu “Valori”, fie acestea pozitive sau negative.</p>\n<p>Dacă ne gândim la fiecare “Eu” ca la o persoană diferită, putem afirma în mod emfatic următoarele: “În interiorul fiecărei persoane care trăiește în lume, există multe persoane”.</p>\n<p>Fără îndoială, în interiorul fiecăruia dintre noi trăiesc foarte multe persoane diferite, unele mai bune, altele mai rele…</p>\n<p>Fiecare dintre aceste Eu-ri, fiecare dintre aceste persoane luptă pentru supremație, vrea să fie exclusivă, controlează creierul intelectual sau centrele emoțional și motor de fiecare dată când poate, în timp ce altul îl deplasează…</p>\n<p>Doctrina celor mulți Eu-ri a fost predată în Tibetul Oriental de adevărații Clarvăzători, de autenticii Iluminați…</p>\n<p>Fiecare dintre defectele noastre psihologice este personificat într-un anumit Eu. Întrucât avem mii și chiar milioane de defecte, ostensibil trăiesc mulți oameni în interiorul nostru.</p>\n<p>În chestiuni psihologice, am putut evidenția clar că subiecții paranoici, egolatri și mitomani nu ar abandona sub nicio formă cultul iubitului Ego.</p>\n<p>Fără îndoială, astfel de oameni urăsc mortal doctrina celor mulți “Eu-ri”.</p>\n<p>Când cineva vrea cu adevărat să se cunoască pe sine, trebuie să se auto-observe și să încerce să cunoască diferitele “Eu-ri” care sunt băgate în personalitate.</p>\n<p>Dacă vreunul dintre cititorii noștri nu înțelege încă această doctrină a celor mulți “Eu-ri”, se datorează exclusiv lipsei de practică în materie de Auto-Observare.</p>\n<p>Pe măsură ce cineva practică Auto-Observarea Interioară, va descoperi singur mulți oameni, multe “Eu-ri”, care trăiesc în interiorul propriei noastre personalități.</p>\n<p>Cei care neagă doctrina celor mulți Eu-ri, cei care adoră un EU Divin, fără îndoială, nu s-au Auto-Observat niciodată serios. Vorbind de data aceasta în stil socratic, vom spune că acești oameni nu numai că ignoră, dar ignoră și că ignoră.</p>\n<p>Cu siguranță, nu ne-am putea cunoaște niciodată pe noi înșine, fără auto-observarea serioasă și profundă.</p>\n<p>Atâta timp cât un subiect oarecare continuă să se considere ca fiind Unul, este clar că orice schimbare interioară va fi ceva mai mult decât imposibilă.</p>"
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
const url = "src/content/docs/ro/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
