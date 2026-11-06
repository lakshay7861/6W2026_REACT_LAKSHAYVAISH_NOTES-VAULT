import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import AuthService from "../../Services/AuthService"

const UPLOAD_TYPES = [1, 2, 3]   // admin, alumni, students
const COURSES = [
    { key: "btech", label: "B-Tech" },
    { key: "bsc", label: "B-Sc" },
    { key: "bcom", label: "B-Com" },
    { key: "mtech", label: "M-Tech" },
    { key: "msc", label: "M-Sc" },
]

const css = `
.sh { background: #fff; border-bottom: 1px solid #e5e7eb; position: sticky; top: 0; z-index: 1000; }
.sh-inner { position: relative; width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 32px; height: 72px; display: flex; align-items: center; gap: 24px; box-sizing: border-box; }
.sh-logo { font-weight: 800; font-size: 1.9rem; color: #198754; text-decoration: none; white-space: nowrap; letter-spacing: -0.5px; }
.sh-nav { display: flex; align-items: center; gap: 4px; list-style: none; margin: 0 0 0 auto; padding: 0; }
.sh-nav > li { position: relative; }
.sh-link, .sh-btn { display: flex; align-items: center; gap: 4px; padding: 9px 14px; color: #374151; text-decoration: none; font-size: 1rem; background: none; border: none; border-radius: 6px; cursor: pointer; white-space: nowrap; font-family: inherit; }
.sh-link:hover, .sh-btn:hover { color: #198754; background: #f0faf4; }
.sh-link.active { color: #198754; font-weight: 600; }
.sh-caret { font-size: 0.7rem; opacity: 0.7; }
.sh-menu { display: none; position: absolute; top: 100%; left: 0; min-width: 210px; margin: 6px 0 0; padding: 6px 0; list-style: none; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.08); z-index: 1100; }
.sh-menu.open { display: block; }
.sh-menu a { display: block; padding: 9px 16px; color: #374151; text-decoration: none; font-size: 0.95rem; }
.sh-menu a:hover { background: #f0faf4; color: #198754; }
.sh-sub { position: relative; }
.sh-sub > .sh-menu { top: 0; left: 100%; margin: 0 0 0 4px; }
.sh-sub > .sh-btn { width: 100%; justify-content: space-between; }
.sh-user { font-size: 0.9rem; color: #6b7280; padding: 0 8px; white-space: nowrap; }
.sh-cta { border: 1px solid #198754; color: #198754; }
.sh-cta:hover { background: #198754; color: #fff; }
.sh-burger { display: none; margin-left: auto; background: none; border: none; font-size: 1.7rem; line-height: 1; color: #374151; cursor: pointer; padding: 6px 10px; }

@media (max-width: 1199px) {
    .sh-inner { padding: 0 20px; gap: 12px; }
    .sh-nav { gap: 2px; }
    .sh-link, .sh-btn { padding: 8px 10px; font-size: 0.95rem; }
}

@media (max-width: 991px) {
    .sh-inner { height: 64px; padding: 0 16px; }
    .sh-logo { font-size: 1.6rem; }
    .sh-burger { display: block; }
    .sh-nav { display: none; position: absolute; top: 64px; left: 0; right: 0; flex-direction: column; align-items: stretch; gap: 0; margin: 0; padding: 8px 16px 16px; background: #fff; border-bottom: 1px solid #e5e7eb; box-shadow: 0 8px 16px rgba(0,0,0,0.06); max-height: calc(100vh - 64px); overflow-y: auto; }
    .sh-nav.open { display: flex; }
    .sh-nav > li > .sh-link, .sh-nav > li > .sh-btn { width: 100%; padding: 12px 8px; border-radius: 0; border-bottom: 1px solid #f1f3f5; justify-content: space-between; font-size: 1rem; }
    .sh-menu { position: static; min-width: 0; margin: 0; padding: 0 0 0 12px; box-shadow: none; border: none; background: transparent; }
    .sh-menu a { padding: 8px; }
    .sh-sub > .sh-menu { left: auto; margin: 0; }
    .sh-user { padding: 10px 8px; }
}
`

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)   // mobile panel
    const [openMenu, setOpenMenu] = useState(null)    // "papers" | "upload" | null
    const [openCourse, setOpenCourse] = useState(null)
    const [user, setUser] = useState(null)
    const headerRef = useRef(null)
    const nav = useNavigate()
    const location = useLocation()

    // Re-read login state on every route change (e.g. after login)
    useEffect(() => {
        setUser(AuthService.getData())
    }, [location.pathname])

    const closeAll = () => {
        setMenuOpen(false)
        setOpenMenu(null)
        setOpenCourse(null)
    }

    // Close everything on route change
    useEffect(() => {
        closeAll()
    }, [location.pathname])

    // Click outside the header closes open dropdowns
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

                        {/* Question papers dropdown */}
                        <li>
                            <button className="sh-btn" onClick={() => toggleMenu("papers")}>
                                Question Papers <span className="sh-caret">▾</span>
                            </button>
                            <ul className={`sh-menu ${openMenu === "papers" ? "open" : ""}`}>
                                {COURSES.map((c) => (
                                    <li key={c.key} className="sh-sub">
                                        <button
                                            className="sh-btn"
                                            onClick={() => setOpenCourse(openCourse === c.key ? null : c.key)}
                                        >
                                            {c.label} <span className="sh-caret">▸</span>
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

                        {/* Logged-in items */}
                        {user ? (
                            <>
                                {canUpload && (
                                    <li>
                                        <button className="sh-btn" onClick={() => toggleMenu("upload")}>
                                            Upload <span className="sh-caret">▾</span>
                                        </button>
                                        <ul className={`sh-menu ${openMenu === "upload" ? "open" : ""}`}>
                                            <li><Link to="/upload/notes" onClick={closeAll}>Upload Notes</Link></li>
                                            <li><Link to="/upload/papers" onClick={closeAll}>Upload Paper</Link></li>
                                            <li><Link to="/upload/videos" onClick={closeAll}>Upload Video</Link></li>
                                        </ul>
                                    </li>
                                )}
                                {isAdmin && (
                                    <li><NavLink to="/admin" className="sh-link" onClick={closeAll}>Admin</NavLink></li>
                                )}
                                <li><NavLink to="/profile" className="sh-link" onClick={closeAll}>Profile</NavLink></li>
                                <li className="sh-user">{user.name || "User"}</li>
                                <li>
                                    <button className="sh-btn sh-cta" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/login" className="sh-link" onClick={closeAll}>Login</NavLink></li>
                                <li>
                                    <NavLink to="/register" className="sh-link sh-cta" onClick={closeAll}>
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>

                    <button
                        className="sh-burger"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header