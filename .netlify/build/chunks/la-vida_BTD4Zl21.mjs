import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Elämä",
  "locale": "fi",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Elämä",
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
    "set:html": "<p>Käytännön elämässä kohtaamme aina hämmästyttäviä vastakohtia. Hyvätuloiset ihmiset, joilla on upea asunto ja paljon ystäviä, kärsivät joskus suunnattomasti. .. Nöyriä duunareita tai keskiluokkaisia ihmisiä elää usein täydellisessä onnessa.</p>\n<p>Monet superrikkaat kärsivät seksuaalisesta kyvyttömyydestä ja rikkaat rouvat itkevät katkerasti aviomiehensä uskottomuutta…</p>\n<p>Maan rikkaat näyttävät korppikotkilta kultahäkeissään, eivätkä nykyään voi elää ilman “henkivartijoita”…</p>\n<p>Valtiomiehet raahaavat ketjuja, eivät ole koskaan vapaita, vaan kulkevat kaikkialla hampailla varustettujen ihmisten ympäröiminä…</p>\n<p>Tutkitaan tätä tilannetta tarkemmin. Meidän on tiedettävä, mitä elämä on. Jokainen saa olla vapaa ilmaisemaan mielipiteensä…</p>\n<p>Vaikka mitä sanottaisiin, kukaan ei todellisuudessa tiedä mitään, elämä on ongelma, jota kukaan ei ymmärrä…</p>\n<p>Kun ihmiset haluavat kertoa meille ilmaiseksi elämäntarinansa, he mainitsevat tapahtumia, nimiä ja sukunimiä, päivämääriä jne., ja tuntevat tyydytystä kertoessaan tarinoitaan…</p>\n<p>Nämä kurjat ihmiset eivät tiedä, että heidän tarinansa ovat puutteellisia, koska tapahtumat, nimet ja päivämäärät ovat vain elokuvan ulkoinen puoli, sisäinen puoli puuttuu…</p>\n<p>On kiireellistä tuntea “tajunnantiloja”, jokaista tapahtumaa vastaa jokin mielentila.</p>\n<p>Tilat ovat sisäisiä ja tapahtumat ulkoisia, ulkoiset tapahtumat eivät ole kaikki…</p>\n<p>Sisäisillä tiloilla tarkoitetaan hyviä tai huonoja taipumuksia, huolia, masennusta, taikauskoa, pelkoa, epäilystä, armeliaisuutta, itsensä huomioon ottamista, itsensä yliarviointia; tiloja, joissa tuntee itsensä onnelliseksi, ilon tiloja jne. jne. jne.</p>\n<p>Epäilemättä sisäiset tilat voivat vastata täsmälleen ulkoisia tapahtumia tai johtua niistä, tai niillä ei ole mitään tekemistä niiden kanssa…</p>\n<p>Joka tapauksessa tilat ja tapahtumat ovat erilaisia. Tapahtumat eivät aina vastaa täsmälleen vastaavia tiloja.</p>\n<p>Miellyttävän tapahtuman sisäinen tila ei välttämättä vastaa sitä. Epämiellyttävän tapahtuman sisäinen tila ei välttämättä vastaa sitä. Pitkään odotetut tapahtumat, kun ne tulivat, tuntuivat siltä, että jotain puuttui…</p>\n<p>Toki puuttui vastaava sisäinen tila, joka piti yhdistää ulkoiseen tapahtumaan…</p>\n<p>Monesti odottamaton tapahtuma osoittautuu sellaiseksi, joka on tarjonnut meille parhaat hetket…</p>"
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
const url = "src/content/docs/fi/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fi/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fi/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
