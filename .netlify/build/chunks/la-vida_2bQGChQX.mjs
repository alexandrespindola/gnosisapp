import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "החיים",
  "locale": "he",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. החיים",
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
    "set:html": "<p>בתחום החיים המעשיים אנו מגלים תמיד ניגודים שמדהימים. אנשים עשירים עם מגורים מפוארים וחברים רבים, סובלים לפעמים נוראות… פרולטרים צנועים של את חפירה או אנשים מהמעמד הבינוני, חיים בדרך כלל באושר מוחלט.</p>\n<p>מיליארדרים רבים סובלים מאימפוטנציה מינית ומאטרונות עשירות בוכות במרירות על בגידת הבעל…</p>\n<p>העשירים של כדור הארץ נראים כמו נשרים בתוך כלובים מזהב, בימים אלה הם לא יכולים לחיות בלי “שומרי ראש”…</p>\n<p>אנשי המדינה גוררים שרשראות, הם לעולם לא חופשיים, הם מסתובבים בכל מקום מוקפים באנשים חמושים עד השיניים…</p>\n<p>בואו נלמד את המצב הזה ביתר פירוט. אנחנו צריכים לדעת מה זה חיים. כל אחד חופשי לחוות דעה כרצונו…</p>\n<p>מה שלא יגידו, אף אחד לא יודע כלום בוודאות, החיים הם בעיה שאף אחד לא מבין…</p>\n<p>כשאנשים רוצים לספר לנו בחינם את סיפור חייהם, הם מצטטים אירועים, שמות פרטיים ושמות משפחה, תאריכים וכו’, ומרגישים סיפוק כשהם מספרים את הסיפורים שלהם…</p>\n<p>אותם אנשים מסכנים מתעלמים מהעובדה שהסיפורים שלהם אינם שלמים מכיוון שאירועים, שמות ותאריכים, הם רק ההיבט החיצוני של הסרט, חסר ההיבט הפנימי…</p>\n<p>דחוף להכיר “מצבי תודעה”, לכל אירוע מתאים מצב רוח כזה או אחר.</p>\n<p>המצבים הם פנימיים והאירועים הם חיצוניים, אירועים חיצוניים הם לא הכל…</p>\n<p>תבינו שמצבים פנימיים הם מצבי רוח טובים או רעים, דאגות, דיכאון, אמונה טפלה, פחד, חשד, רחמים, התחשבות עצמית, הערכת יתר של עצמו; מצבים של תחושת אושר, מצבים של שמחה וכו’, וכו’, וכו’.</p>\n<p>ללא ספק, מצבים פנימיים יכולים להתאים בדיוק לאירועים חיצוניים או להיות מקורם, או שלא יהיה להם קשר אליהם…</p>\n<p>בכל מקרה, מצבים ואירועים שונים. לא תמיד האירועים תואמים בדיוק למצבים דומים.</p>\n<p>המצב הפנימי של אירוע נעים עלול שלא להתאים לו. המצב הפנימי של אירוע לא נעים עלול שלא להתאים לו. אירועים שציפינו להם זמן רב, כשבאו הרגשנו שמשהו חסר…</p>\n<p>בטח, חסר המצב הפנימי המתאים שהיה צריך לשלב עם האירוע החיצוני…</p>\n<p>פעמים רבות האירוע שלא ציפינו לו הופך להיות זה שסיפק לנו את הרגעים הטובים ביותר…</p>"
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
const url = "src/content/docs/he/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/he/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/he/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
