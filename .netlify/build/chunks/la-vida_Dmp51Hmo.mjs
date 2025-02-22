import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Maisha",
  "locale": "sw",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Maisha",
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
    "set:html": "<p>Katika uwanja wa maisha ya vitendo, daima tunagundua tofauti ambazo zinashangaza. Watu matajiri wenye makazi mazuri na marafiki wengi, wakati mwingine huteseka vibaya. .. Watu wanyenyekevu wa tabaka la chini wanaofanya kazi kwa bidii au watu wa tabaka la kati, mara nyingi huishi katika furaha kamili.</p>\n<p>Mabilionea wengi wanakabiliwa na upungufu wa nguvu za kiume na wanawake matajiri wanalia kwa uchungu uaminifu wa waume zao…</p>\n<p>Matajiri wa dunia wanaonekana kama tai kati ya vizimba vya dhahabu, siku hizi hawawezi kuishi bila “walinzi”…</p>\n<p>Viongozi wa serikali wanaburuta minyororo, hawako huru kamwe, wanazunguka kila mahali wakiwa wamezungukwa na watu wenye silaha hadi meno…</p>\n<p>Tuchunguze hali hii kwa undani zaidi. Tunahitaji kujua maisha ni nini. Kila mtu yuko huru kutoa maoni anavyotaka…</p>\n<p>Waambie lolote wanalosema hakika hakuna anayejua chochote, maisha yanaonekana kuwa shida ambayo hakuna anayeielewa…</p>\n<p>Wakati watu wanataka kutusimulia bure hadithi ya maisha yao, wananukuu matukio, majina, tarehe, n.k., na wanahisi kuridhika wanapotoa hadithi zao…</p>\n<p>Watu hao maskini hawajui kuwa hadithi zao hazijakamilika kwa sababu matukio, majina na tarehe, ni sura ya nje tu ya filamu, sura ya ndani inakosekana…</p>\n<p>Ni muhimu kujua “hali za ufahamu”, kwa kila tukio linalingana na hali fulani ya kiakili.</p>\n<p>Hali ni za ndani na matukio ni ya nje, matukio ya nje sio yote…</p>\n<p>Uelewe kwa hali za ndani mwelekeo mzuri au mbaya, wasiwasi, unyogovu, ushirikina, hofu, tuhuma, huruma, kujifikiria, kujikadiria kupita kiasi; hali za kujisikia furaha, hali za furaha, n.k., n.k., n.k.</p>\n<p>Bila shaka hali za ndani zinaweza kufanana kabisa na matukio ya nje au kutokana na haya, au kutokuwa na uhusiano wowote nayo…</p>\n<p>Kwa hali yoyote hali na matukio ni tofauti. Sio kila wakati matukio yanafanana kabisa na hali zinazofanana</p>\n<p>Hali ya ndani ya tukio la kupendeza inaweza isilingane na tukio lenyewe. Hali ya ndani ya tukio lisilopendeza inaweza isilingane na tukio lenyewe. Matukio yaliyosubiriwa kwa muda mrefu, yalipokuja tulihisi kuna kitu kilikosekana…</p>\n<p>Hakika hali ya ndani inayolingana ilikosekana ambayo ilipaswa kuunganishwa na tukio la nje…</p>\n<p>Mara nyingi tukio ambalo halikutarajiwa linageuka kuwa ambalo limetupatia nyakati bora zaidi…</p>"
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
const url = "src/content/docs/sw/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sw/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sw/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
