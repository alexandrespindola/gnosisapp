import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Armastatud ego",
  "locale": "et",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Armastatud ego",
    "order": 11
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
    "set:html": "<p>Kuna ülemine ja alumine on ühe ja sama asja kaks osa, siis pole ülearune esitada järgmist järeldust: “ÜLEMINA, ALUMINA” on ühe ja sama süngelt ja mitmekesistunud EGO kaks aspekti.</p>\n<p>Nn “JUMALIK MINA” või “ÜLEMINA”, “ALTER EGO” või midagi sarnast on kindlasti “MINA ISE” trikk, enesepettuse vorm.</p>\n<p>Kui MINA tahab jätkata siin ja teispoolsuses, petab ta end jumaliku surematu MINA valekontseptsiooniga…</p>\n<p>Ühelgi meist pole tõelist, püsivat, muutumatut, igavest, kirjeldamatut jne “Mina”.</p>\n<p>Ühelgi meist pole tegelikult tõelist ja autentset Olemise Ühtsust; kahjuks meil pole isegi seaduslikku individuaalsust.</p>\n<p>Ego, kuigi see jätkub ka pärast hauda, ​​on siiski alguse ja lõpuga.</p>\n<p>Ego, MINA, pole kunagi midagi individuaalset, ühtset, terviklikku. Ilmselt on MINA “MINAD”.</p>\n<p>Ida-Tiibetis nimetatakse “MINASID” “PSÜÜHILISTEKS AGREGATSIOONIDEKS” või lihtsalt “VÄÄRTUSTEKS”, olgu need siis positiivsed või negatiivsed.</p>\n<p>Kui me mõtleme igast “Mina” kui erinevast inimesest, võime rõhutatult väita järgmist: “Igas inimeses, kes maailmas elab, on palju inimesi.”</p>\n<p>Kahtlemata elab igaühes meist palju erinevaid inimesi, mõned paremad, teised halvemad…</p>\n<p>Igaüks neist Minadest, igaüks neist inimestest võitleb ülemvõimu eest, tahab olla eksklusiivne, kontrollib intellektuaalset aju või emotsionaalseid ja motoorseid keskusi, kui see on võimalik, samal ajal kui teine ​​selle välja tõrjub…</p>\n<p>Paljude Minade doktriini õpetasid Ida-Tiibetis tõelised Selgeltnägijad, autentsed Valgustunud…</p>\n<p>Igaüks meie psühholoogilistest puudustest on isikustatud ühes või teises Minas. Kuna meil on tuhandeid ja isegi miljoneid puudusi, elab meie sees ilmselt palju inimesi.</p>\n<p>Psühholoogilistes küsimustes oleme selgelt tõestanud, et paranoilised, egomaanid ja mütoomaanid ei loobuks mingil juhul kalli Ego kultusest.</p>\n<p>Kahtlemata vihkavad sellised inimesed surmavalt paljude “Minade” doktriini.</p>\n<p>Kui keegi tõesti tahab ennast tundma õppida, peab ta end ise jälgima ja püüdma tundma õppida erinevaid “Minasid”, mis on isiksuse sees.</p>\n<p>Kui mõni meie lugejatest ei saa ikka veel aru sellest paljude “Minade” doktriinist, on see tingitud ainult enesevaatluse puudumisest.</p>\n<p>Kui inimene harjutab sisemist enesevaatlust, avastab ta iseseisvalt palju inimesi, palju “Minasid”, kes elavad meie enda isiksuses.</p>\n<p>Need, kes eitavad paljude Minade doktriini, kes kummardavad Jumalikku MINAt, pole kahtlemata kunagi end tõsiselt jälgimas käinud. Rääkides seekord Sokratlikus stiilis, ütleme, et need inimesed mitte ainult ei tea, vaid ka ei tea, et nad ei tea.</p>\n<p>Kindlasti ei saaks me kunagi ennast tundma õppida ilma tõsise ja sügava enesevaatluseta.</p>\n<p>Niikaua kui ükskõik milline subjekt peab end Üheks, on selge, et igasugune sisemine muutus on midagi enamat kui võimatu.</p>"
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
const url = "src/content/docs/et/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
