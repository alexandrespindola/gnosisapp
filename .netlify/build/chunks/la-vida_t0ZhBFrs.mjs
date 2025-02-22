import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Viața",
  "locale": "ro",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Viața",
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
    "set:html": "<p>Pe tărâmul vieții practice descoperim mereu contraste care uimesc. Oameni înstăriți cu reședințe magnifice și mulți prieteni, uneori suferă înfricoșător. Umili proletari cu târnăcopul și lopata sau persoane din clasa de mijloc, adesea trăiesc uneori în deplină fericire.</p>\n<p>Mulți multimiliardari suferă de impotență sexuală și matroane bogate plâng amarnic infidelitatea soțului…</p>\n<p>Bogații pământului par vulturi între cuști de aur, în aceste vremuri nu pot trăi fără “gărzi de corp”…</p>\n<p>Oamenii de stat târăsc lanțuri, nu sunt niciodată liberi, merg peste tot înconjurați de oameni înarmați până-n dinți…</p>\n<p>Să studiem această situație mai atent. Trebuie să știm ce este viața. Fiecare este liber să opineze cum dorește…</p>\n<p>Indiferent ce spun, cu siguranță nimeni nu știe nimic, viața se dovedește a fi o problemă pe care nimeni nu o înțelege…</p>\n<p>Când oamenii doresc să ne povestească gratuit istoria vieții lor, citează evenimente, nume și prenume, date etc. și simt satisfacție când își fac relatările…</p>\n<p>Acei oameni săraci ignoră că relatările lor sunt incomplete, deoarece evenimente, nume și date sunt doar aspectul extern al filmului, lipsește aspectul intern…</p>\n<p>Este urgent să cunoaștem “stări de conștiință”, fiecărui eveniment îi corespunde o anumită stare de spirit.</p>\n<p>Stările sunt interioare și evenimentele sunt exterioare, evenimentele externe nu sunt totul…</p>\n<p>Prin stări interioare se înțeleg dispozițiile bune sau rele, preocupările, depresia, superstiția, teama, suspiciunea, mila, auto-considerarea, supraestimarea de sine; stări de a se simți fericit, stări de bucurie, etc., etc., etc.</p>\n<p>Incontestabil, stările interioare pot corespunde exact evenimentelor exterioare sau pot fi provocate de acestea, sau pot să nu aibă nicio legătură cu acestea…</p>\n<p>În orice caz, stările și evenimentele sunt diferite. Nu întotdeauna evenimentele corespund exact cu stări afine.</p>\n<p>Starea interioară a unui eveniment plăcut ar putea să nu corespundă cu acesta. Starea interioară a unui eveniment neplăcut ar putea să nu corespundă cu acesta. Evenimente așteptate mult timp, când au venit am simțit că lipsea ceva…</p>\n<p>Cu siguranță lipsea starea interioară corespunzătoare care trebuia combinată cu evenimentul exterior…</p>\n<p>De multe ori, evenimentul care nu era așteptat ajunge să fie cel care ne-a oferit cele mai bune momente…</p>"
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
const url = "src/content/docs/ro/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
