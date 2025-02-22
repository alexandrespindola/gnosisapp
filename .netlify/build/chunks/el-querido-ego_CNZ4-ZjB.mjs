import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "O Querido Ego",
  "locale": "pt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. O Querido Ego",
    "order": 11
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
    "set:html": "<p>Como superior e inferior são duas secções da mesma coisa, não está de mais assentar o seguinte corolário: “EU SUPERIOR, EU INFERIOR” são dois aspetos do mesmo EGO tenebroso e pluralizado.</p>\n<p>O denominado “EU DIVINO” ou “EU SUPERIOR”, “ALTER EGO” ou algo do género, é certamente uma manobra do “EU MESMO”, uma forma de AUTOENGANO.</p>\n<p>Quando o EU quer continuar aqui e no além, Autoengana-se com o falso conceito de um EU Divino Imortal…</p>\n<p>Nenhum de nós tem um “Eu” verdadeiro, permanente, imutável, eterno, inefável, etc., etc., etc.</p>\n<p>Nenhum de nós tem em verdade uma verdadeira e autêntica Unidade de Ser; infelizmente nem sequer possuímos uma legítima individualidade.</p>\n<p>O Ego, embora continue para além do sepulcro, tem, no entanto, um princípio e um fim.</p>\n<p>O Ego, o EU, nunca é algo individual, unitário, unitotal. Obviamente o EU é “EUS”.</p>\n<p>No Tibete Oriental, aos “EUS” denominam-se “AGREGADOS PSIQUICOS” ou simplesmente “Valores”, sejam estes últimos positivos ou negativos.</p>\n<p>Se pensarmos em cada “Eu” como uma pessoa diferente, podemos asseverar de forma enfática o seguinte: “Dentro de cada pessoa que vive no mundo, existem muitas pessoas”.</p>\n<p>Inquestionavelmente, dentro de cada um de nós vivem muitíssimas pessoas diferentes, algumas melhores, outras piores…</p>\n<p>Cada um destes Eus, cada uma destas pessoas luta pela supremacia, quer ser exclusiva, controla o cérebro intelectual ou os centros emocional e motor cada vez que pode, enquanto outro o desloca…</p>\n<p>A Doutrina dos muitos Eus foi ensinada no Tibete Oriental pelos verdadeiros Clarividentes, pelos autênticos Iluminados…</p>\n<p>Cada um dos nossos defeitos psicológicos está personificado em tal ou qual Eu. Como temos milhares e até milhões de defeitos, ostensivamente vive muita gente no nosso interior.</p>\n<p>Em questões psicológicas, pudemos evidenciar claramente que os sujeitos paranoicos, ególatras e mitómanos por nada na vida abandonariam o culto ao querido Ego.</p>\n<p>Inquestionavelmente, tais gentes odeiam mortalmente a doutrina dos muitos “Eus”.</p>\n<p>Quando alguém de verdade quer conhecer-se a si mesmo, deve auto-observar-se e tratar de conhecer os diferentes “Eus” que estão metidos dentro da personalidade.</p>\n<p>Se algum dos nossos leitores não compreende ainda esta doutrina dos muitos “Eus”, deve-se exclusivamente à falta de prática em matéria de Auto-Observação.</p>\n<p>À medida que se pratica a Auto-Observação Interior, vai-se descobrindo por si mesmo muitas gentes, muitos “Eus”, que vivem dentro da nossa própria personalidade.</p>\n<p>Quem nega a doutrina dos muitos Eus, quem adora um EU Divino, indubitavelmente jamais se Auto-Observou seriamente. Falando esta vez em estilo Socrático, diremos que essas gentes não só ignoram como além disso ignoram que ignoram.</p>\n<p>Certamente jamais poderíamos conhecer-nos a si mesmos, sem a auto-observação séria e profunda.</p>\n<p>Enquanto um sujeito qualquer se seguir considerando como Uno, é claro que qualquer mudança interior será algo mais que impossível.</p>"
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
const url = "src/content/docs/pt/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pt/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
