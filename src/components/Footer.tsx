import { Icon } from "@iconify-icon/react"
import { CSSProperties } from "react"

export default function Footer() {
    const footerStyle: CSSProperties = {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        fontSize: "0.875rem",
        fontWeight: "600",
        gap: "5px",
        padding: "1rem",
        color: "#666"
    }

    return (
        <footer style={footerStyle}>
            <span>Developed with</span>
            <Icon className="text-secondary-2" icon="mdi:cards-heart" />
            <span>by</span>
            <a className="text-primary" href="https://victormaina.com">
                Victor Maina
            </a>
        </footer>
    )
}
