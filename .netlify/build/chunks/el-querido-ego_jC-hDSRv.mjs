import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Det älskade egot",
  "locale": "sv",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Det älskade egot",
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
    "set:html": "<p>Eftersom högre och lägre är två sektioner av samma sak, skadar det inte att fastslå följande korollarium: “HÖGRE JAG, LÄGRE JAG” är två aspekter av samma mörka och pluraliserade EGO.</p>\n<p>Det så kallade “GUDOMLIGA JAGET” eller “HÖGRE JAGET”, “ALTER EGO” eller något liknande, är sannerligen ett trick av “JAG SJÄLV”, en form av SJÄLVBEDRÄGERI.</p>\n<p>När JAGET vill fortsätta här och i livet efter detta, Självbedrar det sig med det falska konceptet om ett Gudomligt Odödligt JAG…</p>\n<p>Ingen av oss har ett sant, permanent, oföränderligt, evigt, obeskrivligt “Jag”, etc., etc., etc.</p>\n<p>Ingen av oss har i sanning en sann och autentisk Enhet av Varelse; tyvärr äger vi inte ens en legitim individualitet.</p>\n<p>Egot fortsätter visserligen bortom graven, men har ändå en början och ett slut.</p>\n<p>Egot, JAGET, är aldrig något individuellt, enhetligt, helhetligt. Uppenbarligen är JAGET “JAG”.</p>\n<p>I östra Tibet kallas “JAGEN” för “PSYKISKA AGGREGAT” eller helt enkelt “Värden”, vare sig dessa senare är positiva eller negativa.</p>\n<p>Om vi tänker på varje “Jag” som en annan person, kan vi eftertryckligen fastslå följande: “Inom varje person som lever i världen finns det många personer”.</p>\n<p>Utan tvekan lever det inom var och en av oss väldigt många olika personer, några bättre, andra sämre…</p>\n<p>Vart och ett av dessa Jag, var och en av dessa personer kämpar för överhöghet, vill vara exklusiv, kontrollerar den intellektuella hjärnan eller de emotionella och motoriska centra varje gång de kan, medan en annan förskjuter den…</p>\n<p>Läran om de många Jagen lärdes ut i östra Tibet av de sanna Klärvoajanta, av de autentiska Upplysta…</p>\n<p>Vart och ett av våra psykologiska defekter är personifierat i ett eller annat Jag. Eftersom vi har tusentals och till och med miljontals defekter, bor det uppenbarligen många människor inuti oss.</p>\n<p>I psykologiska frågor har vi tydligt kunnat visa att paranoida, egolatriska och mytomana subjekt inte för allt i världen skulle överge dyrkan av det kära Egot.</p>\n<p>Utan tvekan hatar sådana människor dödligt läran om de många “Jagen”.</p>\n<p>När man verkligen vill lära känna sig själv, måste man självobservera sig och försöka lära känna de olika “Jagen” som finns inuti personligheten.</p>\n<p>Om någon av våra läsare fortfarande inte förstår denna lära om de många “Jagen”, beror det uteslutande på brist på övning i Självobservation.</p>\n<p>Allt eftersom man praktiserar Inre Självobservation, upptäcker man själv många människor, många “Jag”, som lever inom vår egen personlighet.</p>\n<p>De som förnekar läran om de många Jagen, de som dyrkar ett Gudomligt JAG, har utan tvivel aldrig Självobservert sig seriöst. Vi talar nu i en sokratisk stil och säger att dessa människor inte bara är okunniga utan också är okunniga om att de är okunniga.</p>\n<p>Vi skulle sannerligen aldrig kunna lära känna oss själva, utan seriös och djup självobservation.</p>\n<p>Så länge som ett visst subjekt fortsätter att betrakta sig som Ett, är det klart att varje inre förändring kommer att vara mer än omöjlig.</p>"
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
const url = "src/content/docs/sv/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
