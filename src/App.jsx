import { BrowserRouter, Route, Routes } from "react-router-dom"
import StudentLayout from "./Layout/StudentLayout"
import About from "./Component/Student/About/About"
import Home from "./Component/Student/Home/Home"
import Course from "./Component/Student/Course/Course"
import Resource from "./Component/Student/Resource/Resource"
import Notes from "./Component/Student/Notes/Notes"
import Profile from "./Component/Student/Profile/Profile"
import Login from "./Component/Auth/Login"
import Register from "./Component/Auth/Register"
import { ToastContainer } from "react-toastify"
import AdminLayout from "./Layout/AdminLayout"
import AdDashBoard from "./Component/Admin/DashBoard/AdDashBoard"
import ManageNotes from "./Component/Admin/ManageNotes/ManageNotes"
import ManagePaper from "./Component/Admin/ManagePaper/ManagePaper"
import ManageGroupStudy from "./Component/Admin/GroupStudy/ManageGroupStudy"
import ManageResource from "./Component/Admin/ManageResource/ManageResource"
import AddNotes from "./Component/Alumni/AddNotes"
import AddPaper from "./Component/Alumni/AddPaper"
import AddResource from "./Component/Alumni/AddResource"
import ProtectedRoute from "./Component/Auth/ProtectedRoutes"

// Upload and profile access: admin (1), alumni (2), students (3)
const MEMBER_TYPES = [1, 2, 3]

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Student and public routes */}
          <Route path="/" element={<StudentLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="course" element={<Course />} />
            <Route path="resource" element={<Resource />} />
            <Route path="notes" element={<Notes />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* Logged-in members only */}
            <Route path="profile" element={
              <ProtectedRoute allowedTypes={MEMBER_TYPES}><Profile /></ProtectedRoute>
            } />
            <Route path="upload/notes" element={
              <ProtectedRoute allowedTypes={MEMBER_TYPES}><AddNotes /></ProtectedRoute>
            } />
            <Route path="upload/papers" element={
              <ProtectedRoute allowedTypes={MEMBER_TYPES}><AddPaper /></ProtectedRoute>
            } />
            <Route path="upload/videos" element={
              <ProtectedRoute allowedTypes={MEMBER_TYPES}><AddResource /></ProtectedRoute>
            } />
          </Route>

          {/* Admin routes: admin only */}
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
            <Route path="manageresource/addresource" element={<AddResource />} />
            <Route path="managegroupstudy" element={<ManageGroupStudy />} />
          </Route>
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App