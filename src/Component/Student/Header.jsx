import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthService from "../../Services/AuthService"

function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [paperOpen, setPaperOpen] = useState(false)
  const [activeCourse, setActiveCourse] = useState(null)
  const [user, setUser] = useState(null)
  const nav = useNavigate()

  useEffect(() => {
    setUser(AuthService.getData())
  }, [])

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("mobile-nav-active")
    } else {
      document.body.classList.remove("mobile-nav-active")
    }
    return () => {
      document.body.classList.remove("mobile-nav-active")
    }
  }, [navOpen])

  const closeNav = () => {
    setNavOpen(false)
    setPaperOpen(false)
    setActiveCourse(null)
  }

  const handleLogout = () => {
    AuthService.logout()
    setUser(null)
    closeNav()
    nav("/login")
  }

  const toggleCourse = (name) => {
    setActiveCourse(activeCourse === name ? null : name)
  }

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center me-auto text-decoration-none" onClick={closeNav}>
          <h1 className="sitename">Notes Vault</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/" className="text-decoration-none" onClick={closeNav}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-decoration-none" onClick={closeNav}>About</Link>
            </li>
            <li>
              <Link to="/course" className="text-decoration-none" onClick={closeNav}>Course</Link>
            </li>
            <li>
              <Link to="/resource" className="text-decoration-none" onClick={closeNav}>Resource</Link>
            </li>
            <li>
              <Link to="/notes" className="text-decoration-none" onClick={closeNav}>Notes</Link>
            </li>

            <li className={`dropdown ${paperOpen ? "active" : ""}`}>
              <a
                href="#"
                className="text-decoration-none"
                onClick={(e) => {
                  e.preventDefault()
                  setPaperOpen(!paperOpen)
                }}
              >
                <span>Question Paper</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>

              <ul style={{ display: paperOpen ? "block" : "" }}>
                {["btech", "bsc", "bcom", "mtech", "msc"].map((course) => (
                  <li key={course} className={`dropdown ${activeCourse === course ? "active" : ""}`}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        toggleCourse(course)
                      }}
                    >
                      <span>
                        {course === "btech" && "B-Tech"}
                        {course === "bsc" && "B-Sc"}
                        {course === "bcom" && "B-Com"}
                        {course === "mtech" && "M-Tech"}
                        {course === "msc" && "M-Sc"}
                      </span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul style={{ display: activeCourse === course ? "block" : "" }}>
                      <li><a href="#">Semester 1</a></li>
                      <li><a href="#">Semester 2</a></li>
                      <li><a href="#">Semester 3</a></li>
                      <li><a href="#">Semester 4</a></li>
                      <li><a href="#">Semester 5</a></li>
                      <li><a href="#">Semester 6</a></li>
                    </ul>
                  </li>
                ))}
              </ul>
            </li>

            {user ? (
              <>
                {Number(user.userType) === 1 && (
                  <li>
                    <Link to="/admin" className="text-decoration-none" onClick={closeNav}>
                      Admin
                    </Link>
                  </li>
                )}
                <li>
                  <a href="#" className="text-decoration-none" onClick={(e) => { e.preventDefault(); handleLogout() }}>
                    Logout ({user.name || "User"})
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="text-decoration-none" onClick={closeNav}>Login</Link>
                </li>
                <li>
                  <Link to="/register" className="text-decoration-none" onClick={closeNav}>Register</Link>
                </li>
              </>
            )}
          </ul>

          <i
            className={`mobile-nav-toggle d-xl-none bi ${navOpen ? "bi-x" : "bi-list"}`}
            onClick={() => setNavOpen(!navOpen)}
            style={{ cursor: "pointer", fontSize: "28px" }}
          ></i>
        </nav>
      </div>
    </header>
  )
}

export default Header