import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Nortasun ezberdinak",
  "locale": "eu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Nortasun ezberdinak",
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
    "set:html": "<p>Gizakia deitzen zaion ugaztun arrazionalak, oker, ez du benetan banakotasun definiturik.</p>\n<p>Ukaezina da humanoidearen batasun psikologiko falta hori zailtasun eta mingostasun askoren eragilea dela.</p>\n<p>Gorputz fisikoa batasun osoa da eta osotasun organiko gisa funtzionatzen du, gaixo ez badago behintzat.</p>\n<p>Hala ere, humanoidearen barne bizitza ez da inola ere batasun psikologikoa.</p>\n<p>Hau guztiaren larriena, Seudo-Esoteriko eta Seudo-Ocultista motako eskola ezberdinek diotenaren aurka, gai bakoitzaren funtsean dagoen antolaketa psikologikorik eza da.</p>\n<p>Zalantzarik gabe, baldintza horietan, ez dago lan harmoniatsurik osotasun gisa, pertsonen barne bizitzan.</p>\n<p>Humanoidea, bere egoera interiorrari dagokionez, aniztasun psikologikoa da, “Ni” batzuen batuketa.</p>\n<p>Garai ilun honetako ezjakin ilustratuek “NI”-ari kultua eskaintzen diote, jainkotu egiten dute, aldareetan jartzen dute, “ALTER EGO”, “GOI NI”, “NI JAINZKOTUA”, eta abar, eta abar, eta abar deitzen diote.</p>\n<p>Ez dute konturatu nahi bizi garen aro beltz honetako “Jakintsuak”, “Goi Ni” edo “Behe Ni” Ego pluralizatu beraren bi atal direla…</p>\n<p>Humanoideak, zalantzarik gabe, ez du “NI Iraunkorrik”, baizik eta “Ni” infrahumano eta absurdu ugari.</p>\n<p>Gizakia deitzen zaion animalia intelektual gizajoa, nagusi baten ordez, agindu eta nahi dutena egin nahi duten morroi asko dauden etxe kaotiko baten antzekoa da…</p>\n<p>Seudo-Esoterismo eta Seudo-Ocultismo merkearen akatsik handiena, besteek “NI Iraunkor eta Aldaezin” bat dutela edo norberak duela suposatzea da, hasierarik eta amaierarik gabe…</p>\n<p>Horrela pentsatzen dutenek kontzientzia piztuko balute une batez bada ere, argi eta garbi frogatu ahal izango lukete euren kabuz, humanoide arrazionala inoiz ez dela denbora luzez berdina…</p>\n<p>Ikuspegi psikologikotik, ugaztun intelektuala etengabe aldatzen ari da…</p>\n<p>Pertsona bat Luis deitzen bada beti Luis dela pentsatzea oso gustu txarreko txantxa bat bezalakoa da…</p>\n<p>Luis deitzen den subjektu horrek bere baitan beste “Ni” batzuk ditu, beste ego batzuk, bere nortasunaren bidez adierazten direnak une desberdinetan eta Luis jeloskortasuna gustuko ez duen arren, beste “Ni” batek beragan —dei diezaiogun Pepe— jeloskortasuna gustuko du eta horrela hurrenez hurren…</p>\n<p>Inor ez da etengabe berdina, benetan ez da oso jakintsua izan behar subjektu bakoitzaren aldaketa eta kontraesan ugari konturatzeko…</p>\n<p>Norbaitek “NI Iraunkor eta Aldaezin” bat duela suposatzea, zalantzarik gabe, gehiegikeria bat da hurkoarekiko eta norbere buruarekiko…</p>\n<p>Pertsona bakoitzaren barruan pertsona asko bizi dira, “Ni” asko, hau edozein pertsona esnatu eta kontzientek bere kabuz eta zuzenean egiazta dezake…</p>"
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
const url = "src/content/docs/eu/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
