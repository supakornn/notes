import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <a
          href="https://webring.wonderful.software#supakorn.me"
          title="วงแหวนเว็บ"
          className="group inline-block ml-4"
        >
          <img
            alt="วงแหวนเว็บ"
            width="28"
            height="28"
            src="https://webring.wonderful.software/webring.black.svg"
            className="webring-light transition-transform duration-500 ease-in-out group-hover:rotate-360"
          />
          <img
            alt="วงแหวนเว็บ"
            width="28"
            height="28"
            src="https://webring.wonderful.software/webring.white.svg"
            className="webring-dark transition-transform duration-500 ease-in-out group-hover:rotate-360"
          />
        </a>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
