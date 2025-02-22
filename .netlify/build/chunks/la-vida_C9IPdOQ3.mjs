import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ng'eetab Biik",
  "locale": "kln",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Ng'eetab Biik",
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
    "set:html": "<p>Koboto ne boisioni konyoru kiyokchini kemei. Indoi che kilewenisiek eng’ kalyet ak kenyisiek che mengeechen, araboot koboitinyei. .. Indoi che kaigai che miach eng’ muren ak indoi che po klasta ya kati, imuchi kobaata kora eng’ kenyisiek che tunge.</p>\n<p>Indoi che mengeechen kotom ko mutyoochi ng’alek che kikeen ak kenyisiek che kilewenisiek kochamgeer kotinyei ng’alechini koit. ..</p>\n<p>Indoi che mengeechen eng’ dunia ko kaikai che miach eng’ kaaleel, koitei ma imuchi koboot koyai kaborunet. ..</p>\n<p>Indoi che miach eng’ stet ko kokwonyi ng’eeteet, ma itinge, kochalili eng’ betutiet che miach eng’ ichek che miachei ng’eeteet. ..</p>\n<p>Chebeto ne eleji biik. Kotonon kii koyai keny. Kila ta koit kobwa kolenji boisioni. ..</p>\n<p>Kogasei ko kogasei ma kiwendi ko kiwendi, keny kobaat kora koboto ne matinygei. ..</p>\n<p>Igeer kenyisiek ko kobwa kotinyei ng’alek che itingeeng’a chebo kenyisiek, konamei ng’alek che itingeeng’a, yoom, koboto ne boor komam koitinyei kokeen. ..</p>\n<p>Indoi che iberei koleji kora kogasei ng’alek che tunge amu ng’alek che itingeeng’a ko betusiek chebo keetiit, keguure betusiek che po ng’eet. ..</p>\n<p>Kotonon koyai kamnai “betutiet chebo ng’eet”, koboto ne itingeeng’a ko betusiek che keguure.</p>\n<p>Betusiek ko icheek ak betusiek che keguure ko kemoi, betusiek che kemoi ma kito keguure. ..</p>\n<p>Koitonon koyai betusiek che po ng’eet, koboto ne tunge ak ne mibei, kasubet, ng’eeteet, biil, kutoo, ng’eet, iteere, koitolchin koyai ne tunge, koitolchin koyai ne miach, koboot koyai ne tunge.</p>\n<p>Kitonei koboot koyai betusiek che po ng’eet ko betusiek che keguure koboot koyai kora koboto ne mibei. ..</p>\n<p>Eng’ kenyisiek chebo kiy, betusiek ak betusiek che keguure koit. Ma koiito koyai betusiek che itingeeng’a koboot koyai ne po ng’eet.</p>\n<p>Betutiet che bo ng’eet chebo betutiet che tunge ma kotinyei. Betutiet che bo ng’eet chebo betutiet che mibei ma kotinyei. Betusiek che itingeeng’ai eng’ betutiet, igeer kobwa kotonon koleji ng’eet. ..</p>\n<p>Kito koleji betutiet che po ng’eet che itingeeng’a koboot koyai chebo betutiet che keguure. ..</p>\n<p>Yeibae betutiet che matinge kotinyei keguure koyai ng’alek che tunge.</p>"
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
const url = "src/content/docs/kln/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
