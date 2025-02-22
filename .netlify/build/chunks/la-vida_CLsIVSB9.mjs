import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Život",
  "locale": "cs",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Život",
    "order": 6
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
    "set:html": "<p>V praktickém životě vždy nacházíme kontrasty, které ohromují. Bohatí lidé s nádherným bydlištěm a mnoha přáteli někdy strašlivě trpí. .. Skromní dělníci s krumpáčem a lopatou nebo lidé ze střední třídy, ti často žijí ve štěstí.</p>\n<p>Mnoho multimiliardářů trpí sexuální impotencí a bohaté matrony hořce oplakávají nevěru manžela…</p>\n<p>Bohatí tohoto světa vypadají jako supi v zlatých klecích, v dnešní době nemohou žít bez “osobních strážců”…</p>\n<p>Státníci vláčí řetězy, nikdy nejsou svobodní, všude chodí obklopeni lidmi ozbrojenými až po zuby…</p>\n<p>Prozkoumejme tuto situaci podrobněji. Potřebujeme vědět, co je život. Každý má právo na svůj názor…</p>\n<p>Ať už říkají cokoliv, jistě nikdo nic neví, život je problém, kterému nikdo nerozumí…</p>\n<p>Když nám lidé chtějí zdarma vyprávět příběh svého života, uvádějí události, jména a příjmení, data atd., a cítí uspokojení, když své příběhy vyprávějí…</p>\n<p>Tito ubozí lidé nevědí, že jejich příběhy jsou neúplné, protože události, jména a data jsou jen vnější stránkou filmu, chybí vnitřní stránka…</p>\n<p>Je nutné znát “stavy vědomí”, ke každé události odpovídá ten či onen duševní stav.</p>\n<p>Stavy jsou vnitřní a události jsou vnější, vnější události nejsou všechno…</p>\n<p>Pod vnitřními stavy rozumějme dobré nebo špatné nálady, starosti, deprese, pověrčivost, strach, podezřívavost, milosrdenství, sebeúctu, přeceňování sebe sama; stavy štěstí, stavy radosti atd., atd., atd.</p>\n<p>Nepochybně se vnitřní stavy mohou přesně shodovat s vnějšími událostmi nebo být jimi způsobeny, nebo s nimi nemají žádný vztah…</p>\n<p>V každém případě jsou stavy a události odlišné. Ne vždy se události přesně shodují s příbuznými stavy.</p>\n<p>Vnitřní stav příjemné události nemusí odpovídat samotné události. Vnitřní stav nepříjemné události nemusí odpovídat samotné události. Na události, na které jsme dlouho čekali, jsme cítili, že něco chybí…</p>\n<p>Jistě chyběl odpovídající vnitřní stav, který se měl kombinovat s vnější událostí…</p>\n<p>Mnohdy se událost, která se nečekala, stane tou, která nám přinesla ty nejlepší chvíle…</p>"
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
const url = "src/content/docs/cs/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
