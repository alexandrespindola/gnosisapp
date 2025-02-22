import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Asmeniniai įvykiai",
  "locale": "lt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Asmeniniai įvykiai",
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
    "set:html": "<p>Visiškas, intymus Savęs stebėjimas yra neatidėliotinas dalykas, kai reikia atrasti klaidingas psichologines būsenas.</p>\n<p>Neginčijamai klaidingos vidinės būsenos gali būti pataisytos teisingomis procedūromis.</p>\n<p>Kadangi vidinis gyvenimas yra magnetas, traukiantis išorinius įvykius, mums skubiai ir neatidėliotinai reikia pašalinti iš savo psichikos klaidingas psichologines būsenas.</p>\n<p>Klaidingų psichologinių būsenų taisymas yra būtinas, norint iš esmės pakeisti tam tikrų nepageidaujamų įvykių pobūdį.</p>\n<p>Pakeisti savo santykį su tam tikrais įvykiais yra įmanoma, jei pašalinsime iš savo vidaus tam tikras absurdiškas psichologines būsenas.</p>\n<p>Destruktyvios išorinės situacijos galėtų tapti nekenksmingomis ir net konstruktyviomis, protingai koreguojant klaidingas vidines būsenas.</p>\n<p>Galima pakeisti nemalonių įvykių, kurie mums nutinka, pobūdį, kai esi intymiai apsivalęs. Tas, kuris niekada netaiso absurdiškų psichologinių būsenų, manydamas, kad yra labai stiprus, tampa aplinkybių auka.</p>\n<p>Susitvarkyti savo netvarkingus vidinius namus yra gyvybiškai svarbu, kai norima pakeisti nelaimingo egzistavimo eigą.</p>\n<p>Žmonės skundžiasi dėl visko, kenčia, verkia, protestuoja, norėtų pakeisti gyvenimą, ištrūkti iš nelaimės, kurioje atsidūrė, deja, nedirba su savimi.</p>\n<p>Žmonės nenori suvokti, kad vidinis gyvenimas traukia išorines aplinkybes ir kad jei jos yra skausmingos, tai yra dėl absurdiškų vidinių būsenų.</p>\n<p>Išorė yra tik vidinės būsenos atspindys, kas keičiasi viduje, sukuria naują dalykų tvarką.</p>\n<p>Išoriniai įvykiai niekada nebūtų tokie svarbūs, kaip būdas į juos reaguoti.</p>\n<p>Ar išlikote ramus prieš įžeidėją? Ar maloniai priėmėte nemalonias savo artimųjų apraiškas?</p>\n<p>Kaip sureagavote į mylimo žmogaus neištikimybę? Ar pasidavėte pavydo nuodams? Ar žudėte? Ar esate kalėjime?</p>\n<p>Ligoninės, kapinės, kalėjimai yra pilni nuoširdžių klystkelių, kurie absurdiškai sureagavo į išorinius įvykius.</p>\n<p>Geriausias ginklas, kurį žmogus gali naudoti gyvenime, yra teisinga psichologinė būsena.</p>\n<p>Galima nuginkluoti žvėris ir demaskuoti išdavikus, naudojant tinkamas vidines būsenas.</p>\n<p>Klaidingos vidinės būsenos paverčia mus bejėgėmis žmogaus sugedimo aukomis.</p>\n<p>Išmokite susidurti su nemaloniausiais praktinio gyvenimo įvykiais su tinkamu vidiniu požiūriu…</p>\n<p>Nesitapatinkite su jokiu įvykiu; atminkite, kad viskas praeina; išmokite matyti gyvenimą kaip filmą ir gausite naudos…</p>\n<p>Nepamirškite, kad beverčiai įvykiai gali nuvesti jus į nelaimę, jei nepašalinsite iš savo psichikos klaidingų vidinių būsenų.</p>\n<p>Kiekvienam išoriniam įvykiui, be abejonės, reikia atitinkamo bilieto; tai yra, tikslios psichologinės būsenos.</p>"
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
const url = "src/content/docs/lt/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
