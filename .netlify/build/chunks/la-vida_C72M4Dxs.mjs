import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Âdutï",
  "locale": "sg",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Âdutï",
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
    "set:html": "<p>Na yâ ti gigi ti lakue lakue, e yeke wara lakue atënë so ague nde na mba so adö bê ti zo. Azo ti mosoro so ayeke na akota da ti lango nga na akamarade mingi, ambeni ngoi ala yeke bâ pasi mingi. .. Azo ti kodoro so ayeke sara kua ngangu wala azo ti milieu ti kodoro, fani mingi ala yeke ngbâ na yâ ti ngia kue.</p>\n<p>Mingi ti azo ti mosoro mingi ayeke bâ pasi na yâ ti koli, na akoli ti mosoro ayeke toto na ngangu ndali ti so koli ti ala ayeke be-ta-zo pëpe…</p>\n<p>Azo ti mosoro ti sese ayeke tongana akpata na popo ti agbagba ti lor, na yâ ti angoi so ala lingbi pëpe ti ngbâ na fini sân ti “asakoro”…</p>\n<p>Akoli-ndia ayeke gboto angombe, ala yeke na liberté lâ oko pëpe, ala yeke tambela na ndo kue na tere ti azo so ayeke na aye ti bira juska na ngbanga…</p>\n<p>Zia e manda ye na ndo ti duti so nzoni mingi ahon. A lingbi e hinga ye so gigi ayeke. Zo oko oko ayeke na liberté ti tene ye so bê ti lo aye…</p>\n<p>Ala tene ye so ala tene, biani zo oko ahinga ye oko pëpe, gigi aga mbeni problème so zo oko ahinga nda ni pëpe…</p>\n<p>Tongana azo aye ti fa na e gbâ ti mbaï ti gigi ti ala, ala yeke fa aye so asi, iri nga na iri ti sewa, adango, nga na ambeni ye nde, na ala yeke duti na ngia ti fa mbaï ti ala…</p>\n<p>Awanzinga so ahinga pëpe so mbaï ti ala ayeke kue pëpe ngbanga ti so aye so asi, iri nga na adango, ayeke gi mbage ti gigi ni, mbage ti yâ ni ayeke dä pëpe…</p>\n<p>A yeke hunda ti hinga “dutingo ti bê”, na ye oko oko so asi, mbeni dutingo ti bê oko wala mbeni dutingo ti bê oko ayeke dä.</p>\n<p>Adutingo ayeke na yâ ni na aye so asi ayeke na gigi, aye so asi na gigi ayeke kue pëpe…</p>\n<p>Hinga so adutingo ti yâ ni ayeke aye so ayeke nzoni wala aye so ayeke sioni, agingo bê, vundu, dengo kite, mbito, dengo kite, be-nzoni, bango tere ti zo, mango ti tere mingi ahon ti so a lingbi; adutingo ti bê ti duti na ngia, adutingo ti ngia, nga na ambeni ye nde, nga na ambeni ye nde.</p>\n<p>Kite ayeke dä pëpe so adutingo ti yâ ni alingbi ti gue oko mbilimbili na aye so asi na gigi wala ti sigigi na yâ ni, wala ti duti na songo oko pëpe na aye so…</p>\n<p>Na yâ ti aye kue, adutingo nga na aye so asi ayeke nde. Lakue pëpe aye so asi ague oko mbilimbili na adutingo so ayeke nduru na ni</p>\n<p>Dutingo ti yâ ti mbeni ye ti ngia alingbi pëpe ti gue oko na ye so. Dutingo ti yâ ti mbeni ye so anzere pëpe alingbi pëpe ti gue oko na ye so. Aye so e ku angu mingi, tongana ala ga e bâ so mbeni ye ayeke dä pëpe…</p>\n<p>Biani dutingo ti yâ ni so a lingbi ti bungbi na ye so asi na gigi ayeke dä pëpe…</p>\n<p>Mingi ni ye so asi so e ku pëpe aga ye so amû na e anzoni ngoi…</p>"
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
const url = "src/content/docs/sg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
