import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "jetbrains mono",
      },
      colors: {
        lightMode: {
          light: "#FAF8F8",
          lightgray: "#E6E6E6",
          gray: "#9A9A9A",
          darkgray: "#4A4A4A",
          dark: "#2A2A2A",
          secondary: "#4FD18F",
          tertiary: "#A6F5C6",
          highlight: "rgba(123, 241, 168, 0.22)",
          textHighlight: "rgba(123, 241, 168, 0.55)",
        },

        darkMode: {
          light: "#161618",
          lightgray: "#3A383A",
          gray: "#8E8E8E",
          darkgray: "#E0E0E0",
          dark: "#F2F2F3",

          // GREEN ACCENT (dark mode ต้อง dim ลง)
          secondary: "#7BF1A8",
          tertiary: "#4FD18F",
          highlight: "rgba(123, 241, 168, 0.14)",
          textHighlight: "rgba(123, 241, 168, 0.45)",
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
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
