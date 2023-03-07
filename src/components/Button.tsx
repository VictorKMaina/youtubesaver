import styles from "./Button.module.scss"
import { Icon } from "@iconify-icon/react"
import concatClassNames from "../helpers/concatClassnames"
import { PropsWithChildren } from "react"

interface ButtonProps extends PropsWithChildren {
    icon?: string | null
    type?: "button" | "submit" | "reset" | undefined
    variant?: "primary" | "secondary"
    className?: string
    onClick?: (e: React.MouseEvent) => void
}

export default function Button({
    children,
    icon = null,
    type = "button",
    variant = "primary",
    className = "",
    onClick,
}: ButtonProps) {
    const classNames = concatClassNames(
        styles.button,
        styles[variant],
        className
    )

    return (
        <button className={classNames} type={type} onClick={onClick}>
            <span>{children}</span>
            {icon && <Icon icon={icon} style={{ fontSize: "1.25em" }} />}
        </button>
    )
}
