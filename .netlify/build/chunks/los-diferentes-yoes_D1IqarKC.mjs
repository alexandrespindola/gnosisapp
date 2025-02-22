import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Os Diferentes Eus",
  "locale": "pt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Os Diferentes Eus",
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
    "set:html": "<p>O Mamífero Racional equivocadamente chamado homem, realmente não possui uma individualidade definida.</p>\n<p>Inquestionavelmente esta falta de unidade Psicológica no Humanoide, é a causa de tantas dificuldades e amarguras.</p>\n<p>O corpo físico é uma unidade completa e trabalha como um todo orgânico, a menos que esteja doente.</p>\n<p>Porém, a vida interior do Humanoide de modo algum é uma unidade psicológica.</p>\n<p>O mais grave de tudo isto, a despeito do que digam as diversas escolas de tipo Pseudo-Esotérico e Pseudo-Ocultista, é a ausência de organização Psicológica no fundo íntimo de cada sujeito.</p>\n<p>Certamente em tais condições, não existe trabalho harmonioso como um todo, na vida interior das pessoas.</p>\n<p>O Humanoide, relativamente ao seu estado interior, é uma multiplicidade psicológica, uma soma de “Eus”.</p>\n<p>Os ignorantes ilustrados desta época tenebrosa, rendem culto ao “EU”, endeusam-no, põem-no nos altares, chamam-no “ALTER EGO”, “EU SUPERIOR”, “EU DIVINO”, etc., etc., etc.</p>\n<p>Não querem dar-se conta os “Sabichões” desta idade negra em que vivemos, que “Eu Superior” ou “Eu Inferior”, são duas secções do mesmo Ego pluralizado…</p>\n<p>O Humanoide não tem certamente um “EU Permanente” senão uma multidão de diferentes “Eus” Infrahumanos e absurdos.</p>\n<p>O pobre animal intelectual equivocadamente chamado homem, é semelhante a uma casa em desordem onde em vez de um amo, existem muitos criados que querem sempre mandar e fazer o que lhes vem à gana…</p>\n<p>O maior erro do Pseudo-Esoterismo e Pseudo-Ocultismo barato, é supor que os outros possuem ou que se tem um “EU Permanente e Imutável” sem princípio e sem fim…</p>\n<p>Se esses que assim pensam despertassem consciência ainda que fosse por um instante, poderiam evidenciar claramente por si mesmos, que o Humanoide racional nunca é o mesmo por muito tempo…</p>\n<p>O mamífero intelectual desde o ponto de vista psicológico, está a mudar continuamente…</p>\n<p>Pensar que se uma pessoa se chama Luís é sempre Luís, resulta algo assim como uma broma de muito mau gosto…</p>\n<p>Esse sujeito a quem se chama Luís tem em si mesmo outros “Eus”, outros egos, que se expressam através da sua personalidade em diferentes momentos e ainda que Luís não goste da cobiça, outro “Eu” nele — chamemos-lhe Pepe — gosta da cobiça e assim sucessivamente…</p>\n<p>Nenhuma pessoa é a mesma de forma contínua, realmente não se necessita ser muito sábio como para dar-se conta cabal das inumeráveis mudanças e contradições de cada sujeito…</p>\n<p>Supor que alguém possui um “Eu Permanente e Imutável” equivale desde logo a um abuso para com o próximo e para consigo mesmo…</p>\n<p>Dentro de cada pessoa vivem muitas pessoas, muitos “Eus”, isto pode verificar por si mesmo e em forma direta, qualquer pessoa desperta, consciente…</p>"
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
const url = "src/content/docs/pt/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
