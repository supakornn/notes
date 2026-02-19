import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

const recentNotes = [
    Component.RecentNotes({
    title: "Posts",
    limit: 4,
    filter: (f) =>
      f.slug!.startsWith("posts/") && f.slug! !== "posts/index" && !f.frontmatter?.noindex,
    linkToMore: "posts/" as SimpleSlug,
  }),
    Component.RecentNotes({
    title: "Projects",
    limit: 2,
    filter: (f) => f.slug!.startsWith("Projects/"),
    linkToMore: "Projects/" as SimpleSlug,
  }),
    Component.RecentNotes({
    title: "Notes",
    limit: 2,
    filter: (f) => f.slug!.startsWith("notes/"),
    linkToMore: "notes/" as SimpleSlug,
  }),
      Component.RecentNotes({
    title: "CTF",
    limit: 2,
    filter: (f) => f.slug!.startsWith("ctf/"),
    linkToMore: "ctf/" as SimpleSlug,
  }),
  Component.RecentNotes({
    title: "Life",
    limit: 2,
    filter: (f) => f.slug!.startsWith("life/"),
    linkToMore: "life/" as SimpleSlug,
  }),
]

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [...recentNotes.map((c) => Component.MobileOnly(c))],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/supakornn",
      Twitter: "https://twitter.com/supak0rnn",
    },
  }),
}

const left = [
  Component.PageTitle(),
  Component.MobileOnly(Component.Spacer()),
  Component.Flex({
    components: [
      {
        Component: Component.Search(),
        grow: true,
      },
      { Component: Component.Darkmode() },
    ],
  }),
  ...recentNotes.map((c) => Component.DesktopOnly(c)),
]

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left,
  right: [
    Component.DesktopOnly(
      Component.Graph({
        localGraph: {
          showTags: false,
        },
        globalGraph: {
          showTags: false,
        },
      }),
    ),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left,
  right: [],
}
