import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Život",
  "locale": "sk",
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
    "set:html": "<p>V oblasti praktického života vždy objavujeme kontrasty, ktoré ohromujú. Bohatí ľudia s nádhernými sídlami a mnohými priateľstvami niekedy strašne trpia. .. Skromní robotníci s krompáčom a lopatou alebo ľudia zo strednej triedy, zvyčajne žijú niekedy v úplnom šťastí.</p>\n<p>Mnohí multimilionári trpia sexuálnou impotenciou a bohaté matróny horko oplakávajú neveru manžela…</p>\n<p>Zdá sa, že boháči zeme sú supmi v zlatých klietkach, v týchto časoch nemôžu žiť bez “osobných strážcov”…</p>\n<p>Štátnici ťahajú reťaze, nikdy nie sú slobodní, chodia všade obklopení ľuďmi ozbrojenými až po zuby…</p>\n<p>Preskúmajme túto situáciu podrobnejšie. Potrebujeme vedieť, čo je to život. Každý má právo vyjadriť svoj názor, ako chce…</p>\n<p>Nech si hovorí kto chce, určite nikto nič nevie, život sa javí ako problém, ktorému nikto nerozumie…</p>\n<p>Keď nám ľudia chcú zadarmo porozprávať príbeh svojho života, uvádzajú udalosti, mená a priezviská, dátumy atď. a pociťujú uspokojenie, keď rozprávajú svoje príbehy…</p>\n<p>Títo úbohí ľudia si neuvedomujú, že ich príbehy sú neúplné, pretože udalosti, mená a dátumy sú len vonkajším aspektom filmu, chýba vnútorný aspekt…</p>\n<p>Je nevyhnutné poznať “stavy vedomia”, ku každej udalosti patrí ten alebo onen duševný stav.</p>\n<p>Stavy sú vnútorné a udalosti sú vonkajšie, vonkajšie udalosti nie sú všetko…</p>\n<p>Pod vnútornými stavmi rozumieme dobré alebo zlé nálady, starosti, depresie, poverčivosť, strach, podozrievavosť, milosrdenstvo, sebavedomie, preceňovanie seba samého; stavy cítiť sa šťastne, stavy radosti atď., atď., atď.</p>\n<p>Je nesporné, že vnútorné stavy môžu presne zodpovedať vonkajším udalostiam alebo byť nimi spôsobené, alebo s nimi nemusia mať žiadny vzťah…</p>\n<p>V každom prípade sú stavy a udalosti odlišné. Nie vždy udalosti presne zodpovedajú príbuzným stavom.</p>\n<p>Vnútorný stav príjemnej udalosti nemusí zodpovedať tej istej udalosti. Vnútorný stav nepríjemnej udalosti nemusí zodpovedať tej istej udalosti. Na udalosti, na ktoré sme dlho čakali, sme cítili, že niečo chýba…</p>\n<p>Určite chýbal zodpovedajúci vnútorný stav, ktorý sa mal skombinovať s vonkajšou udalosťou…</p>\n<p>Mnohokrát je udalosť, ktorú sme neočakávali, tou, ktorá nám priniesla najlepšie chvíle…</p>"
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
const url = "src/content/docs/sk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
