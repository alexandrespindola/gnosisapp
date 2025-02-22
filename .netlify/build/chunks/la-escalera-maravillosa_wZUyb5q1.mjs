import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Die Wundervolle Treppe",
  "locale": "de",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Die Wundervolle Treppe",
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
    "set:html": "<p>Wir müssen uns nach einer echten Veränderung sehnen, aus dieser langweiligen Routine, diesem rein mechanistischen, ermüdenden Leben ausbrechen…</p>\n<p>Was wir zuerst mit aller Deutlichkeit verstehen müssen, ist, dass sich jeder von uns, ob Bourgeois oder Proletarier, wohlhabend oder aus der Mittelschicht, reich oder arm, tatsächlich auf einem bestimmten Seinsniveau befindet…</p>\n<p>Das Seinsniveau des Betrunkenen ist anders als das des Abstinenzlers, und das der Prostituierten unterscheidet sich stark von dem des Mädchens. Das, was wir hier sagen, ist unwiderlegbar, unbestreitbar…</p>\n<p>Wenn wir diesen Teil unseres Kapitels erreichen, verlieren wir nichts, wenn wir uns eine Treppe vorstellen, die sich von unten nach oben, vertikal und mit vielen Stufen erstreckt…</p>\n<p>Zweifellos befinden wir uns auf irgendeiner dieser Stufen; unter uns wird es Menschen geben, die schlechter sind als wir; über uns werden sich Menschen befinden, die besser sind als wir…</p>\n<p>In dieser außergewöhnlichen Vertikalen, in dieser wunderbaren Treppe, ist es klar, dass wir alle Seinsniveaus finden können… jeder Mensch ist anders, und das kann niemand widerlegen…</p>\n<p>Zweifellos sprechen wir jetzt nicht von hässlichen oder schönen Gesichtern, und es geht auch nicht um eine Frage des Alters. Es gibt junge und alte Menschen, alte Menschen, die bereits im Sterben liegen, und neugeborene Kinder…</p>\n<p>Die Frage der Zeit und der Jahre; das von Geborenwerden, Wachsen, Entwickeln, Heiraten, Fortpflanzen, Altern und Sterben ist ausschließlich der Horizontalen vorbehalten…</p>\n<p>Auf der “Wunderbaren Treppe”, in der Vertikalen, ist der Begriff Zeit nicht anwendbar. Auf den Stufen dieser Leiter können wir nur “Seinsniveaus” finden…</p>\n<p>Die mechanische Hoffnung der Menschen ist sinnlos; sie glauben, dass die Dinge mit der Zeit besser werden; so dachten unsere Großeltern und Urgroßeltern; die Tatsachen haben genau das Gegenteil bewiesen…</p>\n<p>Das “Seinsniveau” ist das, was zählt, und das ist Vertikal; wir befinden uns auf einer Stufe, aber wir können auf eine andere Stufe aufsteigen…</p>\n<p>Die “Wunderbare Treppe”, von der wir sprechen und die sich auf die verschiedenen “Seinsniveaus” bezieht, hat sicherlich nichts mit linearer Zeit zu tun…</p>\n<p>Ein höheres “Seinsniveau” befindet sich von Augenblick zu Augenblick unmittelbar über uns…</p>\n<p>Es befindet sich nicht in einer fernen horizontalen Zukunft, sondern hier und jetzt; in uns selbst; in der Vertikalen…</p>\n<p>Es ist offensichtlich und für jeden verständlich, dass sich die beiden Linien – Horizontal und Vertikal – von Moment zu Moment in unserem psychologischen Inneren treffen und ein Kreuz bilden…</p>\n<p>Die Persönlichkeit entwickelt und entfaltet sich auf der horizontalen Linie des Lebens. Sie wird innerhalb ihrer linearen Zeit geboren und stirbt; sie ist vergänglich; es gibt kein Morgen für die Persönlichkeit des Toten; sie ist nicht das Sein…</p>\n<p>Die Seinsniveaus; das Sein selbst ist nicht von der Zeit, es hat nichts mit der horizontalen Linie zu tun; es befindet sich in uns selbst. Jetzt, in der Vertikalen…</p>\n<p>Es wäre offensichtlich absurd, unser eigenes Sein außerhalb von uns selbst zu suchen…</p>\n<p>Es schadet nicht, Folgendes als Folgerung festzuhalten: Titel, Grade, Beförderungen usw. in der physischen Außenwelt würden in keiner Weise eine authentische Erhöhung, Neubewertung des Seins, einen Aufstieg auf eine höhere Stufe in den “Seinsniveaus” bewirken…</p>"
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
const url = "src/content/docs/de/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
