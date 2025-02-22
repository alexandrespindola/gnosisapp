import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Unutrašnje stanje",
  "locale": "sr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Unutrašnje stanje",
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
    "set:html": "<p>Ispravno kombinovanje unutrašnjih stanja sa spoljašnjim događajima, znači znati živeti inteligentno…</p>\n<p>Svaki inteligentno proživljen događaj zahteva odgovarajuće specifično unutrašnje stanje…</p>\n<p>Međutim, nažalost, ljudi kada preispituju svoj život, misle da se on sam po sebi sastoji isključivo od spoljašnjih događaja…</p>\n<p>Jadni ljudi! Misle da da im se taj i taj događaj nije desio, njihov život bi bio bio bolji…</p>\n<p>Pretpostavljaju da ih je sreća zaobišla i da su propustili priliku da budu srećni…</p>\n<p>Žale za izgubljenim, plaču za onim što su prezreli, jadikuju se prisećajući se starih spoticanja i nedaća…</p>\n<p>Ljudi ne žele da shvate da vegetiranje nije život i da sposobnost svesnog postojanja zavisi isključivo od kvaliteta unutrašnjih stanja Duše…</p>\n<p>Zaista nije važno koliko su lepi spoljašnji događaji života, ako se u tim trenucima ne nalazimo u odgovarajućem unutrašnjem stanju, najbolji događaji nam mogu izgledati monotono, dosadno ili jednostavno zamorno…</p>\n<p>Neko sa nestrpljenjem iščekuje svadbenu proslavu, to je događaj, ali bi se moglo desiti da je toliko zabrinut u samom trenutku događaja, da zaista ne uživa u tome i da se sve to pretvori u nešto suvo i hladno kao protokol…</p>\n<p>Iskustvo nas je naučilo da ne uživaju sve osobe koje prisustvuju banketu ili plesu zaista…</p>\n<p>Nikada ne nedostaje dosadna osoba na najboljem slavlju, a najukusniji zalogaji vesele jedne, a rasplaču druge…</p>\n<p>Vrlo retke su osobe koje znaju pouzdano da kombinuju spoljašnji događaj sa odgovarajućim unutrašnjim stanjem…</p>\n<p>Žalosno je što ljudi ne znaju svesno da žive: plaču kada treba da se smeju, a smeju se kada treba da plaču…</p>\n<p>Kontrola je drugačija: Mudar čovek može biti veseo, ali nikada ispunjen ludim besom; tužan, ali nikada očajan i potišten… smiren usred nasilja; uzdržan u orgiji; čedan među požudom, itd.</p>\n<p>Melanholične i pesimistične osobe misle najgore o životu i iskreno ne žele da žive…</p>\n<p>Svaki dan viđamo ljude koji ne samo da su nesrećni, već, što je još gore, zagorčavaju život i drugima…</p>\n<p>Takvi ljudi se ne bi promenili ni kada bi svakodnevno živeli od zabave do zabave; psihološku bolest nose u sebi… takve osobe poseduju definitivno izopačena intimna stanja…</p>\n<p>Međutim, ti subjekti se samo-kvalifikuju kao pravedni, sveti, vrli, plemeniti, uslužni, mučenici, itd., itd., itd.</p>\n<p>To su ljudi koji previše misle o sebi; osobe koje mnogo vole same sebe…</p>\n<p>Pojedinci koji mnogo žale sami sebe i koji uvek traže izgovore da izbegnu sopstvene odgovornosti…</p>\n<p>Takve osobe su navikle na niže emocije i očigledno je da iz tog razloga svakodnevno stvaraju psihičke infra-humane elemente.</p>\n<p>Nesrećni događaji, preokreti sreće, beda, dugovi, problemi, itd., su ekskluzivnost onih osoba koje ne znaju da žive…</p>\n<p>Svako može da stekne bogatu intelektualnu kulturu, ali vrlo malo ljudi je naučilo da živi ispravno…</p>\n<p>Kada neko želi da odvoji spoljašnje događaje od unutrašnjih stanja svesti, konkretno pokazuje svoju nesposobnost da dostojanstveno postoji.</p>\n<p>Oni koji nauče da svesno kombinuju spoljašnje događaje i unutrašnja stanja, koračaju putem uspeha…</p>"
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
const url = "src/content/docs/sr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
