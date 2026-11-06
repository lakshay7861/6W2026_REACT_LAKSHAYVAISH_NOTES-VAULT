import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NotesService from "../../../Services/NotesService"
import ResourceService from "../../../Services/ResourceService"

function formatDate(value) {
    if (!value) return ""
    const d = new Date(value)
    return isNaN(d) ? "" : d.toLocaleDateString()
}

function Home() {
    const [latestNotes, setLatestNotes] = useState([])
    const [latestVideos, setLatestVideos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            try {
                const [notes, videos] = await Promise.all([
                    NotesService.all(),
                    ResourceService.all(),
                ])
                // Newest first
                const newestFirst = (a, b) =>
                    String(b.createdAt || "").localeCompare(String(a.createdAt || ""))
                setLatestNotes([...notes].sort(newestFirst).slice(0, 3))
                setLatestVideos([...videos].sort(newestFirst).slice(0, 3))
            } catch (err) {
                console.log("Home load error:", err)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    return (
        <main className="main">

            {/* Hero */}
            <section id="hero" className="hero section dark-background">
                <img src="/assets/img/home image/fluid image 1st.avif" alt="" />
                <div className="container">
                    <h2>
                        Knowledge For Everyone
                        <br />
                        Share Notes Easily
                    </h2>
                    <p>Empowering Students Through Smart Learning</p>
                    <div className="d-flex flex-wrap gap-3 mt-4">
                        <Link to="/notes" className="btn-get-started border-info-subtle border-4">
                            Explore Notes
                        </Link>
                        <Link to="/resource" className="btn-get-started border-info-subtle border-4">
                            Watch Videos
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick links */}
            <section className="section features">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="features-item">
                                <i className="bi bi-file-earmark-text" style={{ color: "#ffbb2c" }} />
                                <h3><Link to="/notes" className="stretched-link">Study Notes</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="features-item">
                                <i className="bi bi-journal-check" style={{ color: "#5578ff" }} />
                                <h3><Link to="/notes" className="stretched-link">Question Papers</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="features-item">
                                <i className="bi bi-camera-video" style={{ color: "#e80368" }} />
                                <h3><Link to="/resource" className="stretched-link">Video Resources</Link></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="features-item">
                                <i className="bi bi-mortarboard" style={{ color: "#11dbcf" }} />
                                <h3><Link to="/course" className="stretched-link">Courses</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="about section">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src="/assets/img/home image/2nd right image.avif" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 order-2 order-lg-1 content">
                            <h3>Everything You Need to Study, All in One Place</h3>
                            <p className="fst-italic">
                                Notes Vault gives students notes, previous year question papers, and
                                video resources, organized by semester and subject, so studying is
                                easier and faster.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check-circle" /> <span>Notes organized for every subject.</span>
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" /> <span>Previous year question papers.</span>
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" /> <span>Video lessons for each topic, filtered by semester.</span>
                                </li>
                            </ul>
                            <Link to="/about" className="read-more">
                                <span>Read More</span>
                                <i className="bi bi-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Notes */}
            <section className="section">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="text-success mb-0">Latest Notes</h2>
                        <Link to="/notes" className="btn btn-outline-success">View all</Link>
                    </div>

                    {loading && <p>Loading...</p>}
                    {!loading && latestNotes.length === 0 && <p>No notes yet.</p>}

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {latestNotes.map((n) => (
                            <div className="col" key={n.id}>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">{n.title || "Untitled"}</h5>
                                        {n.subject && <p className="mb-1 text-muted">Subject: {n.subject}</p>}
                                        <small className="text-muted">{formatDate(n.createdAt)}</small>
                                    </div>
                                    <div className="card-footer bg-white border-0">
                                        {n.fileUrl ? (
                                            <a href={n.fileUrl} target="_blank" rel="noopener noreferrer" className="btn btn-success w-100">
                                                Open / Download
                                            </a>
                                        ) : (
                                            <Link to="/notes" className="btn btn-outline-success w-100">View notes</Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Videos */}
            <section className="section light-background">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="text-success mb-0">Latest Videos</h2>
                        <Link to="/resource" className="btn btn-outline-success">View all</Link>
                    </div>

                    {loading && <p>Loading...</p>}
                    {!loading && latestVideos.length === 0 && <p>No videos yet.</p>}

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {latestVideos.map((v) => (
                            <div className="col" key={v.id}>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <span className="badge bg-success mb-2">Sem {v.semester}</span>
                                        <h5 className="card-title">{v.topic}</h5>
                                        <p className="mb-0 text-muted">Subject: {v.subject}</p>
                                    </div>
                                    <div className="card-footer bg-white border-0">
                                        <a href={v.videoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-success w-100">
                                            ▶ Watch video
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why us */}
            <section className="section why-us">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4">
                            <div className="why-box">
                                <h3>Why Choose Notes Vault?</h3>
                                <p>
                                    Notes, question papers, and video lessons in one place,
                                    organized by semester and subject so you find what you need quickly.
                                </p>
                                <div className="text-center">
                                    <Link to="/course" className="more-btn">
                                        <span>Browse Courses</span> <i className="bi bi-chevron-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row gy-4">
                                <div className="col-md-4">
                                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-file-earmark-fill" />
                                        <h4 className="fs-4">Notes</h4>
                                        <p>Handwritten and typed notes shared by students and alumni.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-journal-text" />
                                        <h4 className="fs-4">Question Papers</h4>
                                        <p>Previous year papers to practice and prepare for exams.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-camera-video" />
                                        <h4 className="fs-4">Video Lessons</h4>
                                        <p>Learn difficult topics with video links picked by semester and subject.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home 