import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { SimpleSlug, resolveRelative } from "../util/path"
import { byDateAndAlphabetical } from "./PageList"
import { Date, getDate } from "./Date"

type Section = {
  title: string
  path: string
  link: SimpleSlug
  limit: number
  matches: (file: QuartzPluginData) => boolean
}

const sections: Section[] = [
  {
    title: "notes",
    path: "~/notes",
    link: "notes/" as SimpleSlug,
    limit: 5,
    matches: (file) => !!file.slug?.startsWith("notes/") && file.frontmatter?.title !== "Bookshelf",
  },
  {
    title: "posts",
    path: "~/posts",
    link: "posts/" as SimpleSlug,
    limit: 10,
    matches: (file) => !!file.slug?.startsWith("posts/") && file.slug !== "posts/index",
  },
  {
    title: "projects",
    path: "~/projects",
    link: "projects/" as SimpleSlug,
    limit: 5,
    matches: (file) =>
      !!file.slug?.startsWith("projects/") || !!file.frontmatter?.tags?.includes("project"),
  },
]

const HomeSections: QuartzComponent = ({ allFiles, cfg, fileData }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  const sort = byDateAndAlphabetical(cfg)
  return (
    <div class="home-sections">
      <section class="home-section now-section">
        <div class="home-section-header">
          <h2># now</h2>
          <span>~/now</span>
        </div>
        <p>learning, building, and writing in public.</p>
      </section>
      {sections.map((section) => {
        const pages = allFiles.filter(section.matches).sort(sort)
        return (
          <section class="home-section">
            <div class="home-section-header">
              <h2># {section.title}</h2>
              <span>{section.path}</span>
            </div>
            {pages.length ? (
              <ul class="home-list">
                {pages.slice(0, section.limit).map((page) => (
                  <li>
                    <a href={resolveRelative(fileData.slug!, page.slug!)}>
                      {page.frontmatter?.title}
                    </a>
                    {page.dates && <Date date={getDate(cfg, page)!} locale={cfg.locale} />}
                  </li>
                ))}
              </ul>
            ) : (
              <p class="empty-section">Nothing here yet.</p>
            )}
            {pages.length > section.limit && (
              <a class="see-all" href={resolveRelative(fileData.slug!, section.link)}>
                all {section.title} →
              </a>
            )}
          </section>
        )
      })}
      <section class="home-section">
        <div class="home-section-header">
          <h2># books</h2>
          <span>~/books</span>
        </div>
        <ul class="home-list">
          <li>
            <a href={resolveRelative(fileData.slug!, "notes/Bookshelf" as SimpleSlug)}>Bookshelf</a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default (() => HomeSections) satisfies QuartzComponentConstructor
