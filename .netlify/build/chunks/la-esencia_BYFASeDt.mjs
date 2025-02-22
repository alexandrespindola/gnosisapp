import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Essensen",
  "locale": "sv",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Essensen",
    "order": 4
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
    "set:html": "<p>Det som gör varje nyfött barn vackert och älskvärt är dess Essens; denna utgör i sig självt dess verkliga verklighet…</p>\n<p>Den normala tillväxten av Essensen i varje varelse är sannerligen mycket restriktiv, begynnande…</p>\n<p>Den mänskliga kroppen växer och utvecklas i enlighet med artens biologiska lagar, men dessa möjligheter är i sig mycket begränsade för Essensen…</p>\n<p>Utan tvekan kan Essensen bara växa av sig själv, utan hjälp, i mycket liten grad…</p>\n<p>Fritt och öppet sagt är den spontana och naturliga tillväxten av Essensen endast möjlig under de första tre, fyra och fem åren, det vill säga i livets första skede…</p>\n<p>Folk tror att Essensens tillväxt och utveckling alltid sker kontinuerligt, i enlighet med evolutionens mekanik, men den Universella Gnosticismen lär tydligt att detta inte är fallet…</p>\n<p>För att Essensen ska växa mer måste något mycket speciellt hända, något nytt måste utföras.</p>\n<p>Jag vill hänvisa på ett eftertryckligt sätt till arbetet på sig själv. Utvecklingen av Essensen är endast möjlig genom medvetet arbete och frivilligt lidande…</p>\n<p>Det är nödvändigt att förstå att dessa arbeten inte hänvisar till frågor om yrke, banker, snickeri, murverk, reparation av järnvägslinjer eller kontorsärenden…</p>\n<p>Detta arbete är för varje person som har utvecklat personligheten; det handlar om något psykologiskt…</p>\n<p>Vi vet alla att vi inom oss har det som kallas EGO, JAG, MIG SJÄLV…</p>\n<p>Tyvärr är Essensen instängd, innesluten, mellan EGOT och detta är beklagligt.</p>\n<p>Att upplösa det psykologiska JAGET, att desintegrera dess oönskade element, är brådskande, oundvikligt, ofrånkomligt… det är innebörden av arbetet på sig själv.</p>\n<p>Vi skulle aldrig kunna frigöra Essensen utan att först desintegrera det psykologiska JAGET…</p>\n<p>I Essensen finns Religionen, BUDDHAN, Visdomen, smärtpartiklarna från vår Fader som är i Himmelen och all den information vi behöver för den INTIMA SJÄLVFÖRVERKLIGANDET AV VARA VÄSEN.</p>\n<p>Ingen skulle kunna förinta det psykologiska JAGET utan att först eliminera de omänskliga element vi bär inom oss…</p>\n<p>Vi måste reducera till aska den monstruösa grymheten i dessa tider: avundsjukan som tyvärr har kommit att bli handlingens hemliga drivkraft; den outhärdliga girigheten som har gjort livet så bittert: det avskyvärda förtalet; förtalet som orsakar så många tragedier; fyllerierna; den orena lusten som luktar så illa; etc., etc., etc.</p>\n<p>I takt med att alla dessa vederstyggligheter reduceras till kosmiskt stoft kommer Essensen, förutom att frigöras, att växa och utvecklas harmoniskt…</p>\n<p>Utan tvekan lyser Essensen i oss när det psykologiska JAGET har dött…</p>\n<p>Den fria Essensen ger oss inre skönhet; från sådan skönhet utgår den perfekta lyckan och den sanna Kärleken…</p>\n<p>Essensen besitter flera sinnen för perfektion och extraordinära naturliga krafter…</p>\n<p>När vi “Dör i Oss Själva”, när vi upplöser det psykologiska JAGET, åtnjuter vi Essensens dyrbara sinnen och krafter…</p>"
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
const url = "src/content/docs/sv/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
