import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Esencia",
  "locale": "dje",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. La Esencia",
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
    "set:html": "<p>Mina kaŋ diɲe da gaabu ŋwaaray da nga kaŋ ne kaŋ bora taaga yaŋ koyne, nga no ga ti nga maana, nga no ga ti nga cimo…</p>\n<p>Nga maana kaŋ ga beeri zanka kulu ra, cimo, a gonda kayna kayna nda zanka zanka…</p>\n<p>Bumey beeri ka dira nda dumi beerey biyolojia dondonandi, amma halla mate kaŋ se a ga hima nga maana se…</p>\n<p>Sarti si, nga maana hin ka beeri nga boŋ se sanda kayna kayna baa hay kulu si…</p>\n<p>Sanba n’a ci beeri da koyra koyra kaŋ nga maana beeri nga boŋ se ga hima jiiri hinji, taaci nda gu, nga no ga ti fundu sintina…</p>\n<p>Boro yaŋ ga faham kaŋ nga maana beeri ga dira halla waati kulu, sanda beerey dondonandi, amma Gnosticisme Universel ga koyra koyra kaŋ a si no…</p>\n<p>Ka nga maana beeri koyne, hay fo ga hima ka kaa, hay fo ga hima ka te…</p>\n<p>Ay ga h̃annandi kaŋ boro ma te nga boŋ gaa. Nga maana beeri ga hima sanda boro ma te ka bara nda muru kaŋ boro ga ba…</p>\n<p>A ga hima ka faham kaŋ teeyaŋ yaŋ si sanba golle wala banki wala karpenyere wala alibãrã, wala aŋĩrĩyaŋ boŋ wala ofĩsi…</p>\n<p>Teeyaŋ yaŋ wo kaŋ boro kaŋ gonda borey diŋ, hay fo no kaŋ ga ti cikolojiyaŋ…</p>\n<p>Ir kulu ga bay kaŋ ir gonda ir boŋ ra haŋ kaŋ ga ti EGO, AY, AY BÕNÕ, AY CIÑÕ…</p>\n<p>Lãafẽ lãafẽ si nga maana goy kaŋ sinda no, a cindi ECO ra hay fo no kaŋ ga hallasi.</p>\n<p>Ka YO Cikolojia fufu, ka nga hayey kaŋ sinda naŋ fufu, a ga gaabandi, boro si hin ka yẽ, ay si hin ka yẽ… Wo no nga boŋ gaa teeyaŋ maana.</p>\n<p>Ir si hin ka nga maana feeri baa ir si YO Cikolojia fufu sintina…</p>\n<p>Nga maana ra diini go, BUDDHA go, bayray go, ir Baaba kaŋ go beene ra koroŋ torkey go nda bayhayaŋ kulu kaŋ ir ga buuru nga boŋ gaa FUNDU TILAYZÃMEY TEENTA…</p>\n<p>Boro kulu si hin ka YO Cikolojia halaci baa boro si borey kaŋ sinda boro halaci sintina kaŋ ir ga dira nda…</p>\n<p>Ir ga buuru ka waati halla hãyriyaŋ nzãmey kaŋ ga ti koroŋ halaci: yeehari kaŋ diɲe da ga ti goy suuri guuru; mũkũrũ kaŋ ga nzãmey ciiri ka fundu ciiri: sanni kaŋ ga zindi; kalimini kaŋ ga borey diŋ halaci; koñã, gãya kaŋ ga zindi; koroŋ halla kaŋ ga zindi.</p>\n<p>Waati kaŋ zindiyaŋ wo kulu ga halaci nda dunya taamey, nga maana zaa beeri ka gaabu beeri koyne, a ga dira nda gaabu…</p>\n<p>Sarti si waati kaŋ YO Cikolojia bu, nga maana ga beeri ir ra…</p>\n<p>Nga maana kaŋ goy ga ne ir se gaabu kaŋ sinda nã, gaabu wo ga fun funay kaŋ sinda bori nda Bãbẽrito kaŋ cimo…</p>\n<p>Nga maana gonda mate beerey nda hãyyãrey kaŋ te nga boŋ…</p>\n<p>Waati kaŋ ir “Bu ir Bõnoy Ra”, waati kaŋ ir YO Cikolojia fufu, ir ga nga maana hãyyãrey nda gaaba yaŋ taaga…</p>"
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
const url = "src/content/docs/dje/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/dje/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/dje/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
