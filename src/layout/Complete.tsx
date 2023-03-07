import { PageProps } from "../types"
import style from "./Complete.module.scss"
import VideoDetails from "../components/VideoDetails"
import Button from "../components/Button"

export default function Complete({ onPageChange }: PageProps) {
    return (
        <div className={style.completeWrapper}>
            <VideoDetails
                thumbnailUrl="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
            >
                <Button
                    className={style.downloadButton}
                    icon="ic:round-file-download"
                >
                    Download video
                </Button>
            </VideoDetails>
            <footer>
                <p className="small text-muted">Successfully completed!</p>
                <Button
                    onClick={() => onPageChange("home")}
                    variant="secondary"
                    icon="ic:round-refresh"
                >
                    Start again
                </Button>
            </footer>
        </div>
    )
}
