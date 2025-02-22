import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Сущность",
  "locale": "ru",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Сущность",
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
    "set:html": "<p>Что делает красивым и очаровательным каждого новорожденного ребенка, так это его Эссенция; она сама по себе является его истинной реальностью…</p>\n<p>Нормальный рост Эссенции в каждом существе, конечно, очень остаточный, зарождающийся…</p>\n<p>Человеческое тело растет и развивается в соответствии с биологическими законами вида, однако такие возможности сами по себе очень ограничены для Эссенции…</p>\n<p>Несомненно, Эссенция может расти сама по себе без посторонней помощи лишь в очень малой степени…</p>\n<p>Говоря откровенно и без обиняков, скажем, что спонтанный и естественный рост Эссенции возможен только в течение первых трех, четырех и пяти лет жизни, то есть на первом этапе жизни…</p>\n<p>Люди думают, что рост и развитие Эссенции происходит всегда непрерывно, в соответствии с механикой эволюции, но Универсальный Гностицизм ясно учит, что это не так…</p>\n<p>Чтобы Эссенция росла больше, должно произойти что-то особенное, нужно сделать что-то новое.</p>\n<p>Я хочу особо подчеркнуть работу над собой. Развитие Эссенции возможно только на основе сознательных работ и добровольных страданий…</p>\n<p>Необходимо понимать, что эти работы не относятся к вопросам профессии, банков, столярного дела, каменной кладки, ремонта железных дорог или офисным делам…</p>\n<p>Эта работа предназначена для каждого человека, развившего личность; это нечто психологическое…</p>\n<p>Все мы знаем, что внутри нас есть то, что называется ЭГО, Я, МОЕ Я, САМОЕ СЕБЯ…</p>\n<p>К сожалению, Эссенция находится в бутылке, в заточении, между ЭГО, и это прискорбно.</p>\n<p>Растворить Психологическое Я, дезинтегрировать его нежелательные элементы, необходимо срочно, безотлагательно, незамедлительно… в этом смысл работы над собой.</p>\n<p>Мы никогда не сможем освободить Эссенцию, не дезинтегрировав предварительно Психологическое Я…</p>\n<p>В Эссенции находится Религия, БУДДА, Мудрость, частицы боли нашего Отца, который на Небесах, и все данные, необходимые нам для ИНТИМНОЙ САМО-РЕАЛИЗАЦИИ БЫТИЯ.</p>\n<p>Никто не может уничтожить Психологическое Я, не устранив предварительно бесчеловечные элементы, которые мы носим внутри…</p>\n<p>Нам нужно превратить в пепел чудовищную жестокость этих времен: зависть, которая, к сожалению, стала тайным двигателем действия; невыносимую жадность, которая сделала жизнь такой горькой: отвратительное злословие; клевету, которая порождает столько трагедий; пьянство; грязную похоть, от которой так дурно пахнет; и т.д., и т.п., и т.д.</p>\n<p>По мере того, как все эти мерзости превращаются в космическую пыль, Эссенция, помимо освобождения, будет расти и гармонично развиваться…</p>\n<p>Несомненно, когда Психологическое Я умирает, в нас сияет Эссенция…</p>\n<p>Свободная Эссенция дарит нам внутреннюю красоту; из такой красоты исходят совершенное счастье и истинная Любовь…</p>\n<p>Эссенция обладает множеством чувств совершенства и необычайными природными силами…</p>\n<p>Когда мы “Умираем в Самих Себе”, когда мы растворяем Психологическое Я, мы наслаждаемся драгоценными чувствами и силами Эссенции…</p>"
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
const url = "src/content/docs/ru/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
