import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Skirtingi Aš",
  "locale": "lt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Skirtingi Aš",
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
    "set:html": "<p>Žinduolis racionalas, klaidingai vadinamas žmogumi, iš tikrųjų neturi apibrėžto individualumo.</p>\n<p>Neginčijamai šis psichologinio vieningumo trūkumas humanoiduose yra daugelio sunkumų ir kartėlių priežastis.</p>\n<p>Fizinis kūnas yra vientisas ir veikia kaip organinis visetas, nebent yra sergantis.</p>\n<p>Tačiau humanoido vidinis gyvenimas jokiu būdu nėra psichologinis vienetas.</p>\n<p>Rimčiausia iš viso to, nepaisant to, ką sako įvairios pseudo-ezoterinės ir pseudo-okultistinės mokyklos, yra psichologinės organizacijos nebuvimas kiekvieno subjekto intymioje gelmėje.</p>\n<p>Žinoma, tokiomis sąlygomis nėra jokio harmoningo darbo kaip visumos žmonių vidiniame gyvenime.</p>\n<p>Humanoidas, atsižvelgiant į jo vidinę būseną, yra psichologinis daugiskaita, „Aš“ suma.</p>\n<p>Šio tamsaus amžiaus neišmanėliai šlovina „AŠ“, jį dievina, stato ant altorių, vadina jį „ALTER EGO“, „AUKŠČIAUSIU AŠ“, „DIEVIŠKU AŠ“ ir t. t., ir t. t.</p>\n<p>„Išmintuoliai“ nenori suprasti šiame tamsiajame amžiuje, kuriame gyvename, kad „Aukštesnysis Aš“ arba „Žemesnysis Aš“ yra dvi tos pačios daugiskaitinio Ego dalys…</p>\n<p>Humanoidas tikrai neturi „Nuolatinio AŠ“, o daugybę skirtingų infraraudonųjų ir absurdiškų „AŠ“.</p>\n<p>Vargšas intelektualus gyvūnas, klaidingai vadinamas žmogumi, yra panašus į netvarkingą namą, kur vietoj vieno šeimininko yra daug tarnų, kurie visada nori įsakinėti ir daryti, ką nori…</p>\n<p>Didžiausia pigaus pseudo-ezoterizmo ir pseudo-okultizmo klaida yra manyti, kad kiti turi arba kad turi „Nuolatinį ir Nekintantį AŠ“ be pradžios ir pabaigos…</p>\n<p>Jei tie, kurie taip galvoja, pažadintų sąmonę bent akimirkai, galėtų aiškiai patys įrodyti, kad racionalus humanoidas niekada nebūna tas pats ilgą laiką…</p>\n<p>Intelektualus žinduolis psichologiniu požiūriu nuolat keičiasi…</p>\n<p>Galvoti, kad jei žmogus vadinasi Luisu, jis visada yra Luisas, yra kažkas panašaus į labai prastą pokštą…</p>\n<p>Tas subjektas, kuris vadinasi Luisu, savyje turi kitus „AŠ“, kitus ego, kurie išreiškiami per jo asmenybę skirtingais momentais ir nors Luisui nepatinka godumas, kitas „AŠ“ jame – pavadinkime jį Pepe – mėgsta godumą ir taip toliau…</p>\n<p>Joks žmogus nėra tas pats nuolat, tikrai nereikia būti labai išmintingu, kad visiškai suvoktum kiekvieno subjekto daugybę pokyčių ir prieštaravimų…</p>\n<p>Manyti, kad kažkas turi „Nuolatinį ir Nekintantį AŠ“, neabejotinai prilygsta piktnaudžiavimui artimu ir savimi…</p>\n<p>Kiekviename žmoguje gyvena daug žmonių, daug „AŠ“, tai gali patikrinti pats ir tiesiogiai bet kuris pabudęs, sąmoningas žmogus…</p>"
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
const url = "src/content/docs/lt/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
