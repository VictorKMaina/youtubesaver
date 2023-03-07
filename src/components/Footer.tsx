import { Icon } from "@iconify-icon/react"
import style from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer className={style.footer}>
            <span>Developed with</span>
            <Icon className="text-secondary-2" icon="mdi:cards-heart" />
            <span>by</span>
            <a className="text-primary" href="https://victormaina.com">
                Victor Maina
            </a>
        </footer>
    )
}
