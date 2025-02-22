import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Tudert",
  "locale": "shi",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Tudert",
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
    "set:html": "<p>G tamaḍunt n tudrt, nttafa kullu tiglday yattuyn. Ayt umalu ilan tiɣarasin bahra icaḍn d imdukkal bahra, ar ttrun kra n tikkal s wul. Ayt uẓḍu d imskarin n ifri ilan aẓḍu d uɣbalu n tudrt, niɣ d ayt umalu ilan kra n tiɣarasin, ar ttdaran kra n tikkal ɣ tudrt icaḍn.</p>\n<p>Bahra ilan idrimn ar ttrun ɣ tiggut n usmrs n uɣaras d tmɣarin ilan idrimn ar ttrun s tiddi n uɣaras…</p>\n<p>Ayt umalu lli illan ɣ tmazirt ar ttnmun d ifunas ɣ igḍaḍ n wurɣ, ɣ zman ad ur sul zmurn ad ddarn bla “imḥḍarn”…</p>\n<p>Ayt unbaḍ ar ttnmun d isqsiwn, ur sul darsn tilelli, ar ttdaran ɣ mkull timmt ɣ izgzuln s igudar…</p>\n<p>Nqqa ad nzri tayafut ad s wul. Nḥwaj ad nssn mat tudrt. Mkull yan iẓḍar ad yini mat yra…</p>\n<p>Ad inin mat inin, d tidt kra ur issin kra, tudrt tga yat ugur lli ur ikkim ula yan…</p>\n<p>Manmk aɣ nn asn ayt tudrt aɣ nn ḥkan s ubleɣ ttarix n tudrt nsn, ar d snmalan imalasn, ismawn d idusutan, tazwarin, d ar ttḥssan s tiddi mnck aɣ ar ttnin asafar…</p>\n<p>Ayt tudrt lli illan ɣ ddu ur ssn bla mas asafar nsn ur ikmil acku imalasn, ismawn d tazwarin, iga yan igan d iftawn n ufilm, ur illi lli illan ɣ ddu…</p>\n<p>Yafa ad nssn “ahaln n usakwfan”, i mkull amal nẓḍar ad nawi ahal n wul.</p>\n<p>Ahali iga ɣ ddu, amali iga ɣ bṛṛa, imalasn n bṛṛa ur gin kra…</p>\n<p>Fhm ad gin ahali n ddu d iẓḍawn niɣ d ur icaḍn, iɣudan, asbbab, tɛkkast, tugga, aẓlay, ar ttḥassan s iman nsn, ar ttqqnn s iman nsn; ahali n ttḥssan s tiḍfi, ahali n tyafut, attg, attg, attg.</p>\n<p>Ur ygi kra n uẓlay mas ahali lli illan ɣ ddu ẓḍarn ad mun ɣ amal lli illan ɣ bṛṛa niɣ ad gin s ɣursn, niɣ ur darsn kra n uẓlay…</p>\n<p>Manmk ɣ kullu ahal d amal gan tiɣarasin. Ur kullu tikkal aɣ ar ttmunn imalasn d ahali lli asn ilan</p>\n<p>Ahal lli illan ɣ ddu n amal icaḍn ur ygi kra ad ymun yids. Ahal lli illan ɣ ddu n amal ur icaḍn ur ygi kra ad ymun yids. Imalasn nttra ar ttnqqrn, mnck aɣ d usin ttḥssan bla kra…</p>\n<p>D tidt ur illi ahal lli illan ɣ ddu lli yafan ad ymun d amal lli illan ɣ bṛṛa…</p>\n<p>Bahra n tikkal amal lli ur nttra ar iga lli aɣ yusin kra n tikkal icaḍn…</p>"
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
const url = "src/content/docs/shi/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/shi/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/shi/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
