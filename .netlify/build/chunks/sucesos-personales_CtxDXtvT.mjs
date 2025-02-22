import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Henkilökohtaiset tapahtumat",
  "locale": "fi",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Henkilökohtaiset tapahtumat",
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
    "set:html": "<p>Täydellinen, intiimi itsetarkkailu on ehdottoman tärkeää, kun pyritään tunnistamaan virheellisiä psykologisia tiloja.</p>\n<p>Sisäiset virhetilat voidaan kiistatta korjata oikeilla menetelmillä.</p>\n<p>Koska sisäinen elämä on magneetti, joka vetää puoleensa ulkoisia tapahtumia, meidän on äärimmäisen kiireellisesti ja viipymättä poistettava mielestämme virheelliset psykologiset tilat.</p>\n<p>Virheellisten psykologisten tilojen korjaaminen on välttämätöntä, jos halutaan muuttaa perusteellisesti tiettyjen epämiellyttävien tapahtumien luonnetta.</p>\n<p>Suhteemme tiettyihin tapahtumiin on mahdollista muuttaa, jos poistamme sisältämme tietyt absurdeja psykologisia tiloja.</p>\n<p>Ulkoiset, tuhoisat tilanteet voitaisiin muuttaa vaarattomiksi ja jopa rakentaviksi sisäisten, virheellisten tilojen älykkäällä korjaamisella.</p>\n<p>Ihminen voi muuttaa kohtaamiensa epämiellyttävien tapahtumien luonnetta, kun hän puhdistuu sisimmässään. Se, joka ei koskaan korjaa absurdeja psykologisia tiloja uskoen olevansa hyvin vahva, joutuu olosuhteiden uhriksi.</p>\n<p>Järjestyksen luominen epäjärjestyksessä olevaan sisäiseen kotiimme on elintärkeää, kun halutaan muuttaa onnettoman elämän kulkua.</p>\n<p>Ihmiset valittavat kaikesta, kärsivät, itkevät, protestoivat, haluaisivat muuttaa elämäänsä, päästä pois siitä onnettomuudesta, jossa he ovat, mutta valitettavasti he eivät työskentele itsensä kanssa.</p>\n<p>Ihmiset eivät halua ymmärtää, että sisäinen elämä vetää puoleensa ulkoisia olosuhteita ja että jos ne ovat tuskallisia, se johtuu absurdeista sisäisistä tiloista.</p>\n<p>Ulkoinen on vain sisäisen heijastus, se joka muuttuu sisäisesti, synnyttää uuden järjestyksen.</p>\n<p>Ulkoiset tapahtumat eivät koskaan olisi yhtä tärkeitä kuin tapa, jolla niihin reagoidaan.</p>\n<p>Pysyitkö tyynenä loukkaajan edessä? Otoksitko mielihyvin vastaan lähimmäistesi epämiellyttäviä ilmauksia?</p>\n<p>Miten reagoit rakastetun uskottomuuteen? Annoitko mustasukkaisuuden myrkyn viedä? Tapoitko? Oletko vankilassa?</p>\n<p>Sairaalat, hautausmaat, vankilat ovat täynnä vilpittömiä, erehtyneitä ihmisiä, jotka reagoivat absurdilla tavalla ulkoisiin tapahtumiin.</p>\n<p>Paras ase, jonka ihminen voi käyttää elämässä, on oikea psykologinen tila.</p>\n<p>Ihminen voi riisua aseista petoja ja paljastaa pettureita sopivien sisäisten tilojen avulla.</p>\n<p>Virheelliset sisäiset tilat tekevät meistä ihmisten pahuuden puolustuskyvyttömiä uhreja.</p>\n<p>Opetelkaa kohtaamaan elämän epämiellyttävimmät tapahtumat käytännössä sopivalla sisäisellä asenteella…</p>\n<p>Älkää samastuko mihinkään tapahtumaan; muistakaa, että kaikki menee ohi; opetelkaa näkemään elämä elokuvana ja saatte hyötyjä…</p>\n<p>Älkää unohtako, että arvottomat tapahtumat voivat johtaa teidät onnettomuuteen, jos ette poista mielestänne virheellisiä sisäisiä tiloja.</p>\n<p>Jokainen ulkoinen tapahtuma tarvitsee kiistatta sopivan lipun; eli tarkan psykologisen tilan.</p>"
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
const url = "src/content/docs/fi/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fi/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fi/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
