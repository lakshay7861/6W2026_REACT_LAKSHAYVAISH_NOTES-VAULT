import { Outlet } from "react-router-dom"
import Header from "../Component/Student/Header"
import Footer from "../Component/Student/Footer"
function StudentLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default StudentLayout