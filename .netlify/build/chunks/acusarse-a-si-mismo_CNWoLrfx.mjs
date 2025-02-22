import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Optužiti Sebe",
  "locale": "sr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "5. Optužiti Sebe",
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
    "set:html": "<p>Suština koju svako od nas nosi u sebi, dolazi odozgo, sa Neba, od zvezda…</p>\n<p>Nesumnjivo, predivna Suština potiče od note “LA” (Mlečni Put, galaksija u kojoj živimo).</p>\n<p>Dragocena Suština prolazi kroz notu “SOL” (Sunce) i zatim kroz notu “FA” (Planetarna Zona), ulazi u ovaj svet i prodire u našu sopstvenu unutrašnjost.</p>\n<p>Naši roditelji su stvorili telo prikladno za prijem ove Suštine koja dolazi od Zvezda…</p>\n<p>Intenzivno radeći na sebi i žrtvujući se za svoje bližnje, vratićemo se pobedonosno u duboko krilo Uranije…</p>\n<p>Mi živimo u ovom svetu s nekim razlogom, zbog nečega, zbog nekog posebnog faktora…</p>\n<p>Očigledno je da u nama ima mnogo toga što moramo videti, proučiti i razumeti, ako zaista čeznemo da saznamo nešto o sebi, o svom životu…</p>\n<p>Tragična je egzistencija onoga koji umre a da nije upoznao svrhu svog života…</p>\n<p>Svako od nas mora otkriti za sebe smisao svog života, ono što ga drži zarobljenog u zatvoru bola…</p>\n<p>Očigledno je da u svakom od nas postoji nešto što nam zagorčava život i protiv čega se moramo odlučno boriti…</p>\n<p>Nije neophodno da nastavimo u nesreći, neophodno je svesti na kosmičku prašinu ono što nas čini tako slabima i nesrećnima.</p>\n<p>Ništa ne vredi gorditi se titulama, počastima, diplomama, novcem, ispraznim subjektivnim racionalizmom, poznatim vrlinama, itd., itd., itd.</p>\n<p>Ne smemo nikada zaboraviti da licemerje i glupe taštine lažne ličnosti od nas čine ljude nespretne, ustajale, zaostale, reakcionarne, nesposobne da vide novo…</p>\n<p>Smrt ima mnogo značenja, kako pozitivnih, tako i negativnih.</p>\n<p>Razmotrimo onu veličanstvenu opservaciju “Velikog KABIRA Isusa Hrista”. “Neka mrtvi sahranjuju svoje mrtve”. Mnogi ljudi, iako žive, zapravo su mrtvi za svaki mogući rad na sebi i, shodno tome, za bilo kakvu intimnu transformaciju.</p>\n<p>To su ljudi zatvoreni u svoje dogme i verovanja; ljudi okamenjeni u sećanjima na mnoga juče; pojedinci puni nasleđenih predrasuda; ljudi robovi onoga što će drugi reći, užasno mlaki, ravnodušni, ponekad “sveznalice” uvereni da su u istini jer im je tako rečeno, itd., itd., itd.</p>\n<p>Ti ljudi ne žele da razumeju da je ovaj svet “Psihološka Gimnazija” pomoću koje bi bilo moguće uništiti onu tajnu ružnoću koju svi nosimo u sebi…</p>\n<p>Kad bi ti jadni ljudi shvatili u kakvom se žalosnom stanju nalaze, zadrhtali bi od užasa…</p>\n<p>Međutim, takvi ljudi uvek misle o sebi najbolje; hvale se svojim vrlinama, osećaju se savršeno, ljubazno, uslužno, plemenito, milosrdno, inteligentno, savesno u ispunjavanju svojih dužnosti, itd.</p>\n<p>Praktičan život kao škola je sjajan, ali uzeti ga kao svrhu samu po sebi, očigledno je apsurdno.</p>\n<p>Oni koji uzimaju život sam po sebi, onako kako se živi svakodnevno, nisu shvatili potrebu da rade na sebi kako bi postigli “Radikalnu Transformaciju”.</p>\n<p>Nažalost, ljudi žive mehanički, nikada nisu čuli ništa o unutrašnjem radu…</p>\n<p>Promena je neophodna, ali ljudi ne znaju kako da se promene; mnogo pate i ne znaju ni zašto pate…</p>\n<p>Imati novac nije sve. Život mnogih bogatih ljudi često je zaista tragičan…</p>"
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
const url = "src/content/docs/sr/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
