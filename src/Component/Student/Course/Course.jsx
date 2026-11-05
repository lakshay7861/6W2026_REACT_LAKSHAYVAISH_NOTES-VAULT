import { Link } from "react-router-dom"

function Course() {
    return (
        <>
            {/* Page Title */}
            <div className="page-title" >
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>
                                    Select Your Course
                                    <br />
                                </h1>
                                <p className="mb-0">
                                    "Don't let exams stress you out! 💻 Select your engineering branch below and unlock
                                    a structured archive of handwritten notes and solved question papers from past semesters to
                                    ace your upcoming exams. 💯"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li className="current">
                                About Us
                                <br />
                            </li>
                        </ol>
                    </div>
                </nav>
            </div>
            {/* End Page Title */}

            <div className="row row-cols-1 row-cols-md-3 g-4 p-4 ">
                <div className="col">
                    <div className="card h-100">
                        <img src="/assets/img/Card/1st image.avif" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fs-3 fw-bold">💻 CSE</h5>
                            <p>Computer Science Engineering</p>
                            <p className="card-text">
                                "Access previous years' question papers (PYQs) 📝, compiler design notes 🧠,
                                data structures blueprints, and handwritten coding solutions
                                🚀 to ace your university exams."
                            </p>
                            <Link to="/notes" className="font-monospace">Explore Materials →</Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/assets/img/Card/IT 2nd.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fs-3 fw-bold">🌐 IT</h5>
                            <p>Information Technology</p>
                            <p className="card-text">
                                "Unlock a structured archive of web technology notes 🗺️, database question banks 🗄️
                                , operating system PYQs, and faculty-curated cloud computing sheets ☁️."  </p>
                            <Link to="/notes" className="font-monospace">Explore Materials →</Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/assets/img/Card/3rd image.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fs-3 fw-bold">⚡ ECE</h5>
                            <p>Electronics & Communication</p>
                            <p className="card-text">
                                "Download official engineering syllabi 📋, microprocessor micro-notes 📟,
                                previous year digital electronics papers, and communication engineering sheets 📡." </p>
                            <Link to="/notes" className="font-monospace">Explore Materials →</Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                <div className="col">
                    <div className="card h-100">
                        <img src="/assets/img/Card/4th image.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fs-3 fw-bold">⚙️ ME</h5>
                            <p> Mechanical Engineering</p>
                            <p className="card-text">
                                "Get instant access to solved thermodynamics PYQs ⚙️, machine drawing PDFs 📐,
                                handwritten fluid mechanics notes  , and CAD/CAM exam reference materials 🏎️."
                            </p>
                            <Link to="/notes" className="font-monospace">Explore Materials →</Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/assets/img/Card/5th image.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fs-3 fw-bold">🏢 CE</h5>
                            <p>Civil Engineering</p>
                            <p className="card-text">
                                "Explore structural analysis question banks 🏗️, surveyed field notes,
                                previous year concrete technology blueprints,
                                and highway engineering exam resources 🌉."
                            </p>
                            <Link to="/notes" className="font-monospace">Explore Materials →</Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/assets/img/Card/Ai & Ml 6TH  IMAGE.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fs-3 fw-bold ">🤖 AI & ML</h5>
                            <p>Artificial Intelligence</p>
                            <p className="card-text">
                                "Find compiled Python data science sheets 📊, neural network handwritten notes 🕸️,
                                machine learning algorithms PYQs, and smart automation question papers 🤖."
                            </p>
                            <Link to="/notes" className="font-monospace">Explore Materials →</Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Course