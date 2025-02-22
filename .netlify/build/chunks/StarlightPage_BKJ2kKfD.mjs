import axios from 'axios';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent, e as renderSlot } from './astro/server_D5RFOXkj.mjs';
import { b as unionType, c as booleanType, d as stringType, o as objectType, n as numberType, e as enumType, r as recordType, f as undefinedType, h as stripLeadingAndTrailingSlashes, l as lazyType, i as dateType, p as project, g as getCollectionPathFromRoot, D as DeprecatedLabelsPropProxy, s as starlightConfig, j as literalType } from './translations_DWItyM-a.mjs';
import { I as Icons, a as I18nBadgeConfigSchema, H as HeadConfigSchema, B as BadgeConfigSchema, u as urlToSlug, s as slugToLocaleData, g as getSidebarFromConfig, b as getSidebar, c as getPrevNextLinks, d as getSiteTitle, e as getSiteTitleHref, f as getToC, p as parseAsyncWithFriendlyErrors, h as parseWithFriendlyErrors, $ as $$Page } from './Page_UV64aIJS.mjs';

const STRAPI_URL = "https://cms-strapi-gnosis-7a489057103c.herokuapp.com/api";
const ACCESS_TOKEN = "c84e291e514904d2f6d92135d85da6a2f1073486e2c9052563c1713c0ac97ceb49ba47d488f789d3a86d5ebeda6fee6c2c8ba2fe3a665b13674e1b911374c631c390674bf56b749430d2782b67b33c2af31af9945595118c745d5406467f255fae4bb3c49e26ee5c93ce3af638d8a9aba05b9b226446775014c403db1e199a42";
async function getBooks(locale) {
  try {
    const response = await axios.get(`${STRAPI_URL}/books?locale=${locale}&populate=*`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });
    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
}

const $$Astro$1 = createAstro();
const $$BookCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BookCard;
  const { book, buttonText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"> <img${addAttribute(book.coverImage, "src")}${addAttribute(book.title, "alt")} class="w-full h-auto object-cover"> <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${book.title}</h5> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${book.author}</p> <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> ${buttonText} <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> </div>`;
}, "/home/prometeu/Documentos/Astro/gnosisapp/src/components/BookCard.astro", undefined);

const PrevNextLinkConfigSchema = () => unionType([
  booleanType(),
  stringType(),
  objectType({
    /** The navigation link URL. */
    link: stringType().optional(),
    /** The navigation link text. */
    label: stringType().optional()
  }).strict()
]).optional();

const defaults = { minHeadingLevel: 2, maxHeadingLevel: 3 };
const TableOfContentsSchema = () => unionType([
  objectType({
    /** The level to start including headings at in the table of contents. Default: 2. */
    minHeadingLevel: numberType().int().min(1).max(6).optional().default(2),
    /** The level to stop including headings at in the table of contents. Default: 3. */
    maxHeadingLevel: numberType().int().min(1).max(6).optional().default(3)
  }),
  booleanType().transform((enabled) => enabled ? defaults : false)
]).default(defaults).refine((toc) => toc ? toc.minHeadingLevel <= toc.maxHeadingLevel : true, {
  message: "minHeadingLevel must be less than or equal to maxHeadingLevel"
});

