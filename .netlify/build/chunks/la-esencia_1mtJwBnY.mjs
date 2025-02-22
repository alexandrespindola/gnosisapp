import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Esență",
  "locale": "ro",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. La Esență",
    "order": 4
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
    "set:html": "<p>Ceea ce face un nou-născut frumos și adorabil este Esența sa; aceasta constituie în sine adevărata sa realitate…</p>\n<p>Creșterea normală a Esenței în orice creatură este, cu siguranță, foarte reziduală, incipientă…</p>\n<p>Corpul uman crește și se dezvoltă conform legilor biologice ale speciei, totuși astfel de posibilități sunt în sine foarte limitate pentru Esență…</p>\n<p>Incontestabil, Esența poate crește singură, fără ajutor, doar într-o măsură foarte mică…</p>\n<p>Vorbind franc și fără ocolișuri, vom spune că creșterea spontană și naturală a Esenței este posibilă doar în primii trei, patru și cinci ani de viață, adică în prima etapă a vieții…</p>\n<p>Oamenii cred că creșterea și dezvoltarea Esenței se realizează întotdeauna continuu, conform mecanicii evoluției, însă Gnosticismul Universal ne învață clar că acest lucru nu se întâmplă așa…</p>\n<p>Pentru ca Esența să crească mai mult, ceva foarte special trebuie să se întâmple, ceva nou trebuie realizat.</p>\n<p>Vreau să mă refer în mod emfatic la lucrul asupra sinelui. Dezvoltarea Esenței este posibilă numai pe baza lucrărilor conștiente și a suferințelor voluntare…</p>\n<p>Este necesar să înțelegem că aceste lucrări nu se referă la chestiuni de profesie, bănci, tâmplărie, zidărie, aranjarea liniilor ferate sau chestiuni de birou…</p>\n<p>Această lucrare este pentru orice persoană care și-a dezvoltat personalitatea; este vorba despre ceva psihologic…</p>\n<p>Cu toții știm că avem în noi ceea ce se numește EGO, EU, MINE ÎNSUMI, SINE ÎNSUMI…</p>\n<p>Din păcate, Esența se află îmbuteliată, încorsetată, între EGO și acest lucru este regretabil.</p>\n<p>Dizolvarea EU-lui psihologic, dezintegrarea elementelor sale nedorite, este urgentă, ineluctabilă, amânată… acesta este sensul lucrului asupra sinelui.</p>\n<p>Niciodată nu am putea elibera Esența fără a dezintegra mai întâi EU-l psihologic…</p>\n<p>În Esență se află Religia, BUDDHA, Înțelepciunea, particulele de durere ale Tatălui nostru care este în Ceruri și toate datele de care avem nevoie pentru AUTO-REALIZAREA INTIMĂ A FIINȚEI.</p>\n<p>Nimeni nu ar putea anihila EU-l psihologic fără a elimina mai întâi elementele inumane pe care le purtăm în noi…</p>\n<p>Trebuie să reducem la cenușă cruzimea monstruoasă a acestor vremuri: invidia care, din păcate, a ajuns să devină resortul secret al acțiunii; lăcomia insuportabilă care a făcut viața atât de amară: bârfăria respingătoare; calomnia care provoacă atâtea tragedii; bețiile; luxura murdară care miroase atât de urât; etc., etc., etc.</p>\n<p>Pe măsură ce toate aceste abominații sunt reduse la praf cosmic, Esența, pe lângă faptul că se emancipează, va crește și se va dezvolta armonios…</p>\n<p>Incontestabil, atunci când EU-l psihologic a murit, strălucește în noi Esența…</p>\n<p>Esența liberă ne conferă frumusețe intimă; din această frumusețe emană fericirea perfectă și adevărata Iubire…</p>\n<p>Esența posedă multiple simțuri de perfecțiune și puteri naturale extraordinare…</p>\n<p>Când “Murim în noi înșine”, când dizolvăm EU-l psihologic, ne bucurăm de simțurile și puterile prețioase ale Esenței…</p>"
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
const url = "src/content/docs/ro/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
