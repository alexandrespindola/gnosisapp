import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Unutarnja država",
  "locale": "hr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Unutarnja država",
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
    "set:html": "<p>Ispravno kombiniranje unutarnjih stanja s vanjskim događajima znači inteligentno živjeti…</p>\n<p>Svaki inteligentno proživljen događaj zahtijeva svoje specifično unutarnje stanje…</p>\n<p>Međutim, nažalost, ljudi kada preispituju svoj život, misle da se on sam po sebi sastoji isključivo od vanjskih događaja…</p>\n<p>Jadni ljudi! Misle da bi njihov život bio bolji da im se ovaj ili onaj događaj nije dogodio…</p>\n<p>Pretpostavljaju da im je sreća okrenula leđa i da su propustili priliku biti sretni…</p>\n<p>Žale za izgubljenim, plaču za onim što su prezirali, jauču prisjećajući se starih spoticanja i nedaća…</p>\n<p>Ljudi se ne žele pomiriti s time da vegetiranje nije življenje i da sposobnost svjesnog postojanja ovisi isključivo o kvaliteti unutarnjih stanja Duše…</p>\n<p>Uistinu nije važno koliko su lijepi vanjski događaji života, ako se u tim trenucima ne nalazimo u odgovarajućem unutarnjem stanju, najbolji događaji mogu nam se činiti monotonima, dosadnima ili jednostavno zamornima…</p>\n<p>Netko s nestrpljenjem iščekuje svadbenu svečanost, to je događaj, ali bi se moglo dogoditi da je toliko zabrinut u trenutku samog događaja, da u tome zapravo ne uživa i da sve to postane suho i hladno poput protokola…</p>\n<p>Iskustvo nas je naučilo da ne uživaju sve osobe koje prisustvuju banketu ili plesu…</p>\n<p>Nikada ne nedostaje dosadnjaković na najboljem slavlju, a najukusniji komadi vesele jedne, a rasplaču druge…</p>\n<p>Vrlo rijetki su ljudi koji znaju pouzdano kombinirati vanjski događaj s odgovarajućim unutarnjim stanjem…</p>\n<p>Žalosno je što ljudi ne znaju živjeti svjesno: plaču kada bi trebali plakati, a smiju se kada bi trebali plakati…</p>\n<p>Kontrola je drugačija: Mudrac može biti veseo, ali nikada ispunjen ludim zanosom; tužan, ali nikada očajan i potišten… miran usred nasilja; suzdržljiv u orgiji; čedan usred požude, itd.</p>\n<p>Melankolične i pesimistične osobe misle najgore o životu i iskreno ne žele živjeti…</p>\n<p>Svaki dan vidimo ljude koji ne samo da su nesretni, nego što je još gore, zagorčavaju život i drugima…</p>\n<p>Takvi se ljudi ne bi promijenili ni da svakodnevno žive od zabave do zabave; psihološka bolest im je u nutrini… takve osobe posjeduju definitivno opaka intimna stanja…</p>\n<p>Međutim, ti se subjekti samoprozivaju pravednima, svetima, vrlinama, plemenitima, uslužnima, mučenicima itd. itd. itd.</p>\n<p>To su ljudi koji se precjenjuju; osobe koje se jako vole…</p>\n<p>Pojedinci koji se jako sažalijevaju i koji uvijek traže izgovore kako bi izbjegli vlastite odgovornosti…</p>\n<p>Takve su osobe navikle na niže emocije i očito je da iz tog razloga svakodnevno stvaraju neljudske psihičke elemente.</p>\n<p>Nesretni događaji, preokreti sreće, bijeda, dugovi, problemi itd. ekskluzivnost su onih osoba koje ne znaju živjeti…</p>\n<p>Svatko može steći bogatu intelektualnu kulturu, ali vrlo malo je ljudi koji su naučili živjeti ispravno…</p>\n<p>Kada netko želi odvojiti vanjske događaje od unutarnjih stanja svijesti, konkretno pokazuje svoju nesposobnost za dostojanstveno postojanje.</p>\n<p>Oni koji nauče svjesno kombinirati vanjske događaje i unutarnja stanja, idu putem uspjeha…</p>"
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
const url = "src/content/docs/hr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