const iconNames = Object.keys(Icons);
const HeroSchema = ({ image }) => objectType({
  /**
   * The large title text to show. If not provided, will default to the top-level `title`.
   * Can include HTML.
   */
  title: stringType().optional(),
  /**
   * A short bit of text about your project.
   * Will be displayed in a smaller size below the title.
   */
  tagline: stringType().optional(),
  /** The image to use in the hero. You can provide either a relative `file` path or raw `html`. */
  image: unionType([
    objectType({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: stringType().default(""),
      /** Relative path to an image file in your repo, e.g. `../../assets/hero.png`. */
      file: image()
    }),
    objectType({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: stringType().default(""),
      /** Relative path to an image file in your repo to use in dark mode, e.g. `../../assets/hero-dark.png`. */
      dark: image(),
      /** Relative path to an image file in your repo to use in light mode, e.g. `../../assets/hero-light.png`. */
      light: image()
    }),
    objectType({
      /** Raw HTML string instead of an image file. Useful for inline SVGs or more complex hero content. */
      html: stringType()
    }).transform(({ html }) => ({ html, alt: "" }))
  ]).optional(),
  /** An array of call-to-action links displayed at the bottom of the hero. */
  actions: objectType({
    /** Text label displayed in the link. */
    text: stringType(),
    /** Value for the link’s `href` attribute, e.g. `/page` or `https://mysite.com`. */
    link: stringType(),
    /** Button style to use. One of `primary` (the default), `secondary`, or `minimal`. */
    variant: enumType(["primary", "secondary", "minimal"]).default("primary"),
    /**
     * An optional icon to display alongside the link text.
     * Can be an inline `<svg>` or the name of one of Starlight’s built-in icons.
     */
    icon: unionType([enumType(iconNames), stringType().startsWith("<svg")]).transform((icon) => {
      const parsedIcon = enumType(iconNames).safeParse(icon);
      return parsedIcon.success ? { type: "icon", name: parsedIcon.data } : { type: "raw", html: icon };
    }).optional(),
    /** HTML attributes to add to the link */
    attrs: recordType(unionType([stringType(), numberType(), booleanType()])).optional()
  }).array().default([])
});

