import styles from "./Button.module.scss"
import { Icon } from "@iconify-icon/react"
import concatClassNames from "../helpers/concatClassnames"
import { PropsWithChildren } from "react"

interface ButtonProps extends PropsWithChildren {
    type?: "button" | "submit" | "reset" | undefined
    variant?: "primary" | "secondary"
    onClick?: (e: React.MouseEvent) => void
}

export default function Button({
    children,
    type = "button",
    variant = "primary",
    onClick,
}: ButtonProps) {
    const classNames = concatClassNames(styles.button, styles[variant])

    return (
        <button className={classNames} type={type} onClick={onClick}>
            <span>{children}</span>
            <Icon icon="ic:round-refresh" style={{ fontSize: "1.25em" }} />
        </button>
    )
}
