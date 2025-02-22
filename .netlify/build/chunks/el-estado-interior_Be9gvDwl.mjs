import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Notranja država",
  "locale": "sl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Notranja država",
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
    "set:html": "<p>Pravilno združevanje notranjih stanj z zunanjimi dogodki pomeni živeti inteligentno …</p>\n<p>Vsak inteligentno doživet dogodek zahteva ustrezno specifično notranje stanje …</p>\n<p>Žal pa ljudje, ko pregledajo svoje življenje, mislijo, da ga sestavljajo izključno zunanji dogodki …</p>\n<p>Ubogi ljudje! Mislijo, da bi bilo njihovo življenje boljše, če se ne bi zgodil ta ali oni dogodek …</p>\n<p>Predpostavljajo, da jih je sreča obšla in da so zamudili priložnost, da bi bili srečni …</p>\n<p>Žalujejo za izgubljenim, jokajo za tem, kar so prezirali, stokajo ob spominu na stare spodrsljaje in nesreče …</p>\n<p>Ljudje se ne želijo zavedati, da vegetiranje ni življenje in da je sposobnost zavestnega obstoja odvisna izključno od kakovosti notranjih stanj Duše …</p>\n<p>Seveda ni pomembno, kako lepi so zunanji dogodki življenja, če v tistih trenutkih nismo v ustreznem notranjem stanju, se nam lahko najboljši dogodki zdijo monotoni, mučni ali preprosto dolgočasni …</p>\n<p>Nekdo z nestrpnostjo pričakuje poročno slavje, to je dogodek, vendar se lahko zgodi, da je v natančnem trenutku dogodka tako zaskrbljen, da v njem resnično ne uživa nobenega užitka in da vse to postane tako suhoparno in hladno kot protokol …</p>\n<p>Izkušnje so nas naučile, da vsi ljudje, ki se udeležijo banketa ali plesa, resnično ne uživajo …</p>\n<p>Nikoli ne manjka zdolgočasenec na najboljši zabavi in najbolj okusni kosi razveselijo nekatere, druge pa spravijo v jok …</p>\n<p>Zelo redki so ljudje, ki znajo zaupno združiti zunanji dogodek z ustreznim notranjim stanjem …</p>\n<p>Žalostno je, da ljudje ne znajo živeti zavestno: jokajo, ko bi se morali smejati, in se smejijo, ko bi morali jokati …</p>\n<p>Nadzor je drugačen: Modrec je lahko vesel, vendar nikoli poln norega besa; Žalosten, a nikoli obupan in potrt … miren sredi nasilja; abstinent v orgiji; čist med poželenjem itd.</p>\n<p>Melanholični in pesimistični ljudje o življenju mislijo najslabše in si odkrito ne želijo živeti …</p>\n<p>Vsak dan vidimo ljudi, ki niso samo nesrečni, ampak kar je še huje, grenijo življenje tudi drugim …</p>\n<p>Takšni ljudje se ne bi spremenili, tudi če bi vsak dan živeli od zabave do zabave; psihološko bolezen nosijo v sebi … taki ljudje imajo intimna stanja dokončno perverzna …</p>\n<p>Vendar se ti posamezniki sami označujejo za pravične, svetnike, krepostne, plemenite, uslužne, mučenike itd. itd. itd.</p>\n<p>To so ljudje, ki preveč mislijo nase; ljudje, ki imajo radi sami sebe …</p>\n<p>Posamezniki, ki se zelo smilijo sami sebi in vedno iščejo izhode, da bi se izognili lastnim odgovornostim …</p>\n<p>Takšni ljudje so navajeni na nižja čustva in je očitno, da iz tega razloga vsak dan ustvarjajo psihološke elemente, ki so podčloveški.</p>\n<p>Nesrečni dogodki, preobrati sreče, revščina, dolgovi, težave itd. so izključni za tiste ljudi, ki ne znajo živeti …</p>\n<p>Vsakdo si lahko ustvari bogato intelektualno kulturo, vendar je zelo malo ljudi, ki so se naučili živeti pravilno …</p>\n<p>Ko nekdo želi ločiti zunanje dogodke od notranjih stanj zavesti, konkretno dokazuje svojo nezmožnost dostojnega obstoja.</p>\n<p>Tisti, ki se naučijo zavestno združevati zunanje dogodke in notranja stanja, hodijo po poti uspeha …</p>"
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
const url = "src/content/docs/sl/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
