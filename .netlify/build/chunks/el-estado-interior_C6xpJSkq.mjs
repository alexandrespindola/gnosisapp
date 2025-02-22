import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Sisemine riik",
  "locale": "et",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Sisemine riik",
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
    "set:html": "<p>Oskus ühendada õigesti sisemised seisundid väliste sündmustega tähendab intelligentset elamist…</p>\n<p>Iga intelligentselt läbi elatud sündmus nõuab vastavat spetsiifilist sisemist seisundit…</p>\n<p>Ometi arvavad inimesed oma elu üle vaadates kahjuks, et see koosneb ainult välistest sündmustest…</p>\n<p>Vaesed inimesed! Nad arvavad, et kui see või teine sündmus poleks nendega juhtunud, oleks nende elu olnud parem…</p>\n<p>Nad eeldavad, et õnn tuli neile vastu ja nad kaotasid võimaluse olla õnnelikud…</p>\n<p>Nad kurvastavad kaotatu üle, nutavad selle pärast, mida nad põlgasid, ägavad, mäletades vanu komistusi ja õnnetusi…</p>\n<p>Inimesed ei taha aru saada, et vegeteerimine ei ole elamine ja et teadvustatud eksisteerimise võime sõltub ainult hinge sisemiste seisundite kvaliteedist…</p>\n<p>Pole tähtis, kui ilusad on elu välised sündmused, kui me ei ole sellistel hetkedel sobivas sisemises seisundis, võivad parimad sündmused meile tunduda monotoonsed, tüütud või lihtsalt igavad…</p>\n<p>Keegi ootab ärevalt pulmapidu, see on sündmus, kuid võib juhtuda, et ta on sündmuse hetkel nii mures, et ta ei tunne sellest mingit rõõmu ja et kõik muutub sama kuivaks ja külmaks kui protokoll…</p>\n<p>Kogemus on meile õpetanud, et mitte kõik banketil või tantsupeol viibijad ei naudi seda tõeliselt…</p>\n<p>Parimalgi peol ei puudu kunagi igav inimene ning kõige maitsvamad palad rõõmustavad ühtesid ja panevad teisi nutma…</p>\n<p>Väga harvad on inimesed, kes oskavad välise sündmuse enesekindlalt sobiva sisemise seisundiga kombineerida…</p>\n<p>On kahetsusväärne, et inimesed ei oska teadlikult elada: nad nutavad, kui peaksid naerma, ja naeravad, kui peaksid nutma…</p>\n<p>Kontroll on erinev: tark võib olla rõõmus, kuid mitte kunagi täis hullumeelset meeletust; kurb, aga mitte kunagi meeleheitel ja masenduses… rahulik keset vägivalda; karsklane orgias; kaste ihalduses jne.</p>\n<p>Melanhoolsed ja pessimistlikud inimesed mõtlevad elust kõige hullemat ja ausalt öeldes ei taha elada…</p>\n<p>Iga päev näeme inimesi, kes pole mitte ainult õnnetud, vaid mis veel hullem – muudavad ka teiste elu kibedaks…</p>\n<p>Sellised inimesed ei muutuks isegi siis, kui nad elaksid iga päev peost peoni; psühholoogiline haigus on neil sees… sellistel inimestel on kindlalt perversed sisemised seisundid…</p>\n<p>Ometi nimetavad need subjektid end õiglasteks, pühadeks, vooruslikeks, õilsateks, abivalmiteks, märtriteks jne, jne, jne.</p>\n<p>Nad on inimesed, kes arvavad endast liiga palju; inimesed, kes armastavad ennast väga…</p>\n<p>Inimesed, kes haletsevad ennast väga ja kes otsivad alati vabandusi, et oma vastutusest kõrvale hiilida…</p>\n<p>Sellised inimesed on harjunud madalate emotsioonidega ja on nähtav, et sel põhjusel loovad nad iga päev ebainimlikke psüühilisi elemente.</p>\n<p>Õnnetud sündmused, varanduskaotused, viletsus, võlad, probleemid jne on ainult nende inimeste privileeg, kes ei oska elada…</p>\n<p>Igaüks võib endale rikka intellektuaalse kultuuri kujundada, kuid väga vähesed inimesed on õppinud õigesti elama…</p>\n<p>Kui keegi tahab lahutada väliseid sündmusi teadvuse sisemistest seisunditest, demonstreerib ta konkreetselt oma suutmatust väärikalt eksisteerida.</p>\n<p>Need, kes õpivad teadlikult kombineerima väliseid sündmusi ja sisemisi seisundeid, liiguvad edu teel…</p>"
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
const url = "src/content/docs/et/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
