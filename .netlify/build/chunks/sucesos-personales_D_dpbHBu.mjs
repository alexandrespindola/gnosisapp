import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Izigameko Zomuntu Siqu",
  "locale": "zu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Izigameko Zomuntu Siqu",
    "order": 9
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
    "set:html": "<p>Ukuzibuka ngobuqotho ngaphakathi, kubaluleke kakhulu uma kuziwa ekutholeni izimo ezingalungile zengqondo.</p>\n<p>Ngokungangabazeki izimo zangaphakathi ezingalungile zingalungiswa ngezindlela ezifanele.</p>\n<p>Njengoba impilo yangaphakathi iyimagnethe ekhanga izenzakalo zangaphandle, sidinga ngokushesha okukhulu ukususa izimo ezingalungile zengqondo engqondweni yethu.</p>\n<p>Ukulungisa izimo zengqondo ezingalungile kubalulekile uma ufuna ukushintsha ngokuyisisekelo imvelo yemicimbi ethile engathandeki.</p>\n<p>Ukushintsha ubudlelwano bethu nezenzakalo ezithile, kungenzeka uma sisusa ngaphakathi kithi izimo ezithile zengqondo ezingenamsebenzi.</p>\n<p>Izimo zangaphandle ezilimazayo, zingaphenduka ezingenabungozi ngisho zibe ezakhayo ngokulungiswa okuhlakaniphile kwezimo zangaphakathi ezingalungile.</p>\n<p>Umuntu angayishintsha imvelo yemicimbi engathandeki eyenzeka kithi, uma ezihlambulula ngasese. Umuntu ongazilungisi izimo zengqondo ezingenamsebenzi, ezibona eqinile kakhulu uphenduka isisulu sezimo.</p>\n<p>Ukuhlela indlu yethu yangaphakathi exakile kubalulekile, uma ufisa ukushintsha inkambo yempilo enosizi.</p>\n<p>Abantu bayakhononda ngakho konke, bayahlupheka, bayakhala, bayaphikisana, bangathanda ukushintsha impilo, baphume ebubini abazithola bekubo, ngeshwa abazisebenzeli bona.</p>\n<p>Abantu abafuni ukuqaphela ukuthi impilo yangaphakathi idonsela izimo zangaphandle nokuthi uma lezi zibuhlungu kungenxa yezimo zangaphakathi ezingenamsebenzi.</p>\n<p>Okwangaphandle kumane kuyisibonakaliso sangaphakathi, lowo oshintsha ngaphakathi uqala uhlelo olusha lwezinto.</p>\n<p>Izenzakalo zangaphandle azisoze zabaluleka, njengendlela yokusabela kuzo.</p>\n<p>Ingabe uhlale uzolile lapho umthukuthelisi ekuthuka? Ingabe wamukele ngenjabulo izenzo ezingathandeki zabantu obaziyo?</p>\n<p>Wasabela kanjani ekungathembekini kothandiweyo wakho? Ingabe waziyekelela ebuthini bomona? Ingabe ubulale? Ingabe usejele?</p>\n<p>Izibhedlela, amathuna, amajele, zigcwele abantu abaqotho abenza amaphutha abasabela ngendlela engenangqondo ezenzakalweni zangaphandle.</p>\n<p>Isikhali esihle kakhulu umuntu angasisebenzisa empilweni, yisimo esilungile sengqondo.</p>\n<p>Umuntu angahlubula izilwane zasendle futhi adalule abakhapheli, ngezimo zangaphakathi ezifanele.</p>\n<p>Izimo zangaphakathi ezingalungile zisenza izisulu ezingenamandla zobubi bomuntu.</p>\n<p>Fundani ukubhekana nezenzakalo ezingathandeki kakhulu zempilo yangempela ngesimo esifanele sangaphakathi…</p>\n<p>Ningazihlanganisi nanoma yisiphi isenzakalo; khumbula ukuthi konke kuyadlula; fundani ukubona impilo njengefilimu futhi nizothola izinzuzo…</p>\n<p>Ningakhohlwa ukuthi izenzakalo ezingenayo imiqondo zinganiholela osizini, uma ningazisusi engqondweni yenu izimo ezingalungile zangaphakathi.</p>\n<p>Isenzakalo ngasinye sangaphandle sidinga, ngokungangabazeki ithikithi elifanele; okungukuthi, isimo esiqondile sengqondo.</p>"
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
const url = "src/content/docs/zu/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zu/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zu/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
