import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Upenyu",
  "locale": "sn",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Upenyu",
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
    "set:html": "<p>Munyika yehupenyu chaihwo tinogara tichiwana misiyano inoshamisa. Vanhu vakapfuma vane dzimba dzakanaka uye hushamwari hwakawanda, dzimwe nguva vanotambura zvinotyisa. .. Varombo vanoshanda nesimba kana vanhu vepakati, vanowanzorarama mumufaro wakakwana.</p>\n<p>Mamwe mamiliyoni akawanda anotambura nekushaya simba pabonde uye vakadzi vakapfuma vanochema zvinovava nekusavimbika kwemurume …</p>\n<p>Vakapfuma vepanyika vanoita segondo vari mumakeji egoridhe, mazuva ano havagone kurarama vasina “vachengeti”…</p>\n<p>Varume vezvematongerwo enyika vanotambura maketani, havambosununguki, vanofamba kwese kwese vakakomberedzwa nevanhu vakapakata zvombo kusvika kumazino…</p>\n<p>Ngatinyatsoongororai mamiriro ezvinhu aya. Tinoda kuziva kuti hupenyu chii. Mumwe nomumwe akasununguka kufunga sezvaanoda…</p>\n<p>Hazvina basa kuti vanoti kudini, hapana anoziva chinhu, hupenyu hunova dambudziko risinganzwisisike nemunhu…</p>\n<p>Apo vanhu vanoda kutiudza mahara nhau youpenyu hwavo, vanodudza zvinoitika, mazita nemazita emhuri, misi, nezvimwewo, uye vanonzwa kugutsikana pavanenge vachiita nhau dzavo…</p>\n<p>Vanhu ivavo varombo havazivi kuti nhau dzavo hadzina kukwana nokuti zvinoitika, mazita nemisi, ingori chikamu chokunze chefirimu, chikamu chomukati chinoshayikwa…</p>\n<p>Zvinokurumidza kuziva “mamiriro ekuziva”, chiitiko chimwe nechimwe chinoenderana nechimwe kana chimwe chimiro chepfungwa.</p>\n<p>Mamiriro ezvinhu ari mukati uye zviitiko zviri kunze, zviitiko zvekunze hazvisi zvese…</p>\n<p>Kunzwisisa nemamiriro emukati manzwiro akanaka kana akaipa, kunetseka, kuora mwoyo, mashura, kutya, kufungira, tsitsi, kuzvifunga, kuzvida zvakanyanya; mamiriro ekunzwa kufara, mamiriro emufaro, nezvimwewo, nezvimwewo, nezvimwewo.</p>\n<p>Pasina mubvunzo mamiriro emukati anogona kuenderana chaizvo nezviitiko zvekunze kana kuti kutangwa nezviitiko izvi, kana kuti kusava neukama nazvo…</p>\n<p>Chero zvazvingava, mamiriro ezvinhu nezviitiko zvakasiyana. Hazvisi nguva dzose zviitiko zvinoenderana chaizvo nemamiriro ezvinhu akafanana</p>\n<p>Mamiriro emukati echiitiko chinofadza angasawirirana nacho. Mamiriro emukati echiitiko chisingafadzi angasawirirana nacho. Zviitiko zvakatarisirwa kwenguva refu, patakazviwana takanzwa kuti pane chimwe chinhu chaishayikwa…</p>\n<p>Chokwadi, mamiriro emukati anoenderana aifanira kusanganiswa nechiitiko chekunze akanga asipo…</p>\n<p>Kazhinji chiitiko chisina kutarisirwa chinova icho chatipa nguva dzakanakisa…</p>"
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
const url = "src/content/docs/sn/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sn/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sn/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
