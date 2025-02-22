import { A as AstroError, T as MissingLocale, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro } from './astro/server_D5RFOXkj.mjs';
import { c as appendForwardSlash, j as joinPaths } from './consts_BNucsO7g.mjs';
import { a as LOCALES_FLAGS } from './locales_CVLhBcGW.mjs';
/* empty css                                                                        */

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function getLocaleRelativeUrl({
  locale,
  base,
  locales: _locales,
  trailingSlash,
  format,
  path,
  prependWith,
  normalizeLocale = true,
  strategy = "pathname-prefix-other-locales",
  defaultLocale
}) {
  const codeToUse = peekCodePathToUse(_locales, locale);
  if (!codeToUse) {
    throw new AstroError({
      ...MissingLocale,
      message: MissingLocale.message(locale)
    });
  }
  const pathsToJoin = [base, prependWith];
  const normalizedLocale = normalizeLocale ? normalizeTheLocale(codeToUse) : codeToUse;
  if (strategy === "pathname-prefix-always" || strategy === "pathname-prefix-always-no-redirect" || strategy === "domains-prefix-always" || strategy === "domains-prefix-always-no-redirect") {
    pathsToJoin.push(normalizedLocale);
  } else if (locale !== defaultLocale) {
    pathsToJoin.push(normalizedLocale);
  }
  pathsToJoin.push(path);
  if (shouldAppendForwardSlash(trailingSlash, format)) {
    return appendForwardSlash(joinPaths(...pathsToJoin));
  } else {
    return joinPaths(...pathsToJoin);
  }
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function peekCodePathToUse(locales, locale) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  return undefined;
}

