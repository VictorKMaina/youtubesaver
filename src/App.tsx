import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./layout/Home"
import styles from "./App.module.scss"
import { useState } from "react"
import Convert from "./layout/Convert"
import { Page } from "./types"
import Complete from "./layout/Complete"

export default function App() {
    const [page, setPage] = useState<Page>("complete")

    function handleChangePage(page: Page) {
        setPage(page)
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Main page={page} onPageChange={handleChangePage} />
            </main>
            <Footer />
        </>
    )
}

interface MainProps {
    page: Page
    onPageChange: (page: Page) => void
}

function Main({ page, onPageChange }: MainProps) {
    if (page === "home") return <Home onPageChange={onPageChange} />
    if (page === "convert") return <Convert onPageChange={onPageChange} />
    if (page === "complete") return <Complete onPageChange={onPageChange} />

    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="title">404 Error</h1>
            <div className="subtitle">Page not found</div>
        </div>
    )
}
