import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Hinar ýmsu sjálfsmyndir",
  "locale": "is",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Hinar ýmsu sjálfsmyndir",
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
    "set:html": "<p>Hið skynsama spendýr sem ranglega er kallað maður, býr í raun ekki yfir skilgreindri einstaklingsvitund.</p>\n<p>Án efa er þessi skortur á sálfræðilegri einingu í mannverunni orsök margra erfiðleika og beiskju.</p>\n<p>Líkaminn er fullkomin eining og vinnur sem lífræn heild, nema hann sé veikur.</p>\n<p>Hins vegar er innra líf mannverunnar á engan hátt sálfræðileg eining.</p>\n<p>Það alvarlegasta af öllu, þrátt fyrir það sem ýmsir skólar af gervi-dulrænum og gervi-dulspekilegum toga segja, er skortur á sálfræðilegri skipulagningu í innsta kjarna hvers einstaklings.</p>\n<p>Vissulega við slíkar aðstæður er engin samstillt vinna sem heild í innra lífi fólks.</p>\n<p>Mannveran er, hvað varðar innra ástand sitt, sálfræðileg margbreytileiki, summa af “sjálfum”.</p>\n<p>Hinn upplýsti fáfróði þessa dimmu tíma, dýrkar “sjálfið”, guðar það, setur það á altari, kallar það “ALTER EGO”, “HÆRRA SJÁLF”, “GUÐLEGT SJÁLF”, o.s.frv., o.s.frv., o.s.frv.</p>\n<p>“Vísindamennirnir” þessa svörtu aldar sem við lifum á, vilja ekki átta sig á því að “Hærra sjálf” eða “Neðra sjálf” eru tvær deildir sama fjölkynja Egós…</p>\n<p>Mannveran hefur vissulega ekki “VARANLEGT SJÁLF” heldur fjölda af mismunandi ómanneskjulegum og fáránlegum “sjálfum”.</p>\n<p>Aumingja vitsmunalega dýrið sem ranglega er kallað maður er líkt og hús í óreiðu þar sem í stað eins húsbónda eru margir þjónar sem vilja alltaf ráða og gera það sem þeim sýnist…</p>\n<p>Stærstu mistök ódýrrar gervi-dulspeki og gervi-dulhyggju eru að gera ráð fyrir að aðrir hafi eða að maður hafi “VARANLEGT og ÓBREYTILEGT SJÁLF” án upphafs og án endis…</p>\n<p>Ef þeir sem hugsa þannig myndu vakna til vitundar, jafnvel þótt það væri aðeins í eina stund, gætu þeir greinilega sýnt sjálfum sér fram á að skynsama mannveran er aldrei sú sama lengi…</p>\n<p>Hið vitsmunalega spendýr er stöðugt að breytast frá sálfræðilegu sjónarhorni…</p>\n<p>Að halda að ef manneskja heitir Luis sé hún alltaf Luis er eitthvað á þessa leið eins og brandari af mjög vondum smekk…</p>\n<p>Sá einstaklingur sem kallaður er Luis hefur í sjálfum sér önnur “sjálf”, önnur egó, sem tjá sig í gegnum persónuleika hans á mismunandi augnablikum og þó Luis líki ekki við ágirnd, líkar öðru “sjálfi” í honum - köllum það Pepe - við ágirnd og svo framvegis…</p>\n<p>Enginn er alltaf sá sami, í raun þarf ekki að vera mjög vitur til að átta sig fullkomlega á hinum óteljandi breytingum og mótsögnum hvers einstaklings…</p>\n<p>Að gera ráð fyrir að einhver hafi “VARANLEGT og ÓBREYTILEGT SJÁLF” jafngildir vissulega misnotkun á náunga sínum og sjálfum sér…</p>\n<p>Innan hvers einstaklings búa margir einstaklingar, mörg “sjálf”, þetta getur hver vakandi, meðvitaður einstaklingur staðfest sjálfur og beint…</p>"
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
const url = "src/content/docs/is/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/is/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/is/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
