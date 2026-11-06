import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../../../Firebase/FirebaseConfig"

// Firestore collections (same names used in the services)
const SOURCES = [
    { key: "notes", name: "Notes", label: "Note", color: "success" },
    { key: "papers", name: "questionPapers", label: "Paper", color: "primary" },
    { key: "resources", name: "resources", label: "Video", color: "danger" },
]

const WEEK_MS = 7 * 24 * 60 * 60 * 1000

function toTime(value) {
    const t = new Date(value).getTime()
    return isNaN(t) ? 0 : t
}

function formatDate(value) {
    const t = toTime(value)
    return t ? new Date(t).toLocaleString() : "-"
}

function AdDashBoard() {
    const [data, setData] = useState({ notes: [], papers: [], resources: [] })
    const [ready, setReady] = useState(false)
    const [loadedCount, setLoadedCount] = useState(0)

    // Live listeners: updates appear automatically when anything is added, edited or deleted
    useEffect(() => {
        const unsubscribers = SOURCES.map((src) =>
            onSnapshot(
                collection(db, src.name),
                (snapshot) => {
                    const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
                    setData((prev) => ({ ...prev, [src.key]: items }))
                    setLoadedCount((n) => n + 1)
                },
                (err) => {
                    console.log(`${src.name} listen error:`, err)
                    setLoadedCount((n) => n + 1)
                }
            )
        )
        return () => unsubscribers.forEach((unsub) => unsub())
    }, [])

    useEffect(() => {
        if (loadedCount >= SOURCES.length) setReady(true)
    }, [loadedCount])

    // Totals and "added in last 7 days"
    const stats = useMemo(() => {
        const cutoff = Date.now() - WEEK_MS
        const recent = (list) => list.filter((i) => toTime(i.createdAt) >= cutoff).length
        return {
            notes: { total: data.notes.length, week: recent(data.notes) },
            papers: { total: data.papers.length, week: recent(data.papers) },
            resources: { total: data.resources.length, week: recent(data.resources) },
        }
    }, [data])

    // Latest 8 items from all three collections, newest first
    const recentActivity = useMemo(() => {
        const all = SOURCES.flatMap((src) =>
            data[src.key].map((item) => ({
                id: `${src.key}-${item.id}`,
                type: src,
                title: src.key === "resources" ? item.topic : item.title,
                subject: item.subject,
                by: item.uploadedBy,
                createdAt: item.createdAt,
            }))
        )
        return all.sort((a, b) => toTime(b.createdAt) - toTime(a.createdAt)).slice(0, 8)
    }, [data])

    // Notes count per subject (top 5)
    const notesBySubject = useMemo(() => {
        const counts = {}
        data.notes.forEach((n) => {
            const key = n.subject || "Unknown"
            counts[key] = (counts[key] || 0) + 1
        })
        return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5)
    }, [data.notes])

    // Videos count per semester (1-8)
    const videosBySemester = useMemo(() => {
        const counts = Array.from({ length: 8 }, () => 0)
        data.resources.forEach((r) => {
            const n = Number(r.semester)
            if (n >= 1 && n <= 8) counts[n - 1]++
        })
        return counts
    }, [data.resources])

    const statCards = [
        { title: "Notes", icon: "bi-file-earmark-text", color: "success", ...stats.notes, to: "/admin/managenotes" },
        { title: "Question Papers", icon: "bi-journal-text", color: "primary", ...stats.papers, to: "/admin/managepaper" },
        { title: "Video Resources", icon: "bi-camera-video", color: "danger", ...stats.resources, to: "/admin/manageresource" },
    ]

    return (
        <div className="container my-5">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
                <div>
                    <h2 className="text-success mb-0">Dashboard</h2>
                    <small className="text-muted">Overview of everything uploaded to Notes Vault</small>
                </div>
                <span className={`badge ${ready ? "bg-success" : "bg-secondary"}`}>
                    {ready ? "● Live" : "Connecting..."}
                </span>
            </div>

            {/* Stat cards */}
            <div className="row g-4 mb-4">
                {statCards.map((c) => (
                    <div className="col-md-4" key={c.title}>
                        <Link to={c.to} className="text-decoration-none">
                            <div className={`card h-100 border-0 shadow-sm border-start border-4 border-${c.color}`}>
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="text-muted mb-1">{c.title}</p>
                                        <h2 className="fw-bold mb-1">{c.total}</h2>
                                        <small className="text-muted">+{c.week} in the last 7 days</small>
                                    </div>
                                    <i className={`bi ${c.icon} fs-1 text-${c.color}`} />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Quick actions */}
            <div className="d-flex flex-wrap gap-2 mb-4">
                <Link to="/admin/managenotes/addnotes" className="btn btn-success">+ Add Notes</Link>
                <Link to="/admin/managepaper/addpaper" className="btn btn-outline-primary">+ Add Paper</Link>
                <Link to="/admin/manageresource/addresource" className="btn btn-outline-danger">+ Add Video</Link>
            </div>

            <div className="row g-4">
                {/* Recent activity */}
                <div className="col-lg-7">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header bg-white fw-semibold">Recent activity</div>
                        <div className="list-group list-group-flush">
                            {ready && recentActivity.length === 0 && (
                                <div className="list-group-item text-muted">Nothing uploaded yet.</div>
                            )}
                            {recentActivity.map((item) => (
                                <div className="list-group-item d-flex justify-content-between align-items-start" key={item.id}>
                                    <div>
                                        <span className={`badge bg-${item.type.color} me-2`}>{item.type.label}</span>
                                        <strong>{item.title || "Untitled"}</strong>
                                        <div className="small text-muted">
                                            {item.subject && `${item.subject} · `}
                                            {item.by && `by ${item.by}`}
                                        </div>
                                    </div>
                                    <small className="text-muted text-nowrap ms-2">{formatDate(item.createdAt)}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Breakdowns */}
                <div className="col-lg-5">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-header bg-white fw-semibold">Top subjects (notes)</div>
                        <ul className="list-group list-group-flush">
                            {notesBySubject.length === 0 && (
                                <li className="list-group-item text-muted">No notes yet.</li>
                            )}
                            {notesBySubject.map(([subject, count]) => (
                                <li className="list-group-item d-flex justify-content-between" key={subject}>
                                    <span>{subject}</span>
                                    <span className="badge bg-success rounded-pill">{count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white fw-semibold">Videos by semester</div>
                        <ul className="list-group list-group-flush">
                            {videosBySemester.map((count, i) => (
                                <li className="list-group-item d-flex justify-content-between" key={i}>
                                    <span>Semester {i + 1}</span>
                                    <span className="badge bg-danger rounded-pill">{count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdDashBoard