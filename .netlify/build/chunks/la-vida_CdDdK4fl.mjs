import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "A Vida",
  "locale": "pt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. A Vida",
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
    "set:html": "<p>No terreno da vida prática descobrimos sempre contrastes que assombram. Pessoas abastadas com magníficas residências e muitas amizades, por vezes sofrem espantosamente… Humildes proletários de picareta e pá ou pessoas da classe média, costumam viver por vezes em completa felicidade.</p>\n<p>Muitos multimilionários sofrem de impotência sexual e ricas matronas choram amargamente a infidelidade do marido…</p>\n<p>Os ricos da terra parecem abutres entre jaulas de ouro, nestes tempos não podem viver sem “guarda-costas”…</p>\n<p>Os homens de estado arrastam correntes, nunca estão livres, andam por toda a parte rodeados de gente armada até aos dentes…</p>\n<p>Estudemos esta situação mais detidamente. Precisamos de saber o que é a vida. Cada qual é livre de opinar como queira…</p>\n<p>Digam o que disserem, certamente ninguém sabe nada, a vida resulta num problema que ninguém entende…</p>\n<p>Quando as pessoas desejam contar-nos gratuitamente a história da sua vida, citam acontecimentos, nomes e apelidos, datas, etc., e sentem satisfação ao fazer os seus relatos…</p>\n<p>Essas pobres pessoas ignoram que os seus relatos estão incompletos porque eventos, nomes e datas, são tão só o aspeto externo do filme, falta o aspeto interno…</p>\n<p>É urgente conhecer “estados de consciência”, a cada evento corresponde tal ou qual estado anímico.</p>\n<p>Os estados são interiores e os eventos são exteriores, os acontecimentos externos não são tudo…</p>\n<p>Entenda-se por estados interiores as boas ou más disposições, as preocupações, a depressão, a superstição, o temor, a suspeita, a misericórdia, a auto-consideração, a sobre-estimação de Si mesmo; estados de se sentir feliz, estados de gozo, etc., etc., etc.</p>\n<p>Inquestionavelmente os estados interiores podem corresponder-se exatamente com os acontecimentos exteriores ou ser originados por estes, ou não ter relação alguma com os mesmos…</p>\n<p>Em todo o caso estados e eventos são diferentes. Nem sempre os sucessos se correspondem exatamente com estados afins</p>\n<p>O estado interior de um evento agradável poderia não corresponder-se com o mesmo. O estado interior de um evento desagradável poderia não corresponder-se com o mesmo. Acontecimentos aguardados durante muito tempo, quando vieram sentimos que faltava algo…</p>\n<p>Certamente faltava o correspondente estado Interior que devia combinar-se com o acontecimento exterior…</p>\n<p>Muitas vezes o acontecimento que não se esperava vem a ser o que melhores momentos nos proporcionou…</p>"
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
const url = "src/content/docs/pt/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
