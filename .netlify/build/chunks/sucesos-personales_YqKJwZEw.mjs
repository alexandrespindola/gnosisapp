import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Personīgi Notikumi",
  "locale": "lv",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Personīgi Notikumi",
    "order": 9
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
    "set:html": "<p>Pilnīga un intīma Pašnovērošana ir neatliekama, kad runa ir par nepareizu psiholoģisko stāvokļu atklāšanu.</p>\n<p>Nenoliedzami, nepareizus iekšējos stāvokļus var labot ar pareizām procedūrām.</p>\n<p>Tā kā iekšējā dzīve ir magnēts, kas piesaista ārējos notikumus, mums ir ārkārtīgi un neatliekami jālikvidē no savas psihes kļūdaini psiholoģiskie stāvokļi.</p>\n<p>Nepareizu psiholoģisko stāvokļu labošana ir nepieciešama, ja vēlas būtiski mainīt noteiktu nevēlamu notikumu būtību.</p>\n<p>Mainīt mūsu attiecības ar noteiktiem notikumiem ir iespējams, ja mēs no sava iekšējā stāvokļa likvidējam noteiktus absurdus psiholoģiskos stāvokļus.</p>\n<p>Destruktīvas ārējās situācijas varētu kļūt nekaitīgas un pat konstruktīvas, pateicoties saprātīgai kļūdainu iekšējo stāvokļu korekcijai.</p>\n<p>Var mainīt nepatīkamu notikumu būtību, kas ar mums notiek, kad tiekam intīmi attīrīti. Tas, kurš nekad nekoriģē absurdus psiholoģiskos stāvokļus, uzskatot sevi par ļoti spēcīgu, kļūst par apstākļu upuri.</p>\n<p>Ieviest kārtību mūsu nekārtīgajā iekšējā namā ir vitāli svarīgi, ja vēlas mainīt nelaimīgas eksistences gaitu.</p>\n<p>Cilvēki par visu sūdzas, cieš, raud, protestē, vēlētos mainīt dzīvi, izkļūt no nelaimes, kurā atrodas, diemžēl nestrādā ar sevi.</p>\n<p>Cilvēki nevēlas saprast, ka iekšējā dzīve piesaista ārējos apstākļus un ka, ja tie ir sāpīgi, tas ir saistīts ar absurdiem iekšējiem stāvokļiem.</p>\n<p>Ārējais ir tikai iekšējā atspulgs, tas, kurš mainās iekšēji, rada jaunu lietu kārtību.</p>\n<p>Ārējiem notikumiem nekad nevajadzētu būt tik svarīgiem kā veidam, kā reaģēt uz tiem.</p>\n<p>Vai palikāt mierīgs, dzirdot apvainojumus? Vai ar prieku uztvērāt savu līdzcilvēku nepatīkamās izpausmes?</p>\n<p>Kādā veidā reaģējāt uz mīļotā cilvēka neuzticību? Vai ļāvāties greizsirdības indei? Vai nogalinājāt? Vai esat cietumā?</p>\n<p>Slimnīcas, kapsētas vai panteoni, cietumi ir pilni ar sirsnīgiem kļūdniekiem, kuri absurdi reaģēja uz ārējiem notikumiem.</p>\n<p>Labākais ierocis, ko cilvēks var izmantot dzīvē, ir pareizs psiholoģiskais stāvoklis.</p>\n<p>Var atbruņot zvērus un atmaskot nodevējus, izmantojot atbilstošus iekšējos stāvokļus.</p>\n<p>Nepareizi iekšējie stāvokļi padara mūs par neaizsargātiem cilvēka ļaunuma upuriem.</p>\n<p>Mācieties stāties pretī visnepatīkamākajiem praktiskās dzīves notikumiem ar atbilstošu iekšējo attieksmi…</p>\n<p>Neidentificējieties ar nevienu notikumu; atcerieties, ka viss pāriet; mācieties redzēt dzīvi kā filmu un saņemsiet labumus…</p>\n<p>Neaizmirstiet, ka nenozīmīgi notikumi var novest pie nelaimes, ja jūs neiznīcināsiet no savas psihes nepareizus iekšējos stāvokļus.</p>\n<p>Katram ārējam notikumam nenoliedzami ir nepieciešama atbilstoša biļete; tas ir, precīzs psiholoģiskais stāvoklis.</p>"
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
const url = "src/content/docs/lv/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lv/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lv/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
