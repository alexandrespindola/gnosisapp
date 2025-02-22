import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Maisha",
  "locale": "swc",
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
    "set:html": "<p>Kwenye maisha ya kawaida, tunapata tofauti zenye kushangaza. Watu matajiri wenye makazi mazuri na marafiki wengi, wakati mwingine wanateseka sana. .. Watu duni wanaofanya kazi ngumu au watu wa tabaka la kati, mara nyingi wanaishi kwa furaha kamili.</p>\n<p>Mamilionea wengi wanateseka na upungufu wa nguvu za kiume na wanawake matajiri wanalia sana kwa usaliti wa waume zao…</p>\n<p>Matajiri wa dunia wanaonekana kama tai kati ya vizimba vya dhahabu, siku hizi hawawezi kuishi bila “walinzi”…</p>\n<p>Watu wa serikali wanaburuta minyororo, hawako huru kamwe, wanazunguka kila mahali wakiwa wamezungukwa na watu wenye silaha hadi meno…</p>\n<p>Tuchunguze hali hii kwa undani zaidi. Tunahitaji kujua maisha ni nini. Kila mtu ana uhuru wa kutoa maoni anavyotaka…</p>\n<p>Waseme wasiseme hakika hakuna anayejua chochote, maisha yanakuwa tatizo ambalo hakuna anayelielewa…</p>\n<p>Wakati watu wanataka kutuelezea bure hadithi ya maisha yao, wananukuu matukio, majina na vizazi, tarehe, nk., na wanahisi kuridhika wanapoelezea hadithi zao…</p>\n<p>Watu hao maskini hawajui kwamba hadithi zao hazijakamilika kwa sababu matukio, majina na tarehe, ni sura ya nje tu ya filamu, sura ya ndani haipo…</p>\n<p>Ni muhimu kujua “hali za fahamu”, kila tukio linalingana na hali fulani ya kiakili.</p>\n<p>Hali ni za ndani na matukio ni ya nje, matukio ya nje sio kila kitu…</p>\n<p>Elewa kwa hali za ndani hali nzuri au mbaya, wasiwasi, unyogovu, ushirikina, hofu, tuhuma, huruma, kujifikiria, kujithamini kupita kiasi; hali za kujisikia furaha, hali za shangwe, nk., nk., nk.</p>\n<p>Bila shaka, hali za ndani zinaweza kuendana sawasawa na matukio ya nje au kusababishwa na hayo, au kutokuwa na uhusiano wowote nayo…</p>\n<p>Kwa hali yoyote, hali na matukio ni tofauti. Sio kila mara matukio yanaendana sawasawa na hali zinazohusiana</p>\n<p>Hali ya ndani ya tukio la kupendeza inaweza isilingane na hilo. Hali ya ndani ya tukio lisilopendeza inaweza isilingane na hilo. Matukio yaliyosubiriwa kwa muda mrefu, yalipokuja tulihisi kuwa kuna kitu kilikuwa kinakosekana…</p>\n<p>Hakika ilikosekana hali ya ndani inayolingana ambayo ilipaswa kuunganishwa na tukio la nje…</p>\n<p>Mara nyingi tukio ambalo halikutarajiwa linakuwa lile ambalo limetupa nyakati bora…</p>"
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
const url = "src/content/docs/swc/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/swc/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/swc/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
