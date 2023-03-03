import { CSSProperties } from "react"
import Button from "../components/Button"
import URLInput from "../components/URLInput"
import FormatSelector from "../components/FormatSelector"

export default function Home() {
    const formStyles: CSSProperties = {
        display: "flex",
        flexFlow: "column",
        gap: "3rem",
    }
    return (
        <form style={formStyles}>
            <URLSection />
            <FormatSelector />
        </form>
    )
}

function URLSection() {
    const urlBarWrapperStyles: CSSProperties = {
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "1rem",
    }

    return (
        <div className="url-bar-section">
            <h2 style={{ marginBottom: "1rem" }} className="small text-muted">
                Paste your YouTube link here
            </h2>
            <div className="url-bar-wrapper" style={urlBarWrapperStyles}>
                <URLInput />
                <Button>Convert</Button>
            </div>
        </div>
    )
}
