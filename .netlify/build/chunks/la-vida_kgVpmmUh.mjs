import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Rayuwa",
  "locale": "ha",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Rayuwa",
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
    "set:html": "<p>A rayuwar yau da kullum, kullum muna ganin bambance-bambance masu ban mamaki. Mawadata da gidaje masu kyau da abokai da yawa, wani lokacin suna shan wahala sosai. .. Talakawa masu tawali’u da suke aiki tukuru ko kuma mutanen talakawa, galibi suna rayuwa cikin farin ciki.</p>\n<p>Yawancin masu kudi suna fama da rashin karfin maza, kuma matan aure masu arziki suna kuka da rashin aminci na miji…</p>\n<p>Masu hannu da shuni na duniya kamar gaggafa ne a cikin kejin zinariya, a wadannan kwanaki ba za su iya rayuwa ba tare da “masu tsaron lafiya”…</p>\n<p>‘Yan siyasa suna jan sarka, ba su da ‘yanci, suna yawo a ko’ina kewaye da mutane dauke da makamai har zuwa hakora…</p>\n<p>Bari mu yi nazari sosai a kan wannan yanayin. Muna bukatar mu san menene rayuwa. Kowa yana da ‘yancin yin ra’ayi yadda yake so…</p>\n<p>Komai abin da suke fada, babu wanda ya san komai, rayuwa ta zama matsala da babu wanda ya gane…</p>\n<p>Lokacin da mutane suke son ba mu labarin rayuwarsu kyauta, suna ambaton abubuwan da suka faru, sunaye da sunayen mahaifi, kwanakin, da dai sauransu, kuma suna jin dadi yayin da suke ba da labarinsu…</p>\n<p>Wadannan matalauta ba su san cewa labarinsu ba cikakke ba ne saboda abubuwan da suka faru, sunaye da kwanakin, kawai bayyanar fim ne, bangaren ciki ya ɓace…</p>\n<p>Gaggawa ne a san “halin sani”, kowane taron yana daidai da wani yanayin tunani.</p>\n<p>Jihohi na ciki ne kuma abubuwan da suka faru na waje ne, abubuwan da suka faru na waje ba komai bane…</p>\n<p>An fahimci jihohin ciki a matsayin kyawawan ko munanan yanayi, damuwa, bakin ciki, camfi, tsoro, zargi, jin kai, tunani kai, wuce gona da iri; jihohin jin dadi, jihohin farin ciki, da sauransu, da sauransu, da sauransu.</p>\n<p>Ba tare da shakka ba, jihohin ciki na iya dacewa daidai da abubuwan da suka faru na waje ko kuma abubuwan da suka faru na waje su haifar da su, ko kuma ba su da wata alaka da su…</p>\n<p>A kowane hali, jihohi da abubuwan da suka faru daban-daban ne. Ba koyaushe abubuwan da suka faru sun dace daidai da jihohi masu alaƙa ba</p>\n<p>Yanayin ciki na taron da ya dace bazai dace da shi ba. Yanayin ciki na taron da ba shi da dadi bazai dace da shi ba. Abubuwan da aka dade ana jira, lokacin da suka zo muna jin kamar akwai abin da ya ɓace…</p>\n<p>Tabbas, yanayin ciki da ya kamata ya haɗu da taron waje ya ɓace…</p>\n<p>Sau da yawa taron da ba a zata ba ya zama wanda ya ba mu lokaci mafi kyau…</p>"
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
const url = "src/content/docs/ha/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ha/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ha/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
