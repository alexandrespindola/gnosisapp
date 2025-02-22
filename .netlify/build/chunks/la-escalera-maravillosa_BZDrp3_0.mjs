import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Dagge Jawdiido",
  "locale": "ff",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Dagge Jawdiido",
    "order": 2
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
    "set:html": "<p>Eɗen ko haajori men e waylude goonga, ummine nder ndee nguurndam yaasiire, nguurndam mekaniire tan, nguurndam mettungo…</p>\n<p>Ko arande ko haani men faamude fota ko gooto e gooto men fow, hara ko burzuwaa bee proletariyaa, jaggitaaɗo bee hakkundeeri, galo bee miskin, himo wondi e Nivel de Ser…</p>\n<p>Nivel de Ser jaroowo fotaani e fawowo, e debbo suusaaɗo no feewi fotaani e virgo. Ko men ngoni wiide ko goonga, ko alaa gaño…</p>\n<p>To men yotti e nder joogaraagal men, alaa ko men haala to men yii’i darajaare je yeeɗa dow, ngesɗa e dow, e darajaaji keewɗi…</p>\n<p>Sikkitaare alaa, e darajaaje ɗe men ngoni; darajaaje lesɗe no woodi yimɓe ɓe ɓuri men bonde; darajaaje dow no woodi yimɓe ɓe ɓuri men moƴƴere…</p>\n<p>E nder ndee Verticale mawnde, e nder darajaare coownaare, ko laaɓi no men tawa Nivel de Ser fow… gooto e gooto fow no seeda, e ko alaa gooto waawaa haɓa…</p>\n<p>Sikkitaare alaa men ngoni haalaade yeeso bonɗi bee moƴƴi, walaa kadi ko haani e duuɓi. No woodi sukaaɓe bee mawɓe, jomiraaɓe ɓe ngoni ngordude e cukaloy nguurndam…</p>\n<p>Kisal nguurndam e duuɓi; ko nguurndam, mawɗe, yarlude, jombaade, ummoraade, mawɗe, e ngordude, ko Verticale tan…</p>\n<p>E “Darajaare Coownaare”, e Verticale nanii nguurndam alaa. E darajaaje ndee darajaare men tawa tan “Nivel de Ser”…</p>\n<p>Rajaa mekaniire yimɓe alaa nafa; ɓe ngoni tinaade nguurndam no waawi moƴƴere; nonne ko yumma e kaakiraaɓe men ngoni tinanaa, ko goonga nguurndam holli ko feewi…</p>\n<p>“Nivel de Ser” ko ko haani, e ko Verticale; men ngoni e darajaare ammaa men waawaa yeeɗde e darajaare goo…</p>\n<p>“Darajaare Coownaare” je men ngoni haalaade e je ngoni hollude “Nivel de Ser” seeda, alaa ko haani e nguurndam ngesa…</p>\n<p>“Nivel de Ser” mawɗo no e dow men e hakkunde hakkunde…</p>\n<p>Alaa e nguurndam ngesa nder yeeso, ammaa ɗo e jooni; nder men ɓernde; e Verticale…</p>\n<p>Ko laaɓi e gooto fow waawi faamude, no men ɗiɗi – Horizontal e Vertical – no men tawreede e hakkunde hakkunde nder men ɓernde Psikolojiire e mbaɗi leeru…</p>\n<p>Personalitee no mawɗe e holla nder nguurndam Horizontal. No nguurndam e ngorda nder nguurndam ngesa; ko fecci; alaa subaka goɗɗo nguurndam maayɗo; ko alaa Ser…</p>\n<p>Nivel de Ser; Ser fow, ko alaa nguurndam, alaa ko haani e Línea Horizontal; no nder men ɓernde. Jooni, e Verticale…</p>\n<p>Ko yaasiire no feewi ƴeewde Ser men nder men…</p>\n<p>Alaa ko boni to men tori non: Titreeji, darajaaje, yeeɗde, ekn, e nder aduna feccere yaasiire, e hakkunde no umminira galo goonga, teeɗere Ser, waɗde e darajaare mawnde nder “Nivel de Ser”…</p>"
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
const url = "src/content/docs/ff/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ff/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ff/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
