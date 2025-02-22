import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Jeta",
  "locale": "sq",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Jeta",
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
    "set:html": "<p>Në terrenin e jetës praktike zbulojmë gjithmonë kontraste që habisin. Njerëz të pasur me rezidencë madhështore dhe shumë miqësi, ndonjëherë vuajnë tmerrësisht. .. Proletarë të thjeshtë me kazmë dhe lopatë ose njerëz të klasës së mesme, zakonisht jetojnë ndonjëherë në lumturi të plotë.</p>\n<p>Shumë arkimiliarderë vuajnë nga impotenca seksuale dhe matrona të pasura qajnë hidhërimisht tradhtinë e burrit…</p>\n<p>Të pasurit e tokës duken si shqiponja mes kafazëve të artë, në këto kohë nuk mund të jetojnë pa “truproja”…</p>\n<p>Burrat e shtetit mbartin zinxhirë, nuk janë kurrë të lirë, shëtisin kudo të rrethuar nga njerëz të armatosur deri në dhëmbë…</p>\n<p>Ta studiojmë këtë situatë më me kujdes. Duhet të dimë se çfarë është jeta. Secili është i lirë të japë mendimin e tij si të dojë…</p>\n<p>Çfarëdo që të thonë, me siguri askush nuk di asgjë, jeta rezulton një problem që askush nuk e kupton…</p>\n<p>Kur njerëzit dëshirojnë të na tregojnë falas historinë e jetës së tyre, citojnë ngjarje, emra dhe mbiemra, data, etj., dhe ndjejnë kënaqësi kur bëjnë rrëfimet e tyre…</p>\n<p>Ata njerëz të varfër nuk e dinë se rrëfimet e tyre janë të paplota sepse ngjarjet, emrat dhe datat, janë vetëm aspekti i jashtëm i filmit, mungon aspekti i brendshëm…</p>\n<p>Është urgjente të njihen “gjendjet e vetëdijes”, çdo ngjarje i korrespondon një gjendje shpirtërore e tillë apo e tillë.</p>\n<p>Gjendjet janë të brendshme dhe ngjarjet janë të jashtme, ngjarjet e jashtme nuk janë gjithçka…</p>\n<p>Kuptohet me gjendje të brendshme disponimet e mira ose të këqija, shqetësimet, depresioni, besëtytnia, frika, dyshimi, mëshira, vetë-konsiderata, mbi-vlerësimi i vetvetes; gjendje të ndjehesh i lumtur, gjendje gëzimi, etj., etj., etj.</p>\n<p>Pa dyshim, gjendjet e brendshme mund t’i korrespondojnë saktësisht ngjarjeve të jashtme ose të jenë të origjinuara prej tyre, ose të mos kenë lidhje fare me to…</p>\n<p>Në çdo rast gjendjet dhe ngjarjet janë të ndryshme. Jo gjithmonë ngjarjet korrespondojnë saktësisht me gjendje të afërta.</p>\n<p>Gjendja e brendshme e një ngjarjeje të këndshme mund të mos korrespondojë me të. Gjendja e brendshme e një ngjarjeje të pakëndshme mund të mos korrespondojë me të. Ngjarje të pritura për një kohë të gjatë, kur erdhën ndjemë se diçka mungonte…</p>\n<p>Sigurisht, mungonte gjendja e brendshme korresponduese që duhej të kombinohej me ngjarjen e jashtme…</p>\n<p>Shpeshherë ngjarja që nuk pritej rezulton të jetë ajo që na ka ofruar momentet më të mira…</p>"
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
const url = "src/content/docs/sq/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sq/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sq/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
