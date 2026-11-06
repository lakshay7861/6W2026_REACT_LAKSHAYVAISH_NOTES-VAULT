import { Link } from "react-router-dom"

// ✏️ Apni details yahan bhariye. Baaki code mein kuch mat badlo.
const siteInfo = {
    name: "Notes Vault",
    tagline: "Notes, question papers and video lessons for students, all in one place.",
    address: ["Your address line 1", "City, State, PIN"],
    phone: "+91 00000 00000",
    email: "your@email.com",
    social: {
        instagram: "",   // e.g. "https://instagram.com/yourpage"
        linkedin: "",
        youtube: "",
        facebook: "",
    },
}

const styles = {
    footer: {
        background: "linear-gradient(135deg, #0f5132 0%, #198754 100%)",
        color: "#e9f7ef",
        paddingTop: "56px",
    },
    heading: {
        color: "#ffffff",
        fontWeight: 600,
        fontSize: "1.05rem",
        marginBottom: "16px",
        letterSpacing: "0.3px",
    },
    link: {
        color: "#d1f0de",
        textDecoration: "none",
        display: "inline-block",
        padding: "4px 0",
    },
    muted: { color: "#c3e6d2", fontSize: "0.95rem" },
    socialBtn: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.12)",
        color: "#ffffff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.1rem",
        textDecoration: "none",
    },
    bottomBar: {
        borderTop: "1px solid rgba(255,255,255,0.15)",
        marginTop: "40px",
        padding: "18px 0",
        fontSize: "0.9rem",
        color: "#c3e6d2",
    },
}

function FooterLink({ to, children }) {
    return (
        <li className="mb-1">
            <Link to={to} style={styles.link}>{children}</Link>
        </li>
    )
}

function AdFooter() {
    const socials = [
        { key: "instagram", icon: "bi-instagram", label: "Instagram" },
        { key: "linkedin", icon: "bi-linkedin", label: "LinkedIn" },
        { key: "youtube", icon: "bi-youtube", label: "YouTube" },
        { key: "facebook", icon: "bi-facebook", label: "Facebook" },
    ].filter((s) => siteInfo.social[s.key])

    return (
        <footer style={styles.footer}>
            <div className="container">
                <div className="row gy-4">

                    {/* Brand and contact */}
                    <div className="col-lg-4 col-md-6">
                        <h3 className="fw-bold text-white mb-2">{siteInfo.name}</h3>
                        <p style={styles.muted} className="mb-4">{siteInfo.tagline}</p>

                        <div style={styles.muted} className="d-flex mb-2">
                            <i className="bi bi-geo-alt me-2 mt-1" />
                            <div>
                                {siteInfo.address.map((line) => (
                                    <div key={line}>{line}</div>
                                ))}
                            </div>
                        </div>
                        <div style={styles.muted} className="d-flex align-items-center mb-2">
                            <i className="bi bi-telephone me-2" />
                            <span>{siteInfo.phone}</span>
                        </div>
                        <div style={styles.muted} className="d-flex align-items-center">
                            <i className="bi bi-envelope me-2" />
                            <span>{siteInfo.email}</span>
                        </div>

                        {socials.length > 0 && (
                            <div className="d-flex gap-2 mt-4">
                                {socials.map((s) => (
                                    <a
                                        key={s.key}
                                        href={siteInfo.social[s.key]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        style={styles.socialBtn}
                                    >
                                        <i className={`bi ${s.icon}`} />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Quick links */}
                    <div className="col-lg-2 col-md-3 col-6">
                        <h4 style={styles.heading}>Explore</h4>
                        <ul className="list-unstyled mb-0">
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/course">Courses</FooterLink>
                            <FooterLink to="/notes">Notes</FooterLink>
                            <FooterLink to="/resource">Video Resources</FooterLink>
                        </ul>
                    </div>

                    {/* Account */}
                    <div className="col-lg-2 col-md-3 col-6">
                        <h4 style={styles.heading}>Account</h4>
                        <ul className="list-unstyled mb-0">
                            <FooterLink to="/login">Login</FooterLink>
                            <FooterLink to="/register">Register</FooterLink>
                            <FooterLink to="/admin">Admin Panel</FooterLink>
                        </ul>
                    </div>

                    {/* Call to action */}
                    <div className="col-lg-4 col-md-12">
                        <h4 style={styles.heading}>Start Learning</h4>
                        <p style={styles.muted}>
                            Find notes, previous year papers and video lessons for your semester and subject.
                        </p>
                        <Link
                            to="/notes"
                            className="btn fw-semibold px-4 py-2"
                            style={{ background: "#ffffff", color: "#0f5132", borderRadius: "30px" }}
                        >
                            Browse Notes <i className="bi bi-arrow-right ms-1" />
                        </Link>
                    </div>

                </div>

                {/* Bottom bar */}
                <div style={styles.bottomBar} className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center">
                    <span>
                        © {new Date().getFullYear()} <strong className="text-white">{siteInfo.name}</strong>. All rights reserved.
                    </span>
                    <span>
                        {/* BootstrapMade template license: keep this credit line. */}
                        Designed by <a href="https://bootstrapmade.com/" style={{ color: "#ffffff" }}>BootstrapMade</a>
                        {" | "}
                        <a href="https://bootstrapmade.com/tools/" style={{ color: "#ffffff" }}>DevTools</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default AdFooter