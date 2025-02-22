import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Nau'o'in Kai Daban-daban",
  "locale": "ha",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Nau'o'in Kai Daban-daban",
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
    "set:html": "<p>Hakika, dabbobi masu shayarwa masu hankali da ake kira mutane ba daidai ba, ba su da wata daidaitacciyar asalin kansu.</p>\n<p>Babu shakka, wannan rashin haɗin kan tunani a cikin ɗan Adam shine musabbabin matsaloli da baƙin ciki da yawa.</p>\n<p>Jikin mutum cikakke ne kuma yana aiki a matsayin duka na halitta, sai dai idan yana rashin lafiya.</p>\n<p>Duk da haka, rayuwar ciki ta ɗan Adam ba ta da haɗin kan tunani ta kowace hanya.</p>\n<p>Mafi mahimmancin duka, duk da abin da makarantu daban-daban na Pseudo-Esoteric da Pseudo-Occultist ke faɗi, shine rashin tsarin tunani a cikin zurfin zuciyar kowane mutum.</p>\n<p>Tabbas, a cikin irin waɗannan yanayi, babu wani aiki mai jituwa a matsayin duka, a cikin rayuwar ciki ta mutane.</p>\n<p>Dan Adam, dangane da yanayinsa na ciki, shine yawan tunani, jimlar “Ni”.</p>\n<p>Jahilai masu ilimi na wannan zamani mai duhu, suna bautar “NI”, suna bautar da shi, suna sanya shi a kan bagadai, suna kiransa “ALTER EGO”, “NI MAI GIRMA”, “NI ALLAH”, da dai sauransu, da dai sauransu.</p>\n<p>“Masu hikima” na wannan zamanin duhu da muke rayuwa a ciki ba sa son su fahimci cewa “Ni Mai Girma” ko “Ni Mai Ƙasa”, sassa biyu ne na Ego ɗaya da aka rarraba …</p>\n<p>Hakika, Dan Adam ba shi da “NI na dindindin” sai dai tarin “Ni” daban-daban marasa kyau da marasa ma’ana.</p>\n<p>Matakin dabba mai hankali da ake kira mutum ba daidai ba, yana kama da gida cikin rudani inda maimakon ubangida, akwai bayi da yawa waɗanda koyaushe suke son yin umarni kuma su yi abin da suka ga dama …</p>\n<p>Babban kuskuren Pseudo-Esotericism da arha Pseudo-Occultism shine tunanin cewa wasu suna da ko kuma mutum yana da “NI na dindindin da ba ya canzawa” ba tare da farko ko ƙarshe ba …</p>\n<p>Idan waɗanda suke tunanin haka sun farka da hankali ko da na ɗan lokaci ne, za su iya nuna a fili da kansu cewa ɗan Adam mai hankali ba ya taɓa zama iri ɗaya na dogon lokaci …</p>\n<p>Dabbobin da ke da hankali daga mahangar ilimin halin ɗan adam, suna canzawa koyaushe …</p>\n<p>Tunani idan mutum ya kira kansa Luis koyaushe Luis ne, yana kama da barkwanci mai ban tsoro …</p>\n<p>Wannan mutumin da ake kira Luis yana da wasu “Ni” a cikin kansa, wasu egos, waɗanda ke bayyana kansu ta hanyar halayensa a lokuta daban-daban kuma ko Luis baya son haɗama, wani “Ni” a cikin shi - bari mu kira shi Pepe - yana son haɗama da sauransu …</p>\n<p>Babu wanda yake iri ɗaya ta hanyar ci gaba, da gaske ba ya buƙatar zama mai hikima sosai don gane cikakkun canje-canje da sabani na kowane mutum …</p>\n<p>Tunanin cewa wani yana da “NI na dindindin da ba ya canzawa” hakika yana nufin cin zarafi ga maƙwabcin mutum da kuma kansa …</p>\n<p>A cikin kowane mutum akwai mutane da yawa, “Ni” da yawa, kowane farka, mai hankali zai iya tabbatar da wannan da kansa kuma kai tsaye …</p>"
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
const url = "src/content/docs/ha/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ha/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ha/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
