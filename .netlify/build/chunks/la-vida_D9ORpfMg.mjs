import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Impilo",
  "locale": "zu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Impilo",
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
    "set:html": "<p>Emkhakheni wempilo yangempela sihlale sithola umehluko oyamangalisayo. Abantu abacebile abanezindawo zokuhlala ezinhle nobungane obuningi, kwesinye isikhathi bahlupheka kakhulu. .. Abantu abampofu abasebenza kanzima noma abantu abaphakathi, ngokuvamile baphila ngenjabulo ephelele.</p>\n<p>Osomabhizinisi abaningi bahlushwa ukungabi namandla ocansi futhi omama abacebile balilela kakhulu ukungathembeki komyeni wabo…</p>\n<p>Abacebile bomhlaba babukeka njengezinkozi phakathi kwezindlu zegolide, ngalezi zinsuku abakwazi ukuphila ngaphandle “kwabaqaphi”…</p>\n<p>Amadoda ombuso adonsa amaketanga, awakhululeki neze, ahamba yonke indawo ezungezwe abantu abahlomile ngamazinyo…</p>\n<p>Asiyifundeni le ndaba ngokucophelela. Sidinga ukwazi ukuthi iyini impilo. Wonke umuntu ukhululekile ukuba nombono ngendlela afuna ngayo…</p>\n<p>Noma ngabe bathini, akekho owazi lutho, impilo iyinkinga okungekho muntu oyiqondayo…</p>\n<p>Lapho abantu befuna ukusixoxela mahhala indaba yempilo yabo, bacaphuna izenzakalo, amagama nezibongo, izinsuku, njll., futhi bazizwa benelisekile lapho benza izindaba zabo…</p>\n<p>Laba bantu abampofu abazi ukuthi izindaba zabo aziphelele ngoba izenzakalo, amagama nezinsuku, kuyilokho okubonakala ngaphandle kuphela kwefilimu, kushoda lokho okungaphakathi…</p>\n<p>Kuyaphuthuma ukwazi “izimo zokuqaphela”, isenzakalo ngasinye sihambisana nesimo esithile somzwelo.</p>\n<p>Izimo zangaphakathi futhi izenzakalo zingaphandle, izenzakalo zangaphandle aziyizo zonke…</p>\n<p>Qonda ngezimo zangaphakathi ukuthambekela okuhle noma okubi, ukukhathazeka, ukucindezeleka, inkolelo-ze, ukwesaba, ukusola, isihawu, ukuzicabangela, ukuzazisa ngokweqile; izimo zokuzizwa ujabule, izimo zenjabulo, njll., njll., njll.</p>\n<p>Ngokungangabazeki izimo zangaphakathi zingahambisana ncamashi nezenzakalo zangaphandle noma zibangelwe yizo, noma zingahlangani nazo…</p>\n<p>Kunoma yikuphi, izimo nezenzakalo zehlukene. Akuzona zonke izenzakalo ezihambisana ncamashi nezimo ezihlobene</p>\n<p>Isimo sangaphakathi sesenzakalo esijabulisayo singase singahambisani naso. Isimo sangaphakathi sesenzakalo esingathandeki singase singahambisani naso. Izenzakalo obekulindelwe isikhathi eside, lapho zifika sizwa ukuthi kukhona okushodayo…</p>\n<p>Impela kwakushoda isimo sangaphakathi esifanele okwakufanele sihlanganiswe nesenzakalo sangaphandle…</p>\n<p>Ngezinye izikhathi isenzakalo obungasalindelekile yiso esisinikeze izikhathi ezinhle kakhulu…</p>"
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
const url = "src/content/docs/zu/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zu/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zu/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
