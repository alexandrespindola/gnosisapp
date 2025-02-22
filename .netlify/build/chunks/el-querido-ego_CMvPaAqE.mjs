import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ukochane Ego",
  "locale": "pl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Ukochane Ego",
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
    "set:html": "<p>Ponieważ wyższy i niższy to dwie sekcje tej samej rzeczy, warto sformułować następujący wniosek: “JA WYŻSZE, JA NIŻSZE” to dwa aspekty tego samego mrocznego i zpluralizowanego EGO.</p>\n<p>Tak zwane “JA BOSKIE” lub “JA WYŻSZE”, “ALTER EGO” lub coś w tym stylu, to z pewnością sztuczka “MNIE SAMEGO”, forma SAMOOSZUKIWANIA SIĘ.</p>\n<p>Kiedy JA chce kontynuować tutaj i w zaświatach, Samooszukuje się fałszywą koncepcją Boskiego Nieśmiertelnego JA…</p>\n<p>Żaden z nas nie ma prawdziwego, trwałego, niezmiennego, wiecznego, niewysłowionego “Ja” itp., itd., itd.</p>\n<p>Żaden z nas tak naprawdę nie ma prawdziwej i autentycznej Jedności Bycia; niestety nie posiadamy nawet prawowitej indywidualności.</p>\n<p>Ego, choć trwa po śmierci, ma jednak początek i koniec.</p>\n<p>Ego, JA, nigdy nie jest czymś indywidualnym, unitarnym, unitotalnym. Oczywiście JA to “JAŹNIE”.</p>\n<p>We wschodnim Tybecie “JAŹNIE” nazywane są “AGREGATAMI PSYCHICZNYMI” lub po prostu “Wartościami”, niezależnie od tego, czy te ostatnie są pozytywne, czy negatywne.</p>\n<p>Jeśli myślimy o każdym “Ja” jako o innej osobie, możemy z naciskiem stwierdzić: “Wewnątrz każdej osoby żyjącej na świecie istnieje wiele osób”.</p>\n<p>Niewątpliwie w każdym z nas żyje wiele różnych osób, jedne lepsze, inne gorsze…</p>\n<p>Każde z tych Jaźni, każda z tych osób walczy o supremację, chce być wyłączna, kontroluje mózg intelektualny lub centra emocjonalne i motoryczne, kiedy tylko może, podczas gdy inna ją wypiera…</p>\n<p>Doktryna wielu Jaźni była nauczana we wschodnim Tybecie przez prawdziwych Jasnowidzów, przez autentycznych Oświeconych…</p>\n<p>Każda z naszych wad psychologicznych jest uosobiona w takiej czy innej Jaźni. Ponieważ mamy tysiące, a nawet miliony wad, wyraźnie w naszym wnętrzu żyje wielu ludzi.</p>\n<p>W kwestiach psychologicznych byliśmy w stanie wyraźnie wykazać, że osoby paranoiczne, egolatrzy i mitomani za nic w świecie nie porzuciliby kultu ukochanego Ego.</p>\n<p>Niewątpliwie tacy ludzie śmiertelnie nienawidzą doktryny wielu “Jaźni”.</p>\n<p>Kiedy ktoś naprawdę chce poznać samego siebie, musi dokonać samoobserwacji i spróbować poznać różne “Jaźnie”, które znajdują się w osobowości.</p>\n<p>Jeśli któryś z naszych czytelników nadal nie rozumie tej doktryny wielu “Jaźni”, wynika to wyłącznie z braku praktyki w zakresie Samoobserwacji.</p>\n<p>W miarę jak praktykuje się Wewnętrzną Samoobserwację, odkrywa się samemu wiele osób, wiele “Jaźni”, które żyją w naszej własnej osobowości.</p>\n<p>Ci, którzy negują doktrynę wielu Jaźni, którzy czczą Boskie JA, niewątpliwie nigdy poważnie się nie Samoobserwowali. Mówiąc tym razem w stylu sokratycznym, powiemy, że ci ludzie nie tylko ignorują, ale także ignorują to, że ignorują.</p>\n<p>Z pewnością nigdy nie moglibyśmy poznać samych siebie bez poważnej i dogłębnej samoobserwacji.</p>\n<p>Dopóki jakikolwiek podmiot nadal uważa się za Jedynego, jest jasne, że jakakolwiek wewnętrzna zmiana będzie czymś więcej niż niemożliwym.</p>"
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
const url = "src/content/docs/pl/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
