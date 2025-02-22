import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Napačne države",
  "locale": "sl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "8. Napačne države",
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
    "set:html": "<p>Nedvomno je pri strogem opazovanju samega sebe vedno nujno in neizogibno narediti popolno logično razlikovanje med zunanjimi dogodki praktičnega življenja in intimnimi stanji zavesti.</p>\n<p>Nujno moramo vedeti, kje se nahajamo v danem trenutku, tako v odnosu do intimnega stanja zavesti, kot tudi v odnosu do specifične narave zunanjega dogodka, ki se nam dogaja.</p>\n<p>Življenje samo po sebi je niz dogodkov, ki se obdelujejo skozi čas in prostor …</p>\n<p>Nekdo je rekel: “Življenje je veriga mučenja, ki jo človek nosi zapleteno v duši…”</p>\n<p>Vsakdo lahko misli, kakor želi; jaz verjamem, da kratkotrajnim užitkom bežnega trenutka vedno sledijo razočaranje in grenkoba …</p>\n<p>Vsak dogodek ima svoj poseben značilni okus in tudi notranja stanja so različna; to je nesporno, neizpodbitno …</p>\n<p>Notranje delo na sebi se v poudarjeni obliki nanaša na različna psihološka stanja zavesti …</p>\n<p>Nihče ne more zanikati, da v sebi nosimo veliko napak in da obstajajo napačna stanja …</p>\n<p>Če se resnično želimo spremeniti, moramo nujno in neizogibno radikalno spremeniti ta napačna stanja zavesti …</p>\n<p>Absolutna sprememba napačnih stanj povzroči popolne preobrazbe na področju praktičnega življenja …</p>\n<p>Ko človek resno dela na napačnih stanjih, ga neprijetni dogodki v življenju očitno ne morejo več tako zlahka prizadeti …</p>\n<p>Govorimo nekaj, kar je mogoče razumeti le z izkušnjo, s tem, da to resnično občutimo na samem terenu dejstev …</p>\n<p>Kdor ne dela na sebi, je vedno žrtev okoliščin; je kot uboga polena med viharnimi vodami oceana …</p>\n<p>Dogodki se nenehno spreminjajo v svojih številnih kombinacijah; prihajajo drug za drugim v valovih, so vplivi …</p>\n<p>Seveda obstajajo dobri in slabi dogodki; nekateri dogodki bodo boljši ali slabši od drugih …</p>\n<p>Sprememba nekaterih dogodkov je mogoča; Spreminjanje rezultatov, spreminjanje situacij itd., je zagotovo v številu možnosti.</p>\n<p>Vendar obstajajo dejanske situacije, ki jih resnično ni mogoče spremeniti; v teh zadnjih primerih jih je treba zavestno sprejeti, čeprav so nekatere zelo nevarne in celo boleče …</p>\n<p>Nedvomno bolečina izgine, ko se ne poistovetimo s težavo, ki se je pojavila …</p>\n<p>Življenje bi morali obravnavati kot zaporedni niz notranjih stanj; pristna zgodovina našega posameznega življenja je sestavljena iz vseh teh stanj …</p>\n<p>Ko pregledamo celotno lastno življenje, lahko sami neposredno preverimo, da so bile mnoge neprijetne situacije mogoče zaradi napačnih notranjih stanj …</p>\n<p>Aleksander Veliki, čeprav je bil po naravi vedno zmeren, se je zaradi ponosa prepustil ekscesom, ki so mu povzročili smrt …</p>\n<p>Franc I. je umrl zaradi umazljivega in gnusnega prešuštva, ki ga zgodovina še danes zelo dobro pomni …</p>\n<p>Ko je Marata ubila perverzna redovnica, je umiral od ošabnosti in zavisti, verjel je, da je sam popolnoma pravičen …</p>\n<p>Dame iz parka jelenov so nedvomno popolnoma uničile vitalnost groznega prešuštnika po imenu LUIS XV.</p>\n<p>Veliko ljudi umre zaradi ambicij, jeze ali ljubosumja, to psihologi zelo dobro vedo …</p>\n<p>Takoj ko se naša volja nepreklicno potrdi v absurdni težnji, postanemo kandidati za panteon ali pokopališče …</p>\n<p>Othello je zaradi ljubosumja postal morilec in zapor je poln iskrenih zmot …</p>"
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
const url = "src/content/docs/sl/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
