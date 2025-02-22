import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Eskailera Zoragarria",
  "locale": "eu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Eskailera Zoragarria",
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
    "set:html": "<p>Benetako aldaketa bat anhelatu behar dugu, rutina aspergarri honetatik atera, bizitza mekanizista, nekagarri honetatik…</p>\n<p>Argi eta garbi ulertu behar dugun lehenengo gauza zera da, gutako bakoitza, burgesa edo proletarioa izan, erosoa edo erdi mailakoa, aberatsa edo miserablea, benetan izate Maila jakin batean dagoela…</p>\n<p>Mozkortiaren Izate Maila desberdina da abstemioarena baino, eta prostitutarena oso desberdina birjinarena baino. Esaten ari garena ukaezina da, ezeztaezina…</p>\n<p>Gure kapituluaren zati honetara iristean, ez dugu ezer galtzen behetik gora, bertikalki eta oso maila askorekin hedatzen den eskailera bat irudikatzean…</p>\n<p>Ukaezina da horietako mailaren batean aurkitzen garela; beheko mailetan gu baino okerragoak diren pertsonak egongo dira; goiko mailetan gu baino pertsona hobeak aurkituko dira…</p>\n<p>Bertikal aparta honetan, eskailera zoragarri honetan, argi dago Izate Maila guztiak aurki ditzakegula… pertsona bakoitza desberdina da eta inork ezin du hori ukatu…</p>\n<p>Zalantzarik gabe, ez gara orain aurpegi itsusiez edo ederrez ari, ezta adin kontua ere. Gazteak eta zaharrak daude, hiltzeko zorian dauden agureak eta jaioberriak…</p>\n<p>Denboraren eta urteeen kontua; jaio, hazi, garatu, ezkondu, ugalketa, zahartzea eta hiltzea, horizontala baino ez da…</p>\n<p>“Eskailera Zoragarrian”, bertikalean denbora kontzeptuak ez du lekurik. Eskala horren mailetan “Izate Mailak” baino ezin ditugu aurkitu…</p>\n<p>Jendearen itxaropen mekanikoak ez du ezertarako balio; uste dute denborarekin gauzak hobeto joango direla; horrela pentsatzen zuten gure aitonek eta birraitonek; gertaerek, hain zuzen ere, kontrakoa frogatzera etorri dira…</p>\n<p>“Izate Maila” da garrantzitsuena eta hau bertikala da; maila batean gaude baina beste maila batera igo gaitezke…</p>\n<p>Hizketan ari garen “Eskailera Zoragarriak”, “Izate Maila” ezberdinei buruzkoa dena, egia esan, ez du zerikusirik denbora linealarekin…</p>\n<p>“Izate Maila” altuago bat berehala dago gure gainetik uneoro…</p>\n<p>Ez dago etorkizun horizontal urrun batean, hemen eta orain baizik; gure baitan; bertikalean…</p>\n<p>Nabaria da eta edonork uler dezake, bi lerroak —Horizontala eta Bertikala— gure barne Psikologikoan uneoro aurkitzen direla eta Gurutzea osatzen dutela…</p>\n<p>Pertsonalitatea Bizitzaren lerro Horizontalean garatzen eta zabaltzen da. Bere denbora linealaren barruan jaiotzen eta hiltzen da; galkorra da; ez dago biharririk hildakoaren nortasunarentzat; ez da Izatea…</p>\n<p>Izatearen Mailak; Izatea bera, ez da denborazkoa, ez du zerikusirik Lerro Horizontalarekin; gure baitan dago. Orain, bertikalean…</p>\n<p>Nabarmenki absurdua litzateke gure Izatea geure buruetatik kanpo bilatzea…</p>\n<p>Ez dago soberan ondorio gisa hau ezartzea: Tituluak, graduak, igoerak, etab., kanpoko mundu fisikoan, inola ere ez lukete jatorrizko goratzerik, Izatearen birbaloraziorik, “Izate Mailen” maila gorenera pasatzerik eragingo…</p>"
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
const url = "src/content/docs/eu/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
