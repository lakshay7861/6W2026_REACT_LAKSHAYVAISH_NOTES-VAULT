import { useEffect, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import AuthService from "../../Services/AuthService"

const navItems = [
    { to: "/admin", label: "Dashboard", icon: "bi-speedometer2", end: true },
    { to: "/admin/managenotes", label: "Notes", icon: "bi-file-earmark-text" },
    { to: "/admin/managepaper", label: "Papers", icon: "bi-journal-text" },
    { to: "/admin/manageresource", label: "Resources", icon: "bi-camera-video" },
    { to: "/admin/managegroupstudy", label: "Group Study", icon: "bi-people" },
]

const css = `
.adh { position: sticky; top: 0; z-index: 1000; background: linear-gradient(135deg, #0f5132 0%, #198754 100%); box-shadow: 0 2px 10px rgba(0,0,0,0.15); }
.adh-inner { max-width: 1280px; margin: 0 auto; padding: 12px 20px; display: flex; align-items: center; gap: 16px; }
.adh-brand { color: #fff; font-weight: 700; font-size: 1.25rem; text-decoration: none; display: flex; align-items: center; gap: 8px; white-space: nowrap; }
.adh-brand small { font-weight: 400; opacity: 0.75; font-size: 0.8rem; margin-left: 2px; }
.adh-links { display: flex; align-items: center; gap: 4px; margin-left: auto; list-style: none; margin-top: 0; margin-bottom: 0; padding: 0; }
.adh-links a { color: #d1f0de; text-decoration: none; padding: 8px 12px; border-radius: 30px; font-size: 0.95rem; display: flex; align-items: center; gap: 6px; transition: background 0.2s, color 0.2s; }
.adh-links a:hover { background: rgba(255,255,255,0.12); color: #fff; }
.adh-links a.active { background: #ffffff; color: #0f5132; font-weight: 600; }
.adh-user { display: flex; align-items: center; gap: 10px; margin-left: 12px; color: #fff; }
.adh-avatar { width: 36px; height: 36px; border-radius: 50%; background: #ffffff; color: #0f5132; font-weight: 700; display: flex; align-items: center; justify-content: center; }
.adh-logout { background: rgba(255,255,255,0.15); color: #fff; border: 1px solid rgba(255,255,255,0.3); border-radius: 30px; padding: 6px 14px; font-size: 0.9rem; cursor: pointer; }
.adh-logout:hover { background: rgba(255,255,255,0.25); }
.adh-toggle { display: none; background: none; border: none; color: #fff; font-size: 1.8rem; cursor: pointer; margin-left: auto; line-height: 1; }
.adh-back { color: #d1f0de; font-size: 0.9rem; text-decoration: none; }
.adh-back:hover { color: #fff; }

@media (max-width: 991px) {
    .adh-toggle { display: block; }
    .adh-links, .adh-user { display: none; }
    .adh.open .adh-panel { display: flex; }
    .adh-panel { display: none; flex-direction: column; background: #0f5132; padding: 8px 20px 16px; gap: 4px; }
    .adh-panel a { color: #d1f0de; text-decoration: none; padding: 10px 12px; border-radius: 8px; display: flex; align-items: center; gap: 8px; }
    .adh-panel a.active { background: #ffffff; color: #0f5132; font-weight: 600; }
    .adh-panel .adh-logout { margin-top: 8px; align-self: flex-start; }
}
@media (min-width: 992px) {
    .adh-panel { display: none !important; }
}
`

function AdHeader() {
    const [navOpen, setNavOpen] = useState(false)
    const navigate = useNavigate()
    const user = AuthService.getData()
    const displayName = user?.name || user?.email || "Admin"
    const initial = displayName.charAt(0).toUpperCase()

    // Lock page scroll while the mobile menu is open
    useEffect(() => {
        document.body.classList.toggle("mobile-nav-active", navOpen)
        return () => document.body.classList.remove("mobile-nav-active")
    }, [navOpen])

    const closeNav = () => setNavOpen(false)

    const handleLogout = () => {
        AuthService.logout()
        closeNav()
        navigate("/login", { replace: true })
    }

    return (
        <>
            <style>{css}</style>
            <header className={`adh ${navOpen ? "open" : ""}`}>
                <div className="adh-inner">
                    <Link to="/admin" className="adh-brand" onClick={closeNav}>
                        <i className="bi bi-shield-lock" />
                        <span>Admin Panel</span>
                    </Link>

                    <ul className="adh-links">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <NavLink to={item.to} end={item.end}>
                                    <i className={`bi ${item.icon}`} />
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="adh-user">
                        <Link to="/" className="adh-back">Back to site</Link>
                        <div className="adh-avatar" title={displayName}>{initial}</div>
                        <button type="button" className="adh-logout" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>

                    <button
                        type="button"
                        className="adh-toggle"
                        aria-label={navOpen ? "Close menu" : "Open menu"}
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <i className={`bi ${navOpen ? "bi-x" : "bi-list"}`} />
                    </button>
                </div>

                {/* Mobile panel */}
                <div className="adh-panel">
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} end={item.end} onClick={closeNav}>
                            <i className={`bi ${item.icon}`} />
                            {item.label}
                        </NavLink>
                    ))}
                    <Link to="/" onClick={closeNav}>
                        <i className="bi bi-box-arrow-up-right" /> Back to site
                    </Link>
                    <button type="button" className="adh-logout" onClick={handleLogout}>
                        Logout ({displayName})
                    </button>
                </div>
            </header>
        </>
    )
}

export default AdHeader