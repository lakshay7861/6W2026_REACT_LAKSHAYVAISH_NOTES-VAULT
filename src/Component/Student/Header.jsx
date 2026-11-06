import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import AuthService from "../../Services/AuthService"

const UPLOAD_TYPES = [1, 2, 3]
const COURSES = [
    { key: "btech", label: "B-Tech" },
    { key: "bsc", label: "B-Sc" },
    { key: "bcom", label: "B-Com" },
    { key: "mtech", label: "M-Tech" },
    { key: "msc", label: "M-Sc" },
]

const css = `
.sh { background: #198754; position: sticky; top: 0; z-index: 1000; }
.sh-inner { max-width: 1400px; margin: 0 auto; padding: 0 24px; height: 64px; display: flex; align-items: center; gap: 16px; }
.sh-logo { font-weight: 700; font-size: 1.6rem; color: #fff; text-decoration: none; margin-right: auto; }
.sh-nav { display: flex; align-items: center; gap: 4px; list-style: none; margin: 0; padding: 0; }
.sh-nav > li { position: relative; }
.sh-link, .sh-btn { display: block; padding: 8px 12px; color: #fff; text-decoration: none; font-size: 0.98rem; background: none; border: none; border-radius: 6px; cursor: pointer; font-family: inherit; white-space: nowrap; }
.sh-link:hover, .sh-btn:hover { background: rgba(255,255,255,0.15); }
.sh-link.active { font-weight: 600; background: rgba(255,255,255,0.2); }
.sh-menu { display: none; position: absolute; top: 100%; left: 0; min-width: 200px; margin: 6px 0 0; padding: 6px 0; list-style: none; background: #fff; border-radius: 8px; box-shadow: 0 6px 20px rgba(0,0,0,0.12); }
.sh-menu.open { display: block; }
.sh-menu a { display: block; padding: 8px 16px; color: #374151; text-decoration: none; font-size: 0.95rem; }
.sh-menu a:hover { background: #f0faf4; color: #198754; }
.sh-sub { position: relative; }
.sh-sub > .sh-menu { top: 0; left: 100%; margin-left: 4px; }
.sh-user { color: #d1f0de; font-size: 0.9rem; padding: 0 8px; white-space: nowrap; }
.sh-burger { display: none; margin-left: auto; background: none; border: none; color: #fff; font-size: 1.6rem; cursor: pointer; padding: 4px 8px; }

@media (max-width: 991px) {
    .sh-inner { padding: 0 16px; }
    .sh-burger { display: block; }
    .sh-nav { display: none; position: absolute; top: 64px; left: 0; right: 0; flex-direction: column; align-items: stretch; gap: 0; padding: 8px 16px 16px; background: #198754; }
    .sh-nav.open { display: flex; }
    .sh-nav > li > .sh-link, .sh-nav > li > .sh-btn { width: 100%; text-align: left; }
    .sh-menu { position: static; min-width: 0; margin: 0; padding: 0 0 0 12px; background: transparent; box-shadow: none; }
    .sh-menu a { color: #e9f7ef; }
    .sh-menu a:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .sh-sub > .sh-menu { left: auto; margin: 0; }
}
`

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(null)
    const [openCourse, setOpenCourse] = useState(null)
    const [user, setUser] = useState(null)
    const headerRef = useRef(null)
    const nav = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setUser(AuthService.getData())
        setMenuOpen(false)
        setOpenMenu(null)
        setOpenCourse(null)
    }, [location.pathname])

    useEffect(() => {
        function handleClick(e) {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setOpenMenu(null)
                setOpenCourse(null)
            }
        }
        document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, [])

    const closeAll = () => {
        setMenuOpen(false)
        setOpenMenu(null)
        setOpenCourse(null)
    }

    const toggleMenu = (name) => {
        setOpenMenu(openMenu === name ? null : name)
        setOpenCourse(null)
    }

    const handleLogout = () => {
        AuthService.logout()
        setUser(null)
        closeAll()
        nav("/login", { replace: true })
    }

    const canUpload = user && UPLOAD_TYPES.includes(Number(user.userType))
    const isAdmin = user && Number(user.userType) === 1

    return (
        <>
            <style>{css}</style>
            <header className="sh" ref={headerRef}>
                <div className="sh-inner">
                    <Link to="/" className="sh-logo" onClick={closeAll}>Notes Vault</Link>

                    <ul className={`sh-nav ${menuOpen ? "open" : ""}`}>
                        <li><NavLink to="/" end className="sh-link" onClick={closeAll}>Home</NavLink></li>
                        <li><NavLink to="/about" className="sh-link" onClick={closeAll}>About</NavLink></li>
                        <li><NavLink to="/course" className="sh-link" onClick={closeAll}>Course</NavLink></li>
                        <li><NavLink to="/resource" className="sh-link" onClick={closeAll}>Videos</NavLink></li>
                        <li><NavLink to="/notes" className="sh-link" onClick={closeAll}>Notes</NavLink></li>

                        <li>
                            <button className="sh-btn" onClick={() => toggleMenu("papers")}>Question Papers ▾</button>
                            <ul className={`sh-menu ${openMenu === "papers" ? "open" : ""}`}>
                                {COURSES.map((c) => (
                                    <li key={c.key} className="sh-sub">
                                        <button className="sh-btn" style={{ color: "#374151", width: "100%", textAlign: "left" }}
                                            onClick={() => setOpenCourse(openCourse === c.key ? null : c.key)}>
                                            {c.label} ▸
                                        </button>
                                        <ul className={`sh-menu ${openCourse === c.key ? "open" : ""}`}>
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                                                <li key={sem}>
                                                    <Link to="/notes" onClick={closeAll}>Semester {sem}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {user ? (
                            <>
                                {canUpload && (
                                    <li>
                                        <button className="sh-btn" onClick={() => toggleMenu("upload")}>Upload ▾</button>
                                        <ul className={`sh-menu ${openMenu === "upload" ? "open" : ""}`}>
                                            <li><Link to="/upload/notes" onClick={closeAll}>Upload Notes</Link></li>
                                            <li><Link to="/upload/papers" onClick={closeAll}>Upload Paper</Link></li>
                                            <li><Link to="/upload/videos" onClick={closeAll}>Upload Video</Link></li>
                                        </ul>
                                    </li>
                                )}
                                {isAdmin && <li><NavLink to="/admin" className="sh-link" onClick={closeAll}>Admin</NavLink></li>}
                                <li><NavLink to="/profile" className="sh-link" onClick={closeAll}>Profile</NavLink></li>
                                <li className="sh-user">{user.name || "User"}</li>
                                <li><button className="sh-btn" onClick={handleLogout}>Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/login" className="sh-link" onClick={closeAll}>Login</NavLink></li>
                                <li><NavLink to="/register" className="sh-link" onClick={closeAll}>Register</NavLink></li>
                            </>
                        )}
                    </ul>

                    <button className="sh-burger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header