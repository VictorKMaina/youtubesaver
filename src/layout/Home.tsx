import { CSSProperties } from "react"
import Button from "../components/Button"
import URLInput from "../components/URLInput"
import FormatSelector from "../components/FormatSelector"
import style from "./Home.module.scss"

export default function Home() {
    return (
        <form className={style.form}>
            <URLSection />
            <FormatSelector />
        </form>
    )
}

function URLSection() {
    return (
        <div className="url-bar-section">
            <h2 style={{ marginBottom: "1rem" }} className="small text-muted">
                Paste your YouTube link here
            </h2>
            <div className={style.urlBarWrapper}>
                <URLInput />
                <Button>Convert</Button>
            </div>
        </div>
    )
}
