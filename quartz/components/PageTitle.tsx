import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const path = fileData.slug === "index" ? "~" : `~/${fileData.slug}`
  return (
    <div class={classNames(displayClass, "site-header")}>
      <div class="site-header-top">
        <h2 class="page-title">
          <a href={baseDir}>
            {title}
            <span aria-hidden="true" class="terminal-cursor">
              █
            </span>
          </a>
        </h2>
        <span class="current-path">{path}</span>
      </div>
      <nav aria-label="Site links">
        <a href="https://github.com/supakornn">github</a>
        <a href="https://twitter.com/supak0rnn">twitter</a>
        <a href={`${baseDir}/index.xml`}>rss</a>
      </nav>
    </div>
  )
}

PageTitle.css = `
.site-header {
  width: 100%;
}

.site-header-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.25;
}

.terminal-cursor {
  display: inline-block;
  margin-left: 0.15em;
  color: var(--gray);
  font-size: 0.75em;
  animation: blink 1.1s step-end infinite;
}

.current-path,
.site-header nav {
  color: var(--gray);
  font-family: var(--codeFont);
  font-size: 0.8rem;
}

.site-header nav {
  display: flex;
  gap: 1.1rem;
  margin-top: 0.25rem;
}

.site-header nav a {
  color: var(--gray);
  font-weight: 400;
}

@keyframes blink { 50% { opacity: 0; } }
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
