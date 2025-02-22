import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ego Maitea",
  "locale": "eu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Ego Maitea",
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
    "set:html": "<p>Goikoa eta behekoa gauza beraren bi atal izanik, komeni da ondoko ondorioa ezartzea: “NI GOIKOA, NI BEHEKOA” EGO ilun eta pluralizatu beraren bi alderdi dira.</p>\n<p>“NI JAINOTARRA” edo “NI GOIKOA” deiturikoa, “ALTER EGOA” edo antzekoa, egiaz “NEURE BURUAREN” trikimailua da, AUTO-ENGANIO modu bat.</p>\n<p>NI-ak hemen eta harago jarraitu nahi duenean, NI Jainotiar Hilezkor baten kontzeptu faltsuarekin Auto-Engainatzen da…</p>\n<p>Gure artean inork ez du “Ni” egiazko, iraunkor, aldaezin, betiereko, esanezin eta abarrik.</p>\n<p>Gure artean inork ez du egiazko eta benetako Izate Unitate bat; tamalez ez dugu banakotasun legitimo bat ere.</p>\n<p>Egoak hilobiaren ondoren jarraitzen duen arren, hasiera eta amaiera bat ditu.</p>\n<p>Egoa, NI-a, ez da inoiz zerbait indibiduala, unitarioa, unitotala. Bistan da NI-a “NI-AK” direla.</p>\n<p>Ekialdeko Tibeten “NI-AK” “AGREGATU PSIKIKOAK” edo, besterik gabe, “Balioak” deitzen dira, azken hauek positiboak edo negatiboak izan.</p>\n<p>“Ni” bakoitza pertsona desberdin bat balitz bezala pentsatzen badugu, honako hau baieztatu dezakegu enfasi handiz: “Munduan bizi den pertsona bakoitzaren barruan, pertsona asko daude”.</p>\n<p>Ukaezina da gure barruan pertsona desberdin asko bizi direla, batzuk besteak baino hobeak, beste batzuk okerragoak…</p>\n<p>Ni hauetako bakoitza, pertsona hauetako bakoitza nagusitasunaren alde borrokatzen da, esklusiboa izan nahi du, garun intelektuala edo zentro emozionala eta motorra kontrolatu nahi ditu ahal duen bakoitzean, beste batek desplazatzen duen bitartean…</p>\n<p>Ni askoren Doktrina Ekialdeko Tibeten irakatsi zuten Benetako Argidunek, Benetako Argiztatuek…</p>\n<p>Gure akats psikologikoetako bakoitza Ni jakin batean pertsonifikatuta dago. Milaka eta baita milioika akats ditugunez, nabarmenki jende asko bizi da gure barruan.</p>\n<p>Aurreiritzi psikologikoei dagokienez, argi eta garbi frogatu ahal izan dugu subjektu paranoiko, egolatria eta mitomanoek ez dutela inoiz bizitzako ezergatik Ego maitearen kultua utziko.</p>\n<p>Ukaezina da jende horrek hil egin duela “Ni” askoren doktrina.</p>\n<p>Benetan bere burua ezagutu nahi duenak, bere burua auto-behatu eta nortasunaren barruan sartuta dauden “Ni” desberdinak ezagutzen saiatu behar du.</p>\n<p>Gure irakurleren batek oraindik ez badu ulertzen “Ni” askoren doktrina hau, Auto-Behaketa gaietan praktikarik ez duelako da soilik.</p>\n<p>Barne Auto-Behaketa praktikatzen den heinean, norberak bere kabuz deskubritzen ditu jende asko, gure nortasunaren barruan bizi diren “Ni” asko.</p>\n<p>Ni askoren doktrina ukatzen dutenek, NI Jainotiar bat gurtzen dutenek, dudarik gabe ez dira inoiz serio Auto-Behatu. Oraingoan estilo sokratikoan hitz eginez, esango dugu jende horiek ez dakitela soilik, baizik eta ez dakitela ez dakitela.</p>\n<p>Zalantzarik gabe, inoiz ezingo ginateke geure burua ezagutu, auto-behaketa serio eta sakonik gabe.</p>\n<p>Edozein subjektuk bere burua Bat bezala hartzen duen bitartean, argi dago edozein barne aldaketa ezinezkoa baino gehiago izango dela.</p>"
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
const url = "src/content/docs/eu/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