const SidebarBaseSchema = objectType({
  /** The visible label for this item in the sidebar. */
  label: stringType(),
  /** Translations of the `label` for each supported language. */
  translations: recordType(stringType()).default({}),
  /** Adds a badge to the item */
  badge: I18nBadgeConfigSchema()
});
const SidebarGroupSchema = SidebarBaseSchema.extend({
  /** Whether this item should be collapsed by default. */
  collapsed: booleanType().default(false)
});
const linkHTMLAttributesSchema = recordType(
  unionType([stringType(), numberType(), booleanType(), undefinedType()])
);
const SidebarLinkItemHTMLAttributesSchema = () => linkHTMLAttributesSchema.default({});
const SidebarLinkItemSchema = SidebarBaseSchema.extend({
  /** The link to this item’s content. Can be a relative link to local files or the full URL of an external page. */
  link: stringType(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
}).strict();
const AutoSidebarGroupSchema = SidebarGroupSchema.extend({
  /** Enable autogenerating a sidebar category from a specific docs directory. */
  autogenerate: objectType({
    /** The directory to generate sidebar items for. */
    directory: stringType().transform(stripLeadingAndTrailingSlashes),
    /**
     * Whether the autogenerated subgroups should be collapsed by default.
     * Defaults to the `AutoSidebarGroup` `collapsed` value.
     */
    collapsed: booleanType().optional()
    // TODO: not supported by Docusaurus but would be good to have
    /** How many directories deep to include from this directory in the sidebar. Default: `Infinity`. */
    // depth: z.number().optional(),
  })
}).strict();
const ManualSidebarGroupSchema = SidebarGroupSchema.extend({
  /** Array of links and subcategories to display in this category. */
  items: lazyType(
    () => unionType([
      SidebarLinkItemSchema,
      ManualSidebarGroupSchema,
      AutoSidebarGroupSchema,
      InternalSidebarLinkItemSchema,
      InternalSidebarLinkItemShorthandSchema
    ]).array()
  )
}).strict();
const InternalSidebarLinkItemSchema = SidebarBaseSchema.partial({ label: true }).extend({
  /** The link to this item’s content. Must be a slug of a Content Collection entry. */
  slug: stringType(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
});
const InternalSidebarLinkItemShorthandSchema = stringType().transform((slug) => InternalSidebarLinkItemSchema.parse({ slug }));
const SidebarItemSchema = unionType([
  SidebarLinkItemSchema,
  ManualSidebarGroupSchema,
  AutoSidebarGroupSchema,
  InternalSidebarLinkItemSchema,
  InternalSidebarLinkItemShorthandSchema
]);

const StarlightFrontmatterSchema = (context) => objectType({
  /** The title of the current page. Required. */
  title: stringType(),
  /**
   * A short description of the current page’s content. Optional, but recommended.
   * A good description is 150–160 characters long and outlines the key content
   * of the page in a clear and engaging way.
   */
  description: stringType().optional(),
  /**
   * Custom URL where a reader can edit this page.
   * Overrides the `editLink.baseUrl` global config if set.
   *
   * Can also be set to `false` to disable showing an edit link on this page.
   */
  editUrl: unionType([stringType().url(), booleanType()]).optional().default(true),
  /** Set custom `<head>` tags just for this page. */
  head: HeadConfigSchema(),
  /** Override global table of contents configuration for this page. */
  tableOfContents: TableOfContentsSchema().optional(),
  /**
   * Set the layout style for this page.
   * Can be `'doc'` (the default) or `'splash'` for a wider layout without any sidebars.
   */
  template: enumType(["doc", "splash"]).default("doc"),
  /** Display a hero section on this page. */
  hero: HeroSchema(context).optional(),
  /**
   * The last update date of the current page.
   * Overrides the `lastUpdated` global config or the date generated from the Git history.
   */
  lastUpdated: unionType([dateType(), booleanType()]).optional(),
  /**
   * The previous navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  prev: PrevNextLinkConfigSchema(),
  /**
   * The next navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  next: PrevNextLinkConfigSchema(),
  sidebar: objectType({
    /**
     * The order of this page in the navigation.
     * Pages are sorted by this value in ascending order. Then by slug.
     * If not provided, pages will be sorted alphabetically by slug.
     * If two pages have the same order value, they will be sorted alphabetically by slug.
     */
    order: numberType().optional(),
    /**
     * The label for this page in the navigation.
     * Defaults to the page `title` if not set.
     */
    label: stringType().optional(),
    /**
     * Prevents this page from being included in autogenerated sidebar groups.
     */
    hidden: booleanType().default(false),
    /**
     * Adds a badge to the sidebar link.
     * Can be a string or an object with a variant and text.
     * Variants include 'note', 'tip', 'caution', 'danger', 'success', and 'default'.
     * Passing only a string defaults to the 'default' variant which uses the site accent color.
     */
    badge: BadgeConfigSchema(),
    /** HTML attributes to add to the sidebar link. */
    attrs: SidebarLinkItemHTMLAttributesSchema()
  }).default({}),
  /** Display an announcement banner at the top of this page. */
  banner: objectType({
    /** The content of the banner. Supports HTML syntax. */
    content: stringType()
  }).optional(),
  /** Pagefind indexing for this page - set to false to disable. */
  pagefind: booleanType().default(true),
  /**
   * Indicates that this page is a draft and will not be included in production builds.
   * Note that the page will still be available when running Astro in development mode.
   */
  draft: booleanType().default(false)
});
function docsSchema(...args) {
  const [options = {}] = args;
  const { extend } = options;
  return (context) => {
    const UserSchema = typeof extend === "function" ? extend(context) : extend;
    return UserSchema ? StarlightFrontmatterSchema(context).and(UserSchema) : StarlightFrontmatterSchema(context);
  };
}

