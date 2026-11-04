import { useState } from "react"
import "./Header.css"

function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [paperOpen, setPaperOpen] = useState(false)
  const [activeCourse, setActiveCourse] = useState(null)

  const toggleCourse = (name) => setActiveCourse(activeCourse === name ? null : name)

  return (
    <>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="/" className="logo d-flex align-items-center me-auto text-decoration-none">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.webp" alt=""> */}
            <h1 className="sitename">Notes Vault</h1>
          </a>

          <nav id="navmenu" className={`navmenu ${navOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="/" className="text-decoration-none">
                  Home
                  <br />
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none">About</a>
              </li>
              <li>
                <a href="/course" className="text-decoration-none">Course</a>
              </li>

              <li className={`dropdown ${paperOpen ? "open-sub" : ""}`}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setPaperOpen(!paperOpen)
                  }}
                >
                  <span className="text-decoration-none">Question Paper</span>{" "}
                  <i className="bi bi-chevron-right toggle-dropdown text-decoration-none" />
                </a>

                <ul>
                  <li className={`dropdown ${activeCourse === "btech" ? "open-sub" : ""}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleCourse("btech") }}>
                      <span>B-Tech</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>

                  <li className={`dropdown ${activeCourse === "bsc" ? "open-sub" : ""}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleCourse("bsc") }}>
                      <span>B-Sc</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>

                  <li className={`dropdown ${activeCourse === "bcom" ? "open-sub" : ""}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleCourse("bcom") }}>
                      <span>B-Com</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>

                  <li className={`dropdown ${activeCourse === "mtech" ? "open-sub" : ""}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleCourse("mtech") }}>
                      <span>M-Tech</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>

                  <li className={`dropdown ${activeCourse === "msc" ? "open-sub" : ""}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleCourse("msc") }}>
                      <span>M-Sc</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/login" className="text-decoration-none">Login</a>
              </li>
              <li>
                <a href="/register" className="text-decoration-none">Register</a>
              </li>
            </ul>

            <i
              className={`mobile-nav-toggle d-xl-none bi ${navOpen ? "bi-x" : "bi-list"}`}
              onClick={() => setNavOpen(!navOpen)}
            />
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header