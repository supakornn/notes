import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const homeGraph = Component.ConditionalRender({
  component: Component.Graph({
    localGraph: { depth: -1, initialZoom: 0.35, showTags: false },
    globalGraph: { showTags: false },
  }),
  condition: ({ fileData }) => fileData.slug === "index",
})

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.PageTitle(), Component.Darkmode()],
  afterBody: [Component.HomeSections(), Component.Backlinks()],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [],
  right: [homeGraph],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [],
  right: [],
}
