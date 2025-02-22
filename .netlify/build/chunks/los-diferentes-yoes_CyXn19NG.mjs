import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "De olika jagen",
  "locale": "sv",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. De olika jagen",
    "order": 10
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
    "set:html": "<p>Det rationella däggdjuret, felaktigt kallat människa, har egentligen ingen definierad individualitet.</p>\n<p>Utan tvekan är denna brist på psykologisk enhet hos humanoiden orsaken till så många svårigheter och besvikelser.</p>\n<p>Den fysiska kroppen är en komplett enhet och fungerar som en organisk helhet, om den inte är sjuk.</p>\n<p>Däremot är humanoidens inre liv inte på något sätt en psykologisk enhet.</p>\n<p>Det allvarligaste av allt, trots vad de olika pseudo-esoteriska och pseudo-ockulta skolorna säger, är avsaknaden av psykologisk organisation i varje individs innersta väsen.</p>\n<p>Under sådana förhållanden existerar verkligen inget harmoniskt arbete som en helhet i människors inre liv.</p>\n<p>Humanoiden är, med avseende på sitt inre tillstånd, en psykologisk mångfald, en summa av “jag”.</p>\n<p>De upplysta ignoranterna i denna mörka tid dyrkar “jag”, förgudar det, placerar det på altare, kallar det “ALTER EGO”, “HÖGRE JAG”, “GUDOMLIGT JAG” etc., etc., etc.</p>\n<p>“De lärda” i denna mörka tid vi lever i vill inte inse att “Högre Jag” eller “Lägre Jag” är två sektioner av samma pluraliserade Ego…</p>\n<p>Humanoiden har sannerligen inget “Permanent Jag” utan en mängd olika “jag” som är infra-mänskliga och absurda.</p>\n<p>Det stackars intellektuella djuret, felaktigt kallat människa, liknar ett hus i oordning där det istället för en herre finns många tjänare som alltid vill bestämma och göra som de behagar…</p>\n<p>Det största misstaget inom billig Pseudo-Esoterism och Pseudo-Ockultism är att anta att andra besitter eller att man har ett “Permanent och Oföränderligt Jag” utan början och utan slut…</p>\n<p>Om de som tänker så vaknade till medvetande, även om det bara var för ett ögonblick, skulle de tydligt kunna bevisa för sig själva att den rationella humanoiden aldrig är densamma särskilt länge…</p>\n<p>Det intellektuella däggdjuret förändras kontinuerligt ur psykologisk synvinkel…</p>\n<p>Att tro att om en person heter Luis är han alltid Luis, är något som liknar ett mycket dåligt skämt…</p>\n<p>Denna individ som kallas Luis har inom sig andra “jag”, andra egon, som uttrycker sig genom hans personlighet vid olika tidpunkter och även om Luis inte gillar girighet, gillar ett annat “jag” i honom - låt oss kalla honom Pepe - girighet och så vidare…</p>\n<p>Ingen person är densamma kontinuerligt, det krävs verkligen inte mycket visdom för att inse de otaliga förändringarna och motsägelserna hos varje individ…</p>\n<p>Att anta att någon har ett “Permanent och Oföränderligt Jag” är naturligtvis en kränkning mot nästan och mot sig själv…</p>\n<p>Inom varje person bor många personer, många “jag”, detta kan verifieras av vilken vaken, medveten person som helst själv och direkt…</p>"
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
const url = "src/content/docs/sv/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
