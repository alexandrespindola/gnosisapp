import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Esencija",
  "locale": "lt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Esencija",
    "order": 4
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
    "set:html": "<p>Tai, kas daro kiekvieną naujagimį gražų ir žavingą, yra jo Esmė; ji pati savaime yra jo tikroji realybė…</p>\n<p>Esmės normalus augimas kiekviename kūrinyje, be abejo, yra labai nedidelis, pradedantysis…</p>\n<p>Žmogaus kūnas auga ir vystosi pagal biologinius rūšies dėsnius, tačiau tokios galimybės pačios savaime yra labai ribotos Esmės atžvilgiu…</p>\n<p>Neginčijamai, Esmė gali augti savaime be jokios pagalbos tik labai mažu mastu…</p>\n<p>Atvirai ir be užuolankų pasakysime, kad spontaniškas ir natūralus Esmės augimas galimas tik pirmaisiais trejais, ketveriais ir penkeriais gyvenimo metais, tai yra pirmajame gyvenimo etape…</p>\n<p>Žmonės mano, kad Esmės augimas ir vystymasis visada vyksta nuolat, pagal evoliucijos mechaniką, tačiau Universalus Gnosticizmas aiškiai moko, kad taip nėra…</p>\n<p>Kad Esmė augtų daugiau, turi įvykti kažkas labai ypatingo, reikia atlikti kažką naujo.</p>\n<p>Noriu pabrėžtinai paminėti darbą su savimi. Esmės vystymasis įmanomas tik sąmoningo darbo ir savanoriško kentėjimo pagrindu…</p>\n<p>Būtina suprasti, kad šie darbai nesusiję su profesijos, bankų, dailidės, mūrininko, geležinkelio linijų tvarkymo ar biuro reikalais…</p>\n<p>Šis darbas skirtas kiekvienam žmogui, kuris išsiugdė asmenybę; tai yra kažkas psichologinio…</p>\n<p>Visi mes žinome, kad turime savyje tai, kas vadinama EGO, AŠ, MAN PAČIU, SAVIMI…</p>\n<p>Deja, Esmė yra įkalinta, įsukta į EGO, ir tai yra apgailėtina.</p>\n<p>Ištirpinti psichologinį AŠ, sunaikinti jo nepageidaujamus elementus, yra skubu, neatidėliotina, negalima atidėti… tokia yra darbo su savimi prasmė.</p>\n<p>Niekada negalėtume išlaisvinti Esmės, prieš tai nesunaikinę psichologinio AŠ…</p>\n<p>Esmėje yra Religija, BUDA, Išmintis, mūsų Tėvo, kuris yra Danguje, skausmo dalelės ir visi duomenys, kurių mums reikia, kad INTIMIAI SAVE REALIZUOTUME.</p>\n<p>Niekas negalėtų sunaikinti psichologinio AŠ, prieš tai nepašalinęs nežmoniškų elementų, kuriuos turime savyje…</p>\n<p>Turime paversti pelenais žiaurų šių laikų žiaurumą: pavydą, kuris, deja, tapo slaptu veiksmo varikliu; nepakeliamą godumą, kuris padarė gyvenimą tokį kartų: pasibjaurėtiną apkalbas; šmeižtą, kuris sukelia tiek tragedijų; girtavimą; purviną aistringumą, kuris taip bjauriai kvepia; ir t. t., ir t. t., ir t. t.</p>\n<p>Kai visi tie bjaurūs dalykai pavirsta kosminėmis dulkėmis, Esmė, be to, kad išsilaisvina, harmoningai augs ir vystysis…</p>\n<p>Neginčijamai, kai psichologinis AŠ miršta, mumyse suspindi Esmė…</p>\n<p>Laisva Esmė suteikia mums vidinio grožio; iš tokio grožio sklinda tobula laimė ir tikra Meilė…</p>\n<p>Esmė turi daugybę tobulumo jausmų ir nepaprastų natūralių galių…</p>\n<p>Kai “Mirštame Savyje”, kai ištirpiname psichologinį AŠ, mėgaujamės brangiais Esmės jausmais ir galiomis…</p>"
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
const url = "src/content/docs/lt/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
