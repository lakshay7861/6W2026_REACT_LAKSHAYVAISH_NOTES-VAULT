import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import AuthService from "../../Services/AuthService"

const css = `
.ah { background: #198754; position: sticky; top: 0; z-index: 1000; }
.ah-inner { max-width: 1400px; margin: 0 auto; padding: 0 24px; height: 64px; display: flex; align-items: center; gap: 16px; }
.ah-brand { font-weight: 700; font-size: 1.5rem; color: #fff; text-decoration: none; margin-right: auto; }
.ah-nav { display: flex; align-items: center; gap: 4px; list-style: none; margin: 0; padding: 0; }
.ah-link, .ah-btn { display: block; padding: 8px 12px; color: #fff; text-decoration: none; font-size: 0.98rem; background: none; border: none; border-radius: 6px; cursor: pointer; font-family: inherit; white-space: nowrap; }
.ah-link:hover, .ah-btn:hover { background: rgba(255,255,255,0.15); }
.ah-link.active { font-weight: 600; background: rgba(255,255,255,0.2); }
.ah-user { color: #d1f0de; font-size: 0.9rem; padding: 0 8px; white-space: nowrap; }
.ah-burger { display: none; margin-left: auto; background: none; border: none; color: #fff; font-size: 1.6rem; cursor: pointer; padding: 4px 8px; }

@media (max-width: 991px) {
    .ah-inner { padding: 0 16px; }
    .ah-burger { display: block; }
    .ah-nav { display: none; position: absolute; top: 64px; left: 0; right: 0; flex-direction: column; align-items: stretch; gap: 0; padding: 8px 16px 16px; background: #198754; }
    .ah-nav.open { display: flex; }
    .ah-link, .ah-btn { width: 100%; text-align: left; }
}
`

function AdHeader() {
    const [open, setOpen] = useState(false)
    const nav = useNavigate()
    const user = AuthService.getData()

    const closeMenu = () => setOpen(false)

    const handleLogout = () => {
        AuthService.logout()
        closeMenu()
        nav("/login", { replace: true })
    }

    return (
        <>
            <style>{css}</style>
            <header className="ah">
                <div className="ah-inner">
                    <Link to="/admin" className="ah-brand" onClick={closeMenu}>Notes Vault Admin</Link>

                    <ul className={`ah-nav ${open ? "open" : ""}`}>
                        <li><NavLink to="/admin" end className="ah-link" onClick={closeMenu}>Dashboard</NavLink></li>
                        <li><NavLink to="/admin/managenotes" className="ah-link" onClick={closeMenu}>Notes</NavLink></li>
                        <li><NavLink to="/admin/managepaper" className="ah-link" onClick={closeMenu}>Papers</NavLink></li>
                        <li><NavLink to="/admin/manageresource" className="ah-link" onClick={closeMenu}>Videos</NavLink></li>
                        <li><Link to="/" className="ah-link" onClick={closeMenu}>View site</Link></li>
                        {user && <li className="ah-user">{user.name || "Admin"}</li>}
                        <li><button className="ah-btn" onClick={handleLogout}>Logout</button></li>
                    </ul>

                    <button className="ah-burger" aria-label="Menu" onClick={() => setOpen(!open)}>
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </header>
        </>
    )
}

export default AdHeader