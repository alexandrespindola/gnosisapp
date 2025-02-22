import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ihmeelliset portaat",
  "locale": "fi",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Ihmeelliset portaat",
    "order": 2
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
    "set:html": "<p>Meidän on kaivattava todellista muutosta, päästävä eroon tästä tylsästä rutiinista, tästä puhtaasti mekanistisesta, ikävystyttävästä elämästä…</p>\n<p>Ensimmäiseksi meidän on ymmärrettävä täysin selvästi, että jokainen meistä, olipa porvari tai proletariaatti, varakas tai keskiluokkainen, rikas tai kurja, on todellakin tietyllä olemisen tasolla…</p>\n<p>Juopon olemisen taso on erilainen kuin absolutistin, ja prostituoidun hyvin erilainen kuin neidon. Tämä, mitä sanomme, on kiistatonta, lyömätöntä…</p>\n<p>Tultuamme tähän luvun kohtaan, emme menetä mitään kuvittelemalla portaita, jotka ulottuvat alhaalta ylös, pystysuunnassa ja lukemattomin askelmin…</p>\n<p>Kiistatta olemme jollain näistä askelmista; askelmia alempana on ihmisiä, jotka ovat huonompia kuin me; askelmia ylempänä on ihmisiä, jotka ovat parempia kuin me…</p>\n<p>Tässä poikkeuksellisessa pystysuunnassa, näissä ihmeellisissä portaissa, on selvää, että voimme löytää kaikki olemisen tasot… jokainen ihminen on erilainen, eikä kukaan voi kiistää sitä…</p>\n<p>Epäilemättä emme nyt puhu rumista tai kauniista kasvoista, eikä kyse ole iästäkään. On nuoria ja vanhoja, vanhuksia, jotka ovat jo kuolemassa, ja vastasyntyneitä lapsia…</p>\n<p>Aika ja vuodet; se, että synnytään, kasvetaan, kehitytään, mennään naimisiin, lisäännytään, vanhetaan ja kuollaan, on yksinomaan vaakasuuntaista…</p>\n<p>“Ihmeellisissä portaissa”, pystysuunnassa, ajan käsite ei päde. Tällaisen portaikon askelmilla voimme löytää vain “olemisen tasoja”…</p>\n<p>Ihmisten mekaaninen toivo ei auta mitään; he uskovat, että ajan myötä asiat paranevat; näin ajattelivat isovanhempamme ja isoisovanhempamme; tosiasiat ovat juuri osoittaneet päinvastaista…</p>\n<p>“Olemisen taso” on se, millä on merkitystä, ja se on pystysuuntaista; olemme yhdellä askelmalla, mutta voimme nousta toiselle askelmalle…</p>\n<p>“Ihmeellisillä portailla”, joista puhumme ja jotka viittaavat erilaisiin “olemisen tasoihin”, ei todellakaan ole mitään tekemistä lineaarisen ajan kanssa…</p>\n<p>Korkeampi “olemisen taso” on välittömästi yläpuolellamme hetki hetkeltä…</p>\n<p>Se ei ole missään kaukaisessa horisontaalisessa tulevaisuudessa, vaan tässä ja nyt; sisällämme; pystysuunnassa…</p>\n<p>On ilmeistä ja kuka tahansa voi ymmärtää, että kaksi viivaa – vaakasuora ja pystysuora – kohtaavat hetki hetkeltä psykologisessa sisimmässämme ja muodostavat ristin…</p>\n<p>Persoonallisuus kehittyy ja avautuu elämän vaakasuoralla linjalla. Se syntyy ja kuolee lineaarisessa ajassaan; se on katoava; kuolleen persoonallisuudella ei ole huomista; se ei ole olemus…</p>\n<p>Olemisen tasot; itse olemus, ei ole ajasta, sillä ei ole mitään tekemistä vaakasuoran linjan kanssa; se on sisällämme. Nyt, pystysuunnassa…</p>\n<p>Olisi ilmeisesti järjetöntä etsiä omaa olemustamme itsensä ulkopuolelta…</p>\n<p>Seuraavaa ei ole pahitteeksi todeta johtopäätöksenä: Tittelit, tutkinnot, ylennykset jne. fyysisessä ulkomaailmassa eivät millään tavalla aiheuttaisi aitoa ylentämistä, olemuksen uudelleenarviointia, siirtymistä ylemmälle askelmalle “olemisen tasoilla”…</p>"
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
const url = "src/content/docs/fi/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fi/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fi/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
