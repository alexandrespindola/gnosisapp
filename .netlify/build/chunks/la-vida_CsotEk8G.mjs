import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Livet",
  "locale": "sv",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Livet",
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
    "set:html": "<p>Inom det praktiska livet upptäcker vi alltid kontraster som förvånar. Välbärgade människor med magnifika bostäder och många vänner lider ibland fruktansvärt. Ödmjuka arbetare med hacka och spade eller människor från medelklassen lever ofta i fullständig lycka.</p>\n<p>Många stenrika lider av sexuell impotens och rika matronor gråter bittert över makens otrohet…</p>\n<p>Jordens rika verkar som gamar i gyllene burar, och nuförtiden kan de inte leva utan “livvakter”…</p>\n<p>Statsmän släpar efter sig kedjor, de är aldrig fria, de rör sig överallt omgivna av beväpnade människor till tänderna…</p>\n<p>Låt oss studera denna situation mer noggrant. Vi behöver veta vad livet är. Var och en är fri att tycka vad den vill…</p>\n<p>Säg vad de vill, sanningen är att ingen vet något, livet är ett problem som ingen förstår…</p>\n<p>När människor vill berätta historien om sina liv gratis, citerar de händelser, namn och efternamn, datum osv., och de känner tillfredsställelse när de berättar sina historier…</p>\n<p>Dessa stackars människor ignorerar att deras berättelser är ofullständiga eftersom händelser, namn och datum bara är filmens yttre aspekt, den inre aspekten saknas…</p>\n<p>Det är brådskande att känna till “medvetandetillstånd”, till varje händelse motsvarar ett visst sinnestillstånd.</p>\n<p>Tillstånden är inre och händelserna är yttre, de yttre händelserna är inte allt…</p>\n<p>Med inre tillstånd avses goda eller dåliga dispositioner, bekymmer, depression, vidskepelse, rädsla, misstänksamhet, barmhärtighet, självbetraktelse, övervärdering av sig själv; tillstånd av att känna sig lycklig, tillstånd av glädje, etc., etc., etc.</p>\n<p>Otvekligt kan de inre tillstånden stämma exakt överens med de yttre händelserna eller vara orsakade av dessa, eller inte ha någon relation alls till dem…</p>\n<p>I vilket fall som helst är tillstånd och händelser olika. Det är inte alltid som händelser stämmer exakt överens med besläktade tillstånd.</p>\n<p>Det inre tillståndet för en trevlig händelse kanske inte motsvarar den. Det inre tillståndet för en obehaglig händelse kanske inte motsvarar den. Händelser som vi väntat på länge, när de väl kom kände vi att något saknades…</p>\n<p>Det som saknades var verkligen det motsvarande inre tillståndet som skulle kombineras med den yttre händelsen…</p>\n<p>Ofta är det händelsen som inte förväntades som har gett oss de bästa stunderna…</p>"
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
const url = "src/content/docs/sv/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
