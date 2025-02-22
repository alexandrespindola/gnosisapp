import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Животот",
  "locale": "mk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Животот",
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
    "set:html": "<p>На теренот на практичниот живот секогаш откриваме контрасти кои изненадуваат. Богати луѓе со прекрасни резиденции и многу пријатели, понекогаш страдаат страшно. Скромни пролетери со кирка и лопата или луѓе од средната класа, често живеат во целосна среќа.</p>\n<p>Многу архимилионери страдаат од сексуална немоќ, а богати матрони горко плачат поради неверството на сопругот…</p>\n<p>Богатите на земјата изгледаат како мршојадци во златни кафези, во овие времиња не можат да живеат без „телохранители“…</p>\n<p>Државниците влечат синџири, никогаш не се слободни, одат насекаде опкружени со луѓе вооружени до заби…</p>\n<p>Да ја проучиме оваа ситуација подетално. Треба да знаеме што е животот. Секој има право да мисли како што сака…</p>\n<p>Што и да кажат, сигурно никој ништо не знае, животот е проблем кој никој не го разбира…</p>\n<p>Кога луѓето сакаат бесплатно да ни ја раскажат приказната за нивниот живот, цитираат настани, имиња и презимиња, датуми итн., и чувствуваат задоволство кога ги раскажуваат своите приказни…</p>\n<p>Тие кутри луѓе не знаат дека нивните приказни се нецелосни затоа што настаните, имињата и датумите се само надворешниот аспект на филмот, недостасува внатрешниот аспект…</p>\n<p>Итно е да се знаат „состојби на свест“, на секој настан му одговара таква или таква душевна состојба.</p>\n<p>Состојбите се внатрешни, а настаните се надворешни, надворешните настани не се сè…</p>\n<p>Под внатрешни состојби подразбираме добри или лоши расположенија, грижи, депресија, суеверие, страв, сомнеж, милосрдие, самосожалување, преценување на себеси; состојби на чувствување среќа, состојби на уживање итн., итн., итн.</p>\n<p>Несомнено, внатрешните состојби можат точно да одговараат на надворешните настани или да бидат предизвикани од нив, или воопшто да немаат врска со нив…</p>\n<p>Во секој случај, состојбите и настаните се различни. Не секогаш настаните точно одговараат на сродни состојби.</p>\n<p>Внатрешната состојба на пријатен настан можеби не одговара на самиот настан. Внатрешната состојба на непријатен настан можеби не одговара на самиот настан. Настани кои долго ги чекавме, кога дојдоа, чувствувавме дека нешто недостасува…</p>\n<p>Секако, недостасуваше соодветната внатрешна состојба што требаше да се комбинира со надворешниот настан…</p>\n<p>Многупати настанот што не го очекувавме е тој што ни пружил најубави моменти…</p>"
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
const url = "src/content/docs/mk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/mk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/mk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
