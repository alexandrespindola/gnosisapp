import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ayyaŋ ka daaɲe yaŋ",
  "locale": "dje",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Ayyaŋ ka daaɲe yaŋ",
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
    "set:html": "<p>Dabbaŋ goy borin kaŋ se ceeci “Adam-ize”, sanda a sinda boŋ-hinna n’a gile.</p>\n<p>Cimiyal koyne, boŋ-hinnay gumo yaŋ kubay da Adam-ize ra, nga no sabu tangaraw beeri nda bine-bayra.</p>\n<p>Fundu gaabu ga ti gumo kamilante kaŋ ga te a teere taale kulu, daa no mo sanda a ga dooru.</p>\n<p>Amma, Adam-ize fundu ganje si gumo gonda boŋ-hinna.</p>\n<p>Hali teeku kaayna hay kulu, danga nga kaŋ asariya me ceeci nda wangu-ganje me ceeci ga ciya, sanda boŋ-hinna s’a gaabu gumo nga bindi cindo ra.</p>\n<p>Cimiyal koyne, hal a teeyaŋ yaŋ kaŋ tee tabal sanda nga kaŋ boŋ-hinna doonda nga bindi ra.</p>\n<p>Adam-ize, sanda nga kaŋ teeyaŋ yaŋ doonda nga bindi ra, yaŋ boŋ-hinnay gunfuyaŋ beeri, “ayoyaŋ” marganta.</p>\n<p>Cimiriyaŋ kaŋ ga duumi yaŋ to, yaŋ ga ibadaa te “AYO” se, yaŋ g’a ceeci, yaŋ n’a daŋ tammaase gaa, yaŋ g’a ceeci “Ay-taali”, “Ay-beeri”, “Ay-Irikoy-ize”, da haray da haray da haray.</p>\n<p>“Duumi-kawyaŋ” si ga baa nga yadda nga toorey ga yaŋ, nga kaŋ “Ay-beeri” wala “Ay-kuri” yaŋ ga ti kusa hinka no AYO gurfuyaŋ ra…</p>\n<p>Adam-ize si gonda “AYO Gaabante” walaa, amma “ayoyaŋ” gunfuyaŋ beeri kaŋ ga dooru nda kaŋ si ga boori.</p>\n<p>Barna-gaabu goy-ize kaŋ se ceeci “Adam-ize”, ga kama sanda windo kaykoy zaa kaŋ, sanda koy se, goy-ize gunfuyaŋ beeri goono ga baa nga ciya koy nda nga te mo nga kaŋ ga naanaa nga…</p>\n<p>Taali beeri kaŋ asariya me ceeci nda wangu-ganje me ceeci ga te, ga yadda kaŋ woy gonda walaa nga gonda “AYO Gaabante kaŋ si ga wayya walaa si ga banandi”…</p>\n<p>Sanda nga yaŋ kaŋ yaŋ yaŋ ga yadda ni duumi hanga hagu ga, yaŋ g’a bay waati kulu, yaŋ g’a bay nga boŋ, Adam-ize si ga tee koyne.</p>\n<p>Dabbaŋ goy borin kaŋ ga duumi, sanda a kaŋ yaŋ boŋ-hinna doonda nga bindi ra, goono ga wayya koyne.</p>\n<p>Fikira kaŋ sanda woy kaŋ se ceeci LUIS nga no LUIS, tee sanda yayi kaŋ si ga boori…</p>\n<p>Adam-ize kaŋ se ceeci LUIS gonda “ayoyaŋ”, eyeyoyaŋ ga baaru nga dumo da dumo ra, hal LUIS si ga naanaa gaabi, “AYO” taale a ra — bari a se ceeci PEPE — ga naanaa gaabi, daa sanda a tee…</p>\n<p>Adam-ize kulu si ga tee sanda a kaŋ, cimiyal koyne si ga bara a ciya duumi kaŋ ni bay wayyaŋ nda koyraŋ gunfuyaŋ beeri Adam-ize kulu ra…</p>\n<p>Fikira kaŋ ni gonda “AYO Gaabante kaŋ si ga wayya” ga tee sanda dugu se kusa walaa nga boŋ…</p>\n<p>Adam-ize kulu ra Adam-ize gunfuyaŋ beeri goy-ize ra, “ayoyaŋ” gunfuyaŋ beeri, ni ga hin ka tabbatar da nga boŋ walaa koyne, Adam-ize kaŋ ga hagu ga, ga duumi…</p>"
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
const url = "src/content/docs/dje/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/dje/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/dje/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
