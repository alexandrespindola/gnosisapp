import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Vita",
  "locale": "it",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. La Vita",
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
    "set:html": "<p>Nel terreno della vita pratica scopriamo sempre contrasti che sorprendono. Gente benestante con una magnifica residenza e molte amicizie, a volte soffre terribilmente… Umili proletari che lavorano con piccone e pala o persone della classe media, spesso vivono in completa felicità.</p>\n<p>Molti multimilionari soffrono di impotenza sessuale e ricche matrone piangono amaramente l’infedeltà del marito…</p>\n<p>I ricchi della terra sembrano avvoltoi in gabbie d’oro, in questi tempi non possono vivere senza “guardie del corpo”…</p>\n<p>Gli uomini di stato trascinano catene, non sono mai liberi, camminano ovunque circondati da gente armata fino ai denti…</p>\n<p>Studiamo questa situazione più attentamente. Abbiamo bisogno di sapere che cos’è la vita. Ognuno è libero di opinare come vuole…</p>\n<p>Dicano quel che dicano, certamente nessuno sa nulla, la vita risulta un problema che nessuno capisce…</p>\n<p>Quando le persone desiderano raccontarci gratuitamente la storia della loro vita, citano avvenimenti, nomi e cognomi, date, ecc., e provano soddisfazione nel fare i loro racconti…</p>\n<p>Quelle povere persone ignorano che i loro racconti sono incompleti perché eventi, nomi e date sono solo l’aspetto esterno del film, manca l’aspetto interno…</p>\n<p>È urgente conoscere gli “stati di coscienza”, a ogni evento corrisponde tale o tal altro stato d’animo.</p>\n<p>Gli stati sono interiori e gli eventi sono esteriori, gli avvenimenti esterni non sono tutto…</p>\n<p>Si intendano per stati interiori le buone o cattive disposizioni, le preoccupazioni, la depressione, la superstizione, il timore, il sospetto, la misericordia, l’auto-considerazione, la sovrastima di sé stessi; stati di sentirsi felice, stati di gioia, ecc., ecc., ecc.</p>\n<p>Incontestabilmente gli stati interiori possono corrispondere esattamente agli avvenimenti esteriori o essere originati da questi, o non avere alcuna relazione con gli stessi…</p>\n<p>In ogni caso stati ed eventi sono diversi. Non sempre i successi corrispondono esattamente a stati affini.</p>\n<p>Lo stato interiore di un evento piacevole potrebbe non corrispondere allo stesso. Lo stato interiore di un evento spiacevole potrebbe non corrispondere allo stesso. Avvenimenti attesi per molto tempo, quando sono arrivati abbiamo sentito che mancava qualcosa…</p>\n<p>Certamente mancava il corrispondente stato interiore che doveva combinarsi con l’avvenimento esteriore…</p>\n<p>Molte volte l’avvenimento che non ci si aspettava viene a essere quello che ci ha fornito i momenti migliori…</p>"
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
const url = "src/content/docs/it/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
