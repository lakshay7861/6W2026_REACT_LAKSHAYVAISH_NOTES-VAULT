import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NotesService from "../../../Services/NotesService"
import PaperService from "../../../Services/PaperService"
import ResourceService from "../../../Services/ResourceService"

function About() {
    const [counts, setCounts] = useState({ notes: null, papers: null, videos: null })

    // Real numbers from the database, not placeholders
    useEffect(() => {
        async function loadCounts() {
            try {
                const [notes, papers, videos] = await Promise.all([
                    NotesService.all(),
                    PaperService.all(),
                    ResourceService.all(),
                ])
                setCounts({ notes: notes.length, papers: papers.length, videos: videos.length })
            } catch (err) {
                console.log("About counts error:", err)
            }
        }
        loadCounts()
    }, [])

    const stats = [
        { label: "Notes", value: counts.notes },
        { label: "Question Papers", value: counts.papers },
        { label: "Video Lessons", value: counts.videos },
    ]

    return (
        <>
            {/* Page Title */}
            <div className="page-title bg-success-emphasis">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="font-monospace">About Us</h1>
                                <p className="mb-0">
                                    Built by students, for students. 💻 We know the struggle of hunting for reliable
                                    study material right before minor or major exams. That's why Notes Vault brings
                                    together handwritten notes, solved previous year papers, and video lessons in one
                                    clean place. Pick your semester, find your subject, and study with confidence! 💯
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs justify-content-center">
                    <div className="container justify-content-center">
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li className="current">About</li>
                        </ol>
                    </div>
                </nav>
            </div>
            {/* End Page Title */}

            {/* Why Choose Us */}
            <section id="about-us" className="section about-us">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src="/assets/img/about/about-1.webp" className="img-fluid rounded" alt="Students studying" />
                        </div>
                        <div className="col-lg-6 order-2 order-lg-1 content">
                            <h2>Why Choose Us?</h2>
                            <p className="fst-italic">
                                Notes Vault started as a simple idea to end last-minute exam panic. Instead of
                                searching through scattered WhatsApp and Telegram groups, we built one digital
                                library where students can save time, study smarter, and prepare for their exams
                                with confidence. 💻✨
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <i className="bi bi-shield-check text-success me-2" />
                                    <span>Organized by semester and subject, so you find what you need fast.</span>
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-lightning-charge text-success me-2" />
                                    <span>Easy access: pick your semester, open your subject, and download instantly.</span>
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-journal-richtext text-success me-2" />
                                    <span>Handwritten notes and solved previous year papers, shared by students and alumni.</span>
                                </li>
                            </ul>
                            <div className="d-flex flex-wrap gap-2 mt-3">
                                <Link to="/notes" className="btn btn-success">Browse Notes</Link>
                                <Link to="/resource" className="btn btn-outline-success">Watch Videos</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Why Choose Us */}

            {/* Live Counts */}
            <section id="counts" className="section counts light-background">
                <div className="container">
                    <div className="row gy-4">
                        {stats.map((s) => (
                            <div className="col-lg-4 col-md-4" key={s.label}>
                                <div className="stats-item text-center w-100 h-100">
                                    <span className="fs-1 fw-bold text-success">
                                        {s.value === null ? "–" : s.value}
                                    </span>
                                    <p className="mb-0">{s.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* /Live Counts */}

            {/* Mission */}
            <section className="section">
                <div className="container text-center" style={{ maxWidth: "760px" }}>
                    <h2 className="text-success">Our Mission</h2>
                    <p className="fs-5">
                        To make good study material easy to find for every student, so that no one has to
                        struggle alone before an exam.
                    </p>
                    <Link to="/register" className="btn btn-success mt-3">Join Notes Vault</Link>
                </div>
            </section>
        </>
    )
}

export default About