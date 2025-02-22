import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Indi Jye Zitandukanye",
  "locale": "rw",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Indi Jye Zitandukanye",
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
    "set:html": "<p>Inyamaswa igira ubwenge yitwa umuntu mu buryo butari bwo, mu by’ukuri ntabwo ifite ubunyamuntu busobanutse.</p>\n<p>Nta gushidikanya ko ubwo busembwa bw’ubumwe bwa Psychologiya mu muntu, ari bwo butera ibibazo byinshi n’agahinda.</p>\n<p>Umubiri ni umwe kandi ukora nk’urugingo rwose, keretse iyo urwaye.</p>\n<p>Ariko rero, imibereho yo mu mutima y’umuntu ntaho ihuriye n’ubumwe bwa psychologiya.</p>\n<p>Ikintu gikomeye kurusha ibindi byose, nubwo amashuri atandukanye ya Seudo-Esoterique na Seudo-Ocultiste yabyita iki, ni ukutagira umuteguro wa psychologiya imbere mu mutima wa buri muntu.</p>\n<p>Mu by’ukuri, muri ibyo bihe, nta murimo uhuza ibintu byose, mu buzima bw’imbere bw’abantu.</p>\n<p>Umuntu, ku bijyanye n’imiterere ye y’imbere, ni ubwinshi bwa psychologiya, umubare wa “Njyewe”.</p>\n<p>Abajiji b’inzobere bo muri iki gihe cy’umwijima, basenga “NJYE”, barayisenga, bayishyira ku gicaniro, bayita “ALTER EGO”, “NJYE UKURU”, “NJYE MWAMI”, n’ibindi n’ibindi.</p>\n<p>Ntibashaka kumenya “Abahanga” b’iki gihe cy’umwijima tubayemo, ko “Njyewe Mukuru” cyangwa “Njyewe muto”, ari ibice bibiri bya Ego imwe yagizwe benshi…</p>\n<p>Umuntu ntafite rwose “NJYE UDAHINDUKA” ahubwo afite imbaga y’“NJYE” zitandukanye z’inyamanswa kandi zidafite ishingiro.</p>\n<p>Inyamaswa itagira ubwenge yitwa umuntu mu buryo butari bwo, isa n’inzu idakurikiranwa aho kuba shebuja umwe, hariho abakozi benshi bahora bashaka gutegeka no gukora ibyo bashaka…</p>\n<p>Ikosa rikuru rya Seudo-Esoterisme na Seudo-Ocultisme bihendutse, ni ukugira ngo abandi bafite cyangwa ko umuntu afite “NJYE UDAHINDUKA KANDI UDAHINDUKA” itagira intangiriro cyangwa iherezo…</p>\n<p>Iyo abatekereza batyo bazanzamuka ubwenge naho yaba akanya gato, bashobora kwigaragariza ubwabo neza, ko umuntu w’ubwenge atigera aba umwe igihe kirekire…</p>\n<p>Inyamaswa y’ubwenge mu bitekerezo, ihora ihinduka…</p>\n<p>Gutekereza ko niba umuntu yitwa Luis ahora ari Luis, bisa n’urwenya rubi cyane…</p>\n<p>Uwo muntu witwa Luis afite muri we izindi “NJYE”, izindi Ego, zigaragaza binyuze mu mico ye mu bihe bitandukanye kandi nubwo Luis adakunda umururumba, undi “NJYE” muri we - reka tumwite Pepe - akunda umururumba kandi bigakomeza bityo…</p>\n<p>Nta muntu numwe uhora ameze kimwe, mu by’ukuri ntibisaba kuba umunyabwenge cyane kugira ngo umuntu amenye neza impinduka nyinshi no kwivuguruza kwa buri muntu…</p>\n<p>Gutekereza ko umuntu afite “NJYE UDAHINDUKA KANDI UDAHINDUKA” bingana rwose no gukabya ku muturanyi no kuri wowe ubwawe…</p>\n<p>Imbere muri buri muntu habamo abantu benshi, “NJYE” nyinshi, ibi bishobora kwemezwa na buri muntu wese wazanzamutse, ufite ubwenge, ubwe kandi mu buryo butaziguye…</p>"
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
const url = "src/content/docs/rw/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/rw/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/rw/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
