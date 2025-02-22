import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "A Essência",
  "locale": "pt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. A Essência",
    "order": 4
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
    "set:html": "<p>O que torna belo e adorável todo o recém-nascido é a sua Essência; esta constitui em si mesma a sua verdadeira realidade…</p>\n<p>O normal crescimento da Essência em toda a criatura, certamente é muito residual, incipiente…</p>\n<p>O corpo humano cresce e desenvolve-se de acordo com as leis biológicas da espécie, no entanto tais possibilidades resultam por si mesmas muito limitadas para a Essência…</p>\n<p>Inquestionavelmente a Essência só pode crescer por si mesma sem ajuda, em pequeníssimo grau…</p>\n<p>Falando francamente e sem rodeios diremos que o crescimento espontâneo e natural da Essência, só é possível durante os primeiros três, quatro e cinco anos de idade, ou seja, na primeira etapa da vida…</p>\n<p>As pessoas pensam que o crescimento e desenvolvimento da Essência se realiza sempre de forma contínua, de acordo com a mecânica da evolução, mas o Gnosticismo Universal ensina claramente que isto não ocorre assim…</p>\n<p>Com o fim de que a Essência cresça mais, algo muito especial deve suceder, algo novo há que realizar.</p>\n<p>Quero referir-me de forma enfática ao trabalho sobre si mesmo. O desenvolvimento da Essência unicamente é possível à base de trabalhos conscientes e padecimentos voluntários…</p>\n<p>É necessário compreender que estes trabalhos não se referem a questões de profissão, bancos, carpintaria, alvenaria, arranjo de linhas férreas ou assuntos de escritório…</p>\n<p>Este trabalho é para toda a pessoa que desenvolveu a personalidade; trata-se de algo Psicológico…</p>\n<p>Todos nós sabemos que temos dentro de si mesmos isso que se chama EGO, EU, MIM MESMO, SI MESMO…</p>\n<p>Desgraçadamente a Essência encontra-se engarrafada, embotelhada, entre o ECO e isto é lamentável.</p>\n<p>Dissolver o EU Psicológico, desintegrar os seus elementos indesejáveis, é urgente, inaprazável, inadiável… assim é o sentido do trabalho sobre si mesmo.</p>\n<p>Nunca poderíamos libertar a Essência sem desintegrar previamente o EU Psicológico…</p>\n<p>Na Essência está a Religião, o BUDDHA, a Sabedoria, as partículas de dor de nosso Pai que está nos Céus e todos os dados que necessitamos para a AUTO-REALIZAÇÃO ÍNTIMA DO SER.</p>\n<p>Ninguém poderia aniquilar o EU Psicológico sem eliminar previamente os elementos desumanos que levamos dentro…</p>\n<p>Necessitamos reduzir a cinzas a crueldade monstruosa destes tempos: a inveja que desgraçadamente veio a converter-se na mola secreta da ação; a cobiça insuportável que tornou a vida tão amarga: a asquerosa maledicência; a calúnia que tantas tragédias origina; as bebedeiras; a imunda luxúria que cheira tão feio; etc., etc., etc.</p>\n<p>À medida que todas essas abominações se vão reduzindo a poeira cósmica, a Essência além de emancipar-se, crescerá e desenvolver-se-á harmoniosamente…</p>\n<p>Inquestionavelmente quando o EU Psicológico morreu, resplandece em nós a Essência…</p>\n<p>A Essência livre confere-nos beleza íntima; de tal beleza emanam a felicidade perfeita e o verdadeiro Amor…</p>\n<p>A Essência possui múltiplos sentidos de perfeição e extraordinários poderes naturais…</p>\n<p>Quando “Morremos em Si Mesmos”, quando dissolvemos o EU Psicológico, gozamos dos preciosos sentidos e poderes da Essência…</p>"
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
const url = "src/content/docs/pt/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
