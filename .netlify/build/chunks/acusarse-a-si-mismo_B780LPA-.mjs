import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Obtoževanje samega sebe",
  "locale": "sl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "5. Obtoževanje samega sebe",
    "order": 5
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
    "set:html": "<p>Bistvo, ki ga vsak od nas nosi v sebi, prihaja od zgoraj, iz nebes, z zvezd…</p>\n<p>Nedvomno čudovito Bistvo izvira iz note “LA” (Rimska cesta, galaksija, v kateri živimo).</p>\n<p>Dragoceno Bistvo gre skozi noto “SOL” (Sonce) in nato skozi noto “FA” (Planetarno območje) vstopi v ta svet in prodre v našo notranjost.</p>\n<p>Naši starši so ustvarili ustrezno telo za sprejem tega Bistva, ki prihaja z zvezd…</p>\n<p>Z intenzivnim delom na sebi in žrtvovanjem za svoje bližnje se bomo zmagoslavno vrnili v globoko naročje Uranije…</p>\n<p>V tem svetu živimo z nekim razlogom, za nekaj, zaradi posebnega dejavnika…</p>\n<p>Očitno je v nas veliko, kar moramo videti, preučiti in razumeti, če resnično hrepenimo vedeti nekaj o sebi, o svojem življenju…</p>\n<p>Tragična je usoda tistega, ki umre, ne da bi spoznal smisel svojega življenja…</p>\n<p>Vsak od nas mora sam odkriti smisel svojega življenja, tisto, kar ga drži ujetega v zaporu bolečine…</p>\n<p>Očitno je v vsakem od nas nekaj, kar nam greni življenje in proti čemur se moramo odločno boriti…</p>\n<p>Ni nujno, da nadaljujemo v nesreči, nujno je zmanjšati na kozmični prah tisto, kar nas dela tako šibke in nesrečne.</p>\n<p>Nič ne pomaga, da se ponašamo z nazivi, častmi, diplomami, denarjem, praznim subjektivnim racionalizmom, znanimi vrlinami itd. itd. itd.</p>\n<p>Nikoli ne smemo pozabiti, da iz nas hinavščina in neumna nečimrnost lažne osebnosti naredita okorne, puste, zaostale, reakcionarne ljudi, ki niso sposobni videti novega…</p>\n<p>Smrt ima veliko pomenov, tako pozitivnih kot negativnih.</p>\n<p>Razmislimo o tistem veličastnem opažanju “Velikega KABIRJA Jezusa Kristusa”. “Naj mrtvi pokopljejo svoje mrtve”. Mnogi ljudje so, čeprav živijo, dejansko mrtvi za vsako možno delo na sebi in s tem za vsako notranjo preobrazbo.</p>\n<p>So ljudje, zaprti med svojimi dogmami in prepričanji; ljudje, okameneli v spominih na mnoge preteklosti; posamezniki, polni starodavnih predsodkov; ljudje, sužnji tega, kaj bodo rekli drugi, grozljivo mlačni, brezbrižni, včasih “vedni”, prepričani, da so v resnici, ker so jim tako rekli itd. itd. itd.</p>\n<p>Nočejo razumeti, da je ta svet “Psihološka telovadnica”, s pomočjo katere bi bilo mogoče uničiti tisto skrivno grdoto, ki jo vsi nosimo v sebi…</p>\n<p>Če bi ti ubogi ljudje razumeli, v kakšnem obžalovanja vrednem stanju so, bi trepetali od groze…</p>\n<p>Vendar pa taki ljudje vedno mislijo o sebi najboljše; hvalijo se s svojimi vrlinami, se počutijo popolne, dobrotljive, uslužne, plemenite, dobrodelne, inteligentne, ki izpolnjujejo svoje dolžnosti itd.</p>\n<p>Praktično življenje kot šola je izjemno, vendar ga jemati kot cilj samo po sebi je očitno nesmiselno.</p>\n<p>Tisti, ki jemljejo življenje samo po sebi, takšno, kot se živi vsak dan, niso razumeli potrebe po delu na sebi, da bi dosegli “Radikalno preobrazbo”.</p>\n<p>Žalostno je, da ljudje živijo mehanično, nikoli niso slišali ničesar o notranjem delu…</p>\n<p>Sprememba je potrebna, vendar ljudje ne vedo, kako se spremeniti; zelo trpijo in niti ne vedo, zakaj trpijo…</p>\n<p>Imeti denar ni vse. Življenje mnogih bogatih ljudi je pogosto resnično tragično…</p>"
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
const url = "src/content/docs/sl/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
