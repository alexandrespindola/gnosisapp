import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Valed olekud",
  "locale": "et",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "8. Valed olekud",
    "order": 8
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
    "set:html": "<p>Kahtlemata on enese range jälgimise korral alati edasilükkamatu ja vältimatu teha täielik loogiline eristus praktilise elu väliste sündmuste ja teadvuse sisemiste seisundite vahel.</p>\n<p>Meil on kiiresti vaja teada, kus me antud hetkel asume, nii teadvuse sisemise seisundi kui ka meiega toimuva välise sündmuse konkreetse olemuse suhtes.</p>\n<p>Elu ise on sündmuste jada, mis töödeldakse läbi aja ja ruumi…</p>\n<p>Keegi ütles: “Elu on ahel, piinadest, mida inimene kannab hinge sisse mähituna…”</p>\n<p>Igaüks on vaba mõtlema, nagu soovib; mina usun, et hetkelistele efemeersele naudingutele järgnevad alati pettumus ja kibedus…</p>\n<p>Igal sündmusel on oma iseloomulik eriline maitse ja sisemised seisundid on samuti erinevad; see on vaieldamatu, ümberlükkamatu…</p>\n<p>Kindlasti viitab sisemine töö iseendaga rõhutatult teadvuse erinevatele psühholoogilistele seisunditele…</p>\n<p>Keegi ei saa eitada, et me kanname endas palju vigu ja et on olemas valed seisundid…</p>\n<p>Kui me tõesti tahame muutuda, peame me kiiremas korras ja edasilükkamatult muutma radikaalselt neid valesid teadvuse seisundeid…</p>\n<p>Valede seisundite absoluutne muutmine põhjustab täielikke muutusi praktilise elu valdkonnas…</p>\n<p>Kui inimene töötab tõsiselt valede seisunditega, ei saa elu ebameeldivad sündmused teda ilmselt enam nii kergesti haavata…</p>\n<p>Me ütleme midagi, mida on võimalik mõista ainult seda läbi elades, seda tegelikult sündmuste valdkonnas tunnetades…</p>\n<p>Kes ei tööta iseendaga, on alati olukordade ohver; ta on nagu õnnetu puutükk ookeani tormistel vetel…</p>\n<p>Sündmused muutuvad pidevalt oma mitmesugustes kombinatsioonides; nad tulevad üksteise järel lainetena, need on mõjud…</p>\n<p>Kindlasti on olemas häid ja halbu sündmusi; mõned sündmused on paremad või halvemad kui teised…</p>\n<p>Teatud sündmuste muutmine on võimalik; tulemuste muutmine, olukordade muutmine jne on kindlasti võimaluste piires.</p>\n<p>Kuid on olemas tegelikke olukordi, mida tõesti ei saa muuta; viimastel juhtudel tuleb neid teadlikult aktsepteerida, kuigi mõned neist on väga ohtlikud ja isegi valusad…</p>\n<p>Kahtlemata kaob valu siis, kui me ei samastu esinenud probleemiga…</p>\n<p>Me peaksime pidama elu järjestikusteks sisemisteks seisunditeks; meie konkreetse elu autentne lugu koosneb kõigist neist seisunditest…</p>\n<p>Omaenda olemasolu tervikuna üle vaadates võime ise vahetult veenduda, et paljud ebameeldivad olukorrad olid võimalikud tänu valedele sisemistele seisunditele…</p>\n<p>Aleksander Suur, kuigi ta oli loomult alati mõõdukas, andis uhkuse tõttu järele liialdustele, mis talle surma põhjustasid…</p>\n<p>François I suri räpase ja jälgi abielurikkumise tõttu, mida ajalugu siiani hästi mäletab…</p>\n<p>Kui nunn Marat mõrvas, suri ta uhkuse ja kadeduse kätte, ta pidas ennast täiesti õiglaseks…</p>\n<p>Hirvepargi daamid hävitasid kahtlemata täielikult hirmsa hooraja LUIS XV elujõu.</p>\n<p>Paljud inimesed surevad ambitsioonide, viha või armukadeduse tõttu, seda teavad psühholoogid väga hästi…</p>\n<p>Niipea, kui meie tahe on pöördumatult kinnitunud absurdseks tendentsiks, saame me kandidaatideks panteoni või kalmistule…</p>\n<p>Othello muutus armukadeduse tõttu mõrtsukaks ja vangla on täis siiraid eksijaid…</p>"
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
const url = "src/content/docs/et/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
