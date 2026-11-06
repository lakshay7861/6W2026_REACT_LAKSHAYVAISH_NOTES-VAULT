import { Link } from "react-router-dom"

const siteInfo = {
    name: "Notes Vault",
    address: "LKCTC, Jalandhar, Punjab, India",
    phone: "+91 97795 50652",
    email: "notesvault@gmail.com",
}

const css = `
.af { background: #198754; color: #e9f7ef; padding: 20px 24px; margin-top: 40px; }
.af-inner { max-width: 1400px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px 24px; font-size: 0.93rem; }
.af a { color: #e9f7ef; text-decoration: none; margin-right: 16px; }
.af a:hover { color: #fff; text-decoration: underline; }
.af-bottom { max-width: 1400px; margin: 14px auto 0; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 0.85rem; text-align: center; }
`

function AdFooter() {
    const year = new Date().getFullYear()

    return (
        <footer className="af">
            <style>{css}</style>
            <div className="af-inner">
                <div>
                    <strong style={{ color: "#fff" }}>{siteInfo.name} Admin</strong>
                    <div>{siteInfo.address}</div>
                    <div>{siteInfo.email} · {siteInfo.phone}</div>
                </div>
                <nav>
                    <Link to="/admin">Dashboard</Link>
                    <Link to="/admin/managenotes">Notes</Link>
                    <Link to="/admin/managepaper">Papers</Link>
                    <Link to="/admin/manageresource">Videos</Link>
                    <Link to="/">View site</Link>
                </nav>
            </div>
            <div className="af-bottom">© {year} {siteInfo.name}. All rights reserved.</div>
        </footer>
    )
}

export default AdFooter