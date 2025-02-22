import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Durmuş",
  "locale": "tk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Durmuş",
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
    "set:html": "<p>Durmuş tejribesiniň meýdanynda elmydama haýran galdyrýan tapawutlary ýüze çykarýarys. Uly jaýlarda ýaşaýan we köp dostlary bolan baý adamlar käwagt gaty ejir çekýärler. Köp zähmet çekýän ýönekeý işçiler ýa-da orta gatlakdan bolan adamlar käwagt doly bagtda ýaşaýarlar.</p>\n<p>Köp sanly milliarder jynsy taýdan ejizleýär we baý aýallar adamsynyň wepasyzlygy sebäpli ajy gözýaş dökýärler …</p>\n<p>Ýeriň baýlary altyn gäpleriniň arasynda gyranlara meňzeýär, şu wagtlar “goragçysyz” ýaşap bilmeýärler …</p>\n<p>Döwlet adamlary zynjyr ýaly, olar hiç haçan erkin däl, dişlerine çenli ýaraglanan adamlar bilen gurşalyp, ähli ýerde aýlanýarlar …</p>\n<p>Bu ýagdaýa has içgin seredeliň. Durmuşyň nämedigini bilmeli. Her kim islän zadyny aýtmakda erkin …</p>\n<p>Näme diýseler-de, hakykatdanam hiç kim hiç zat bilenok, durmuş hiç kimiň düşünmeýän meselesi bolup çykýar …</p>\n<p>Adamlar durmuşynyň taryhyny mugt gürrüň bermegi isleseler, wakalary, atlary we familiýalary, seneleri we ş.m. getirýärler we gürrüňlerini aýdanda kanagatlanma duýýarlar …</p>\n<p>Şol garyp adamlar hekaýalarynyň doly däldigini bilmeýärler, sebäbi wakalar, atlar we seneler filmiň diňe daşky görnüşi, içerki tarapy ýok …</p>\n<p>“Aň ýagdaýlaryny” bilmek möhümdir, her bir waka belli bir emosional ýagdaýa degişlidir.</p>\n<p>Ýagdaýlar içerki, wakalar daşarky, daşarky wakalar ähli zat däl …</p>\n<p>Içerki ýagdaýlara gowy ýa-da erbet meýiller, aladalar, depressiýa, ynanç, gorky, güman, rehimdarlyk, öz-özüňi hasaplamak, özüňe aşa baha bermek; bagtly duýgu ýagdaýlary, şatlyk ýagdaýlary we ş.m., we ş.m. düşünilýär.</p>\n<p>Içerki ýagdaýlaryň daşarky wakalara takyk gabat gelip bilýändigi ýa-da olardan gelip çykyp bilýändigi ýa-da olar bilen hiç hili baglanyşygynyň ýokdugy jedelsizdir …</p>\n<p>Her niçik hem bolsa, ýagdaýlar we wakalar dürli. Hemme waka hemişe degişli ýagdaýlara takyk gabat gelmeýär</p>\n<p>Gowy wakanyň içerki ýagdaýy oňa gabat gelmezligi mümkin. Erbet wakanyň içerki ýagdaýy oňa gabat gelmezligi mümkin. Köp wagtlap garaşylan wakalar gelende bir zadyň ýetmeýändigini duýduk …</p>\n<p>Elbetde, daşarky waka bilen birleşmeli degişli içerki ýagdaý ýetmedi …</p>\n<p>Köplenç garaşylmadyk waka bize iň gowy pursatlary berýär …</p>"
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
const url = "src/content/docs/tk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