const StarlightPageFrontmatterSchema = async (context) => {
  const userDocsSchema = await getUserDocsSchema();
  const schema = typeof userDocsSchema === "function" ? userDocsSchema(context) : userDocsSchema;
  return schema.transform((frontmatter) => {
    const { editUrl, sidebar, ...others } = frontmatter;
    const pageEditUrl = editUrl === undefined || editUrl === true ? false : editUrl;
    return { ...others, editUrl: pageEditUrl };
  });
};
const validateSidebarProp = (sidebarProp) => {
  return parseWithFriendlyErrors(
    SidebarItemSchema.array().optional(),
    sidebarProp,
    "Invalid sidebar prop passed to the `<StarlightPage/>` component."
  );
};
async function generateStarlightPageRouteData({
  props,
  url
}) {
  const { isFallback, frontmatter, ...routeProps } = props;
  const slug = urlToSlug(url);
  const pageFrontmatter = await getStarlightPageFrontmatter(frontmatter);
  const id = project.legacyCollections ? `${stripLeadingAndTrailingSlashes(slug)}.md` : slug;
  const localeData = slugToLocaleData(slug);
  const sidebar = props.sidebar ? getSidebarFromConfig(validateSidebarProp(props.sidebar), url.pathname, localeData.locale) : getSidebar(url.pathname, localeData.locale);
  const headings = props.headings ?? [];
  const pageDocsEntry = {
    id,
    slug,
    body: "",
    collection: "docs",
    filePath: `${getCollectionPathFromRoot("docs", project)}/${stripLeadingAndTrailingSlashes(slug)}.md`,
    data: {
      ...pageFrontmatter,
      sidebar: {
        attrs: {},
        hidden: false
      }
    }
  };
  const entry = pageDocsEntry;
  const entryMeta = {
    dir: props.dir ?? localeData.dir,
    lang: props.lang ?? localeData.lang,
    locale: localeData.locale
  };
  const editUrl = pageFrontmatter.editUrl ? new URL(pageFrontmatter.editUrl) : undefined;
  const lastUpdated = pageFrontmatter.lastUpdated instanceof Date ? pageFrontmatter.lastUpdated : undefined;
  const routeData = {
    ...routeProps,
    ...localeData,
    id,
    editUrl,
    entry,
    entryMeta,
    hasSidebar: props.hasSidebar ?? entry.data.template !== "splash",
    headings,
    labels: DeprecatedLabelsPropProxy,
    lastUpdated,
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    sidebar,
    siteTitle: getSiteTitle(localeData.lang),
    siteTitleHref: getSiteTitleHref(localeData.locale),
    slug,
    toc: getToC({
      ...routeProps,
      ...localeData,
      entry,
      entryMeta,
      headings,
      id,
      locale: localeData.locale,
      slug
    })
  };
  if (isFallback) {
    routeData.isFallback = true;
  }
  return routeData;
}
async function getStarlightPageFrontmatter(frontmatter) {
  const schema = await StarlightPageFrontmatterSchema({
    image: () => objectType({
      src: stringType(),
      width: numberType(),
      height: numberType(),
      format: unionType([
        literalType("png"),
        literalType("jpg"),
        literalType("jpeg"),
        literalType("tiff"),
        literalType("webp"),
        literalType("gif"),
        literalType("svg"),
        literalType("avif")
      ])
    })
  });
  return parseAsyncWithFriendlyErrors(
    schema,
    frontmatter,
    "Invalid frontmatter props passed to the `<StarlightPage/>` component."
  );
}
async function getUserDocsSchema() {
  const userCollections = (await import('./collection-config_B2zVUn9f.mjs')).collections;
  return userCollections?.docs.schema ?? docsSchema();
}

const $$Astro = createAstro();
const $$StarlightPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StarlightPage;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...await generateStarlightPageRouteData({ props: Astro2.props, url: Astro2.url }) }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/prometeu/Documentos/Astro/gnosisapp/node_modules/.pnpm/@astrojs+starlight@0.30.5_astro@5.1.3_@netlify+blobs@8.1.1_@types+node@22.10.5_jiti@1.2_85a566938a49a29c5119297fdb2e5ec7/node_modules/@astrojs/starlight/components/StarlightPage.astro", undefined);

export { $$BookCard as $, $$StarlightPage as a, docsSchema as d, getBooks as g };
