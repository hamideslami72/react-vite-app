import Header from "./components/layouts/Header"
import Main from "./components/home/Main"
import Footer from "./components/layouts/Footer"
import { UserContext } from "./contexts/UserContext"

let user = 'AmirAli Eslami'

export default function Home(){
    return(
        <>
            {/* <Header /> */}
                <Main />
            {/* <Footer /> */}
        </>
    )
}