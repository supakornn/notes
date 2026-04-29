import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "supakorn.me",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "supakorn.me",
    ignorePatterns: ["private", "templates"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: {
          name: "DM Serif Display",
          weights: [400],
        },
        body: "Bricolage Grotesque",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          // Catppuccin Latte
          light: "#eff1f5",
          lightgray: "#ccd0da",
          gray: "#8c8fa1",
          darkgray: "#4c4f69",
          dark: "#4c4f69",
          secondary: "#40a02b",
          tertiary: "#179299",
          highlight: "rgba(64, 160, 43, 0.15)",
          textHighlight: "rgba(64, 160, 43, 0.4)",
        },
        darkMode: {
          // Catppuccin Macchiato
          light: "#24273a",
          lightgray: "#363a4f",
          gray: "#8087a2",
          darkgray: "#b8c0e0",
          dark: "#cad3f5",
          secondary: "#a6da95",
          tertiary: "#8bd5ca",
          highlight: "rgba(166, 218, 149, 0.15)",
          textHighlight: "rgba(166, 218, 149, 0.4)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.Poetry(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
        parseTags: false,
        mermaid: false,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", lazyLoad: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.ClickableImages(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
