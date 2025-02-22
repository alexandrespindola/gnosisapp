import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Čudovito stopnišče",
  "locale": "sl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Čudovito stopnišče",
    "order": 2
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
    "set:html": "<p>Moramo hrepeneti po resnični spremembi, izstopiti iz te dolgočasne rutine, iz tega zgolj mehaničnega, nadležnega življenja …</p>\n<p>Prvo, kar moramo popolnoma jasno razumeti, je, da je vsak od nas, pa naj bo to meščan ali proletarec, premožen ali srednji sloj, bogat ali ubog, resnično na takšni ali drugačni ravni Bivanja …</p>\n<p>Raven Bivanja pijanca je drugačna od tiste abstinenta, in raven prostitutke se zelo razlikuje od ravni device. To, kar govorimo, je neizpodbitno, nesporno …</p>\n<p>Ko pridemo do tega dela našega poglavja, nič ne izgubimo, če si predstavljamo stopnišče, ki se razteza od spodaj navzgor, navpično in z zelo veliko stopnicami …</p>\n<p>Nedvomno se na eni od teh stopnic nahajamo mi; stopnice nižje bodo ljudje, slabši od nas; stopnice višje bodo ljudje, boljši od nas …</p>\n<p>Na tej izjemni Vertikali, na tem čudovitem stopnišču, je jasno, da lahko najdemo vse Ravni Bivanja … vsak človek je drugačen in tega nihče ne more izpodbijati …</p>\n<p>Nedvomno zdaj ne govorimo o grdih ali lepih obrazih, niti ne gre za vprašanje starosti. Obstajajo mladi in stari ljudje, starci, ki so že na umoru, in novorojenčki …</p>\n<p>Vprašanje časa in let; to o rojevanju, rasti, razvoju, poroki, razmnoževanju, staranju in umiranju, je izključno za Horizontalo …</p>\n<p>Na “Čudovitem Stopnišču”, na Vertikali, koncept časa ne obstaja. Na stopnicah take lestvice lahko najdemo samo “Ravni Bivanja” …</p>\n<p>Mehansko upanje ljudi ne služi ničemur; verjamejo, da bo s časom bolje; tako so mislili naši stari starši in pra stari starši; dejstva so ravno dokazala nasprotno …</p>\n<p>“Raven Bivanja” je tisto, kar šteje, in to je Vertikala; smo na eni stopnici, vendar se lahko povzpnemo na drugo stopnico …</p>\n<p>“Čudovito Stopnišče”, o katerem govorimo in se nanaša na različne “Ravni Bivanja”, zagotovo nima nič opraviti z linearnim časom …</p>\n<p>Višja “Raven Bivanja” je neposredno nad nami iz trenutka v trenutek …</p>\n<p>Ni v nobeni oddaljeni horizontalni prihodnosti, ampak tukaj in zdaj; znotraj nas samih; v Vertikali …</p>\n<p>Očitno je in vsakdo lahko razume, da se obe črti – Horizontala in Vertikala – srečujeta iz trenutka v trenutek v naši psihološki notranjosti in tvorita Križ …</p>\n<p>Osebnost se razvija in razpleta na Horizontalni črti Življenja. Rodi se in umre znotraj svojega linearnega časa; je minljiva; za osebnost mrtvega ne obstaja jutri; ni Bivanje …</p>\n<p>Ravni Bivanja; samo Bivanje, ni od časa, nima nič opraviti s Horizontalno Črto; se nahaja znotraj nas samih. Zdaj, v Vertikali …</p>\n<p>Očitno bi bilo absurdno iskati svoje lastno Bivanje zunaj sebe …</p>\n<p>Ni odveč postaviti naslednjega kot posledico: Nazivi, diplome, napredovanja itd., v zunanjem fizičnem svetu, nikakor ne bi povzročili pristnega poveličevanja, prevrednotenja Bivanja, prehoda na višjo stopnico na “Ravneh Bivanja” …</p>"
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
const url = "src/content/docs/sl/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
