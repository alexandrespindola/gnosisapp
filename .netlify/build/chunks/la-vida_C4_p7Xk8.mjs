import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Nolosha",
  "locale": "so",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Nolosha",
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
    "set:html": "<p>Dhanka nolosha dhabta ah, waxaan had iyo jeer ogaannaa kala duwanaansho naxdin leh. Dadka maalqabeennada ah ee guryo waaweyn leh oo saaxiibo badan leh, mararka qaarkood aad bay u xanuunsadaan… Shaqaalaha hoose ee majarafadaha iyo qoryaha isticmaala ama dadka dhex-dhexaadka ah, mararka qaarkood waxay ku nool yihiin farxad dhammaystiran.</p>\n<p>Millionaire-yaal badan ayaa ka cabanaya awood darrida galmada, hooyooyinka hodanka ahina waxay si qadhaadh u ooyaan khiyaanada ninkooda…</p>\n<p>Taajiriinta adduunku waxay u muuqdaan gorgorrada ku jira qafisyada dahabka ah, maalmahan ma noolaan karaan iyaga oo aan lahayn “ilaalo”…</p>\n<p>Ragga dawladdu waxay jiidaan silsilado, marnaba xor ma ahaan, meel walba waxay ku dhex socdaan iyaga oo ay hareereeyeen dad hubaysan ilaa ilkaha…</p>\n<p>Aynu si dhow u darsanno xaaladdan. Waxaan u baahanahay inaan ogaanno waxa nolosha ahi. Qof kastaa wuu xor u yahay inuu ra’yigiisa dhiibto sida uu doono…</p>\n<p>Wax alla wixii ay yidhaahdaan, hubaal cidina waxba ma garanayso, nolosha ayaa noqotay dhibaato aan cidina fahmin…</p>\n<p>Marka dadku ay rabaan inay si bilaash ah nooga sheekeeyaan sheekada noloshooda, waxay xusaan dhacdooyin, magacyo iyo magacyo qoys, taariikho, iwm., waxayna dareemaan qanacsanaan markay sheekooyinkooda sheegayaan…</p>\n<p>Dadkaasi masaakiinta ahi waxay garan la’yihiin in sheekooyinkoodu ay dhammaystirnayn sababtoo ah dhacdooyinka, magacyada, iyo taariikhaha, ay yihiin uun muuqaalka dibadda ee filimka, muuqaalka gudaha ayaa maqan…</p>\n<p>Waa lagama maarmaan in la ogaado “xalada miyirka”, dhacdo kasta waxa u dhigma xaalad maskaxeed oo gaar ah.</p>\n<p>Xaaladuhu waa kuwo gudaha ah, dhacdooyinkuna waa kuwo dibadda ah, dhacdooyinka dibaddu maaha wax walba…</p>\n<p>Ula jeedo xaaladaha gudaha xaaladaha wanaagsan ama kuwa xun, welwelka, niyad-jabka, khuraafaadka, cabsida, shakiga, naxariista, is-tixgelinta, is-qiimaynta; xaaladaha dareenka farxadda, xaaladaha raynraynta, iwm., iwm., iwm.</p>\n<p>Shaki la’aan xaaladaha gudaha waxay si sax ah ula jaan qaadi karaan dhacdooyinka dibadda ama ay ka dhalan karaan iyaga, ama aanay wax xidhiidh ah la lahayn…</p>\n<p>Si kastaba ha ahaatee, xaaladaha iyo dhacdooyinku way kala duwan yihiin. Dhacdooyinku had iyo jeer si sax ah uma dhigmaan xaaladaha la midka ah</p>\n<p>Xaaladda gudaha ee dhacdo wanaagsan ayaa laga yaabaa inaanay u dhigmin. Xaaladda gudaha ee dhacdo aan fiicnayn ayaa laga yaabaa inaanay u dhigmin. Dhacdooyin muddo dheer la sugayey, markii ay yimaadeen waxaan dareennay in wax maqan yihiin…</p>\n<p>Hubaal waxaa maqnaa xaaladdii gudaha ee u dhiganta ee ay ahayd in lala mideeyo dhacdada dibadda…</p>\n<p>Marar badan dhacdada aan la filayn waxay noqotaa tan na siisay daqiiqadihii ugu fiicnaa…</p>"
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
const url = "src/content/docs/so/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/so/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/so/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
