import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "A szeretett Én",
  "locale": "hu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. A szeretett Én",
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
    "set:html": "<p>Mivel a felső és az alsó ugyanannak a dolognak a két szekciója, nem árt leszögezni a következő következtetést: “FELSŐBB ÉN, ALSÓBB ÉN” ugyanannak a sötét és pluralizált EGÓ-nak a két aspektusa.</p>\n<p>Az úgynevezett “ISTENI ÉN” vagy “FELSŐBB ÉN”, “ALTER EGÓ” vagy valami hasonló, valójában egy “MAGAM”-féle trükközés, az ÖNCSALÁS egyik formája.</p>\n<p>Amikor az ÉN itt és a túlvilágon is folytatni akarja, becsapja magát egy Isteni Halhatatlan ÉN hamis fogalmával…</p>\n<p>Egyikünknek sincs igazi, állandó, változatlan, örök, kimondhatatlan stb. “Énje”.</p>\n<p>Egyikünknek sincs valójában igazi és hiteles Lényegysége; sajnos még jogos egyéniséggel sem rendelkezünk.</p>\n<p>Az Egó, bár a síron túl is folytatódik, mégis van kezdete és vége.</p>\n<p>Az Egó, az ÉN, soha nem valami egyéni, egységes, egészes. Nyilvánvaló, hogy az ÉN “ÉNEK”.</p>\n<p>Kelet-Tibetben az “ÉNEK”-et “PSZICHÉS ÖSSZETEVŐK”-nek vagy egyszerűen “Értékek”-nek nevezik, legyenek ezek pozitívak vagy negatívak.</p>\n<p>Ha minden “Én”-re külön személyként gondolunk, nyomatékosan állíthatjuk a következőt: “A világon élő minden emberben sok ember létezik”.</p>\n<p>Kétségtelen, hogy mindannyiunkban rengeteg különböző ember él, némelyik jobb, némelyik rosszabb…</p>\n<p>Ezek az Ének, ezek a személyek mindegyike a felsőbbségért küzd, exkluzív akar lenni, irányítja az intellektuális agyat vagy az érzelmi és motoros központokat, amikor csak teheti, míg egy másik el nem mozdítja…</p>\n<p>A sok Én tanát a Kelet-Tibetben az igazi tisztánlátók, az autentikus megvilágosodottak tanították…</p>\n<p>Minden pszichológiai hibánk egy-egy Énben testesül meg. Mivel több ezer, sőt millió hibánk van, nyilvánvalóan sok ember él bennünk.</p>\n<p>Pszichológiai kérdésekben világosan bebizonyítottuk, hogy a paranoid, egomán és mitomán alanyok semmiért sem hagynák el a szeretett Egó kultuszát.</p>\n<p>Kétségtelen, hogy az ilyen emberek halálosan gyűlölik a sok “Én” tanát.</p>\n<p>Amikor valaki igazán meg akarja ismerni önmagát, meg kell figyelnie magát, és meg kell próbálnia megismerni a különböző “Éneket”, amelyek a személyiségben vannak.</p>\n<p>Ha valamelyik olvasónk még mindig nem érti ezt a sok “Én” tanát, az kizárólag az Önmegfigyelés terén való gyakorlat hiányának köszönhető.</p>\n<p>Ahogy az ember gyakorolja a Belső Önmegfigyelést, maga is felfedezi a sok embert, a sok “Ént”, amelyek a saját személyiségünkben élnek.</p>\n<p>Akik tagadják a sok Én tanát, akik egy Isteni Ént imádnak, kétségtelenül soha nem figyelték meg magukat komolyan. Ezúttal szókratészi stílusban azt mondjuk, hogy ezek az emberek nemcsak tudatlanok, hanem azt is figyelmen kívül hagyják, hogy tudatlanok.</p>\n<p>Bizonyosan soha nem ismerhetnénk meg önmagunkat komoly és mély önmegfigyelés nélkül.</p>\n<p>Amíg egy alany bárki is Egynek tartja magát, nyilvánvaló, hogy minden belső változás több mint lehetetlen lesz.</p>"
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
const url = "src/content/docs/hu/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
