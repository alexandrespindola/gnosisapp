import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "A Escadaria Maravilhosa",
  "locale": "pt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. A Escadaria Maravilhosa",
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
    "set:html": "<p>Temos de ansiar por uma mudança verdadeira, sair desta rotina enfadonha, desta vida meramente mecanicista, cansativa…</p>\n<p>O que primeiro devemos compreender com inteira clareza é que cada um de nós, seja burguês ou proletário, remediado ou da classe média, rico ou miserável, se encontra realmente em tal ou qual Nível de Ser…</p>\n<p>O Nível de Ser do bêbado é diferente do do abstêmio e o da prostituta muito distinto do da donzela. Isto que estamos a dizer é irrefutável, irrebatível…</p>\n<p>Ao chegar a esta parte do nosso capítulo, nada perdemos com imaginarmos uma escada que se estende de baixo para cima, verticalmente e com muitíssimos degraus…</p>\n<p>Inquestionavelmente em algum degrau destes nos encontramos nós; degraus abaixo haverá gentes piores que nós; degraus acima se encontrarão pessoas melhores que nós…</p>\n<p>Nesta Vertical extraordinária, nesta escada maravilhosa, é claro que podemos encontrar todos os Níveis de Ser… cada pessoa é diferente e isto ninguém pode refutá-lo…</p>\n<p>Indubitavelmente não estamos agora a falar de caras feias ou bonitas, nem tampouco se trata de questão de idades. Há gentes jovens e velhas, anciãos que já estão para morrer e crianças recém-nascidas…</p>\n<p>A questão do tempo e dos anos; isso de nascer, crescer, desenvolver-se, casar, reproduzir-se, envelhecer e morrer, é exclusivo da Horizontal…</p>\n<p>Na “Escada Maravilhosa”, na Vertical o conceito tempo não cabe. Nos degraus de tal escala só podemos encontrar “Níveis de Ser”…</p>\n<p>A esperança mecânica da gente não serve para nada; acreditam que com o tempo as coisas serão melhores; assim pensavam os nossos avós e bisavós; os factos precisamente vieram demonstrar o contrário…</p>\n<p>O “Nível de Ser” é o que conta e isto é Vertical; encontramo-nos num degrau mas podemos subir para outro degrau…</p>\n<p>A “Escada Maravilhosa” de que estamos a falar e que se refere aos distintos “Níveis de Ser”, certamente, nada tem que ver com o tempo linear…</p>\n<p>Um “Nível de Ser” mais alto está imediatamente por cima de nós de instante em instante…</p>\n<p>Não está em nenhum remoto futuro horizontal, senão aqui e agora; dentro de nós mesmos; na Vertical…</p>\n<p>É ostensível e qualquer um o pode compreender, que as duas linhas — Horizontal e Vertical — se encontram de momento em momento no nosso interior Psicológico e formam Cruz…</p>\n<p>A personalidade desenvolve-se e desenrola-se na linha Horizontal da Vida. Nasce e morre dentro do seu tempo linear; é perecível; não existe nenhum amanhã para a personalidade do morto; não é o Ser…</p>\n<p>Os Níveis do Ser; o Ser mesmo, não é do tempo, nada tem que ver com a Linha Horizontal; encontra-se dentro de nós mesmos. Agora, na Vertical…</p>\n<p>Resultaria manifestamente absurdo procurar o nosso próprio Ser fora de si mesmos…</p>\n<p>Não está de mais assentar como corolário o seguinte: Títulos, graus, ascensões, etc., no mundo físico exterior, de modo algum originariam exaltação autêntica, reavaliação do Ser, passagem a um degrau superior nos “Níveis do Ser”…</p>"
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
const url = "src/content/docs/pt/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
