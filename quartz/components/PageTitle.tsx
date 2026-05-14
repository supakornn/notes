import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title-wrapper")}>
      <h2 class="page-title">
        <a href={baseDir}>{title}</a>
      </h2>
      <a
        href="https://webring.wonderful.software#supakorn.me"
        title="วงแหวนเว็บ"
        class="webring-link"
      >
        <img
          alt="วงแหวนเว็บ"
          width="24"
          height="24"
          src="https://webring.wonderful.software/webring.black.svg"
          class="webring-light"
        />
        <img
          alt="วงแหวนเว็บ"
          width="24"
          height="24"
          src="https://webring.wonderful.software/webring.white.svg"
          class="webring-dark"
        />
      </a>
    </div>
  )
}

PageTitle.css = `
.page-title-wrapper {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 900;
  margin: 0;
  white-space: nowrap;
  line-height: 1;
}

.webring-link {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  opacity: 0.55;
  transition: opacity 0.25s ease;
  position: relative;
  top: 1px;
}

.webring-link:hover {
  opacity: 1;
}

.webring-link img {
  display: block;
  transform: rotate(0deg);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.webring-link:hover img {
  transform: rotate(360deg);
}

:root[saved-theme="dark"] .webring-light { display: none; }
:root:not([saved-theme="dark"]) .webring-dark { display: none; }
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
