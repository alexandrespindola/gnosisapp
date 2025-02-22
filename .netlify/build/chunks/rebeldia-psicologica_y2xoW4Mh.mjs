import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Psihološka Upornost",
  "locale": "sl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Psihološka Upornost",
    "order": 3
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
    "set:html": "<p>Ni odveč je opomniti naše bralce, da znotraj nas obstaja matematična točka …</p>\n<p>Nedvomno se takšna točka nikoli ne nahaja v preteklosti, niti v prihodnosti …</p>\n<p>Kdor želi odkriti to skrivnostno točko, jo mora iskati tukaj in zdaj, znotraj sebe, natančno v tem trenutku, ne sekundo prej, ne sekundo pozneje …</p>\n<p>Navpična in vodoravna palica svetega križa se srečata v tej točki …</p>\n<p>Torej se iz trenutka v trenutek znajdemo pred dvema potema: vodoravno in navpično …</p>\n<p>Očitno je, da je vodoravna zelo “pocukrana”, po njej hodijo “Janez in vsi ljudje”, “Viljem in vsi, ki pridejo”, “gospod Rajmund in ves svet” …</p>\n<p>Očitno je, da je navpična drugačna; je pot inteligentnih upornikov, pot revolucionarjev …</p>\n<p>Ko se človek spomni nase, ko dela na sebi, ko se ne istoveti z vsemi težavami in žalostmi življenja, v resnici hodi po navpični poti …</p>\n<p>Gotovo nikoli ni lahko odpraviti negativnih čustev; izgubiti vsakršno identifikacijo z našim lastnim življenjskim vlakom; težave vseh vrst, posli, dolgovi, plačilo računov, hipoteke, telefon, voda, elektrika, itd., itd., itd.</p>\n<p>Brezposelni, tisti, ki so iz tega ali onega razloga izgubili službo, delo, očitno trpijo zaradi pomanjkanja denarja in pozabiti na svoj primer, ne skrbeti, niti se ne identificirati s svojim lastnim problemom, je v resnici strašno težko.</p>\n<p>Tisti, ki trpijo, tisti, ki jočejo, tisti, ki so bili žrtve kakšne izdaje, slabega plačila v življenju, nehvaležnosti, obrekovanja ali kakšne prevare, v resnici pozabijo nase, na svoj resnični intimni Jaz, se popolnoma identificirajo s svojo moralno tragedijo …</p>\n<p>Delo na sebi je temeljna značilnost navpične poti. Nihče ne bi mogel hoditi po poti Velikega upora, če nikoli ne bi delal na sebi …</p>\n<p>Delo, o katerem govorimo, je psihološkega tipa; ukvarja se z določeno transformacijo trenutnega trenutka, v katerem se nahajamo. Moramo se naučiti živeti iz trenutka v trenutek …</p>\n<p>Na primer, oseba, ki je obupana zaradi kakšnega sentimentalnega, ekonomskega ali političnega problema, je očitno pozabila nase …</p>\n<p>Takšna oseba, če se za trenutek ustavi, če opazuje situacijo in se poskuša spomniti nase, nato pa si prizadeva razumeti smisel svoje drže …</p>\n<p>Če malo razmisli, če pomisli, da vse mine; da je življenje iluzorno, bežno in da smrt spremeni v pepel vse nečimrnosti sveta …</p>\n<p>Če razume, da njegov problem v bistvu ni nič drugega kot “goreča slama”, varljiv ogenj, ki kmalu ugasne, bo nenadoma z presenečenjem videl, da se je vse spremenilo …</p>\n<p>Transformacija mehaničnih reakcij je mogoča z logično konfrontacijo in intimno avto-refleksijo Biti …</p>\n<p>Očitno je, da se ljudje mehanično odzivajo na različne življenjske okoliščine …</p>\n<p>Ubogi ljudje! Ponavadi postanejo žrtve. Ko jim kdo laska, se nasmehnejo; ko jih ponižujejo, trpijo. Žalijo, če so žaljeni; ranijo, če so ranjeni; nikoli niso svobodni; njihovi bližnji imajo moč, da jih popeljejo od veselja do žalosti, od upanja do obupa.</p>\n<p>Vsaka oseba, ki hodi po vodoravni poti, je podobna glasbenemu instrumentu, na katerem vsak od njenih bližnjih igra, kar mu pade na pamet …</p>\n<p>Kdor se nauči transformirati mehanične odnose, v resnici vstopi na “navpično pot”.</p>\n<p>To predstavlja temeljito spremembo v “Ravni Biti”, izjemen rezultat “Psihološkega Upora”.</p>"
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
const url = "src/content/docs/sl/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
