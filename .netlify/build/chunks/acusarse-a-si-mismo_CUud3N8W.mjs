import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Autoincriminar-se",
  "locale": "pt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "5. Autoincriminar-se",
    "order": 5
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
    "set:html": "<p>A Essência que cada um de nós carrega no seu Interior, vem de cima, do Céu, das estrelas…</p>\n<p>Inquestionavelmente a Essência maravilhosa provém da nota “LÁ” (A Via Láctea, a Galáxia em que vivemos)</p>\n<p>Preciosa a Essência passa através da nota “SOL” (O Sol) e depois da nota “FÁ” (A Zona Planetária) entra neste mundo e penetra no nosso próprio interior.</p>\n<p>Os nossos pais criaram o corpo apropriado para a receção desta Essência que vem das Estrelas…</p>\n<p>Trabalhando intensamente sobre nós mesmos e sacrificando-nos pelos nossos semelhantes, regressaremos vitoriosos ao seio profundo de Urânia…</p>\n<p>Nós estamos a viver neste mundo por algum motivo, para algo, por algum fator especial…</p>\n<p>Obviamente em nós há muito que devemos ver, estudar e compreender, se é que em realidade ansiamos saber algo sobre nós mesmos, sobre a nossa própria vida…</p>\n<p>Trágica é a existência daquele que morre sem ter conhecido o motivo da sua vida…</p>\n<p>Cada um de nós deve descobrir por si mesmo o sentido da sua própria vida, aquilo que o mantém prisioneiro na prisão da dor…</p>\n<p>Ostensivamente há em cada um de nós algo que nos amarga a vida e contra o qual precisamos de lutar firmemente…</p>\n<p>Não é indispensável que continuemos em desgraça, é improrrogável reduzir a poeira cósmica isso que nos faz tão débeis e infelizes.</p>\n<p>De nada serve vangloriar-nos com títulos, honras, diplomas, dinheiro, vão racionalismo subjetivo, sabidas virtudes, etc., etc., etc.</p>\n<p>Não devemos esquecer jamais que a hipocrisia e as tolas vaidades da falsa personalidade, fazem de nós gentes torpes, rançosas, retardatárias, reacionárias, incapazes para ver o novo…</p>\n<p>A morte tem muitos significados tanto positivos como negativos.</p>\n<p>Consideremos aquela magnífica observação do “Grande KABIR Jesus o Cristo”. “Que os mortos sepultem os seus mortos”. Muitas gentes embora vivam estão de facto mortas para todo o possível trabalho sobre si mesmas e por ende, para qualquer transformação íntima.</p>\n<p>São pessoas engarrafadas entre os seus dogmas e crenças; gentes petrificadas nas recordações de muitos ontens; indivíduos cheios de preconceitos ancestrais; pessoas escravas do que dirão, espantosamente tépidas, indiferentes, às vezes “sabichonas” convencidas de estar na verdade porque assim lho disseram, etc., etc., etc.</p>\n<p>Não querem essas gentes entender que este mundo é um “Ginásio Psicológico” mediante o qual seria possível aniquilar essa fealdade secreta que todos levamos dentro…</p>\n<p>Se essas pobres gentes compreendessem o estado tão lamentável em que se encontram, tremeriam de horror…</p>\n<p>Porém, tais pessoas pensam sempre de si mesmas o melhor; gabam-se das suas virtudes, sentem-se perfeitas, bondosas, serviçais, nobres, caritativas, inteligentes, cumpridoras dos seus deveres, etc.</p>\n<p>A vida prática como escola é formidável mas tomá-la como um fim em si mesma, é manifestamente absurdo.</p>\n<p>Quem toma a vida em si mesma, tal como se vive diariamente, não compreendeu a necessidade de trabalhar sobre si mesmos para lograr uma “Transformação Radical”.</p>\n<p>Desgraçadamente as gentes vivem mecanicamente, nunca ouviram dizer algo sobre o trabalho interior…</p>\n<p>Mudar é necessário mas as gentes não sabem como mudar; sofrem muito e nem sequer sabem porque sofrem…</p>\n<p>Ter dinheiro não é tudo. A vida de muitas pessoas ricas costuma ser verdadeiramente trágica…</p>"
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
const url = "src/content/docs/pt/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
