import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Osobné udalosti",
  "locale": "sk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Osobné udalosti",
    "order": 9
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
    "set:html": "<p>Úplné, intímne sebapozorovanie Ja je neodkladné, ak ide o odhalenie nesprávnych psychologických stavov.</p>\n<p>Nesprávne vnútorné stavy sa dajú nepochybne napraviť správnymi postupmi.</p>\n<p>Keďže vnútorný život je magnet, ktorý priťahuje vonkajšie udalosti, naliehavo a neodkladne potrebujeme odstrániť z našej psyché chybné psychologické stavy.</p>\n<p>Náprava chybných psychologických stavov je nevyhnutná, ak chcete zásadne zmeniť povahu určitých nežiaducich udalostí.</p>\n<p>Zmeniť náš vzťah k určitým udalostiam je možné, ak odstránime z nášho vnútra určité absurdné psychologické stavy.</p>\n<p>Deštruktívne vonkajšie situácie by sa mohli stať neškodnými a dokonca konštruktívnymi prostredníctvom inteligentnej korekcie chybných vnútorných stavov.</p>\n<p>Človek môže zmeniť povahu nepríjemných udalostí, ktoré sa nám stávajú, keď sa intímne očistí. Ten, kto nikdy nenapráva absurdné psychologické stavy a verí si, že je veľmi silný, sa stáva obeťou okolností.</p>\n<p>Usporiadanie nášho neusporiadaného vnútorného domu je životne dôležité, ak si prajete zmeniť priebeh nešťastného života.</p>\n<p>Ľudia sa na všetko sťažujú, trpia, plačú, protestujú, chcú zmeniť svoj život, dostať sa z nešťastia, v ktorom sa nachádzajú, žiaľ, nepracujú na sebe.</p>\n<p>Ľudia si nechcú uvedomiť, že vnútorný život priťahuje vonkajšie okolnosti a že ak sú bolestivé, je to spôsobené absurdnými vnútornými stavmi.</p>\n<p>Vonkajšok je len odrazom vnútra, ten, kto sa vnútorne zmení, vytvára nový poriadok vecí.</p>\n<p>Vonkajšie udalosti by nikdy neboli také dôležité ako spôsob, akým na ne reagujeme.</p>\n<p>Zostal si pokojný pred urážajúcim? Prijal si príjemne nepríjemné prejavy svojich blížnych?</p>\n<p>Ako si reagoval na neveru milovanej osoby? Nechal si sa uniesť jedom žiarlivosti? Zabil si? Si vo väzení?</p>\n<p>Nemocnice, cintoríny, väznice sú plné úprimných ľudí, ktorí reagovali absurdne na vonkajšie udalosti.</p>\n<p>Najlepšia zbraň, ktorú môže človek v živote použiť, je správny psychologický stav.</p>\n<p>Človek môže odzbrojiť šelmy a odhaliť zradcov prostredníctvom vhodných vnútorných stavov.</p>\n<p>Nesprávne vnútorné stavy z nás robia bezbranné obete ľudskej zvrátenosti.</p>\n<p>Naučte sa čeliť najnepríjemnejším udalostiam praktického života s vhodným vnútorným postojom…</p>\n<p>Nestotožňujte sa so žiadnou udalosťou; pamätajte, že všetko prejde; naučte sa vnímať život ako film a dostanete výhody…</p>\n<p>Nezabúdajte, že udalosti bez akejkoľvek hodnoty vás môžu doviesť k nešťastiu, ak neodstránite zo svojej psyché chybné vnútorné stavy.</p>\n<p>Každá vonkajšia udalosť nepochybne potrebuje vhodný lístok; to znamená presný psychologický stav.</p>"
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
const url = "src/content/docs/sk/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
