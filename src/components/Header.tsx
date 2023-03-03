import { CSSProperties } from "react"
import logo from "../assets/logo.svg"

export default function Header() {
    const headerStyles: CSSProperties = {
        textAlign: "center",
        marginBottom: "3rem",
    }

    return (
        <header style={headerStyles}>
            <h1>
                <img
                    style={{ marginBottom: "1rem" }}
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
