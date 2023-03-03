import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./layout/Home"
import styles from "./App.module.scss"

export default function App() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Home />
            </main>
            <Footer />
        </>
    )
}
