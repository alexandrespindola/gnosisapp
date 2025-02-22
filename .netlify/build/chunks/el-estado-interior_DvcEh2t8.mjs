import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Vidinė Valstybė",
  "locale": "lt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Vidinė Valstybė",
    "order": 7
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
    "set:html": "<p>Teisingai derinti vidines būsenas su išoriniais įvykiais – tai protingai gyventi…</p>\n<p>Kiekvienas protingai išgyventas įvykis reikalauja atitinkamos specifinės vidinės būsenos…</p>\n<p>Tačiau, deja, žmonės, peržvelgdami savo gyvenimą, mano, kad jis pats savaime susideda tik iš išorinių įvykių…</p>\n<p>Vargšai žmonės! Jie mano, kad jei toks ar kitoks įvykis nebūtų jiems nutikęs, jų gyvenimas būtų buvęs geresnis…</p>\n<p>Jie mano, kad sėkmė aplenkė juos ir kad jie prarado galimybę būti laimingiems…</p>\n<p>Jie apgailestauja dėl to, kas prarasta, verkia dėl to, ką paniekino, dejuoja prisimindami senus suklupimus ir nelaimes…</p>\n<p>Žmonės nenori suprasti, kad vegetavimas nėra gyvenimas ir kad gebėjimas sąmoningai egzistuoti priklauso tik nuo Sielos vidinių būsenų kokybės…</p>\n<p>Nesvarbu, kokie gražūs bebūtų išoriniai gyvenimo įvykiai, jei tuo metu nesame tinkamoje vidinėje būsenoje, geriausi įvykiai gali atrodyti monotoniški, erzinantys ar tiesiog nuobodūs…</p>\n<p>Kažkas nekantriai laukia vestuvių puotos, tai įvykis, tačiau gali atsitikti taip, kad žmogus bus taip susirūpinęs tiksliu įvykio momentu, kad iš tikrųjų nepatirs jokio malonumo ir visa tai taps tokia sausa ir šalta kaip protokolas…</p>\n<p>Patirtis mus išmokė, kad ne visi žmonės, kurie dalyvauja bankete ar šokyje, tikrai mėgaujasi…</p>\n<p>Niekada netrūksta nuobodžiautojo geriausioje šventėje, o gardžiausi patiekalai vienus džiugina, o kitus verčia verkti…</p>\n<p>Labai retai pasitaiko žmonių, kurie moka pasitikėdami derinti išorinį įvykį su tinkama vidine būsena…</p>\n<p>Gaila, kad žmonės nemoka gyventi sąmoningai: verkia, kai turėtų juoktis, ir juokiasi, kai turėtų verkti…</p>\n<p>Kontrolė yra skirtinga: išmintingas gali būti linksmas, bet niekada nepatekti į beprotišką įniršį; liūdnas, bet niekada neviltį ir prislėgtas… ramus smurto metu; abstinentas orgijoje; skaistus tarp geismo ir t. t.</p>\n<p>Melancholiški ir pesimistiški žmonės apie gyvenimą galvoja blogiausiai ir atvirai nenori gyventi…</p>\n<p>Kasdien matome žmonių, kurie ne tik nelaimingi, bet dar blogiau – apkartina ir kitų gyvenimą…</p>\n<p>Tokie žmonės nepasikeistų, net jei kasdien gyventų nuo šventės iki šventės; psichologinė liga yra jų viduje… tokie žmonės turi iš esmės iškrypusias vidines būsenas…</p>\n<p>Tačiau šie subjektai patys save vadina teisingais, šventais, dorybingais, kilniais, paslaugiais, kankiniais ir t. t., ir pan.</p>\n<p>Tai žmonės, kurie save pervertina; žmonės, kurie labai myli save…</p>\n<p>Asmenys, kurie labai gaili savęs ir visada ieško išsisukinėjimo būdų, kad išvengtų savo pačių atsakomybės…</p>\n<p>Tokie žmonės yra pripratę prie žemesnių emocijų ir akivaizdu, kad dėl šios priežasties kasdien kuria nežmogiškus psichinius elementus.</p>\n<p>Nelaimingi įvykiai, likimo smūgiai, skurdas, skolos, problemos ir kt. – tai išimtinai tų žmonių, kurie nemoka gyventi, prerogatyva…</p>\n<p>Kiekvienas gali susikurti turtingą intelektualinę kultūrą, tačiau labai mažai žmonių išmoko teisingai gyventi…</p>\n<p>Kai norima atskirti išorinius įvykius nuo sąmonės vidinių būsenų, konkrečiai parodomas nesugebėjimas oriai egzistuoti.</p>\n<p>Tie, kurie išmoksta sąmoningai derinti išorinius įvykius ir vidines būsenas, eina sėkmės keliu…</p>"
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
const url = "src/content/docs/lt/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
