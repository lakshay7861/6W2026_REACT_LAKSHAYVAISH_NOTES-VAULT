import { BrowserRouter, Route, Routes } from "react-router-dom"
import StudentLayout from "./Layout/StudentLayout"
import About from "./Component/Student/About/About"
import Home from "./Component/Student/Home/Home"
import Course from "./Component/Student/Course/Course"
import Login from "./Component/Auth/Login"
import Register from "./Component/Auth/Register"
import { ToastContainer } from "react-toastify"
import AdminLayout from "./Layout/AdminLayout"
import AdDashBoard from "./Component/Admin/DashBoard/AdDashBoard"
import ManageNotes from "./Component/Admin/ManageNotes/ManageNotes"
import ManagePaper from "./Component/Admin/ManagePaper/ManagePaper"
import ManageResource from "./Component/Admin/ManageResource/ManageResource"
import ManageGroupStudy from "./Component/Admin/GroupStudy/ManageGroupStudy"
import AddNotes from "./Component/Alumni/AddNotes"
import AddPaper from "./Component/Alumni/AddPaper"
import ProtectedRoute from "./Component/Auth/ProtectedRoutes"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="course" element={<Course />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/admin" element={
            <ProtectedRoute allowedTypes={[1]}>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdDashBoard />} />
            <Route path="managenotes" element={<ManageNotes />} />
            <Route path="managenotes/addnotes" element={<AddNotes />} />
            <Route path="managepaper" element={<ManagePaper />} />
            <Route path="managepaper/addpaper" element={<AddPaper />} />
            <Route path="manageresource" element={<ManageResource />} />
            <Route path="managegroupstudy" element={<ManageGroupStudy />} />
          </Route>
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App