import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "De Wonderlijke Trap",
  "locale": "nl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. De Wonderlijke Trap",
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
    "set:html": "<p>We moeten verlangen naar een echte verandering, weg van deze saaie routine, van dit puur mechanistische, vermoeiende leven…</p>\n<p>Wat we eerst volledig en duidelijk moeten begrijpen, is dat ieder van ons, of we nu burgerlijk of proletarisch zijn, welgesteld of van de middenklasse, rijk of arm, zich werkelijk op een bepaald Niveau van Zijn bevindt…</p>\n<p>Het Niveau van Zijn van de dronkaard is anders dan dat van de geheelonthouder, en dat van de prostituee heel anders dan dat van de maagd. Wat we hier zeggen, is onweerlegbaar, onweerstaanbaar…</p>\n<p>Nu we dit deel van ons hoofdstuk bereiken, verliezen we niets door ons een ladder voor te stellen die van beneden naar boven loopt, verticaal en met heel veel treden…</p>\n<p>Ongetwijfeld bevinden we ons op een van deze treden; treden lager zullen er mensen slechter zijn dan wij; treden hoger zullen er mensen beter zijn dan wij…</p>\n<p>In deze buitengewone Verticaal, in deze wonderbaarlijke ladder, is het duidelijk dat we alle Niveaus van Zijn kunnen vinden… elk persoon is anders en dit kan niemand weerleggen…</p>\n<p>Ongetwijfeld hebben we het nu niet over lelijke of mooie gezichten, noch gaat het om een kwestie van leeftijd. Er zijn jonge en oude mensen, ouderen die op sterven liggen en pasgeboren baby’s…</p>\n<p>De kwestie van tijd en jaren; dat van geboren worden, groeien, ontwikkelen, trouwen, voortplanten, ouder worden en sterven, is exclusief voor de Horizontaal…</p>\n<p>Op de “Wonderbaarlijke Ladder”, in de Verticaal, is er geen plaats voor het concept tijd. Op de treden van zo’n ladder kunnen we alleen “Niveaus van Zijn” vinden…</p>\n<p>De mechanische hoop van de mensen dient nergens toe; ze geloven dat de dingen met de tijd beter zullen worden; zo dachten onze grootouders en overgrootouders; de feiten hebben juist het tegendeel bewezen…</p>\n<p>Het “Niveau van Zijn” is wat telt en dit is Verticaal; we bevinden ons op een trede, maar we kunnen naar een andere trede klimmen…</p>\n<p>De “Wonderbaarlijke Ladder” waar we het over hebben en die verwijst naar de verschillende “Niveaus van Zijn”, heeft zeker niets te maken met lineaire tijd…</p>\n<p>Een hoger “Niveau van Zijn” bevindt zich onmiddellijk boven ons, van moment tot moment…</p>\n<p>Het bevindt zich niet in een verre horizontale toekomst, maar hier en nu; in onszelf; in de Verticaal…</p>\n<p>Het is duidelijk en iedereen kan het begrijpen, dat de twee lijnen - Horizontaal en Verticaal - elkaar van moment tot moment ontmoeten in ons Psychologisch innerlijk en een Kruis vormen…</p>\n<p>De persoonlijkheid ontwikkelt zich en ontvouwt zich op de Horizontale lijn van het Leven. Ze wordt geboren en sterft binnen haar lineaire tijd; ze is vergankelijk; er is geen morgen voor de persoonlijkheid van de dode; het is niet het Zijn…</p>\n<p>De Niveaus van Zijn; het Zijn zelf, is niet van de tijd, heeft niets te maken met de Horizontale Lijn; het bevindt zich in onszelf. Nu, in de Verticaal…</p>\n<p>Het zou manifest absurd zijn om ons eigen Zijn buiten onszelf te zoeken…</p>\n<p>Het is niet overbodig om het volgende als conclusie te stellen: Titels, graden, promoties, enz., in de fysieke buitenwereld, zouden op geen enkele manier een authentieke verheffing, herevaluatie van het Zijn, overgang naar een hogere trede in de “Niveaus van Zijn” veroorzaken…</p>"
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
const url = "src/content/docs/nl/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nl/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nl/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
