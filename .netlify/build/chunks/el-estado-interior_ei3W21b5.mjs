import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "O Estado Interior",
  "locale": "pt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. O Estado Interior",
    "order": 7
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
    "set:html": "<p>Combinar estados interiores com acontecimentos exteriores de forma correta, é saber viver inteligentemente…</p>\n<p>Qualquer evento inteligentemente vivenciado exige o seu correspondente estado interior específico…</p>\n<p>Porém, infelizmente, as pessoas quando revisitam a sua vida, pensam que esta em si mesma é constituída exclusivamente por eventos exteriores…</p>\n<p>Pobres pessoas! pensam que se tal ou qual acontecimento não lhes tivesse sucedido, a sua vida teria sido melhor…</p>\n<p>Supõem que a sorte lhes saiu ao encontro e que perderam a oportunidade de serem felizes…</p>\n<p>Lamentam o perdido, choram o que desprezaram, gemem recordando os velhos tropeções e calamidades…</p>\n<p>As pessoas não querem perceber que vegetar não é viver e que a capacidade para existir conscientemente depende exclusivamente da qualidade dos estados interiores da Alma…</p>\n<p>Não importa certamente quão belos sejam os acontecimentos externos da vida, se não nos encontramos em tais momentos no estado interior apropriado, os melhores eventos podem parecer-nos monótonos, maçadores ou simplesmente aborrecidos…</p>\n<p>Alguém aguarda com ansiedade a festa de casamento, é um acontecimento, mas poderia suceder que estivesse tão preocupado no momento preciso do evento, que realmente não gostasse de nenhum deleite e que tudo aquilo se tornasse tão árido e frio como um protocolo…</p>\n<p>A experiência ensinou-nos que nem todas as pessoas que assistem a um banquete ou a um baile, gozam de verdade…</p>\n<p>Nunca falta um aborrecido na melhor das festas e as peças mais deliciosas alegram a uns e fazem chorar a outros…</p>\n<p>Muito raras são as pessoas que sabem combinar confidentemente o evento externo com o estado interno apropriado…</p>\n<p>É lamentável que as pessoas não saibam viver conscientemente: choram quando devem rir e riem quando devem chorar…</p>\n<p>Controlo é diferente: O sábio pode estar alegre, mas nunca jamais cheio de louco frenesim; Triste, mas nunca desesperado e abatido… sereno no meio da violência; abstémio na orgia; casto entre a luxúria, etc.</p>\n<p>As pessoas melancólicas e pessimistas pensam da vida o pior e, francamente, não desejam viver…</p>\n<p>Todos os dias vemos pessoas que não somente são infelizes, como, além disso — e o que é pior —, tornam também amarga a vida dos demais…</p>\n<p>Pessoas assim não mudariam nem vivendo diariamente de festa em festa; a doença psicológica levam-na no seu interior… tais pessoas possuem estados íntimos definitivamente perversos…</p>\n<p>No entanto, esses sujeitos autoqualificam-se como justos, santos, virtuosos, nobres, servis, mártires, etc., etc., etc.</p>\n<p>São pessoas que se autoconsideram demasiado; pessoas que se amam muito a si mesmas…</p>\n<p>Indivíduos que se apiedam muito de si mesmos e que sempre procuram escapatórias para iludir as suas próprias responsabilidades…</p>\n<p>Pessoas assim estão acostumadas às emoções inferiores e é ostensivo que, por tal motivo, criam diariamente elementos psíquicos infrahumanos.</p>\n<p>Os eventos desgraçados, reveses de fortuna, miséria, dívidas, problemas, etc., são exclusividade daquelas pessoas que não sabem viver…</p>\n<p>Qualquer um pode formar uma rica cultura intelectual, mas são muito poucas as pessoas que aprenderam a viver retamente…</p>\n<p>Quando alguém quer separar os eventos exteriores dos estados interiores da consciência, demonstra concretamente a sua incapacidade para existir dignamente.</p>\n<p>Quem aprende a combinar conscientemente eventos exteriores e estados interiores, marcha pelo caminho do sucesso…</p>"
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
const url = "src/content/docs/pt/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
