import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Bomoi",
  "locale": "ln",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Bomoi",
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
    "set:html": "<p>Na bomoyi ya mokolo na mokolo, tokutani ntango nyonso na bokeseni oyo ekamwisaka. Bato ya bozwi oyo bazali na bandako ya kitoko mpe baninga mingi, ntango mosusu banyokwamaka mingi. .. Bato ya mike ya mosala makasi to bato ya kati, mbala mingi bavandaka ntango mosusu na esengo ya kokoka.</p>\n<p>Bamiliare mingi banyokwamaka na bokɔnɔ ya kozanga makasi ya kosangisa nzoto mpe basi ya bozwi balelaka na mawa mingi kozanga bosembo ya mobali…</p>\n<p>Bazwi ya mokili bamonanaka lokola bandɛkɛ ya libulu kati na bandako ya wolo, na mikolo oyo bakoki te kozanga “babateli”…</p>\n<p>Bato ya Leta babendaka minyɔlɔlɔ, bazalaka na bonsomi ata moke te, batambolaka bipai nyonso bazingami na bato oyo bazali na bibundeli makasi…</p>\n<p>Tótalela likambo oyo malamumalamu. Tosengeli koyeba bomoi ezali nini. Moto na moto azali na bonsomi ya kopesa likanisi ndenge alingi…</p>\n<p>Ata soki balobi nini, ya solo moto moko te ayebi eloko, bomoi emonanaka lokola mokakatano oyo moto moko te akoki kokanga ntina…</p>\n<p>Ntango bato balingi koyebisa biso lisolo ya bomoi na bango ofele, batángaka makambo oyo masalemaki, bankombo mpe bankombo ya libota, badati, mpe bongo na bongo, mpe bayokaka esengo ntango bazali kosala masolo na bango…</p>\n<p>Bato wana ya mawa bayebi te ete masolo na bango ezali ya kokoka te mpo ete makambo, bankombo mpe badati, ezali bobele emonaneli ya libanda ya filme, eteni ya kati ezali kozanga…</p>\n<p>Ezali nokinoki koyeba “bizaleli ya mayele”, likambo na likambo esengeli na ezaleli boye to boye ya molimo.</p>\n<p>Bizaleli ezali na kati mpe makambo ezali na libanda, makambo oyo masalemaka na libanda ezali te nyonso…</p>\n<p>Tósimba na bizaleli ya kati bilobaloba ya malamu to ya mabe, mitungisi, konyokwama na makanisi, kondima biloko ya lokuta, kobanga, kozala na likanisi mabe, ngɔlu, komitalela, komitombola mingi; bizaleli ya koyoka esengo, bizaleli ya esengo, mpe bongo na bongo.</p>\n<p>Na ntembe te, bizaleli ya kati ekoki koyokana mpenza na makambo ya libanda to kobima na yango, to kozanga boyokani na yango…</p>\n<p>Na likambo nyonso, bizaleli mpe makambo mazali ekeseni. Ntango nyonso te makambo mayokanaka mpenza na bizaleli bizali penepene</p>\n<p>Ezaleli ya kati ya likambo ya esengo ekoki te koyokana na yango. Ezaleli ya kati ya likambo ya mabe ekoki te koyokana na yango. Makambo oyo mazelamaki na boumeli ya ntango molai, ntango mayaki toyokaki ete eloko ezalaki kozanga…</p>\n<p>Ya solo, ezaleli ya kati oyo esengelaki kosangana na likambo ya libanda ezalaki kozanga…</p>\n<p>Mbala mingi likambo oyo ezalaki te kozelama ekómaka oyo epesi biso ntango ya malamu koleka…</p>"
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
const url = "src/content/docs/ln/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ln/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ln/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
