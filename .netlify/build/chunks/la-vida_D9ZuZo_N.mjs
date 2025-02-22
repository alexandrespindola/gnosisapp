import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ang Buhay",
  "locale": "fil",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Ang Buhay",
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
    "set:html": "<p>Sa larangan ng praktikal na buhay, lagi nating natutuklasan ang mga kaibahan na nakakagulat. Ang mga taong mayaman na may magagarang tirahan at maraming kaibigan, kung minsan ay nagdurusa nang labis. .. Ang mga mapagpakumbabang proletaryo na nagtatrabaho sa konstruksyon o mga tao mula sa panggitnang uri, ay madalas na namumuhay nang may lubos na kaligayahan.</p>\n<p>Maraming bilyonaryo ang dumaranas ng kawalan ng kakayahan sa sekswalidad at ang mga mayamang matrona ay umiiyak nang mapait dahil sa pagtataksil ng asawa…</p>\n<p>Ang mga mayayaman sa mundo ay tila mga buwitre sa loob ng mga hawla ng ginto, sa panahong ito hindi sila maaaring mabuhay nang walang “bodyguard”…</p>\n<p>Ang mga pinuno ng estado ay may bitbit na mga tanikala, hindi sila kailanman malaya, naglalakad sila saanman na napapaligiran ng mga taong armado hanggang ngipin…</p>\n<p>Pag-aralan natin ang sitwasyong ito nang mas detalyado. Kailangan nating malaman kung ano ang buhay. Ang bawat isa ay malayang magpahayag ng kanyang opinyon ayon sa gusto niya…</p>\n<p>Anuman ang sabihin nila, tiyak na walang nakakaalam ng anuman, ang buhay ay lumalabas na isang problema na walang nakakaintindi…</p>\n<p>Kapag nais ng mga tao na ikuwento sa atin nang libre ang kuwento ng kanilang buhay, binabanggit nila ang mga pangyayari, pangalan at apelyido, mga petsa, atbp., at nakakaramdam sila ng kasiyahan sa paggawa ng kanilang mga salaysay…</p>\n<p>Hindi alam ng mga kawawang taong iyon na ang kanilang mga salaysay ay hindi kumpleto dahil ang mga pangyayari, pangalan at petsa, ay ang panlabas na anyo lamang ng pelikula, kulang ang panloob na anyo…</p>\n<p>Kailangang-kailangan na malaman ang “mga estado ng kamalayan”, sa bawat pangyayari ay tumutugma ang ganito o ganoong kalagayan ng kalooban.</p>\n<p>Ang mga estado ay panloob at ang mga pangyayari ay panlabas, ang mga panlabas na pangyayari ay hindi lahat…</p>\n<p>Unawain bilang mga panloob na estado ang mabuti o masamang disposisyon, ang mga alalahanin, ang depresyon, ang pamahiin, ang takot, ang hinala, ang awa, ang pag-iisip sa sarili, ang labis na pagpapahalaga sa sarili; mga estado ng pagiging masaya, mga estado ng kagalakan, atbp., atbp., atbp.</p>\n<p>Hindi mapag-aalinlangan na ang mga panloob na estado ay maaaring tumugma nang eksakto sa mga panlabas na pangyayari o magsimula sa mga ito, o walang anumang kaugnayan sa mga ito…</p>\n<p>Sa anumang kaso, ang mga estado at pangyayari ay magkaiba. Hindi laging tumutugma ang mga pangyayari nang eksakto sa mga kaugnay na estado</p>\n<p>Ang panloob na estado ng isang kasiya-siyang pangyayari ay maaaring hindi tumugma dito. Ang panloob na estado ng isang hindi kasiya-siyang pangyayari ay maaaring hindi tumugma dito. Ang mga pangyayaring inaasahan sa mahabang panahon, nang dumating kami ay naramdaman namin na may kulang…</p>\n<p>Tiyak na kulang ang katumbas na panloob na estado na dapat pagsamahin sa panlabas na pangyayari…</p>\n<p>Maraming beses na ang pangyayaring hindi inaasahan ay nagiging siyang nagbigay sa atin ng pinakamagagandang sandali…</p>"
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
const url = "src/content/docs/fil/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fil/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fil/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
