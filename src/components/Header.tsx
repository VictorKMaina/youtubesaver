import { CSSProperties } from "react"
import logo from "../assets/logo.svg"
import style from "./Header.module.scss"

export default function Header() {
    return (
        <header className={style.header}>
            <h1>
                <img
                    src={logo}
                    alt="YouTubeSaver logo"
                />
                <span hidden>YouTubeSaver</span>
            </h1>
            <div className="subtitle text-muted">
                Simple downloader for your YouTube videos
            </div>
        </header>
    )
}
