import style from "./VideoDetails.module.scss"

interface VideoDetailsProps extends React.PropsWithChildren {
    thumbnailUrl: string
    title: string
}

export default function VideoDetails({
    children,
    title,
    thumbnailUrl,
}: VideoDetailsProps) {
    return (
        <figure className={style.videoDetailsWrapper}>
            <div className={style.thumbnailWrapper}>
                <img src={thumbnailUrl} alt="" />
            </div>
            <div className={style.videoDetails}>
                <figcaption>{title}</figcaption>
                {children}
            </div>
        </figure>
    )
}
