import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Различните јас",
  "locale": "mk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Различните јас",
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
    "set:html": "<p>Рационалниот цицач погрешно наречен човек, всушност нема дефинирана индивидуалност.</p>\n<p>Несомнено, овој недостаток на психолошко единство кај Хуманоидот е причина за толку многу тешкотии и горчини.</p>\n<p>Физичкото тело е комплетна единица и работи како органска целина, освен ако не е болно.</p>\n<p>Меѓутоа, внатрешниот живот на Хуманоидот во никој случај не е психолошка единица.</p>\n<p>Најсериозното од сето ова, и покрај она што го кажуваат различните псевдо-езотерични и псевдо-окултистички школи, е отсуството на психолошка организација во длабочините на секој субјект.</p>\n<p>Секако, во такви услови, не постои хармонична работа како целина во внатрешниот живот на луѓето.</p>\n<p>Хуманоидот, во однос на неговата внатрешна состојба, е психолошка множина, збир на „Јас“.</p>\n<p>Незнајковците просветлени во оваа мрачна ера му се поклонуваат на „ЈАС“, го обожуваат, го ставаат на олтари, го нарекуваат „АЛТЕР ЕГО“, „ВИСОКО ЈАС“, „БОЖЕНСТВЕНО ЈАС“ итн., итн., итн.</p>\n<p>„Знајковците“ од оваа црна ера во која живееме не сакаат да сфатат дека „Високо Јас“ или „Долно Јас“ се два дела од истото плурализирано Его…</p>\n<p>Хуманоидот сигурно нема „Трајно ЈАС“ туку мноштво различни Инфрахумани и апсурдни „Јас“.</p>\n<p>Кутриот интелектуален животин погрешно наречен човек, е сличен на куќа во неред каде што наместо еден господар, има многу слуги кои секогаш сакаат да командуваат и да го прават она што им се допаѓа…</p>\n<p>Најголемата грешка на евтиниот псевдо-езотеризам и псевдо-окултизам е да се претпостави дека другите поседуваат или дека се има „Трајно и Непроменливо ЈАС“ без почеток и крај…</p>\n<p>Ако оние кои така мислат се разбудат во свеста дури и за момент, јасно би можеле да видат самите, дека рационалниот Хуманоид никогаш не е ист долго време…</p>\n<p>Интелектуалниот цицач од психолошка гледна точка, постојано се менува…</p>\n<p>Да се мисли дека ако некој се вика Луис, тој е секогаш Луис, е нешто како шега со многу лош вкус…</p>\n<p>Тој субјект кој се нарекува Луис има во себе други „Јас“, други ега, кои се изразуваат преку неговата личност во различни моменти и иако Луис не ја сака алчноста, друго „Јас“ во него - да го наречеме Пепе - ја сака алчноста и така натаму…</p>\n<p>Ниту една личност не е иста на континуиран начин, навистина не треба да бидете многу мудри за да бидете свесни за безбројните промени и противречности на секој субјект…</p>\n<p>Да се претпостави дека некој поседува „Трајно и Непроменливо ЈАС“ е секако злоупотреба кон ближниот и кон себе…</p>\n<p>Во секој човек живеат многу луѓе, многу „Јас“, ова може да го потврди секој буден, свесен човек самиот и директно…</p>"
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
const url = "src/content/docs/mk/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/mk/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/mk/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
