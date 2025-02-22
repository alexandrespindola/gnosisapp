import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Elu",
  "locale": "et",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Elu",
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
    "set:html": "<p>Praktilise elu valdkonnas avastame alati kontraste, mis hämmastavad. Rikkad inimesed suurepärase elukoha ja paljude sõpradega kannatavad mõnikord kohutavalt. .. Lihtsad proletaarlased kirka ja labidaga või keskklassi inimesed elavad mõnikord täielikus õnnes.</p>\n<p>Paljud ülirokkad miljonärid kannatavad seksuaalse impotentsuse all ja rikkad matroonad nutavad kibedalt mehe truudusetust…</p>\n<p>Maa rikkad näivad olevat kullapuude vahel raisakotkad, praegusel ajal ei saa nad elada ilma “ihukaitsjateta”…</p>\n<p>Riigimehed kannavad ahelaid, nad pole kunagi vabad, nad liiguvad kõikjal, ümbritsetuna inimestest, kes on relvastatud hammastega…</p>\n<p>Uurime seda olukorda lähemalt. Me peame teadma, mis on elu. Igaüks on vaba arvama, mida tahab…</p>\n<p>Ükskõik, mida nad ka ei ütleks, keegi ei tea midagi kindlat, elu on probleem, millest keegi aru ei saa…</p>\n<p>Kui inimesed soovivad meile tasuta jutustada oma elulugu, tsiteerivad nad sündmusi, nimesid ja perekonnanimesid, kuupäevi jne ning tunnevad rahulolu oma lugude jutustamisel…</p>\n<p>Need vaesed inimesed ei tea, et nende lood on puudulikud, sest sündmused, nimed ja kuupäevad on vaid filmi välimine külg, puudub sisemine külg…</p>\n<p>On hädavajalik teada “teadvuse seisundeid”, igale sündmusele vastab see või teine meeleolu.</p>\n<p>Seisundid on sisemised ja sündmused on välised, välised sündmused ei ole kõik…</p>\n<p>Sisemiste seisundite all mõistetakse häid või halbu dispositsioone, muresid, depressiooni, ebausku, hirmu, kahtlust, halastust, enesehinnangut, enese ülehindamist; õnneliku olemise seisundeid, rõõmu seisundeid jne, jne, jne.</p>\n<p>Kahtlemata võivad sisemised seisundid täpselt vastata välistele sündmustele või olla nendest põhjustatud või mitte olla nendega üldse seotud…</p>\n<p>Igal juhul on seisundid ja sündmused erinevad. Sündmused ei vasta alati täpselt sarnastele seisunditele.</p>\n<p>Meeldiva sündmuse sisemine seisund ei pruugi sellega vastata. Ebameeldiva sündmuse sisemine seisund ei pruugi sellega vastata. Sündmused, mida on kaua oodatud, kui need tulid, tundsime, et midagi on puudu…</p>\n<p>Kindlasti oli puudu vastav sisemine seisund, mis oleks pidanud kombineeruma välise sündmusega…</p>\n<p>Paljudel kordadel on sündmus, mida ei oodatud, see, mis on meile kõige paremaid hetki pakkunud…</p>"
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
const url = "src/content/docs/et/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
