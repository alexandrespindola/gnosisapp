import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Gyvenimas",
  "locale": "lt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Gyvenimas",
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
    "set:html": "<p>Praktinio gyvenimo srityje visada atrandame stulbinančius kontrastus. Turtuoliai su puikiais namais ir daugybe draugų kartais baisiai kenčia… Kuklūs kalnakasiai ar viduriniosios klasės žmonės kartais gyvena visiškai laimingai.</p>\n<p>Daugelis itin turtingų žmonių kenčia nuo seksualinės impotencijos, o turtingos damos karčiai verkia dėl vyro neištikimybės…</p>\n<p>Žemės turtingieji atrodo kaip grifai auksiniuose narvuose, šiais laikais jie negali gyventi be “asmeninių sargybinių”…</p>\n<p>Valstybininkai velka grandines, jie niekada nėra laisvi, jie visur vaikšto apsupti iki dantų ginkluotų žmonių…</p>\n<p>Panagrinėkime šią situaciją atidžiau. Turime žinoti, kas yra gyvenimas. Kiekvienas gali reikšti savo nuomonę, kaip nori…</p>\n<p>Kad ir ką sakytų, niekas nieko nežino, gyvenimas yra problema, kurios niekas nesupranta…</p>\n<p>Kai žmonės nori nemokamai papasakoti savo gyvenimo istoriją, jie mini įvykius, vardus ir pavardes, datas ir t. t., ir jaučia pasitenkinimą pasakodami savo istorijas…</p>\n<p>Tie vargšai žmonės nežino, kad jų pasakojimai yra neišsamūs, nes įvykiai, vardai ir datos tėra išorinis filmo aspektas, trūksta vidinio aspekto…</p>\n<p>Būtina žinoti “sąmonės būsenas”, kiekvienam įvykiui atitinka viena ar kita emocinė būsena.</p>\n<p>Būsenos yra vidinės, o įvykiai – išoriniai, išoriniai įvykiai nėra viskas…</p>\n<p>Vidinės būsenos suprantamos kaip geros ar blogos nuotaikos, rūpesčiai, depresija, prietaringumas, baimė, įtarumas, gailestingumas, savęs vertinimas, savęs pervertinimas; laimės būsenos, džiaugsmo būsenos ir t. t., ir t. t., ir t. t.</p>\n<p>Neginčijamai vidinės būsenos gali tiksliai atitikti išorinius įvykius arba būti jų sukeltos, arba neturėti jokio ryšio su jais…</p>\n<p>Bet kuriuo atveju būsenos ir įvykiai yra skirtingi. Ne visada įvykiai tiksliai atitinka giminingas būsenas.</p>\n<p>Vidinė malonaus įvykio būsena gali neatitikti jo. Vidinė nemalonaus įvykio būsena gali neatitikti jo. Ilgai lauktų įvykių, kai jie įvyko, jautėme, kad kažko trūksta…</p>\n<p>Tikrai trūko atitinkamos vidinės būsenos, kuri turėjo derėti su išoriniu įvykiu…</p>\n<p>Daug kartų netikėtas įvykis tampa tuo, kuris suteikė mums geriausių akimirkų…</p>"
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
const url = "src/content/docs/lt/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
