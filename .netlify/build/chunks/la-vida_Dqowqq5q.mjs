import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Življenje",
  "locale": "sl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Življenje",
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
    "set:html": "<p>Na področju praktičnega življenja vedno odkrijemo presenetljive kontraste. Premožni ljudje z veličastnimi domovi in številnimi prijatelji včasih grozljivo trpijo. .. Ponižni proletarci s krampom in lopato ali ljudje srednjega razreda pa pogosto živijo v popolni sreči.</p>\n<p>Mnogi superbogataši trpijo zaradi spolne nemoči, bogate matrone pa grenko jočejo zaradi možove nezvestobe …</p>\n<p>Bogati na Zemlji so kot jastrebi v zlatih kletkah, v teh časih ne morejo živeti brez “osebnih stražarjev”…</p>\n<p>Državniki vlečejo verige, nikoli niso svobodni, povsod hodijo obkroženi z do zob oboroženimi ljudmi…</p>\n<p>Podrobneje preučimo to situacijo. Moramo vedeti, kaj je življenje. Vsakdo lahko izraža svoje mnenje, kakor želi…</p>\n<p>Karkoli že rečejo, nihče ne ve ničesar, življenje se zdi problem, ki ga nihče ne razume…</p>\n<p>Ko nam ljudje želijo brezplačno pripovedovati zgodbo svojega življenja, navajajo dogodke, imena in priimke, datume itd. in so zadovoljni, ko pripovedujejo svoje zgodbe…</p>\n<p>Ti ubogi ljudje ne vedo, da so njihove zgodbe nepopolne, ker so dogodki, imena in datumi le zunanji vidik filma, manjka notranji vidik…</p>\n<p>Nujno je poznati “stanja zavesti”, vsakemu dogodku ustreza takšno ali drugačno duševno stanje.</p>\n<p>Stanja so notranja, dogodki pa zunanji, zunanji dogodki niso vse…</p>\n<p>Notranja stanja razumejte kot dobre ali slabe razpoloženja, skrbi, depresijo, vraževerje, strah, sum, usmiljenje, samovšečnost, precenjevanje samega sebe; stanja sreče, stanja veselja itd. itd. itd.</p>\n<p>Nedvomno lahko notranja stanja natančno ustrezajo zunanjim dogodkom ali pa so posledica njih ali pa z njimi nimajo nobene zveze…</p>\n<p>V vsakem primeru sta stanja in dogodki različni. Dogodki se ne ujemajo vedno natančno s sorodnimi stanji.</p>\n<p>Notranje stanje prijetnega dogodka morda ne ustreza temu dogodku. Notranje stanje neprijetnega dogodka morda ne ustreza temu dogodku. Dogodke, ki smo jih dolgo pričakovali, smo ob prihodu čutili, da nekaj manjka…</p>\n<p>Zagotovo je manjkalo ustrezno notranje stanje, ki bi se moralo kombinirati z zunanjim dogodkom…</p>\n<p>Pogosto se zgodi, da je dogodek, ki ga nismo pričakovali, tisti, ki nam je prinesel najboljše trenutke…</p>"
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
const url = "src/content/docs/sl/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
