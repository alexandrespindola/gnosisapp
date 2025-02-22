import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Zázračný rebrík",
  "locale": "sk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Zázračný rebrík",
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
    "set:html": "<p>Musíme túžiť po skutočnej zmene, dostať sa z tejto nudnej rutiny, z tohto čisto mechanického, únavného života…</p>\n<p>Čo musíme najprv úplne jasne pochopiť, je, že každý z nás, či už buržuj alebo proletár, zámožný alebo stredná trieda, bohatý alebo biedny, sa v skutočnosti nachádza na takej alebo onakej úrovni bytia…</p>\n<p>Úroveň bytia opilca je iná ako úroveň abstinenta a úroveň prostitútky sa veľmi líši od úrovne panny. To, čo hovoríme, je nevyvrátiteľné, nepopierateľné…</p>\n<p>Keď sa dostaneme do tejto časti našej kapitoly, nič nestratíme, ak si predstavíme rebrík, ktorý sa rozprestiera zdola nahor, vertikálne a s mnohými stupňami…</p>\n<p>Nesporne sa nachádzame na niektorom z týchto stupňov; na stupňoch nižšie budú ľudia horší ako my; na stupňoch vyššie budú ľudia lepší ako my…</p>\n<p>V tejto mimoriadnej Vertikále, v tomto nádhernom rebríku, je jasné, že môžeme nájsť všetky Úrovne Bytia… každý človek je iný a to nikto nemôže vyvrátiť…</p>\n<p>Nepochybne teraz nehovoríme o škaredých alebo pekných tvárach, ani nejde o otázku veku. Sú mladí a starí ľudia, starci, ktorí už umierajú, a novorodenci…</p>\n<p>Otázka času a rokov; to o narodení, raste, vývoji, sobáši, rozmnožovaní, starnutí a umieraní, je výlučné pre Horizontálu…</p>\n<p>V “Nádhernom rebríku”, vo Vertikále, pojem času neexistuje. Na stupňoch takéhoto rebríka môžeme nájsť iba “Úrovne Bytia”…</p>\n<p>Mechanická nádej ľudí je na nič; veria, že časom bude lepšie; tak si to mysleli naši starí rodičia a prastarí rodičia; fakty presne ukázali opak…</p>\n<p>“Úroveň Bytia” je to, na čom záleží a to je Vertikálne; nachádzame sa na jednom stupni, ale môžeme vystúpiť na iný stupeň…</p>\n<p>“Nádherný rebrík”, o ktorom hovoríme a ktorý sa týka rôznych “Úrovní Bytia”, určite nemá nič spoločné s lineárnym časom…</p>\n<p>Vyššia “Úroveň Bytia” je priamo nad nami z okamihu na okamih…</p>\n<p>Nie je v žiadnej vzdialenej horizontálnej budúcnosti, ale tu a teraz; v nás samých; vo Vertikále…</p>\n<p>Je zrejmé a každý to môže pochopiť, že dve línie – Horizontálna a Vertikálna – sa v danom okamihu stretávajú v našom psychologickom vnútri a tvoria Kríž…</p>\n<p>Osobnosť sa rozvíja a odvíja na Horizontálnej línii života. Rodí sa a zomiera v rámci svojho lineárneho času; je pominuteľná; pre osobnosť mŕtveho neexistuje žiadne zajtra; nie je to Bytie…</p>\n<p>Úrovne Bytia; samotné Bytie, nepatrí do času, nemá nič spoločné s Horizontálnou líniou; nachádza sa v nás samých. Teraz, vo Vertikále…</p>\n<p>Bolo by zjavne absurdné hľadať svoje vlastné Bytie mimo seba…</p>\n<p>Nie je na škodu stanoviť ako dôsledok nasledovné: Tituly, hodnosti, povýšenia atď., vo vonkajšom fyzickom svete, v žiadnom prípade nespôsobia autentické povýšenie, prehodnotenie Bytia, posun na vyšší stupeň v “Úrovniach Bytia”…</p>"
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
const url = "src/content/docs/sk/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
