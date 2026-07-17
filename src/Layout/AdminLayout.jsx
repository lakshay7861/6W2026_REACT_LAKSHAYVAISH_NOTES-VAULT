import { Outlet } from "react-router-dom";
import AdHeader from "../Component/Admin/AdHeader";
import AdFooter from "../Component/Admin/AdFooter";


function AdminLayout() {
    return ( 
    <>
    <AdHeader/>
    <Outlet/>
    <AdFooter/>
    </>
    )
}
export default AdminLayout