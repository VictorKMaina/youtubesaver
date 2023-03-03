import { Icon } from "@iconify-icon/react"
import { CSSProperties, useRef } from "react"
import linkIcon from "../assets/ic_round-link.svg"
import styles from "./URLInput.module.scss"

export default function URLInput() {
    const inputRef = useRef<HTMLInputElement>(null)

    function handleWrapperClick() {
        if (inputRef?.current) inputRef.current.focus()
    }

    function handleButtonClick(e: React.MouseEvent) {
        e.stopPropagation()
    }

    const inputStyles: CSSProperties = {
        width: "100%",
    }

    return (
        <div onClick={handleWrapperClick} className={styles.urlInputWrapper}>
            <img src={linkIcon} alt="link icon" />

            <input
                id="youtubeLink"
                name="youtubeLink"
                ref={inputRef}
                style={inputStyles}
                type="text"
                title="YouTube link"
            />

            <button
                onClick={handleButtonClick}
                type="button"
                className="small text-primary"
            >
                <Icon
                    icon="ic:round-content-paste"
                    className="text-secondary"
                />
                <span>Paste</span>
            </button>
        </div>
    )
}
