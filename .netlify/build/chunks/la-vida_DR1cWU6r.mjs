import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Obulamu",
  "locale": "lg",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Obulamu",
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
    "set:html": "<p>Mu bulamu obwa bulijjo, bulijjo tuzuula enjawulo ezitwewuunyisa. Abantu abagagga abalina amaka amanene n’emikwano mingi, oluusi babonaabona nnyo. Abakozi abakkakkamu abakozesa ebikondo n’envumbo oba abantu aba bulijjo, batera okubeera mu ssanyu ekkakkamu.</p>\n<p>Abagagga bangi ennyo babonaabona olw’obutaba na maanyi mu by’omukwano era abakyala abagagga bakaaba nnyo olw’obutaali bwesigwa bwa bbaabwe…</p>\n<p>Abagagga b’ensi balinga empungu eziri mu nkuyo z’omuwendo omungi, mu biro bino tebasobola kubeerawo nga tebalina “abakuumi”…</p>\n<p>Abakulembeze b’eggwanga beekanga enjegere, tebabeera ba ddembe, batambula buli wantu nga beetooloddwa abantu abalina eby’okulwanyisa bingi…</p>\n<p>Tweekenneenye embeera eno mu bujjuvu. Twetaaga okumanya obulamu kye ki. Buli muntu alina eddembe okwogera ky’ayagala…</p>\n<p>Boogere kyonna kye boogera mazima tewali n’omu amanyi kintu kyonna, obulamu bufuuka buzibu omuntu yenna bw’atasobola kutegeera…</p>\n<p>Abantu bwe baagala okutubuulira obwereere emboozi z’obulamu bwabwe, boogera ebintu ebyabaawo, amannya, ennyaanyaazi, ennaku, n’ebirala, era bawulira essanyu bwe baba bakola emboozi zaabwe…</p>\n<p>Abantu abo abaavu tebamanyi nti emboozi zaabwe tezikkaanya olw’okuba ebintu ebyabaawo, amannya n’ennaku, ze ndabika ya kungulu yokka ey’ekifananyi, ekitundu eky’omunda kibula…</p>\n<p>Kikulu nnyo okumanya “embeera z’omwoyo”, buli kintu ekibaawo kikolagana n’embeera eno oba eri…</p>\n<p>Embeera ziri munda n’ebintu ebyabaawo biri wabweru, ebintu eby’obweru si byonna…</p>\n<p>Kitegeerekeke nti embeera ez’omunda ze ndowooza ennungi oba embi, okweraliikirira, okuggwaamu amaanyi, obutamanya, okutya, okubuusabuusa, ekisa, okwesiima, okwesukkiriza; embeera ey’okuwulira essanyu, embeera ey’okusanyuka, n’ebirala, n’ebirala, n’ebirala.</p>\n<p>Tewali kubuusabuusa nti embeera ez’omunda zisobola okukolagana bulungi n’ebintu eby’obweru oba okutandikawo ebintu ebyo, oba obutaba na kakwate na byo konna…</p>\n<p>Mu mbeera zonna, embeera n’ebintu ebyabaawo bya njawulo. Si bulijjo ebintu ebibaawo bikolagana bulungi n’embeera ezifaanana…</p>\n<p>Embeera ey’omunda ey’ekintu ekisanyusa esobola obutakolagana nakyo. Embeera ey’omunda ey’ekintu ekibi esobola obutakolagana nakyo. Ebintu ebibaddewo nga tulinda okumala akaseera akawerako, bwe byajja twawulira ng’ekintu kibula…</p>\n<p>Mazima, embeera ey’omunda ekijja ekolagane n’ekintu ekiri wabweru yali ebuze…</p>\n<p>Emirundi mingi ekintu ekitasuubirwa kifuuka ekintu ekituwa ebiseera ebirungi ennyo…</p>"
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
const url = "src/content/docs/lg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
