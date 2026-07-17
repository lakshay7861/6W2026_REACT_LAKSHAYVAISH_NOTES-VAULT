import { BrowserRouter, Route, Routes } from "react-router-dom"
import StudentLayout from "./Layout/StudentLayout"
import About from "./Component/Student/About/About"
import Home from "./Component/Student/Home/Home"
import Course from "./Component/Student/Course/Course"
import Login from "./Component/Auth/Login"
import { ToastContainer } from "react-toastify"
import Register from "./Component/Auth/Register"
import AdminLayout from "./Layout/AdminLayout"
// import AdminDashboard from "./Component/Admin/DashBoard/AdminDashBoard"
import ManageNotes from "./Component/Admin/ManageNotes/ManageNotes"
import ManagePaper from "./Component/Admin/ManagePaper/ManagePaper"
import ManageResource from "./Component/Admin/ManageResource/ManageResource"
import ManageGroupStudy from "./Component/Admin/GroupStudy/ManageGroupStudy"
import AddNotes from "./Component/Alumni/AddNotes"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>



          <Route path="/" element={<StudentLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            {/* <Route path="admindashboard" element={<AdminDashboard />} /> */}
            <Route path="/adminmanagenotes" element={<ManageNotes />} />
            <Route path="managepaper" element={<ManagePaper />} />
            <Route path="manageresource" element={<ManageResource />} />
            <Route path="login" element={<Login />} />
            <Route path="managegroupstudy" element={<ManageGroupStudy />} />
            <Route path="addnotes" element={<AddNotes/>}/>
            
          </Route>
          <Route path="addnotes" element={<AddNotes/>}>



          </Route>



        </Routes>


        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
