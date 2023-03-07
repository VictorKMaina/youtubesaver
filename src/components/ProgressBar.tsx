import style from "./ProgressBar.module.scss"
import Button from "./Button"
import concatClassNames from "../helpers/concatClassnames"
import { Page } from "../types"

interface ProgressBarProps {
    onPageChange: (page: Page) => void
}

export default function ProgressBar({ onPageChange }: ProgressBarProps) {
    const classNames = concatClassNames(style.progressText, "text-primary")

    return (
        <div className={style.progressBarWrapper}>
            <div className={style.progressOuter}>
                <div className={classNames}>Converting 50%</div>
                <div className={style.progressInner}></div>
            </div>
            <Button onClick={() => onPageChange("home")} variant="secondary">
                Cancel
            </Button>
        </div>
    )
}
