import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Olemus",
  "locale": "et",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Olemus",
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
    "set:html": "<p>Iga vastsündinu juures on ilus ja armas tema Olemus; see on iseenesest tema tõeline reaalsus…</p>\n<p>Olemuse normaalne kasv igas olendis on kindlasti väga vähene, algeline…</p>\n<p>Inimkeha kasvab ja areneb vastavalt liigi bioloogilistele seadustele, kuid need võimalused on Olemuse jaoks iseenesest väga piiratud…</p>\n<p>Vaieldamatult saab Olemus kasvada iseseisvalt, ilma abita, vaid väga vähesel määral…</p>\n<p>Avameelselt ja otsekoheselt öeldes on Olemuse spontaanne ja loomulik kasv võimalik ainult esimese kolme, nelja ja viie eluaasta jooksul, see tähendab elu esimeses etapis…</p>\n<p>Inimesed arvavad, et Olemuse kasv ja areng toimub alati pidevalt, vastavalt evolutsiooni mehhaanikale, kuid Universaalne Gnostitsism õpetab selgelt, et see ei ole nii…</p>\n<p>Selleks, et Olemus rohkem kasvaks, peab midagi väga erilist juhtuma, midagi uut tuleb teha.</p>\n<p>Soovin rõhutatult viidata tööle iseendaga. Olemuse areng on võimalik ainult teadliku töö ja vabatahtliku kannatuse alusel…</p>\n<p>On vaja mõista, et need tööd ei ole seotud elukutse, pankade, puutöö, müüriladumise, raudteeliinide korrastamise või kontoritööga…</p>\n<p>See töö on mõeldud igale inimesele, kes on arendanud isiksuse; see on midagi psühholoogilist…</p>\n<p>Me kõik teame, et meil on endas midagi, mida nimetatakse EGOKS, MINAKS, ISEENDAKS…</p>\n<p>Kahjuks on Olemus pudelis, vangistatud EGOsse ja see on kahetsusväärne.</p>\n<p>Psühholoogilise MINA lahustamine, selle soovimatute elementide desintegreerimine on kiireloomuline, vältimatu, edasilükkamatu… selline on töö iseendaga mõte.</p>\n<p>Me ei saaks kunagi Olemust vabastada ilma eelnevalt desintegreerimata psühholoogilist MINAt…</p>\n<p>Olemuses on Religioon, BUDDHA, Tarkus, meie Isa valupartiklid, kes on taevas, ja kõik andmed, mida me vajame OMA OLEMUSLIKU ISE-REALISEERIMISEKS.</p>\n<p>Keegi ei saa hävitada psühholoogilist MINAt ilma eelnevalt kõrvaldamata ebainimlikke elemente, mida me endas kanname…</p>\n<p>Me peame tuhaks muutma selle aja kohutava julmuse: kadeduse, mis kahjuks on saanud tegevuse salajaseks allikaks; väljakannatamatu ahnuse, mis on elu nii kibedaks muutnud: vastiku laimamise; laimu, mis põhjustab nii palju tragöödiaid; joomise; räpase iha, mis haiseb nii halvasti; jne, jne, jne.</p>\n<p>Kui kõik need jäledused muutuvad kosmiliseks tolmuks, siis Olemus lisaks emantsipeerumisele kasvab ja areneb harmooniliselt…</p>\n<p>Vaieldamatult, kui psühholoogiline MINA on surnud, särab meis Olemus…</p>\n<p>Vaba Olemus annab meile sisemise ilu; sellisest ilust tulenevad täiuslik õnn ja tõeline Armastus…</p>\n<p>Olemusel on mitmeid täiuslikkuse meeli ja erakordseid loomulikke jõude…</p>\n<p>Kui me “Sureme Endas”, kui me lahustame psühholoogilise MINA, naudime Olemuse väärtuslikke meeli ja jõude…</p>"
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
const url = "src/content/docs/et/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
