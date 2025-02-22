import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Imeline Trepp",
  "locale": "et",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Imeline Trepp",
    "order": 2
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
    "set:html": "<p>Me peame igatsema tõelise muutuse järele, väljuma sellest igavast rutiinist, sellest pelgalt mehhanistlikust, tüütust elust…</p>\n<p>Esiteks peame täiesti selgelt mõistma, et igaüks meist, olgu ta siis kodanlane või proletaarlane, jõukas või keskklassi liige, rikas või vilets, asub tegelikult ühel või teisel Olemise Tasandil…</p>\n<p>Joodiku Olemise Tasand on erinev karsklase omast ja prostituudi oma hoopis teistsugune kui neiu oma. See, mida me räägime, on ümberlükkamatu, vaieldamatu…</p>\n<p>Olles jõudnud oma peatükiga sellesse kohta, ei kaota me midagi, kui kujutleme ette treppi, mis ulatub alt üles, vertikaalselt ja paljude astmetega…</p>\n<p>Vaieldamatult oleme me mõnel neist astmetest; astmetel allpool on inimesi, kes on meist halvemad; astmetel ülalpool on inimesi, kes on meist paremad…</p>\n<p>Selles erakordses Vertikaalis, selles imelises trepil on selge, et me võime leida kõik Olemise Tasandid… iga inimene on erinev ja seda ei saa keegi ümber lükata…</p>\n<p>Kahtlemata me ei räägi praegu koledatest või ilusatest nägudest ega ole see ka vanuse küsimus. On noori ja vanu inimesi, vanureid, kes on suremas, ja vastsündinud lapsi…</p>\n<p>Aja ja aastate küsimus; see sündimine, kasvamine, arenemine, abiellumine, paljunemine, vananemine ja suremine on ainult Horisontaali pärusmaa…</p>\n<p>“Imelisel Trepil”, Vertikaalis, aja mõiste ei kehti. Selle skaala astmetel võime leida ainult “Olemise Tasandeid”…</p>\n<p>Inimeste mehaaniline lootus ei täida eesmärki; nad usuvad, et ajaga lähevad asjad paremaks; nii mõtlesid meie vanaisad ja vanavanaisad; faktid on just vastupidist tõestanud…</p>\n<p>“Olemise Tasand” on see, mis loeb, ja see on Vertikaalne; me oleme ühel astmel, kuid me saame tõusta teisele astmele…</p>\n<p>“Imeline Trepp”, millest me räägime ja mis viitab erinevatele “Olemise Tasanditele”, ei ole kindlasti seotud lineaarse ajaga…</p>\n<p>Kõrgem “Olemise Tasand” on kohe meie kohal hetkest hetke…</p>\n<p>See ei ole mingis kauges horisontaalses tulevikus, vaid siin ja praegu; meie endi sees; Vertikaalis…</p>\n<p>On ilmne ja igaüks saab aru, et kaks joont – Horisontaal ja Vertikaal – ristuvad hetkest hetke meie Psühholoogilises sisemuses ja moodustavad Risti…</p>\n<p>Isiksus areneb ja lahtirullub Elu Horisontaalsel joonel. See sünnib ja sureb oma lineaarses ajas; see on kaduv; surnu isiksuse jaoks ei ole homset; see ei ole Olemus…</p>\n<p>Olemise Tasandid; Olemus ise ei ole ajast, sellel pole midagi pistmist Horisontaalse joonega; see asub meie endi sees. Nüüd, Vertikaalis…</p>\n<p>Oleks ilmselgelt absurdne otsida oma Olemust endast väljastpoolt…</p>\n<p>Pole paha panna paika järgmist järeldust: Tiitlid, kraadid, edutamised jne välises füüsilises maailmas ei põhjustaks mingil juhul ehtsat ülendust, Olemuse ümberhindamist, üleminekut kõrgemale astmele “Olemise Tasanditel”…</p>"
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
const url = "src/content/docs/et/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
