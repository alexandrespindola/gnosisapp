import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Pogrešna Stanja",
  "locale": "hr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "8. Pogrešna Stanja",
    "order": 8
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
    "set:html": "<p>Neupitno je da je u rigoroznom promatranju Sebe uvijek prijeko potrebno i neizbježno napraviti potpunu logičku razliku u odnosu na vanjske događaje praktičnog života i intimna stanja svijesti.</p>\n<p>Hitno moramo znati gdje se nalazimo u danom trenutku, kako u odnosu na intimno stanje svijesti, tako i u odnosu na specifičnu prirodu vanjskog događaja koji nam se događa.</p>\n<p>Život je sam po sebi niz događaja koji se obrađuju kroz vrijeme i prostor…</p>\n<p>Netko je rekao: “Život je lanac, od muka koje čovjek nosi zapet u Duši…”</p>\n<p>Svaki je slobodan misliti kako želi; ja vjerujem da efemernim užicima trenutka koji bježi uvijek slijede razočaranje i gorčina…</p>\n<p>Svaki događaj ima svoj poseban karakteristični okus, a i unutarnja su stanja različite vrste; ovo je nepobitno, neosporivo…</p>\n<p>Svakako se unutarnji rad na sebi naglašeno odnosi na različita psihološka stanja svijesti…</p>\n<p>Nitko ne bi mogao zanijekati da u sebi nosimo mnoge pogreške i da postoje pogrešna stanja…</p>\n<p>Ako se stvarno želimo promijeniti, hitno i neizbježno moramo radikalno promijeniti ta pogrešna stanja svijesti…</p>\n<p>Apsolutna promjena pogrešnih stanja uzrokuje potpune transformacije na području praktičnog života…</p>\n<p>Kada čovjek ozbiljno radi na pogrešnim stanjima, očito ga neugodni događaji u životu više ne mogu tako lako povrijediti…</p>\n<p>Govorimo nešto što je moguće razumjeti samo doživljavanjem, stvarnim osjećanjem na samom terenu činjenica…</p>\n<p>Tko ne radi na sebi, uvijek je žrtva okolnosti; poput jadnog cjepanice među olujnim vodama oceana…</p>\n<p>Događaji se neprestano mijenjaju u svojim višestrukim kombinacijama; dolaze jedan za drugim u valovima, to su utjecaji…</p>\n<p>Svakako postoje dobri i loši događaji; neki događaji će biti bolji ili gori od drugih…</p>\n<p>Mijenjati određene događaje je moguće; mijenjati rezultate, mijenjati situacije itd., svakako je u broju mogućnosti.</p>\n<p>Međutim, postoje činjenična stanja koja se zaista ne mogu promijeniti; u ovim potonjima treba ih svjesno prihvatiti, iako su neke vrlo opasne, pa čak i bolne…</p>\n<p>Neupitno je da bol nestaje kada se ne poistovjećujemo s problemom koji se pojavio…</p>\n<p>Život moramo smatrati uzastopnim nizom unutarnjih stanja; autentična priča našeg osobnog života sastoji se od svih tih stanja…</p>\n<p>Pregledavajući cjelokupno vlastito postojanje, možemo sami izravno provjeriti da su mnoge neugodne situacije bile moguće zahvaljujući pogrešnim unutarnjim stanjima…</p>\n<p>Aleksandar Veliki, iako je po prirodi uvijek bio umjeren, prepustio se iz ponosa ekscesima koji su mu prouzročili smrt…</p>\n<p>Franjo I. umro je od prljavog i odvratnog preljuba, kojeg povijest još uvijek dobro pamti…</p>\n<p>Kada je Marata ubila opaka časna sestra, umirao je od oholosti i zavisti, vjerovao je da je apsolutno pravedan…</p>\n<p>Dame iz Parka jelena neupitno su potpuno uništile vitalnost strašnog bludnika po imenu Luj XV.</p>\n<p>Mnogi ljudi umiru od ambicije, bijesa ili ljubomore, to psiholozi vrlo dobro znaju…</p>\n<p>Čim se naša volja neopozivo potvrdi u apsurdnoj tendenciji, postajemo kandidati za panteon ili groblje…</p>\n<p>Othello je zbog ljubomore postao ubojica, a zatvor je pun iskrenih pogrešnika…</p>"
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
const url = "src/content/docs/hr/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
