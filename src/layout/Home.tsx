import { FormEvent } from "react"
import Button from "../components/Button"
import URLInput from "../components/URLInput"
import FormatSelector from "../components/FormatSelector"
import style from "./Home.module.scss"
import { PageProps } from "../types"

export default function Home({ onPageChange }: PageProps) {
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        onPageChange("convert")
    }

    return (
        <form onSubmit={handleSubmit} className={style.form}>
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
                <Button type="submit" icon="ic:round-refresh">
                    Convert
                </Button>
            </div>
        </div>
    )
}
