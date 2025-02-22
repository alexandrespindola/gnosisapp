import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "De verschillende zelfen",
  "locale": "nl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. De verschillende zelfen",
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
    "set:html": "<p>Het Rationele Zoogdier, ten onrechte mens genoemd, bezit in werkelijkheid geen duidelijke individualiteit.</p>\n<p>Ongetwijfeld is dit gebrek aan Psychologische eenheid in de Humanoïde de oorzaak van zoveel moeilijkheden en bitterheid.</p>\n<p>Het fysieke lichaam is een complete eenheid en werkt als een organisch geheel, tenzij het ziek is.</p>\n<p>Echter, het innerlijke leven van de Humanoïde is geenszins een psychologische eenheid.</p>\n<p>Het ergste van alles, ondanks wat de verschillende Pseudo-Esoterische en Pseudo-Occultistische scholen beweren, is de afwezigheid van psychologische organisatie in de diepste kern van elk subject.</p>\n<p>In dergelijke omstandigheden is er zeker geen harmonieus werk als geheel in het innerlijke leven van mensen.</p>\n<p>De Humanoïde is, met betrekking tot zijn innerlijke staat, een psychologische veelheid, een som van “Ikken”.</p>\n<p>De geïllustreerde onwetenden van deze duistere tijdperk aanbidden het “IK”, vergoddelijken het, plaatsen het op altaren, noemen het “ALTER EGO”, “HOGER IK”, “GODDELIJK IK”, enz., enz., enz.</p>\n<p>De “Wijsneuzen” van deze zwarte eeuw waarin we leven willen niet inzien dat “Hoger Ik” of “Lager Ik” twee secties zijn van hetzelfde gepluraliseerde Ego…</p>\n<p>De Humanoïde heeft zeker geen “Permanent IK” maar een veelheid aan verschillende Infrahumane en absurde “Ikken”.</p>\n<p>Het arme intellectuele dier, ten onrechte mens genoemd, is als een huis in wanorde, waar in plaats van een meester, vele bedienden zijn die altijd willen bevelen en doen wat ze willen…</p>\n<p>De grootste fout van het goedkope Pseudo-Esoterisme en Pseudo-Occultisme is de veronderstelling dat anderen een “Permanent en Onveranderlijk IK” bezitten of dat men er een heeft, zonder begin en zonder einde…</p>\n<p>Als degenen die zo denken, zelfs maar een moment bewustzijn zouden ontwaken, zouden ze duidelijk zelf kunnen aantonen dat de rationele Humanoïde nooit lang hetzelfde is…</p>\n<p>Het intellectuele zoogdier verandert vanuit psychologisch oogpunt voortdurend…</p>\n<p>Denken dat als iemand Luis heet, hij altijd Luis is, is zoiets als een grap van zeer slechte smaak…</p>\n<p>Dat subject dat Luis wordt genoemd, heeft in zichzelf andere “Ikken”, andere ego’s, die zich op verschillende momenten uiten via zijn persoonlijkheid en hoewel Luis niet van hebzucht houdt, houdt een ander “Ik” in hem - laten we hem Pepe noemen - van hebzucht, enzovoort…</p>\n<p>Niemand is voortdurend hetzelfde, het is echt niet nodig om erg wijs te zijn om zich volledig bewust te zijn van de talloze veranderingen en tegenstrijdigheden van elk subject…</p>\n<p>Aannemen dat iemand een “Permanent en Onveranderlijk IK” bezit, staat natuurlijk gelijk aan misbruik van de naaste en van zichzelf…</p>\n<p>Binnen elke persoon leven veel mensen, veel “Ikken”, dit kan rechtstreeks worden geverifieerd door elke persoon die wakker en bewust is…</p>"
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
const url = "src/content/docs/nl/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nl/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nl/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