function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "pathname-prefix-always";
        } else {
          strategy = "pathname-prefix-always-no-redirect";
        }
      } else {
        strategy = "pathname-prefix-other-locales";
      }
    } else {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "domains-prefix-always";
        } else {
          strategy = "domains-prefix-always-no-redirect";
        }
      } else {
        strategy = "domains-prefix-other-locales";
      }
    }
  }
  return strategy;
}
function toFallbackType(routing) {
  if (routing === "manual") {
    return "rewrite";
  }
  return routing.fallbackType;
}

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { base: "/", format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "es", locales: [{ codes: ["es"], path: "es" }, { codes: ["af"], path: "af" }, { codes: ["am"], path: "am" }, { codes: ["ar"], path: "ar" }, { codes: ["as"], path: "as" }, { codes: ["az"], path: "az" }, { codes: ["be"], path: "be" }, { codes: ["bg"], path: "bg" }, { codes: ["bm"], path: "bm" }, { codes: ["bn"], path: "bn" }, { codes: ["bo"], path: "bo" }, { codes: ["br"], path: "br" }, { codes: ["brx"], path: "brx" }, { codes: ["bs"], path: "bs" }, { codes: ["ca"], path: "ca" }, { codes: ["cgg"], path: "cgg" }, { codes: ["cs"], path: "cs" }, { codes: ["cy"], path: "cy" }, { codes: ["da"], path: "da" }, { codes: ["de"], path: "de" }, { codes: ["dje"], path: "dje" }, { codes: ["dv"], path: "dv" }, { codes: ["el"], path: "el" }, { codes: ["en"], path: "en" }, { codes: ["eo"], path: "eo" }, { codes: ["et"], path: "et" }, { codes: ["eu"], path: "eu" }, { codes: ["fa"], path: "fa" }, { codes: ["ff"], path: "ff" }, { codes: ["fil"], path: "fil" }, { codes: ["fi"], path: "fi" }, { codes: ["fr"], path: "fr" }, { codes: ["ga"], path: "ga" }, { codes: ["gu"], path: "gu" }, { codes: ["ha"], path: "ha" }, { codes: ["he"], path: "he" }, { codes: ["hi"], path: "hi" }, { codes: ["hr"], path: "hr" }, { codes: ["hu"], path: "hu" }, { codes: ["hy"], path: "hy" }, { codes: ["id"], path: "id" }, { codes: ["ig"], path: "ig" }, { codes: ["is"], path: "is" }, { codes: ["it"], path: "it" }, { codes: ["ja"], path: "ja" }, { codes: ["kab"], path: "kab" }, { codes: ["kam"], path: "kam" }, { codes: ["ka"], path: "ka" }, { codes: ["kea"], path: "kea" }, { codes: ["kk"], path: "kk" }, { codes: ["kln"], path: "kln" }, { codes: ["km"], path: "km" }, { codes: ["kmr"], path: "kmr" }, { codes: ["kn"], path: "kn" }, { codes: ["ko"], path: "ko" }, { codes: ["kok"], path: "kok" }, { codes: ["ky"], path: "ky" }, { codes: ["lag"], path: "lag" }, { codes: ["lao"], path: "lao" }, { codes: ["lg"], path: "lg" }, { codes: ["ln"], path: "ln" }, { codes: ["lt"], path: "lt" }, { codes: ["lv"], path: "lv" }, { codes: ["mk"], path: "mk" }, { codes: ["mg"], path: "mg" }, { codes: ["mer"], path: "mer" }, { codes: ["ml"], path: "ml" }, { codes: ["mn"], path: "mn" }, { codes: ["mr"], path: "mr" }, { codes: ["ms"], path: "ms" }, { codes: ["mt"], path: "mt" }, { codes: ["my"], path: "my" }, { codes: ["nb"], path: "nb" }, { codes: ["ne"], path: "ne" }, { codes: ["nl"], path: "nl" }, { codes: ["nus"], path: "nus" }, { codes: ["om"], path: "om" }, { codes: ["or"], path: "or" }, { codes: ["pa"], path: "pa" }, { codes: ["pl"], path: "pl" }, { codes: ["ps"], path: "ps" }, { codes: ["pt"], path: "pt" }, { codes: ["ro"], path: "ro" }, { codes: ["ru"], path: "ru" }, { codes: ["rw"], path: "rw" }, { codes: ["sg"], path: "sg" }, { codes: ["shi"], path: "shi" }, { codes: ["si"], path: "si" }, { codes: ["sk"], path: "sk" }, { codes: ["sl"], path: "sl" }, { codes: ["sn"], path: "sn" }, { codes: ["so"], path: "so" }, { codes: ["sq"], path: "sq" }, { codes: ["sr"], path: "sr" }, { codes: ["sv"], path: "sv" }, { codes: ["sw"], path: "sw" }, { codes: ["swc"], path: "swc" }, { codes: ["ta"], path: "ta" }, { codes: ["te"], path: "te" }, { codes: ["th"], path: "th" }, { codes: ["ti"], path: "ti" }, { codes: ["tk"], path: "tk" }, { codes: ["tr"], path: "tr" }, { codes: ["uk"], path: "uk" }, { codes: ["ur"], path: "ur" }, { codes: ["uz"], path: "uz" }, { codes: ["vi"], path: "vi" }, { codes: ["yo"], path: "yo" }, { codes: ["zh"], path: "zh" }, { codes: ["zu"], path: "zu" }], routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false, fallbackType: "redirect" } }, isBuild: true };
const { trailingSlash, format, site, i18n, isBuild } = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, fallback, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
toFallbackType(routing);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  domains,
  ...options
});
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;

const $$Astro = createAstro();
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const currentLocale = Astro2.currentLocale;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-row justify-center astro-ltpqzwiw"> <div class="language-select astro-ltpqzwiw"> <select onchange="window.location.href = this.value" class="astro-ltpqzwiw"> ${Object.entries(LOCALES_FLAGS).map(([locale, label]) => renderTemplate`<option${addAttribute(getRelativeLocaleUrl(locale, ""), "value")}${addAttribute(currentLocale === locale, "selected")} class="astro-ltpqzwiw"> ${label} </option>`)} </select> </div> </div> `;
}, "/home/prometeu/Documentos/Astro/gnosisapp/src/components/LanguageSelector.astro", undefined);

export { $$LanguageSelector as $ };
