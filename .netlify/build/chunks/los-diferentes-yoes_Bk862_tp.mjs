import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Rôzne Ja",
  "locale": "sk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Rôzne Ja",
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
    "set:html": "<p>Racionálny cicavec, mylne nazývaný človek, v skutočnosti nemá definovanú individualitu.</p>\n<p>Nepochybne táto absencia psychologickej jednoty v humanoide je príčinou toľkých ťažkostí a horkostí.</p>\n<p>Fyzické telo je kompletná jednotka a pracuje ako organický celok, pokiaľ nie je choré.</p>\n<p>Život vnútri humanoida však v žiadnom prípade nie je psychologická jednota.</p>\n<p>Najvážnejšie na tom je, napriek tomu, čo hovoria rôzne školy pseudo-ezoterického a pseudo-okultistického typu, absencia psychologickej organizácie v intímnych základoch každého jedinca.</p>\n<p>Iste, za takýchto podmienok neexistuje harmonická práca ako celok, vo vnútornom živote ľudí.</p>\n<p>Humanoid, pokiaľ ide o jeho vnútorný stav, je psychologická mnohosť, suma “Ja”.</p>\n<p>Ilustrovaní ignoranti tejto temnej epochy uctievajú “JA”, zbožňujú ho, kladú ho na oltáre, nazývajú ho “ALTER EGO”, “VYŠŠIE JA”, “BOŽSKÉ JA” atď., atď., atď.</p>\n<p>“Múdri” tohto temného veku, v ktorom žijeme, si nechcú uvedomiť, že “Vyššie Ja” alebo “Nižšie Ja” sú dve časti toho istého pluralizovaného Ega…</p>\n<p>Humanoid určite nemá “Trvalé JA”, ale množstvo rôznych infrahumánnych a absurdných “Ja”.</p>\n<p>Úbohé intelektuálne zviera, mylne nazývané človek, sa podobá domu v neporiadku, kde namiesto jedného pána existuje veľa sluhov, ktorí chcú vždy rozkazovať a robiť si, čo sa im zachce…</p>\n<p>Najväčšou chybou lacného pseudo-ezoterizmu a pseudo-okultizmu je predpokladať, že ostatní majú alebo že niekto má “Trvalé a Nemenné JA” bez začiatku a bez konca…</p>\n<p>Ak by sa tí, ktorí si to myslia, prebudili, hoci len na chvíľu, mohli by sami jasne preukázať, že racionálny humanoid nikdy nie je ten istý po dlhú dobu…</p>\n<p>Intelektuálny cicavec sa z psychologického hľadiska neustále mení…</p>\n<p>Myslieť si, že ak sa niekto volá Ľudovít, je vždy Ľudovít, je niečo ako žart veľmi zlého vkusu…</p>\n<p>Ten jedinec, ktorý sa volá Ľudovít, má v sebe iné “Ja”, iné egá, ktoré sa prejavujú prostredníctvom jeho osobnosti v rôznych momentoch, a hoci sa Ľudovítovi nepáči chamtivosť, iné “Ja” v ňom - nazvime ho Pepe - má rád chamtivosť a tak ďalej…</p>\n<p>Žiadna osoba nie je stále rovnaká, naozaj nie je potrebné byť veľmi múdrym, aby si človek plne uvedomil nespočetné množstvo zmien a protirečení každého jedinca…</p>\n<p>Predpokladať, že niekto má “Trvalé a Nemenné JA”, sa rovná zneužitiu voči blížnemu a voči sebe samému…</p>\n<p>Vnútri každej osoby žije veľa ľudí, veľa “Ja”, to si môže overiť sám a priamo každá prebudená, vedomá osoba…</p>"
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
const url = "src/content/docs/sk/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
