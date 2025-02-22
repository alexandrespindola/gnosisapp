import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Različni Jazovi",
  "locale": "sl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Različni Jazovi",
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
    "set:html": "<p>Racionalni sesalec, napačno imenovan človek, v resnici nima definirane individualnosti.</p>\n<p>Nedvomno je ta pomanjkanje psihološke enotnosti pri Humanoidu vzrok za toliko težav in grenkosti.</p>\n<p>Fizično telo je popolna enota in deluje kot organska celota, razen če je bolno.</p>\n<p>Vendar notranje življenje Humanoida nikakor ni psihološka enota.</p>\n<p>Najhujše od vsega, kljub temu, kar govorijo različne šole psevdo-ezoteričnega in psevdo-okultističnega tipa, je odsotnost psihološke organiziranosti v intimnem ozadju vsakega posameznika.</p>\n<p>Vsekakor v takšnih pogojih ni harmoničnega dela kot celote v notranjem življenju ljudi.</p>\n<p>Humanoid je glede svojega notranjega stanja psihološka množica, skupek “Jazov”.</p>\n<p>Neuki razsvetljenci tega temačnega obdobja častijo “JAZ”, ga poveličujejo, postavljajo na oltarje, ga imenujejo “ALTER EGO”, “VIŠJI JAZ”, “BOŽANSKI JAZ” itd., itd., itd.</p>\n<p>“Pametnjakoviči” te črne dobe, v kateri živimo, nočejo spoznati, da sta “Višji Jaz” ali “Nižji Jaz” dva dela istega pluraliziranega Ega…</p>\n<p>Humanoid zagotovo nima “TRAJNEGA JAZA”, ampak množico različnih infrahumanih in absurdnih “Jazov”.</p>\n<p>Uboga intelektualna žival, napačno imenovana človek, je podobna hiši v neredu, kjer namesto gospodarja obstaja veliko služabnikov, ki vedno želijo ukazovati in delati, kar jim pade na pamet…</p>\n<p>Največja napaka poceni psevdo-ezoterike in psevdo-okultizma je domneva, da drugi posedujejo ali da se ima “TRAJNI in NESPREMENLJIVI JAZ” brez začetka in brez konca…</p>\n<p>Če bi se tisti, ki tako mislijo, prebudili v zavest, čeprav za trenutek, bi lahko sami jasno dokazali, da Humanoid racionalni nikoli ni enak dlje časa…</p>\n<p>Intelektualni sesalec se s psihološkega vidika nenehno spreminja…</p>\n<p>Misliti, da če se oseba imenuje Luis, je vedno Luis, je nekaj takega kot šala zelo slabega okusa…</p>\n<p>Ta subjekt, ki se imenuje Luis, ima v sebi druge “Jaze”, druge Ege, ki se izražajo skozi njegovo osebnost v različnih trenutkih in čeprav Luisu pohlep ni všeč, je drugemu “Jazu” v njem - recimo mu Pepe - pohlep všeč in tako naprej…</p>\n<p>Nobena oseba ni ista na kontinuiran način, v resnici ni treba biti zelo moder, da bi se zavedali neštetih sprememb in protislovij vsakega subjekta…</p>\n<p>Domnevati, da ima nekdo “TRAJNI in NESPREMENLJIVI JAZ”, je seveda enako zlorabi do bližnjega in do sebe…</p>\n<p>Znotraj vsake osebe živi veliko ljudi, veliko “Jazov”, to lahko preveri sama in neposredno vsaka prebujena, zavestna oseba…</p>"
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
const url = "src/content/docs/sl/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
