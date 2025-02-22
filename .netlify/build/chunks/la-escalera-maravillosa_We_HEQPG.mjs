import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Urugo Rutaranga",
  "locale": "rw",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Urugo Rutaranga",
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
    "set:html": "<p>Tugomba kwifuza impinduka nyayo, tukava muri ubu buryo butagira icyo bumaze, ubwo buzima bwa gimekanike, burambiranye…</p>\n<p>Icyo tugomba kubanza gusobanukirwa neza ni uko buri wese muri twe, yaba umukire cyangwa umukene, umukungu cyangwa uwo hagati, umutunzi cyangwa umukene, mu by’ukuri ari ku rwego runaka rw’Ubugingo…</p>\n<p>Urwego rw’Ubugingo bw’umusinzi rutandukanye n’urw’utanywa inzoga, kandi urw’indaya rutandukanye cyane n’urw’umukobwa w’isugi. Ibi tuvuga ntibihakana, ntibishidikanywaho…</p>\n<p>Tugeze kuri iki gice cy’igice cyacu, nta cyo dutakaza twiyumvisha urwego rwagutse ruva hasi rugana hejuru, rutambitse kandi rufite ingazi nyinshi…</p>\n<p>Nta gushidikanya ko turi ku ngazi imwe muri izi; munsi y’ingazi hazaba abantu batwaye nabi kurusha twe; hejuru y’ingazi hazaba abantu batwaye neza kurusha twe…</p>\n<p>Muri ubu buryo butangaje butambitse, muri uru rwego rwiza, biragaragara ko dushobora kubona Urwego rwose rw’Ubugingo… buri muntu aratandukanye kandi ntawe ushobora kubihakana. ..</p>\n<p>Nta gushidikanya ko ubu tutavuga amaso mabi cyangwa meza, cyangwa se ikibazo cy’imyaka. Hariho abantu bakiri bato n’abakuze, abasaza bagiye gupfa n’abana bavuka…</p>\n<p>Ikibazo cy’igihe n’imyaka; icyo kuvuka, gukura, gutera imbere, gushyingiranwa, kororoka, gusaza no gupfa, ni umwihariko wa Horizontale…</p>\n<p>Mu “Rwego Rwiza”, mu buryo butambitse igitekerezo cy’igihe ntikibaho. Ku ngazi z’urwo rwego dushobora kubona “Urwego rw’Ubugingo”…</p>\n<p>Ibyiringiro bya gimekanike by’abantu ntacyo bimaze; bizera ko uko igihe kigenda gihita ibintu bizaba byiza; uko ni ko ba sogokuru na ba sekuruza bacu batekerezaga; ibikorwa byagaragaje neza ibinyuranye…</p>\n<p>“Urwego rw’Ubugingo” ni rwo rufite agaciro kandi ibi biratambitse; turi ku ngazi ariko dushobora kuzamuka ku yindi ngazi. ..</p>\n<p>“Urwego Rwiza” tuvuga kandi rwerekeye “Urwego rw’Ubugingo” rutandukanye, rwose, ntaho ruhuriye n’igihe giteganijwe…</p>\n<p>“Urwego rw’Ubugingo” rwo hejuru ruri hejuru yacu ako kanya ku kandi kanya…</p>\n<p>Ntabwo biri mu gihe kizaza kiremire gitambitse, ahubwo hano no ubu; imbere muri twe; mu buryo butambitse…</p>\n<p>Biragaragara kandi buri wese arashobora kubisobanukirwa, ko imirongo ibiri —Horizontale na Verticale— ihurira umwanya ku wundi imbere mu bitekerezo byacu kandi ikagira ishusho y’Umusaraba…</p>\n<p>Kamere irakura kandi igatera imbere ku murongo wa Horizontale y’Ubuzima. Ivuka kandi igapfa mu gihe cyayo giteganijwe; irashira; nta mugambi uhari ku kamere y’uwapfuye; si Ubugingo…</p>\n<p>Urwego rw’Ubugingo; Ubugingo ubwabwo, ntabwo ari iby’igihe, ntaho ruhuriye n’Umurongo wa Horizontale; iboneka imbere muri twe. Ubu, mu buryo butambitse…</p>\n<p>Byaba ari ubupfu bugaragara gushakisha Ubugingo bwacu bwite hanze yacu…</p>\n<p>Ntibitangaje gutangaza ibi bikurikira nk’ingaruka: Amazina, impamyabumenyi, kuzamurwa mu ntera, n’ibindi, mu isi isanzwe yo hanze, ntibyatera ishimwe nyaryo, isuzumwa rishya ry’Ubugingo, guhinduka ku rwego rwo hejuru mu “Rwego rw’Ubugingo”…</p>"
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
const url = "src/content/docs/rw/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/rw/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/rw/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
