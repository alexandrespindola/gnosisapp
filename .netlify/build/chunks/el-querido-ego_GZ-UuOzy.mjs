import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Milované Ego",
  "locale": "sk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Milované Ego",
    "order": 11
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
    "set:html": "<p>Keďže horná a dolná časť sú dve časti tej istej veci, nie je na škodu uviesť nasledujúci dôsledok: „JA HORNÉ, JA DOLNÉ“ sú dva aspekty toho istého temného a pluralizovaného EGA.</p>\n<p>Takzvané „BOŽSKÉ JA“ alebo „VYŠŠIE JA“, „ALTER EGO“ alebo niečo podobné, je určite trik „MÔJHO JA“, forma SEBAKLAMU.</p>\n<p>Keď JA chce pokračovať tu i v onom svete, SEBAKLAME sa falošnou predstavou Božského Nesmrteľného JA…</p>\n<p>Nikto z nás nemá skutočné, trvalé, nemenné, večné, nevysloviteľné atď. „Ja“.</p>\n<p>Nikto z nás v skutočnosti nemá skutočnú a autentickú Jednotu Bytia; žiaľ, nemáme ani legitímnu individualitu.</p>\n<p>Ego, hoci pokračuje aj za hrob, má však svoj začiatok a koniec.</p>\n<p>Ego, JA, nikdy nie je niečo individuálne, jednotné, celistvé. Je zrejmé, že JA je „JÁ“.</p>\n<p>Vo východnom Tibete sa „JÁ“ nazývajú „PSYCHICKÉ AGREGÁTY“ alebo jednoducho „Hodnoty“, či už sú tieto posledné pozitívne alebo negatívne.</p>\n<p>Ak o každom „Ja“ uvažujeme ako o inej osobe, môžeme dôrazne tvrdiť nasledovné: „V každej osobe, ktorá žije na svete, existuje mnoho osôb“.</p>\n<p>Je nesporné, že v každom z nás žije veľmi veľa rôznych ľudí, niektorí lepší, iní horší…</p>\n<p>Každé z týchto Ja, každý z týchto ľudí bojuje o nadvládu, chce byť exkluzívny, ovláda intelektuálny mozog alebo emocionálne a motorické centrá kedykoľvek môže, zatiaľ čo iný ho vytláča…</p>\n<p>Doktrínu mnohých Já učili vo východnom Tibete skutoční Jasnovidci, autentickí Osvietenci…</p>\n<p>Každý z našich psychologických nedostatkov je stelesnený v tom či onom Ja. Keďže máme tisíce a až milióny nedostatkov, žije zjavne v našom vnútri veľa ľudí.</p>\n<p>V psychologických otázkach sme jasne preukázali, že paranoidné, egocentrické a klamárske subjekty by sa za nič na svete nevzdali kultu drahého Ega.</p>\n<p>Je nesporné, že takíto ľudia smrteľne nenávidia doktrínu mnohých „Já“.</p>\n<p>Keď sa chce človek skutočne spoznať, musí sa sebapozorovať a pokúsiť sa spoznať rôzne „Ja“, ktoré sú uväznené v osobnosti.</p>\n<p>Ak niektorý z našich čitateľov ešte stále nerozumie tejto doktríne mnohých „Já“, je to výlučne kvôli nedostatku praxe v oblasti Sebapozorovania.</p>\n<p>Keď človek praktizuje Vnútorné Sebapozorovanie, sám pre seba objavuje veľa ľudí, veľa „Já“, ktorí žijú v našej vlastnej osobnosti.</p>\n<p>Tí, ktorí popierajú doktrínu mnohých Já, ktorí uctievajú Božské JA, sa nepochybne nikdy vážne Sebapozorovali. Ak hovoríme tentoraz v Sokratovskom štýle, povieme, že títo ľudia nielenže nevedia, ale nevedia ani to, že nevedia.</p>\n<p>Iste, nikdy by sme sa nemohli spoznať bez seriózneho a hlbokého sebapozorovania.</p>\n<p>Pokiaľ sa akýkoľvek subjekt považuje za Jedného, ​​je jasné, že akákoľvek vnútorná zmena bude viac ako nemožná.</p>"
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
const url = "src/content/docs/sk/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
