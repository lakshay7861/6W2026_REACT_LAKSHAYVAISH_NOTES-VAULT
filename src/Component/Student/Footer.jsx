import { Link } from "react-router-dom"

const siteInfo = {
    name: "Notes Vault",
    address: "LKCTC, Jalandhar, Punjab, India",
    phone: "+91 97795 50652",
    email: "notesvault@gmail.com",
    social: {
        instagram: "https://www.instagram.com/lakshay_vaish_827",
        linkedin: "https://www.linkedin.com/in/lakshay-vaish-927430373",
        facebook: "https://www.facebook.com/share/19EJso2DAC/",
    },
}

const css = `
.sf { background: #198754; color: #e9f7ef; margin-top: 60px; padding: 40px 24px 20px; }
.sf-inner { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 28px; }
.sf h4 { color: #fff; font-size: 1rem; font-weight: 700; margin: 0 0 12px; }
.sf p, .sf a { color: #e9f7ef; font-size: 0.95rem; text-decoration: none; margin: 0 0 8px; display: block; }
.sf a:hover { color: #fff; text-decoration: underline; }
.sf-bottom { max-width: 1400px; margin: 24px auto 0; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.2); text-align: center; font-size: 0.88rem; }
@media (max-width: 767px) { .sf-inner { grid-template-columns: 1fr; } }
`

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="sf">
            <style>{css}</style>
            <div className="sf-inner">
                <div>
                    <h4>{siteInfo.name}</h4>
                    <p>{siteInfo.address}</p>
                    <p>
                        <a href={`tel:${siteInfo.phone.replace(/\s/g, "")}`} style={{ display: "inline" }}>{siteInfo.phone}</a>
                    </p>
                    <p>
                        <a href={`mailto:${siteInfo.email}`} style={{ display: "inline" }}>{siteInfo.email}</a>
                    </p>
                </div>

                <div>
                    <h4>Explore</h4>
                    <Link to="/">Home</Link>
                    <Link to="/notes">Notes</Link>
                    <Link to="/resource">Videos</Link>
                    <Link to="/about">About</Link>
                </div>

                <div>
                    <h4>Follow us</h4>
                    <a href={siteInfo.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
                    <a href={siteInfo.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href={siteInfo.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
                </div>
            </div>

            <div className="sf-bottom">© {year} {siteInfo.name}. All rights reserved.</div>
        </footer>
    )
}

export default Footer