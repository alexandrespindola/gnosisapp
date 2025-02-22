import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Evenimente personale",
  "locale": "ro",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Evenimente personale",
    "order": 9
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
    "set:html": "<p>Auto-observarea intimă și profundă a Sinelui devine imperativă atunci când vine vorba de descoperirea stărilor psihologice greșite.</p>\n<p>În mod incontestabil, stările interioare greșite pot fi corectate prin proceduri corecte.</p>\n<p>Deoarece viața interioară este magnetul care atrage evenimentele exterioare, avem nevoie cu o urgență maximă, de nelipsit, să eliminăm din psihicul nostru stările psihologice eronate.</p>\n<p>Corectarea stărilor psihologice greșite este indispensabilă atunci când se dorește modificarea fundamentală a naturii anumitor evenimente indezirabile.</p>\n<p>Schimbarea relației noastre cu anumite evenimente este posibilă dacă eliminăm din interiorul nostru anumite stări psihologice absurde.</p>\n<p>Situațiile exterioare distructive ar putea deveni inofensive și chiar constructive prin corectarea inteligentă a stărilor interioare eronate.</p>\n<p>Se poate schimba natura evenimentelor neplăcute care ni se întâmplă atunci când ne purificăm intim. Cel care nu corectează niciodată stările psihologice absurde, crezându-se foarte puternic, devine victima circumstanțelor.</p>\n<p>A face ordine în casa noastră interioară dezordonată este vital atunci când se dorește schimbarea cursului unei existențe nefericite.</p>\n<p>Oamenii se plâng de tot, suferă, plâng, protestează, ar vrea să-și schimbe viața, să iasă din nenorocirea în care se află, din păcate nu lucrează asupra lor înșiși.</p>\n<p>Oamenii nu vor să-și dea seama că viața interioară atrage circumstanțe exterioare și că, dacă acestea sunt dureroase, se datorează stărilor interioare absurde.</p>\n<p>Exteriorul este doar reflexia interiorului, cel care se schimbă interior generează o nouă ordine a lucrurilor.</p>\n<p>Evenimentele exterioare nu ar fi niciodată atât de importante precum modul de a reacționa la ele.</p>\n<p>Ați rămas sereni în fața celui care insultă? Ați primit cu plăcere manifestările neplăcute ale semenilor voștri?</p>\n<p>Cum ați reacționat la infidelitatea persoanei iubite? V-ați lăsat purtați de veninul geloziei? Ați ucis? Sunteți la închisoare?</p>\n<p>Spitalele, cimitirele sau panteoanele, închisorile sunt pline de sinceri greșiți care au reacționat în mod absurd la evenimentele exterioare.</p>\n<p>Cea mai bună armă pe care un om o poate folosi în viață este o stare psihologică corectă.</p>\n<p>Se pot dezarma fiare și demasca trădători prin stări interioare adecvate.</p>\n<p>Stările interioare greșite ne transformă în victime neajutorate ale perversității umane.</p>\n<p>Învățați să vă confruntați cu cele mai neplăcute evenimente ale vieții practice cu o atitudine interioară adecvată…</p>\n<p>Nu vă identificați cu niciun eveniment; amintiți-vă că totul trece; învățați să vedeți viața ca pe un film și veți primi beneficii…</p>\n<p>Nu uitați că evenimente fără nicio valoare ar putea să vă ducă la nenorocire dacă nu eliminați din psihicul vostru stările interioare greșite.</p>\n<p>Fiecare eveniment exterior are nevoie, în mod incontestabil, de biletul adecvat; adică, de starea psihologică precisă.</p>"
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
const url = "src/content/docs/ro/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
