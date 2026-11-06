import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ResourceService from "../../../Services/ResourceService"
import AuthService from "../../../Services/AuthService"

const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"]

function Resource() {
    const [resources, setResources] = useState([])
    const [loading, setLoading] = useState(true)
    const [semester, setSemester] = useState("")
    const [subject, setSubject] = useState("")

    // Only admins (userType 1) can see the Add Resource button
    const currentUser = AuthService.getData()
    const isAdmin = Number(currentUser?.userType) === 1

    useEffect(() => {
        (async () => {
            try {
                setResources(await ResourceService.all())
            } catch (err) {
                toast.error("Failed to load resources")
                console.log("Error:", err)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    const subjects = useMemo(() => {
        const list = resources
            .filter((r) => !semester || r.semester === semester)
            .map((r) => r.subject)
        return [...new Set(list)].sort()
    }, [resources, semester])

    const filtered = resources.filter(
        (r) => (!semester || r.semester === semester) && (!subject || r.subject === subject)
    )

    return (
        <>
            <div className="container-fluid bg-success page-header py-5">
                <h1 className="text-center text-white display-6">Video Resources</h1>
            </div>

            <div className="container mt-4 mb-5">
                {isAdmin && (
                    <div className="d-flex justify-content-end mb-3">
                        <Link to="/admin/manageresource/addresource" className="btn btn-success">
                            + Add Resource
                        </Link>
                    </div>
                )}

                <div className="row g-3 mb-4">
                    <div className="col-md-6">
                        <select
                            className="form-select border-success"
                            value={semester}
                            onChange={(e) => {
                                setSemester(e.target.value)
                                setSubject("")
                            }}
                        >
                            <option value="">All Semesters</option>
                            {semesters.map((s) => (
                                <option key={s} value={s}>Semester {s}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <select
                            className="form-select border-success"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <option value="">All Subjects</option>
                            {subjects.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {loading && <p className="text-center">Loading...</p>}
                {!loading && filtered.length === 0 && (
                    <p className="text-center">No videos match this filter</p>
                )}

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {!loading && filtered.map((r) => (
                        <div className="col" key={r.id}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <span className="badge bg-success mb-2">Sem {r.semester}</span>
                                    <h5 className="card-title">{r.topic}</h5>
                                    <p className="mb-1 text-muted">Subject: {r.subject}</p>
                                    {r.title && r.title !== r.topic && <p className="mb-1">{r.title}</p>}
                                    {r.description && <p className="card-text small">{r.description}</p>}
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <a
                                        href={r.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-success w-100"
                                    >
                                        ▶ Watch video
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Resource