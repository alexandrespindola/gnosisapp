import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Erinevad Minad",
  "locale": "et",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Erinevad Minad",
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
    "set:html": "<p>Ratsionaalne imetaja, keda ekslikult inimeseks nimetatakse, tegelikult ei oma kindlat individuaalsust.</p>\n<p>Kahtlemata on see psühholoogilise ühtsuse puudumine humanoidis nii paljude raskuste ja kibeduse põhjuseks.</p>\n<p>Füüsiline keha on täielik üksus ja töötab kui orgaaniline tervik, välja arvatud haiguse korral.</p>\n<p>Ent humanoidi sisemine elu ei ole mingil juhul psühholoogiline üksus.</p>\n<p>Kõige tõsisem asi kõige selle juures, hoolimata sellest, mida ütlevad mitmesugused pseudoesoteerilised ja pseudookultistlikud koolkonnad, on psühholoogilise organisatsiooni puudumine iga subjekti sisimas.</p>\n<p>Sellistes tingimustes ei eksisteeri kindlasti harmoonilist tööd kui tervikut inimeste sisemises elus.</p>\n<p>Humanoid on oma sisemise seisundi poolest psühholoogiline paljusus, “minade” summa.</p>\n<p>Selle pimeda ajastu haritud ignorandid kummardavad “MINA”, jumaldavad seda, panevad selle altaritele, nimetavad seda “ALTER EGOKS”, “KÕRGEMAKS MINAKS”, “JUMALIKUKS MINAKS” jne jne jne.</p>\n<p>Selle musta ajastu “targad” ei taha aru saada, et “Kõrgem Mina” või “Madalam Mina” on kaks osa samast pluraliseeritud Egost…</p>\n<p>Humanoidil ei ole kindlasti “Püsivat MINA”, vaid hulk erinevaid infrainimeslikke ja absurdseid “Minasid”.</p>\n<p>Vaene intellektuaalne loom, keda ekslikult inimeseks nimetatakse, on sarnane korratu majaga, kus ühe peremehe asemel on palju teenijaid, kes tahavad alati käskida ja teha, mida iganes neile meeldib…</p>\n<p>Pseudoesoteerika ja odava pseudookultismi suurim viga on eeldada, et teistel on või et endal on “Püsiv ja Muutumatu MINA” ilma alguse ja lõputa…</p>\n<p>Kui need, kes nii arvavad, ärataksid kas või hetkeks teadvuse, võiksid nad ise selgelt tõestada, et ratsionaalne humanoid ei ole kunagi pikka aega sama…</p>\n<p>Intellektuaalne imetaja muutub psühholoogilisest vaatenurgast pidevalt…</p>\n<p>Mõelda, et kui inimest nimetatakse Luisiks, on ta alati Luis, on midagi väga halva maitsega nalja sarnast…</p>\n<p>Sellel subjektil, keda nimetatakse Luisiks, on endas teised “Minad”, teised egod, mis väljenduvad läbi tema isiksuse erinevatel hetkedel ja kuigi Luis ei naudi ahnust, naudib teine “Mina” temas – nimetagem teda Pepeaks – ahnust ja nii edasi…</p>\n<p>Ükski inimene ei ole pidevalt sama, tegelikult ei pea olema väga tark, et täielikult aru saada iga subjekti lugematutest muutustest ja vastuoludest…</p>\n<p>Eeldada, et kellelgi on “Püsiv ja Muutumatu Mina”, on muidugi kuritarvitamine ligimese ja iseenda suhtes…</p>\n<p>Iga inimese sees elab palju inimesi, palju “Minasid”, seda saab iga ärkvel olev, teadlik inimene ise ja otseselt kontrollida…</p>"
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
const url = "src/content/docs/et/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/et/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
