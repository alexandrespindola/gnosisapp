import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Estados Equivocados",
  "locale": "pt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "8. Estados Equivocados",
    "order": 8
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
    "set:html": "<p>Indubitavelmente, na rigorosa observação do Mim Mesmo, é sempre imperativo e inadiável fazer uma completa diferenciação lógica em relação aos acontecimentos exteriores da vida prática e os estados íntimos da consciência.</p>\n<p>Precisamos com urgência saber onde estamos situados num dado momento, tanto em relação ao estado íntimo da consciência, como na natureza específica do acontecimento exterior que nos está a suceder.</p>\n<p>A vida em si mesma é uma série de acontecimentos que se processam através do tempo e do espaço…</p>\n<p>Alguém disse: “A vida é uma cadeia, de martírios que o homem traz enredada na Alma…”</p>\n<p>Cada qual é muito livre de pensar como queira; eu creio que aos efémeros prazeres de um instante fugaz, sucedem-se sempre o desencanto e a amargura…</p>\n<p>Cada acontecimento tem o seu sabor característico especial e os estados interiores são assim mesmos de distinta classe; isto é incontrovertível, irrefutável…</p>\n<p>Certamente o trabalho interior sobre si mesmo refere-se de forma enfática aos diversos estados psicológicos da consciência…</p>\n<p>Ninguém poderia negar que no nosso interior carregamos com muitos erros e que existem estados equivocados…</p>\n<p>Se de verdade queremos mudar realmente, precisamos com urgência máxima e inadiável, modificar radicalmente esses estados equivocados da consciência…</p>\n<p>A modificação absoluta dos estados equivocados, origina transformações completas no terreno da vida prática…</p>\n<p>Quando um trabalha seriamente sobre os estados equivocados, obviamente os sucessos desagradáveis da vida, já não podem feri-lo tão facilmente…</p>\n<p>Estamos a dizer algo que só é possível compreendê-lo vivenciando-o, sentindo-o realmente no terreno mesmo dos factos…</p>\n<p>Quem não trabalha sobre si mesmo é sempre vítima das circunstâncias; é como mísero lenho entre as águas tormentosas do oceano…</p>\n<p>Os acontecimentos mudam incessantemente nas suas múltiplas combinações; vêm um após outro em oleadas, são influências…</p>\n<p>Certamente existem bons e maus acontecimentos; alguns eventos serão melhores ou piores que outros…</p>\n<p>Modificar certos eventos é possível; alterar resultados, modificar situações, etc., está certamente dentro do número das possibilidades.</p>\n<p>Porém existem situações de facto que de verdade não podem ser alteradas; nestes últimos casos devem aceitar-se conscientemente, ainda que algumas resultem muito perigosas e até dolorosas…</p>\n<p>Indubitavelmente a dor desaparece quando não nos identificamos com o problema que se apresentou…</p>\n<p>Devemos considerar a vida como uma série sucessiva de estados interiores; uma história autêntica da nossa vida em particular está formada por todos esses estados…</p>\n<p>Ao rever a totalidade da nossa própria existência, podemos verificar por si mesmos de forma direta, que muitas situações desagradáveis foram possíveis graças a estados interiores equivocados…</p>\n<p>Alexandre Magno ainda que sempre tenha sido temperante por natureza, entregou-se por orgulho aos excessos que lhe produziram a morte…</p>\n<p>Francisco I morreu à causa de um sujo e abominável adultério, que muito bem recorda a história ainda…</p>\n<p>Quando Marat foi assassinado por uma freira perversa, morria de soberba e de inveja, acreditava-se a si mesmo absolutamente justo…</p>\n<p>As damas do Parque dos Servos indubitavelmente acabaram totalmente com a vitalidade do espantoso fornicário chamado LUIS XV.</p>\n<p>Muitas são as gentes que morrem por ambição, ira ou ciúmes, isto sabem-no muito bem os Psicólogos…</p>\n<p>Assim que a nossa vontade se confirma irrevogavelmente numa tendência absurda, convertemo-nos em candidatos para o panteão ou cemitério…</p>\n<p>Otelo devido aos ciúmes converteu-se em assassino e a prisão está cheia de equivocados sinceros…</p>"
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
const url = "src/content/docs/pt/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
