import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Rebeldia Psicológica",
  "locale": "pt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Rebeldia Psicológica",
    "order": 3
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
    "set:html": "<p>Não custa recordar aos nossos leitores que existe um ponto matemático dentro de nós mesmos…</p>\n<p>Inquestionavelmente, tal ponto jamais se encontra no passado, nem tampouco no futuro…</p>\n<p>Quem quiser descobrir esse ponto misterioso, deve procurá-lo aqui e agora, dentro de si mesmo, exatamente neste instante, nem um segundo adiante, nem um segundo atrás…</p>\n<p>Os dois paus Vertical e Horizontal da Santa Cruz, encontram-se, neste ponto…</p>\n<p>Encontramo-nos, pois, de instante em instante perante dois Caminhos: o Horizontal e o Vertical…</p>\n<p>É ostensivo que o Horizontal é muito “cursi”, por ele andam “Vicente e toda a gente”, “Villegas e todo o que chega”, “Dom Raimundo e todo o mundo”…</p>\n<p>É evidente que o Vertical é diferente; é o caminho dos rebeldes inteligentes, o dos Revolucionários…</p>\n<p>Quando alguém se lembra de si mesmo, quando trabalha sobre si mesmo, quando não se identifica com todos os problemas e penas da vida, de facto vai pela Senda Vertical…</p>\n<p>Certamente jamais resulta tarefa fácil eliminar as emoções negativas; perder toda a identificação com o nosso próprio trem de vida; problemas de toda a índole, negócios, dívidas, pagamento de letras, hipotecas, telefone, água, luz, etc., etc., etc.</p>\n<p>Os desocupados, aqueles que por tal ou qual motivo perderam o emprego, o trabalho, evidentemente sofrem por falta de dinheiro e esquecer o seu caso, não se preocupar, nem identificar-se com o seu próprio problema, resulta de facto espantosamente difícil.</p>\n<p>Quem sofre, quem chora, aqueles que foram vítimas de alguma traição, de um mau pagamento na vida, de uma Ingratidão, de uma calúnia ou de alguma fraude, realmente se esquecem de si mesmos, do seu real Ser íntimo, identificam-se completamente com a sua tragédia moral…</p>\n<p>O trabalho sobre si mesmo é a característica fundamental do Caminho Vertical. Ninguém poderia trilhar a Senda da Grande Rebeldia, se jamais trabalhasse sobre si mesmo…</p>\n<p>O trabalho ao qual nos estamos a referir é de tipo Psicológico; ocupa-se de certa transformação do momento presente em que nos encontramos. Necessitamos aprender a viver de instante em instante…</p>\n<p>Por exemplo, uma pessoa que se encontra desesperada por algum problema sentimental, económico ou político obviamente se esqueceu de si mesma…</p>\n<p>Tal pessoa, se se detém um instante, se observa a situação e trata de se lembrar de si mesmo e logo se esforça em compreender o sentido da sua atitude…</p>\n<p>Se reflete um pouco, se pensa em que tudo passa; em que a vida é ilusória, fugaz e em que a morte reduz a cinzas todas as vaidades do mundo…</p>\n<p>Se compreende que o seu problema no fundo não é mais que uma “chama de palha”, um fogo fátuo que logo se apaga, verá de repente com surpresa que tudo mudou…</p>\n<p>Transformar reações mecânicas é possível mediante a confrontação lógica e a Auto-Reflexão Íntima do Ser…</p>\n<p>É evidente que as gentes reagem mecanicamente ante as diversas circunstâncias da vida…</p>\n<p>Pobres gentes!, Costumam sempre converter-se em vítimas. Quando alguém lhes adula sorriem; quando lhes humilham, sofrem. Insultam se lhes insulta; ferem se lhes fere; nunca são livres; os seus semelhantes têm poder para levá-los da alegria à tristeza, da esperança ao desespero.</p>\n<p>Cada pessoa dessas que vão pelo Caminho Horizontal, parece-se com um instrumento musical, onde cada um dos seus semelhantes toca o que lhe apetece…</p>\n<p>Quem aprende a transformar as relações mecânicas, de facto mete-se pelo “Caminho Vertical”.</p>\n<p>Isto representa uma mudança fundamental no “Nível de Ser” resultado extraordinário da “Rebeldia Psicológica”.</p>"
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
const url = "src/content/docs/pt/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
