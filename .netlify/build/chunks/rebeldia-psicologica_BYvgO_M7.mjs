import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Psychologická rebelie",
  "locale": "cs",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Psychologická rebelie",
    "order": 3
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
    "set:html": "<p>Není od věci připomenout našim čtenářům, že uvnitř nás existuje matematický bod…</p>\n<p>Nepochybně se takový bod nikdy nenachází v minulosti, ani v budoucnosti…</p>\n<p>Kdo chce tento tajemný bod objevit, musí ho hledat tady a teď, uvnitř sebe sama, přesně v tomto okamžiku, ani o vteřinu dříve, ani o vteřinu později…</p>\n<p>Dvě ramena Svatého Kříže, vertikální a horizontální, se setkávají v tomto bodě…</p>\n<p>Nacházíme se tedy z okamžiku na okamžik před dvěma Cestami: Horizontální a Vertikální…</p>\n<p>Je zřejmé, že Horizontální je velmi “laciná”, kráčejí po ní “Václavové a všichni lidé”, “Vildové a každý, kdo přijde”, “Pepa a celý svět”…</p>\n<p>Je evidentní, že Vertikální je odlišná; je to cesta inteligentních rebelů, cesta Revolucionářů…</p>\n<p>Když si člověk vzpomene na sebe, když na sobě pracuje, když se neztotožňuje se všemi problémy a bolestmi života, ve skutečnosti jde po Vertikální Cestě…</p>\n<p>Zajisté nikdy není snadné eliminovat negativní emoce; ztratit veškerou identifikaci s vlastním stylem života; problémy všeho druhu, obchody, dluhy, splácení, hypotéky, telefon, voda, elektřina atd., atd., atd.</p>\n<p>Nezaměstnaní, ti, kteří z toho či onoho důvodu přišli o zaměstnání, o práci, evidentně trpí nedostatkem peněz a zapomenout na svůj případ, nestarat se, ani se neztotožňovat se svým vlastním problémem, je ve skutečnosti strašlivě obtížné.</p>\n<p>Ti, kteří trpí, kteří pláčou, ti, kteří se stali oběťmi nějaké zrady, špatné odplaty v životě, nevděčnosti, pomluvy nebo podvodu, opravdu zapomínají na sebe, na své skutečné vnitřní Já, zcela se ztotožňují se svou morální tragédií…</p>\n<p>Práce na sobě je základní charakteristikou Vertikální Cesty. Nikdo by nemohl kráčet po Cestě Velké Rebellie, pokud by nikdy nepracoval na sobě…</p>\n<p>Práce, o které hovoříme, je psychologického typu; zabývá se určitou transformací přítomného okamžiku, ve kterém se nacházíme. Potřebujeme se naučit žít z okamžiku na okamžik…</p>\n<p>Například, osoba, která je zoufalá z nějakého citového, ekonomického nebo politického problému, zjevně zapomněla na sebe…</p>\n<p>Taková osoba, pokud se na okamžik zastaví, pokud pozoruje situaci a snaží se vzpomenout si na sebe a pak se snaží pochopit smysl svého postoje…</p>\n<p>Pokud se trochu zamyslí, pokud pomyslí na to, že všechno pomíjí; že život je iluzorní, prchavý a že smrt redukuje na popel veškeré marnosti světa…</p>\n<p>Pokud pochopí, že jeho problém není v podstatě nic víc než “planoucí sláma”, bludička, která brzy zhasne, uvidí najednou s překvapením, že se všechno změnilo…</p>\n<p>Transformovat mechanické reakce je možné prostřednictvím logické konfrontace a Vnitřní Sebe-Reflexe Bytí…</p>\n<p>Je zřejmé, že lidé reagují mechanicky na různé okolnosti života…</p>\n<p>Ubozí lidé! Většinou se stávají oběťmi. Když jim někdo lichotí, usmívají se; když jsou ponižováni, trpí. Urážejí, pokud jsou uráženi; zraňují, pokud jsou zraněni; nikdy nejsou svobodní; jejich bližní mají moc je vést od radosti ke smutku, od naděje k zoufalství.</p>\n<p>Každá osoba z těch, které jdou po Horizontální Cestě, se podobá hudebnímu nástroji, kde každý z jejích bližních hraje, co se mu zlíbí…</p>\n<p>Kdo se naučí transformovat mechanické vztahy, ve skutečnosti se vydává po “Vertikální Cestě”.</p>\n<p>To představuje zásadní změnu v “Úrovni Bytí”, mimořádný výsledek “Psychologické Rebellie”.</p>"
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
const url = "src/content/docs/cs/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
