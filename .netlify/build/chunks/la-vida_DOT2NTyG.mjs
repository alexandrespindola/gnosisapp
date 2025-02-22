import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Dzīve",
  "locale": "lv",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Dzīve",
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
    "set:html": "<p>Praktiskajā dzīvē mēs vienmēr atklājam pārsteidzošus kontrastus. Turīgi cilvēki ar greznām rezidencēm un daudziem draugiem dažreiz cieš briesmīgi… Pazemīgi proletārieši ar cirtni un lāpstu vai vidusšķiras cilvēki dažreiz dzīvo pilnīgā laimē.</p>\n<p>Daudzi superbogātnieki cieš no seksuālās impotence, un bagātas matronas rūgti raud par vīra neuzticību…</p>\n<p>Zemes bagātnieki šķiet grifi zelta būros, šajos laikos viņi nevar dzīvot bez “miesassargiem”…</p>\n<p>Valstsvīri velk ķēdes, viņi nekad nav brīvi, viņi staigā visur, ieskauti ar zobiem bruņotiem cilvēkiem…</p>\n<p>Pētīsim šo situāciju sīkāk. Mums jāzina, kas ir dzīve. Ikvienam ir tiesības domāt, kā viņš vēlas…</p>\n<p>Lai ko viņi teiktu, neviens neko nezina, dzīve izrādās problēma, ko neviens nesaprot…</p>\n<p>Kad cilvēki vēlas mums bez maksas pastāstīt savas dzīves stāstu, viņi piemin notikumus, vārdus un uzvārdus, datumus utt., un jūt gandarījumu, stāstot savus stāstus…</p>\n<p>Šie nabaga cilvēki nezina, ka viņu stāsti ir nepilnīgi, jo notikumi, vārdi un datumi ir tikai filmas ārējais aspekts, trūkst iekšējā aspekta…</p>\n<p>Ir steidzami jāzina “apziņas stāvokļi”, katram notikumam atbilst tas vai cits garastāvoklis.</p>\n<p>Stāvokļi ir iekšēji, un notikumi ir ārēji, ārējie notikumi nav viss…</p>\n<p>Ar iekšējiem stāvokļiem jāsaprot labas vai sliktas noslieces, rūpes, depresija, māņticība, bailes, aizdomas, žēlsirdība, pašvērtējums, sevis pārvērtēšana; laimes stāvokļi, prieka stāvokļi utt., utt., utt.</p>\n<p>Neapšaubāmi, iekšējie stāvokļi var precīzi atbilst ārējiem notikumiem vai būt to izraisīti, vai arī tiem nav nekāda sakara ar tiem…</p>\n<p>Jebkurā gadījumā stāvokļi un notikumi ir atšķirīgi. Ne vienmēr notikumi precīzi atbilst radniecīgiem stāvokļiem</p>\n<p>Patīkama notikuma iekšējais stāvoklis var neatbilst tam pašam. Nepatīkama notikuma iekšējais stāvoklis var neatbilst tam pašam. Notikumi, kas gaidīti ilgu laiku, kad tie pienāca, mēs jutām, ka kaut kas trūkst…</p>\n<p>Protams, trūka atbilstošā iekšējā stāvokļa, kas būtu jāsavieno ar ārējo notikumu…</p>\n<p>Daudzreiz notikums, kas netika gaidīts, kļūst par to, kas mums ir sniedzis vislabākos mirkļus…</p>"
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
const url = "src/content/docs/lv/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lv/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lv/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
