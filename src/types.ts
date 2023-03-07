export type Page = "home" | "convert" | "complete"

export interface PageProps {
    onPageChange: (page: Page) => void
}