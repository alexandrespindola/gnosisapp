import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ibyabaye ku muntu ku giti cye",
  "locale": "rw",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Ibyabaye ku muntu ku giti cye",
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
    "set:html": "<p>Kwitonda ubwitonzi byimbitse, ntibishobora kwirindwa iyo bigeze ku kuvumbura imiterere mibi ya psychologiya.</p>\n<p>Nta gushidikanya, imiterere yo mu mutima mibi ishobora gukosorwa hifashishijwe uburyo bukwiye.</p>\n<p>Kubera ko ubuzima bwo mu mutima ari umuyoboro ukurura ibintu byo hanze, dukeneye byihutirwa cyane, gukuraho imiterere mibi ya psychologiya mu mitekerereze yacu.</p>\n<p>Gukosora imiterere mibi ya psychologiya ni ngombwa iyo ushaka guhindura cyane imiterere y’ibintu bimwe na bimwe bidashimishije.</p>\n<p>Guhindura umubano wacu n’ibintu bimwe na bimwe, birashoboka niba dukuye mu mitima yacu imiterere ya psychologiya idafite ishingiro.</p>\n<p>Imimerere yo hanze yangiza, ishobora guhinduka itagira ingaruka ndetse ikaba myiza binyuze mu gukosora ubwenge imiterere mibi yo mu mutima.</p>\n<p>Umuntu arashobora guhindura imiterere y’ibintu bibi bitubaho, iyo yiyunguruye imbere. Udakora imiterere ya psychologiya idafite ishingiro, yiyita umunyembaraga cyane ahinduka umuhigo w’imimerere.</p>\n<p>Gushyira gahunda mu nzu yacu y’imbere idafite gahunda ni ingenzi, iyo ushaka guhindura inzira y’ubuzima bubi.</p>\n<p>Abantu baritotomba ku bintu byose, barababara, bararira, bararwa, bifuza guhindura ubuzima, kuva mu byago barimo, bibabaje ntibakora kuri bo ubwabo.</p>\n<p>Abantu ntibashaka kumenya ko ubuzima bwo mu mutima bukunda gukurura imimerere yo hanze kandi niba ibi bibabaza biterwa n’imiterere mibi yo mu mutima.</p>\n<p>Ibyo hanze ni ishusho y’ibyo imbere, uhinduka imbere atangiza gahunda nshya y’ibintu.</p>\n<p>Ibyabaye hanze ntibyaba bifite agaciro nk’uburyo bwo kwitwara imbere yabyo.</p>\n<p>Wagumye utuje imbere y’umutukisha? Wakiriye neza ibintu bitagushimishije by’abantu mwese?</p>\n<p>Wakiriye ute ubucahe bw’uwo ukunda? Waretse uburozi bw’ishyari bugutwara? Warishe? Uri muri gereza?</p>\n<p>Ibitaro, imva cyangwa imva, amagereza, byuzuye abanyabyaha bafite ukuri bakitwara mu buryo budafite ishingiro imbere y’ibintu byo hanze.</p>\n<p>Intwaro nziza umuntu yakoresha mu buzima, ni imiterere ya psychologiya ikwiye.</p>\n<p>Umuntu arashobora kwambura inyamaswa no guhishura abahemu, hifashishijwe imiterere y’imbere ikwiye.</p>\n<p>Imiterere y’imbere mibi ituma tuba abahohoterwa batagira kirengera b’ubugome bw’abantu.</p>\n<p>Iga guhangana n’ibintu bibi cyane by’ubuzima busanzwe ufite imyifatire y’imbere ikwiye…</p>\n<p>Ntugatangazwe n’ikintu na kimwe; ibuka ko byose bishira; iga kureba ubuzima nka filime kandi uzakira inyungu…</p>\n<p>Ntiwibagirwe ko ibintu bidafite agaciro bishobora kukujyana mu byago, niba utakuyeho imiterere mibi yo mu mutima wawe.</p>\n<p>Ikintu cyose cyo hanze gikeneye, nta gushidikanya itike ikwiye; ni ukuvuga, imiterere ya psychologiya nyayo.</p>"
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
const url = "src/content/docs/rw/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/rw/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/rw/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
