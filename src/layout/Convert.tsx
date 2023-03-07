import { PageProps } from "../types"
import style from "./Convert.module.scss"
import VideoDetails from "../components/VideoDetails"
import ProgressBar from "../components/ProgressBar"

export default function Convert({ onPageChange }: PageProps) {
    return (
        <div className={style.convertWrapper}>
            <VideoDetails
                thumbnailUrl="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
            >
                <small className="text-muted">Converting to video...</small>
            </VideoDetails>
            <ProgressBar onPageChange={onPageChange} />
        </div>
    )
}
