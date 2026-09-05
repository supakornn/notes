import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.PageTitle()],
  afterBody: [Component.HomeSections()],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/supakornn",
      Twitter: "https://twitter.com/supak0rnn",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [],
  right: [Component.Backlinks()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [],
  right: [],
}
