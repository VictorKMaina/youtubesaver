import { PropsWithChildren, useMemo } from "react"
import style from "./FormatSelector.module.scss"
import { useState, useRef } from "react"
import { Icon } from "@iconify-icon/react"
import concatClassNames from "../helpers/concatClassnames"

type Format = "video" | "audio"

export default function FormatSelector() {
    const [selectedFormat, setSelectedFormat] = useState<Format>("video")

    const selectorClassNames = concatClassNames(
        style.formatSelector,
        style[`${selectedFormat}Selected`]
    )

    function handleFormatChange(format: Format) {
        setSelectedFormat(format)
    }

    return (
        <fieldset className={style.formatSelectorWrapper}>
            <legend className="small text-muted">Choose format</legend>
            <div className={selectorClassNames}>
                <FormatButton
                    id="video"
                    name="mediaFormat"
                    icon="ic:round-videocam"
                    onFormatChange={handleFormatChange}
                    selectedFormat={selectedFormat}
                >
                    Video
                </FormatButton>
                <FormatButton
                    id="audio"
                    name="mediaFormat"
                    icon="ic:round-audiotrack"
                    onFormatChange={handleFormatChange}
                    selectedFormat={selectedFormat}
                >
                    Audio
                </FormatButton>
            </div>
        </fieldset>
    )
}

interface FormatButtonProps extends PropsWithChildren {
    id: Format
    name: string
    icon: string
    selectedFormat: Format
    onFormatChange: (format: Format) => void
}

function FormatButton({
    children,
    id,
    name,
    icon,
    selectedFormat,
    onFormatChange,
}: FormatButtonProps) {
    const radioRef = useRef<HTMLInputElement>(null)

    const buttonClassNames = concatClassNames(
        style.formatButton,
        selectedFormat === id ? style.selected : ""
    )

    function handleClick() {
        onFormatChange(id)
        if (radioRef?.current) {
            radioRef.current.checked = true
        }
    }

    return (
        <div>
            <button
                className={buttonClassNames}
                type="button"
                onClick={handleClick}
            >
                <Icon icon={icon} />
                {children}
            </button>
            <div hidden>
                <label htmlFor={id}>{children}</label>
                <input ref={radioRef} type="radio" name={name} id={id} />
            </div>
        </div>
    )
}
