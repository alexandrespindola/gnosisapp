import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Isiklikud juhtumised",
  "locale": "et",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Isiklikud juhtumised",
    "order": 9
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
    "set:html": "<p>Enese intiimne auto-vaatlus on vältimatu, kui on vaja avastada valesid psühholoogilisi seisundeid.</p>\n<p>Vaidlustamatult saab valesid sisemisi seisundeid parandada õigete protseduuride abil.</p>\n<p>Kuna sisemine elu on magnet, mis tõmbab ligi väliseid sündmusi, on meil hädasti vaja kõrvaldada oma psüühikast valed psühholoogilised seisundid.</p>\n<p>Valede psühholoogiliste seisundite parandamine on hädavajalik, kui soovitakse põhjalikult muuta teatud soovimatute sündmuste olemust.</p>\n<p>Suhte muutmine teatud sündmustega on võimalik, kui kõrvaldame oma sisemusest teatud absurdseid psühholoogilisi seisundeid.</p>\n<p>Destruktiivsed välised olukorrad võivad muutuda kahjutuks ja isegi konstruktiivseks tänu sisemiste valede seisundite intelligentsele korrigeerimisele.</p>\n<p>Inimene saab muuta meiega juhtuvate ebameeldivate sündmuste olemust, kui ta end intiimselt puhastab. Kes kunagi ei paranda absurdseid psühholoogilisi seisundeid, muutub end väga tugevaks uskudes asjaolude ohvriks.</p>\n<p>Korralduse loomine meie korrastamata sisemises majas on eluliselt tähtis, kui soovitakse muuta õnnetu eksistentsi kulgu.</p>\n<p>Inimesed kurdavad kõige üle, kannatavad, nutavad, protestivad, soovivad muuta oma elu, pääseda ebaõnnest, milles nad on, kahjuks nad ei tööta iseendaga.</p>\n<p>Inimesed ei taha aru saada, et sisemine elu tõmbab ligi väliseid asjaolusid ja kui need on valusad, siis on selle põhjuseks absurdsed sisemised seisundid.</p>\n<p>Väline on vaid sisemise peegeldus, kes sisemiselt muutub, loob uue asjade korra.</p>\n<p>Välised sündmused ei oleks kunagi nii olulised kui viis, kuidas neile reageerida.</p>\n<p>Kas sa jäid solvaja ees rahulikuks? Kas sa võtsid oma ligimeste ebameeldivaid ilminguid meeldivalt vastu?</p>\n<p>Kuidas sa reageerisid armastatu truudusetusele? Kas sa lasid end viia armukadeduse mürgil? Kas sa tapsid? Kas sa oled vanglas?</p>\n<p>Haiglad, kalmistud või panteonid, vanglad on täis siiraid eksijaid, kes reageerisid välistele sündmustele absurdselt.</p>\n<p>Parim relv, mida inimene elus kasutada saab, on õige psühholoogiline seisund.</p>\n<p>Inimene saab relvituks teha metsloomad ja paljastada reeturid sobivate sisemiste seisundite abil.</p>\n<p>Valed sisemised seisundid muudavad meid inimliku perversuse kaitsetuteks ohvriteks.</p>\n<p>Õppige vastamisi seisma praktilise elu kõige ebameeldivamate sündmustega sobiva sisemise suhtumisega…</p>\n<p>Ärge samastuge ühegi sündmusega; pidage meeles, et kõik möödub; õppige nägema elu kui filmi ja saate kasu…</p>\n<p>Ärge unustage, et väärtusetud sündmused võivad viia teid õnnetusse, kui te ei kõrvalda oma psüühikast valesid sisemisi seisundeid.</p>\n<p>Iga väline sündmus vajab vaidlustamatult sobivat piletit; see tähendab täpset psühholoogilist seisundit.</p>"
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
const url = "src/content/docs/et/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
