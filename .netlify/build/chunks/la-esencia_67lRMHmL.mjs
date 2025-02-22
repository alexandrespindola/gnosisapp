import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Bistvo",
  "locale": "sl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Bistvo",
    "order": 4
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
    "set:html": "<p>Tisto, kar naredi vsakega novorojenega otroka lepega in ljubkega, je njegova Esenca; ta sama po sebi predstavlja njegovo pravo realnost…</p>\n<p>Normalna rast Esence pri vsakem bitju je seveda zelo majhna, začetna…</p>\n<p>Človeško telo raste in se razvija v skladu z biološkimi zakoni vrste, vendar so takšne možnosti same po sebi zelo omejene za Esenco…</p>\n<p>Nesporno lahko Esenca sama raste brez pomoči, v zelo majhni meri…</p>\n<p>Odkrito in brez ovinkarjenja bomo rekli, da je spontana in naravna rast Esence možna le v prvih treh, štirih in petih letih starosti, torej v prvi fazi življenja…</p>\n<p>Ljudje mislijo, da se rast in razvoj Esence vedno odvija neprekinjeno, v skladu z mehaniko evolucije, toda Univerzalni Gnosticizem jasno uči, da temu ni tako…</p>\n<p>Da bi Esenca bolj rasla, se mora zgoditi nekaj zelo posebnega, nekaj novega je treba storiti.</p>\n<p>Želim se poudarjeno sklicevati na delo na sebi. Razvoj Esence je mogoč samo na podlagi zavestnih prizadevanj in prostovoljnega trpljenja…</p>\n<p>Treba je razumeti, da se ta prizadevanja ne nanašajo na vprašanja poklica, bank, tesarstva, zidarstva, popravila železniških prog ali pisarniških zadev…</p>\n<p>To delo je za vsako osebo, ki je razvila osebnost; gre za nekaj psihološkega…</p>\n<p>Vsi vemo, da imamo v sebi tisto, čemur se reče EGO, JAZ, MOJE JAZ, SEBE…</p>\n<p>Žal je Esenca ujeta, zaprta med EGO in to je obžalovanja vredno.</p>\n<p>Raztopiti psihološki JAZ, razintegrirati njegove neželene elemente, je nujno, neizogibno, nepreložljivo… to je smisel dela na sebi.</p>\n<p>Nikoli ne bi mogli osvoboditi Esence, ne da bi predhodno razintegrirali psihološki JAZ…</p>\n<p>V Esenci je Religija, BUDHA, Modrost, delci bolečine našega Očeta, ki je v Nebesih, in vsi podatki, ki jih potrebujemo za INTIMNO SAMO-REALIZACIJO BITJA.</p>\n<p>Nihče ne bi mogel uničiti psihološkega JAZA, ne da bi predhodno odstranil nečloveške elemente, ki jih nosimo v sebi…</p>\n<p>Potrebujemo sežgati do pepela krutost teh časov: zavist, ki je žal postala skrivni vzvod delovanja; nevzdržno pohlepnost, ki je življenje naredila tako grenko: gnusno obrekovanje; obrekovanje, ki povzroča toliko tragedij; pijančevanje; nečista poželenje, ki tako smrdi; itd., itd., itd.</p>\n<p>Ko se vse te gnusobe spremenijo v kozmični prah, se bo Esenca poleg tega, da se bo emancipirala, rasla in se harmonično razvijala…</p>\n<p>Nesporno, ko psihološki JAZ umre, v nas zasije Esenca…</p>\n<p>Svobodna Esenca nam daje intimno lepoto; iz te lepote izvirajo popolna sreča in prava Ljubezen…</p>\n<p>Esenca ima številne občutke popolnosti in izjemne naravne moči…</p>\n<p>Ko “Umremo v Sebi”, ko raztopimo psihološki JAZ, uživamo dragocene občutke in moči Esence…</p>"
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
const url = "src/content/docs/sl/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
