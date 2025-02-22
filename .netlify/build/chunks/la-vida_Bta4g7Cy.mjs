import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Bizitza",
  "locale": "eu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Bizitza",
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
    "set:html": "<p>Bizitza praktikoaren eremuan harrigarriak diren kontrasteak aurkitzen ditugu beti. Egoera ekonomiko onean dauden eta bizileku bikaina eta adiskide asko dituzten pertsonak, batzuetan izugarri sufritzen dute… Pikotxa eta palaz lan egiten duten proletario apalak edo erdi mailako jendea, batzuetan zoriontasun osoan bizi ohi dira.</p>\n<p>Artximezenario asko sexu-inpotentziaz sufritzen dute eta aberats matronak senarraren infidelitatea gogorki negarrez.</p>\n<p>Lurreko aberatsak urrezko kaiolen artean saiak dirudite, garai hauetan ezin dira “gorputz-zaindaririk” gabe bizi…</p>\n<p>Estatu-gizonek kateak arrastatzen dituzte, inoiz ez daude aske, edonon ibiltzen dira hortzetaraino armatutako jendez inguratuta…</p>\n<p>Azter dezagun egoera hau arretaz. Bizitza zer den jakin behar dugu. Bakoitza aske da nahi duen bezala iritzia emateko…</p>\n<p>Esan dezatela esaten dutena, inork ez daki ezer ziur, bizitza inork ulertzen ez duen problema bat da…</p>\n<p>Jendeak bere bizitzaren historia dohainik kontatu nahi digunean, gertakariak, izen-abizenak, datak, etab. aipatzen dituzte, eta pozik sentitzen dira beren kontakizunak egitean…</p>\n<p>Pertsona pobre horiek ez dakite beren kontakizunak osatu gabe daudela, gertakariak, izenak eta datak filmaren kanpo-itxura baino ez direlako, barne-itxura falta da…</p>\n<p>Premiazkoa da “kontzientzia-egoerak” ezagutzea, gertakari bakoitzari animo-egoera bat edo beste dagokio.</p>\n<p>Egoerak barnekoak dira eta gertakariak kanpokoak, kanpoko gertakariak ez dira dena…</p>\n<p>Uler bitez barne-egoeratzat gogo-aldarte onak edo txarrak, kezkak, depresioa, sineskeria, beldurra, susmoa, errukia, auto-kontsiderazioa, bere buruaren gainestimazioa; zoriontsu sentitzearen egoerak, gozamen-egoerak, etab., etab., etab.</p>\n<p>Ukaezina da barne-egoerak kanpo-gertakariekin zehazki bat etor daitezkeela edo horiek eragin ditzaketela, edo ez dutela horiekin inolako harremanik…</p>\n<p>Nolanahi ere, egoerak eta gertakariak desberdinak dira. Ez dira beti gertakizunak bat etortzen antzeko egoerekin.</p>\n<p>Gertakari atsegin baten barne-egoera agian ez dator bat harekin. Gertakari desatsegin baten barne-egoera agian ez dator bat harekin. Denbora luzez itxarondako gertakizunak, etorri zirenean, zerbait falta zela sentitu genuen…</p>\n<p>Zalantzarik gabe, kanpoko gertakariarekin konbinatu behar zen dagokion barne-egoera falta zen…</p>\n<p>Askotan, espero ez zen gertakaria da une onenak eman dizkiguna…</p>"
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
const url = "src/content/docs/eu/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
