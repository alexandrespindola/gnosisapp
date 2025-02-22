import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Życie",
  "locale": "pl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Życie",
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
    "set:html": "<p>W dziedzinie życia praktycznego zawsze odkrywamy zadziwiające kontrasty. Bogaci ludzie z wspaniałymi rezydencjami i wieloma przyjaciółmi czasami cierpią okropnie. Skromni robotnicy fizyczni lub osoby z klasy średniej często żyją w pełnym szczęściu.</p>\n<p>Wielu multimilionerów cierpi na impotencję seksualną, a bogate matrony gorzko płaczą z powodu niewierności męża…</p>\n<p>Bogacze ziemi wydają się sępami w złotych klatkach, w dzisiejszych czasach nie mogą żyć bez “ochroniarzy”…</p>\n<p>Mężowie stanu noszą kajdany, nigdy nie są wolni, chodzą wszędzie otoczeni uzbrojonymi po zęby ludźmi…</p>\n<p>Przyjrzyjmy się tej sytuacji dokładniej. Musimy wiedzieć, czym jest życie. Każdy ma prawo wyrażać swoją opinię, jak chce…</p>\n<p>Cokolwiek by mówili, nikt nic nie wie na pewno, życie okazuje się problemem, którego nikt nie rozumie…</p>\n<p>Kiedy ludzie chcą nam opowiedzieć za darmo historię swojego życia, wymieniają wydarzenia, imiona i nazwiska, daty itp. i czują satysfakcję, opowiadając swoje historie…</p>\n<p>Ci biedni ludzie nie wiedzą, że ich relacje są niekompletne, ponieważ wydarzenia, imiona i daty to tylko zewnętrzny aspekt filmu, brakuje aspektu wewnętrznego…</p>\n<p>Pilnie trzeba poznać “stany świadomości”, każdemu wydarzeniu odpowiada taki czy inny stan emocjonalny.</p>\n<p>Stany są wewnętrzne, a wydarzenia zewnętrzne, wydarzenia zewnętrzne to nie wszystko…</p>\n<p>Przez stany wewnętrzne rozumie się dobre lub złe usposobienie, troski, depresję, przesądy, strach, podejrzenia, miłosierdzie, samouwielbienie, przecenianie siebie; stany poczucia szczęścia, stany radości, itp., itd., itd.</p>\n<p>Niewątpliwie stany wewnętrzne mogą dokładnie odpowiadać wydarzeniom zewnętrznym lub być przez nie wywoływane, albo nie mieć z nimi nic wspólnego…</p>\n<p>W każdym razie stany i wydarzenia są różne. Nie zawsze wydarzenia odpowiadają dokładnie pokrewnym stanom.</p>\n<p>Stan wewnętrzny przyjemnego wydarzenia może nie odpowiadać temu wydarzeniu. Stan wewnętrzny nieprzyjemnego wydarzenia może nie odpowiadać temu wydarzeniu. Na wydarzenia wyczekiwane przez długi czas, kiedy nadeszły, czuliśmy, że czegoś brakuje…</p>\n<p>Z pewnością brakowało odpowiedniego stanu wewnętrznego, który powinien był się połączyć z wydarzeniem zewnętrznym…</p>\n<p>Często wydarzenie, którego się nie spodziewano, okazuje się tym, które dało nam najlepsze chwile…</p>"
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
const url = "src/content/docs/pl/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
