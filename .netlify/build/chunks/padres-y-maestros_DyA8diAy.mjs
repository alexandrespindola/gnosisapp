import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Parents and Teachers",
  "locale": "en",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-educacion-fundamental.webp-2d51a7828a2b1309555be27f7e2a61a0.webp",
  "sidebar": {
    "label": "36. Parents and Teachers",
    "order": 36
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
    "set:html": "<p>The most serious problem in PUBLIC EDUCATION is not the primary, secondary or high school pupils, but the PARENTS and the TEACHERS.</p>\n<p>If the Parents and Teachers do not know themselves, if they are not capable of understanding the child, if they do not know how to fully understand their relationships with these creatures who are beginning to live, if they only worry about cultivating the intellect of their students, how can we create a new kind of education?</p>\n<p>The child, the pupil, goes to School to receive conscious guidance, but if the Teachers are narrow-minded, conservative, reactionary, backward, so will the student be.</p>\n<p>Educators must re-educate themselves, know themselves, revise all their knowledge, understand that we are entering a New Era.</p>\n<p>By transforming educators, public education is transformed.</p>\n<p>EDUCATING the EDUCATOR is the most difficult thing because everyone who has read a lot, everyone who has a degree, everyone who has to teach, who works as a school teacher, is already as they are, their mind is bottled up in the fifty thousand theories they have studied and they no longer change even with cannon fire.</p>\n<p>Teachers should teach HOW TO THINK, but unfortunately they only worry about teaching them WHAT TO THINK.</p>\n<p>Parents and Teachers live full of terrible economic, social, sentimental concerns, etc.</p>\n<p>Parents and Teachers are mostly occupied with their own conflicts and sorrows, they are not really seriously interested in studying and solving the problems posed by the boys and girls of the “NEW WAVE”.</p>\n<p>There is tremendous mental, moral and social degeneration, but parents and Teachers are full of personal anxieties and worries and only have time to think about the economic aspect of their children, to give them a profession so that they do not starve to death and that is all.</p>\n<p>Contrary to popular belief, most parents do not truly love their children, if they loved them, they would fight for the common good, they would worry about the problems of PUBLIC EDUCATION with the purpose of achieving a real change.</p>\n<p>If the Parents really loved their children, there would be no wars, the family and the nation would not stand out so much in opposition to the totality of the world, because this creates problems, wars, harmful divisions, a hellish environment for our sons and daughters.</p>\n<p>People study, prepare to be doctors, engineers, lawyers, etc. and instead do not prepare for the most serious and most difficult task which is that of being Parents.</p>\n<p>That family egoism, that lack of love for our fellow human beings, that policy of family isolation, is one hundred percent absurd, because it becomes a factor of deterioration and constant social degeneration.</p>\n<p>Progress, the true Revolution, are only possible by tearing down those famous Great Walls of China that separate us, that isolate us from the rest of the world.</p>\n<p>All of us are a SINGLE FAMILY and it is absurd to torture each other, to consider only as family the few people who live with us, etc.</p>\n<p>The EGOISTIC EXCLUSIVISM OF FAMILY stops social progress, divides human beings, creates wars, privileged castes, economic problems, etc.</p>\n<p>When the Parents truly love their children, the walls, the abominable fences of isolation will fall into dust and then the family will cease to be a selfish and absurd circle.</p>\n<p>When the selfish walls of the family fall, there is then fraternal communion with all the other parents, with the Teachers, with the whole society.</p>\n<p>The result of TRUE FRATERNITY is TRUE SOCIAL TRANSFORMATION, the authentic REVOLUTION of the EDUCATIONAL branch for a better world.</p>\n<p>The EDUCATOR must be more aware, must gather the Parents, the Board of Directors of Parents and speak to them clearly.</p>\n<p>It is necessary for Parents to understand that the task of public education is carried out on the firm basis of mutual cooperation between Parents and Teachers.</p>\n<p>It is necessary to tell Parents that FUNDAMENTAL EDUCATION is necessary to raise the new Generations.</p>\n<p>It is essential to tell Parents that intellectual formation is necessary but that it is not everything, something more is needed, it is necessary to teach boys and girls to know themselves, to know their own mistakes, their own Psychological defects.</p>\n<p>It is necessary to tell Parents that children should be begotten by LOVE and not by ANIMAL PASSION.</p>\n<p>It is cruel and ruthless to project our animal desires, our violent sexual passions, our morbid sentimentalities and bestial emotions on our descendants.</p>\n<p>The Sons and Daughters are our own projections and it is criminal to infect the World with bestial projections.</p>\n<p>The Teachers of Schools, Colleges and Universities must gather in the hall, the Parents with the healthy purpose of teaching them the way of moral responsibility towards their children and towards Society and the World.</p>\n<p>The EDUCATORS have the duty to RE-EDUCATE themselves and guide the Parents.</p>\n<p>We need to truly love to transform the world. We need to unite to raise among all of us, the wonderful Temple of the New Era that is now beginning amidst the august thunder of thought.</p>"
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
const url = "src/content/docs/en/educacion-fundamental/padres-y-maestros.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/educacion-fundamental/padres-y-maestros.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/educacion-fundamental/padres-y-maestros.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
