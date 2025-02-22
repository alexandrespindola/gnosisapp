import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Dažādie Es",
  "locale": "lv",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Dažādie Es",
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
    "set:html": "<p>Racionālais zīdītājs, kļūdaini saukts par cilvēku, patiesībā nepiemīt definēta individualitāte.</p>\n<p>Neapšaubāmi, šis psiholoģiskās vienotības trūkums humanoīdā ir daudzu grūtību un rūgtuma cēlonis.</p>\n<p>Fiziskais ķermenis ir pilnīga vienība un darbojas kā organisks veselums, ja vien nav slims.</p>\n<p>Tomēr humanoīda iekšējā dzīve nekādā ziņā nav psiholoģiska vienība.</p>\n<p>Visnopietnākais no visa tā, neskatoties uz to, ko saka dažādas pseidoezotēriskas un pseidookultas skolas, ir psiholoģiskās organizācijas trūkums katra subjekta dziļākajā būtībā.</p>\n<p>Protams, šādos apstākļos iekšējā cilvēku dzīvē nav saskaņota darba kā veselumam.</p>\n<p>Humanoīds attiecībā uz savu iekšējo stāvokli ir psiholoģiska daudzveidība, “Es” summa.</p>\n<p>Šī tumšā laikmeta apgaismotie nezina, pielūdz “ES”, dievina to, novieto to uz altāriem, sauc to par “ALTER EGO”, “AUGSTĀKO ES”, “DIEVIŠĶO ES” utt., utt., utt.</p>\n<p>Šīs tumšās ēras “gudrīši” nevēlas saprast, ka “Augstākais Es” vai “Zemākais Es” ir divas vienas un tās pašas pluralizētās Ego daļas…</p>\n<p>Humanoīdam noteikti nav “PASTĀVĪGA ES”, bet gan daudz dažādu infrahumānu un absurdu “Es”.</p>\n<p>Nabaga intelektuālais dzīvnieks, kļūdaini saukts par cilvēku, ir līdzīgs haotiskai mājai, kurā viena saimnieka vietā ir daudz kalpu, kas vienmēr vēlas pavēlēt un darīt to, kas viņiem ienāk prātā…</p>\n<p>Lielākā pseidoezotērisma un lētā pseidookultisma kļūda ir pieņēmums, ka citiem pieder vai ka kādam ir “PASTĀVĪGS un NEMAINĪGS ES” bez sākuma un bez beigām…</p>\n<p>Ja tie, kas tā domā, atmostos kaut uz mirkli, viņi paši varētu skaidri pārliecināties, ka racionālais humanoīds nekad nav vienāds uz ilgu laiku…</p>\n<p>Intelektuālais zīdītājs no psiholoģiskā viedokļa pastāvīgi mainās…</p>\n<p>Domāt, ka, ja cilvēku sauc par Luisu, viņš vienmēr ir Luiss, ir kaut kas līdzīgs ļoti sliktam jokam…</p>\n<p>Šim subjektam, kuru sauc par Luisu, sevī ir citi “Es”, citi ego, kas izpaužas caur viņa personību dažādos laikos, un, lai gan Luisam nepatīk mantkārība, citam “Es” viņā — sauksim viņu par Pepi — patīk mantkārība, un tā tālāk…</p>\n<p>Neviens cilvēks nav vienāds nepārtraukti, patiesībā nav jābūt ļoti gudram, lai pilnībā apzinātos katra subjekta neskaitāmās izmaiņas un pretrunas…</p>\n<p>Pieņemt, ka kādam ir “PASTĀVĪGS un NEMAINĪGS ES”, protams, ir līdzvērtīgi ļaunprātībai pret tuvāko un pret sevi…</p>\n<p>Katrā cilvēkā dzīvo daudz cilvēku, daudz “Es”, to var pārbaudīt pats un tiešā veidā jebkurš nomodā esošs, apzinīgs cilvēks…</p>"
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
const url = "src/content/docs/lv/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lv/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lv/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
