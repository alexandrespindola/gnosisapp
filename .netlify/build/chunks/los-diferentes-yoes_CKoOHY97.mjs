import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Různá Já",
  "locale": "cs",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Různá Já",
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
    "set:html": "<p>Racionální savec mylně nazývaný člověk ve skutečnosti nemá definovanou individualitu.</p>\n<p>Nepochybně je tento nedostatek psychologické jednoty u humanoida příčinou tolika obtíží a hořkostí.</p>\n<p>Fyzické tělo je úplná jednotka a funguje jako organický celek, pokud není nemocné.</p>\n<p>Nicméně vnitřní život humanoida není v žádném případě psychologickou jednotou.</p>\n<p>Nejzávažnější na tom všem, navzdory tomu, co říkají různé školy pseudo-esoterického a pseudo-okultistického typu, je absence psychologické organizace v intimním nitru každého subjektu.</p>\n<p>Za takových podmínek jistě neexistuje harmonická práce jako celek ve vnitřním životě lidí.</p>\n<p>Humanoid, pokud jde o jeho vnitřní stav, je psychologická multiplicita, součet „Já“.</p>\n<p>Ilustrovaní ignoranti této temné epochy uctívají „Já“, zbožňují ho, kladou ho na oltáře, nazývají ho „ALTER EGO“, „VYŠŠÍ JÁ“, „BOŽSKÉ JÁ“ atd., atd., atd.</p>\n<p>„Vševědoucí“ této černé doby, ve které žijeme, si nechtějí uvědomit, že „Vyšší Já“ nebo „Nižší Já“ jsou dvě sekce téhož pluralizovaného Ega…</p>\n<p>Humanoid jistě nemá „Trvalé Já“, ale spoustu různých infrahumánních a absurdních „Já“.</p>\n<p>Ubohý intelektuální živočich mylně nazývaný člověk se podobá domu v nepořádku, kde místo jednoho pána existuje mnoho služebníků, kteří chtějí vždy velet a dělat, co se jim zlíbí…</p>\n<p>Největší chybou laciného pseudo-esoterismu a pseudo-okultismu je předpoklad, že ostatní mají nebo že má někdo „Trvalé a Neměnné Já“ bez začátku a bez konce…</p>\n<p>Kdyby ti, kdo takto smýšlejí, procitli, byť jen na okamžik, mohli by jasně sami pro sebe dokázat, že racionální humanoid nikdy není dlouho stejný…</p>\n<p>Intelektuální savec se z psychologického hlediska neustále mění…</p>\n<p>Myslet si, že když se někdo jmenuje Ludvík, je to vždycky Ludvík, je něco jako žert velmi špatné chuti…</p>\n<p>Ten subjekt, kterému se říká Ludvík, má v sobě jiná „Já“, jiná ega, která se projevují prostřednictvím jeho osobnosti v různých okamžicích, a i když se Ludvíkovi nelíbí chtivost, jiné „Já“ v něm – nazvěme ho Pepa – má rádo chtivost a tak dále…</p>\n<p>Žádná osoba není neustále stejná, opravdu není třeba být příliš moudrý, abychom si plně uvědomili nesčetné změny a rozpory každého subjektu…</p>\n<p>Předpokládat, že někdo má „Trvalé a Neměnné Já“, se samozřejmě rovná zneužívání bližního i sebe samého…</p>\n<p>Uvnitř každé osoby žije mnoho osob, mnoho „Já“, to si může ověřit sám a přímo každý probuzený, vědomý člověk…</p>"
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
const url = "src/content/docs/cs/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
