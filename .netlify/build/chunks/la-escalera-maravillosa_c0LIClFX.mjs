import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Scara Minunată",
  "locale": "ro",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Scara Minunată",
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
    "set:html": "<p>Trebuie să tânjim după o schimbare adevărată, să ieșim din această rutină plictisitoare, din această viață pur mecanicistă, obositoare…</p>\n<p>Ceea ce trebuie să înțelegem mai întâi cu claritate deplină este că fiecare dintre noi, fie burghez, fie proletar, înstărit sau din clasa de mijloc, bogat sau sărac, se află cu adevărat într-un anumit Nivel de A Fi…</p>\n<p>Nivelul de A Fi al bețivului este diferit de cel al abstinentului, iar cel al prostituatei foarte diferit de cel al fecioarei. Ceea ce spunem este irefutabil, de necombătut…</p>\n<p>Ajungând în această parte a capitolului nostru, nu pierdem nimic dacă ne imaginăm o scară care se extinde de jos în sus, vertical și cu foarte multe trepte…</p>\n<p>Fără îndoială, ne aflăm pe una dintre aceste trepte; trepte mai jos vor fi oameni mai răi decât noi; trepte mai sus se vor afla oameni mai buni decât noi…</p>\n<p>În această Verticală extraordinară, pe această scară minunată, este clar că putem găsi toate Nivelurile de A Fi… fiecare persoană este diferită și nimeni nu poate contesta asta…</p>\n<p>Indubitabil, nu vorbim acum despre fețe urâte sau frumoase și nici nu este vorba despre o chestiune de vârstă. Există oameni tineri și bătrâni, bătrâni care sunt pe moarte și copii nou-născuți…</p>\n<p>Chestiunea timpului și a anilor; asta cu a ne naște, a crește, a ne dezvolta, a ne căsători, a ne reproduce, a îmbătrâni și a muri, este exclusivă a Orizontalei…</p>\n<p>În “Scara Minunată”, în Verticală, conceptul de timp nu are loc. Pe treptele unei astfel de scări putem găsi doar “Niveluri de A Fi”…</p>\n<p>Speranța mecanică a oamenilor nu servește la nimic; cred că, cu timpul, lucrurile vor fi mai bune; așa credeau bunicii și străbunicii noștri; faptele, tocmai, au demonstrat contrariul…</p>\n<p>“Nivelul de A Fi” este ceea ce contează și asta este Vertical; ne aflăm pe o treaptă, dar putem urca pe o altă treaptă…</p>\n<p>“Scara Minunată” despre care vorbim și care se referă la diferitele “Niveluri de A Fi”, cu siguranță, nu are nimic de-a face cu timpul liniar…</p>\n<p>Un “Nivel de A Fi” mai înalt este imediat deasupra noastră, din clipă în clipă…</p>\n<p>Nu este într-un viitor orizontal îndepărtat, ci aici și acum; în noi înșine; în Verticală…</p>\n<p>Este ostensibil și oricine poate înțelege că cele două linii - Orizontală și Verticală - se întâlnesc din moment în moment în interiorul nostru Psihologic și formează o Cruce…</p>\n<p>Personalitatea se dezvoltă și se desfășoară pe linia Orizontală a Vieții. Se naște și moare în timpul ei liniar; este perisabilă; nu există niciun mâine pentru personalitatea mortului; nu este Ființa…</p>\n<p>Nivelurile Ființei; Ființa însăși, nu este a timpului, nu are nimic de-a face cu Linia Orizontală; se află în noi înșine. Acum, în Verticală…</p>\n<p>Ar fi manifest absurd să ne căutăm propria Ființă în afara noastră…</p>\n<p>Nu strică să stabilim ca corolar următoarele: Titluri, grade, avansări etc., în lumea fizică exterioară, nu ar genera în niciun caz o exaltare autentică, o reevaluare a Ființei, o trecere la o treaptă superioară în “Nivelurile Ființei”…</p>"
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
const url = "src/content/docs/ro/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
