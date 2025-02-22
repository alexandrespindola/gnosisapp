import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "L'Estat Interior",
  "locale": "ca",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. L'Estat Interior",
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
    "set:html": "<p>Combinar estats interiors amb esdeveniments exteriors de manera correcta és saber viure intel·ligentment…</p>\n<p>Qualsevol esdeveniment viscut intel·ligentment exigeix el seu corresponent estat interior específic…</p>\n<p>Però, desafortunadament, la gent, quan revisa la seva vida, pensa que aquesta en si mateixa està constituïda exclusivament per esdeveniments exteriors…</p>\n<p>Pobra gent! Pensen que si tal o qual esdeveniment no els hagués succeït, la seva vida hauria estat millor…</p>\n<p>Suposen que la sort els va sortir a l’encontre i que van perdre l’oportunitat de ser feliços…</p>\n<p>Lamenten el que han perdut, ploren el que van menysprear, gemegen recordant les velles ensopegades i calamitats…</p>\n<p>La gent no vol adonar-se que vegetar no és viure i que la capacitat per existir conscientment depèn exclusivament de la qualitat dels estats interiors de l’ànima…</p>\n<p>Certament, no importa com de bells siguin els esdeveniments externs de la vida, si no ens trobem en aquests moments en l’estat interior apropiat, els millors esdeveniments poden semblar-nos monòtons, pesats o simplement avorrits…</p>\n<p>Algú espera amb ansietat la festa de noces, és un esdeveniment, però podria succeir que estigués tan preocupat en el moment precís de l’esdeveniment, que realment no gaudís de cap delit i que tot allò es tornés tan àrid i fred com un protocol…</p>\n<p>L’experiència ens ha ensenyat que no totes les persones que assisteixen a un banquet o a un ball gaudeixen de veritat…</p>\n<p>Mai falta un avorrit en el millor dels festejos i les peces més delicioses alegren a uns i fan plorar a altres…</p>\n<p>Molt rares són les persones que saben combinar confidentment l’esdeveniment extern amb l’estat intern apropiat…</p>\n<p>És lamentable que la gent no sàpiga viure conscientment: ploren quan han de riure i riuen quan han de plorar…</p>\n<p>Control és diferent: el savi pot estar alegre, però mai ple d’un frenesí boig; trist, però mai desesperat i abatut… serè enmig de la violència; abstemi en l’orgia; cast entre la luxúria, etc.</p>\n<p>Les persones melancòliques i pessimistes pensen de la vida el pitjor i, francament, no desitgen viure…</p>\n<p>Cada dia veiem gent que no només és infeliç, sinó que a més —i el que és pitjor—, també amarguen la vida dels altres…</p>\n<p>Gent així no canviaria ni vivint diàriament de festa en festa; la malaltia psicològica la porten al seu interior… Aquestes persones posseeixen estats íntims definitivament perversos…</p>\n<p>No obstant això, aquests subjectes s’autoqualifiquen com a justos, sants, virtuosos, nobles, servicials, màrtirs, etc., etc., etc.</p>\n<p>Són gent que es considera massa; persones que s’estimen molt a si mateixes…</p>\n<p>Individus que s’apiaden molt de si mateixos i que sempre busquen escapatòries per eludir les seves pròpies responsabilitats…</p>\n<p>Persones així estan acostumades a les emocions inferiors i és ostensible que per aquest motiu creen diàriament elements psíquics infrahumans.</p>\n<p>Els esdeveniments desgraciats, els revessos de fortuna, la misèria, els deutes, els problemes, etc., són exclusivitat d’aquelles persones que no saben viure…</p>\n<p>Qualsevol pot formar-se una rica cultura intel·lectual, però són molt poques les persones que han après a viure rectament…</p>\n<p>Quan un vol separar els esdeveniments exteriors dels estats interiors de la consciència, demostra concretament la seva incapacitat per existir dignament.</p>\n<p>Els qui aprenen a combinar conscientment esdeveniments exteriors i estats interiors marxen pel camí de l’èxit…</p>"
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
const url = "src/content/docs/ca/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
