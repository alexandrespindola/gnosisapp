import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Erilaiset Minät",
  "locale": "fi",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Erilaiset Minät",
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
    "set:html": "<p>Väärin nimitetty ihminen, tuo järjellinen nisäkäs, ei todellakaan omaa määriteltyä yksilöllisyyttä.</p>\n<p>Epäilemättä tämä psykologisen yhtenäisyyden puute humanoidissa on syynä niin moniin vaikeuksiin ja katkeruuksiin.</p>\n<p>Fyysinen keho on täydellinen yksikkö ja toimii orgaanisena kokonaisuutena, ellei se ole sairas.</p>\n<p>Humanoidin sisäinen elämä ei kuitenkaan ole missään tapauksessa psykologinen kokonaisuus.</p>\n<p>Kaikkein vakavin asia tässä, huolimatta siitä, mitä erilaiset pseudo-esoteeriset ja pseudo-okkultistiset koulukunnat sanovat, on psykologisen organisaation puuttuminen jokaisen yksilön syvimmässä olemuksessa.</p>\n<p>Tietysti tällaisissa olosuhteissa ihmisten sisäisessä elämässä ei ole harmonista työtä kokonaisuutena.</p>\n<p>Humanoidi on sisäisen tilansa suhteen psykologinen moninaisuus, “minöjen” summa.</p>\n<p>Tämän synkän aikakauden valistuneet tietämättömät palvovat “MINÄÄ”, jumaloivat sitä, asettavat sen alttareille ja kutsuvat sitä “ALTER EGOKSI”, “KORKEAMMAKSI MINÄKSI”, “JUMALAISEKSI MINÄKSI” jne. jne. jne.</p>\n<p>Tämän pimeän aikakauden “viisastelijat” eivät halua tajuta, että “Korkeampi Minä” tai “Alempi Minä” ovat kaksi osaa samasta monikko-egosta…</p>\n<p>Humanoidilla ei todellakaan ole “PYSYVÄÄ MINÄÄ”, vaan joukko erilaisia epäinhimillisiä ja absurdeja “minöjä”.</p>\n<p>Huono älyllinen eläin, väärin nimitetty ihminen, on kuin epäsiisti talo, jossa yhden isännän sijasta on monia palvelijoita, jotka haluavat aina komentaa ja tehdä mitä lystäävät…</p>\n<p>Halvan pseudo-esoterismin ja pseudo-okkultismin suurin virhe on olettaa, että toisilla on tai että itsellä on “PYSYVÄ JA MUUTTUMATON MINÄ”, jolla ei ole alkua eikä loppua…</p>\n<p>Jos ne, jotka näin ajattelevat, heräisivät edes hetkeksi tietoisuuteen, he voisivat selvästi todeta itse, että järjellinen humanoidi ei ole koskaan sama kovin pitkään…</p>\n<p>Älyllinen nisäkäs muuttuu psykologisesta näkökulmasta jatkuvasti…</p>\n<p>Ajatus, että jos henkilöä kutsutaan Luisiksi, hän on aina Luis, on kuin erittäin huono vitsi…</p>\n<p>Tuossa henkilössä, jota kutsutaan Luisiksi, on itsessään muita “minöjä”, muita egoja, jotka ilmaisevat itseään hänen persoonallisuutensa kautta eri hetkinä, ja vaikka Luis ei pidä ahneudesta, toinen “minä” hänessä - kutsutaan häntä Pepeksi - pitää ahneudesta ja niin edelleen…</p>\n<p>Kukaan ei ole jatkuvasti sama, todellakaan ei tarvitse olla kovin viisas tajutakseen täysin jokaisen henkilön lukemattomat muutokset ja ristiriidat…</p>\n<p>Olettaminen, että jollakin on “PYSYVÄ JA MUUTTUMATON MINÄ”, on tietysti väärinkäyttöä lähimmäistä ja itseään kohtaan…</p>\n<p>Jokaisen ihmisen sisällä asuu monia ihmisiä, monia “minöjä”, kuka tahansa hereillä oleva, tietoinen ihminen voi tarkistaa tämän itse ja suoraan…</p>"
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
const url = "src/content/docs/fi/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fi/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fi/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
