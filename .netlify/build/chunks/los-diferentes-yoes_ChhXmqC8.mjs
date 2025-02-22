import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Die verschiedenen Ichs",
  "locale": "de",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Die verschiedenen Ichs",
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
    "set:html": "<p>Das fälschlicherweise als Mensch bezeichnete rationale Säugetier besitzt in Wirklichkeit keine definierte Individualität.</p>\n<p>Zweifellos ist dieser Mangel an psychologischer Einheit im Humanoiden die Ursache für so viele Schwierigkeiten und Bitterkeiten.</p>\n<p>Der physische Körper ist eine vollständige Einheit und arbeitet als ein organisches Ganzes, es sei denn, er ist krank.</p>\n<p>Das innere Leben des Humanoiden ist jedoch keineswegs eine psychologische Einheit.</p>\n<p>Das Schlimmste von allem, ungeachtet dessen, was die verschiedenen Schulen des Pseudo-Esoterismus und Pseudo-Okkultismus sagen, ist das Fehlen einer psychologischen Organisation im tiefsten Inneren jedes Subjekts.</p>\n<p>Unter solchen Bedingungen gibt es sicherlich keine harmonische Arbeit als Ganzes im Innenleben der Menschen.</p>\n<p>Der Humanoide ist in Bezug auf seinen inneren Zustand eine psychologische Vielfalt, eine Summe von “Ichs”.</p>\n<p>Die aufgeklärten Ignoranten dieser finsteren Epoche verehren das “ICH”, vergöttern es, stellen es auf Altäre, nennen es “ALTER EGO”, “HÖHERES ICH”, “GÖTTLICHES ICH” usw., usw., usw.</p>\n<p>Die “Besserwisser” dieses dunklen Zeitalters, in dem wir leben, wollen nicht erkennen, dass “Höheres Ich” oder “Niederes Ich” zwei Bereiche desselben pluralisierten Egos sind…</p>\n<p>Der Humanoide hat sicherlich kein “Permanentes ICH”, sondern eine Vielzahl verschiedener, untermenschlicher und absurder “Ichs”.</p>\n<p>Das arme intellektuelle Tier, das fälschlicherweise als Mensch bezeichnet wird, gleicht einem Haus in Unordnung, in dem es anstelle eines Herrn viele Diener gibt, die immer befehlen und tun wollen, was ihnen in den Sinn kommt…</p>\n<p>Der grösste Fehler des billigen Pseudo-Esoterismus und Pseudo-Okkultismus ist die Annahme, dass andere ein “Permanentes und Unveränderliches ICH” ohne Anfang und ohne Ende besitzen oder dass man selbst eines hat…</p>\n<p>Wenn diejenigen, die so denken, auch nur für einen Augenblick das Bewusstsein erwecken würden, könnten sie selbst klar erkennen, dass der rationale Humanoide nie lange derselbe ist…</p>\n<p>Das intellektuelle Säugetier verändert sich aus psychologischer Sicht ständig…</p>\n<p>Zu denken, dass eine Person, die Luis heisst, immer Luis ist, ist so etwas wie ein Scherz von sehr schlechtem Geschmack…</p>\n<p>Dieses Subjekt, das Luis genannt wird, hat in sich selbst andere “Ichs”, andere Egos, die sich in verschiedenen Momenten durch seine Persönlichkeit ausdrücken, und obwohl Luis die Habsucht nicht mag, mag ein anderes “Ich” in ihm - nennen wir es Pepe - die Habsucht und so weiter…</p>\n<p>Kein Mensch ist kontinuierlich derselbe, es ist wirklich nicht nötig, sehr weise zu sein, um sich der unzähligen Veränderungen und Widersprüche jedes Subjekts vollständig bewusst zu werden…</p>\n<p>Anzunehmen, dass jemand ein “Permanentes und Unveränderliches ICH” besitzt, ist natürlich ein Missbrauch gegenüber dem Nächsten und gegenüber sich selbst…</p>\n<p>In jedem Menschen leben viele Menschen, viele “Ichs”, das kann jeder wache, bewusste Mensch selbst und direkt überprüfen…</p>"
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
const url = "src/content/docs/de/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
