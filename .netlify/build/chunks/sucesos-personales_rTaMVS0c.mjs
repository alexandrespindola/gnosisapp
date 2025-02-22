import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Acontecimentos Pessoais",
  "locale": "pt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Acontecimentos Pessoais",
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
    "set:html": "<p>A plena auto-observação íntima do Eu Mesmo torna-se imperiosa quando se trata de descobrir estados psicológicos equivocados.</p>\n<p>Inquestionavelmente, os estados interiores equivocados podem ser corrigidos mediante procedimentos corretos.</p>\n<p>Como a vida interior é o íman que atrai os eventos exteriores, necessitamos com urgência máxima e inadiável eliminar da nossa psique os estados psicológicos erróneos.</p>\n<p>Corrigir estados psicológicos equivocados é indispensável quando se quer alterar fundamentalmente a natureza de certos eventos indesejáveis.</p>\n<p>Alterar a nossa relação com determinados eventos é possível se eliminarmos do nosso interior certos estados psicológicos absurdos.</p>\n<p>Situações exteriores destrutivas poderiam converter-se em inofensivas e até construtivas mediante a inteligente correção dos estados interiores erróneos.</p>\n<p>Pode-se mudar a natureza dos eventos desagradáveis que nos ocorrem, quando nos purificamos intimamente. Quem jamais corrige os estados psicológicos absurdos, crendo-se muito forte, converte-se em vítima das circunstâncias.</p>\n<p>Pôr ordem na nossa desordenada casa interior é vital, quando se deseja mudar o curso de uma desgraçada existência.</p>\n<p>As pessoas queixam-se de tudo, sofrem, choram, protestam, gostariam de mudar de vida, sair do infortúnio em que se encontram, desafortunadamente não trabalham sobre si mesmas.</p>\n<p>As pessoas não querem dar-se conta de que a vida interior atrai circunstâncias exteriores e que, se estas são dolorosas, deve-se aos estados interiores absurdos.</p>\n<p>O exterior é tão só o reflexo do interior, quem muda interiormente origina uma nova ordem de coisas.</p>\n<p>Os eventos exteriores jamais seriam tão importantes como o modo de reagir perante os mesmos.</p>\n<p>Permanecestes sereno perante o insultador? Recebeste com agrado as manifestações desagradáveis dos vossos semelhantes?</p>\n<p>De que maneira reagistes perante a infidelidade do ser amado? Deixaste-te levar pelo veneno dos ciúmes? Mataste? Estás na prisão?</p>\n<p>Os hospitais, os cemitérios ou panteões, as prisões, estão cheios de sinceros equivocados que reagiram de forma absurda perante os eventos exteriores.</p>\n<p>A melhor arma que um homem pode usar na vida é um estado psicológico correto.</p>\n<p>Pode-se desarmar feras e desmascarar traidores, mediante estados interiores apropriados.</p>\n<p>Os estados interiores equivocados convertem-nos em vítimas indefesas da perversidade humana.</p>\n<p>Aprendei a enfrentar-vos perante os sucessos mais desagradáveis da vida prática com uma atitude interior apropriada…</p>\n<p>Não vos identifiqueis com nenhum acontecimento; recordai que tudo passa; aprendei a ver a vida como um filme e recebereis os benefícios…</p>\n<p>Não esqueçais que acontecimentos sem nenhum valor poderiam levar-vos à desgraça, se não eliminardes da vossa psique os estados interiores equivocados.</p>\n<p>Cada evento exterior necessita, inquestionavelmente, do bilhete apropriado; isto é, do estado psicológico preciso.</p>"
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
const url = "src/content/docs/pt/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
