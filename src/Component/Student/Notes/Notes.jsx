import { useEffect, useMemo, useState } from "react"
import { toast } from "react-toastify"
import NotesService from "../../../Services/NotesService"
import PaperService from "../../../Services/PaperService"

function formatDate(value) {
    if (!value) return ""
    const d = new Date(value)
    return isNaN(d) ? "" : d.toLocaleDateString()
}

function Notes() {
    const [tab, setTab] = useState("notes")          // "notes" or "papers"
    const [notes, setNotes] = useState([])
    const [papers, setPapers] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")

    // Load both collections once when the page opens
    useEffect(() => {
        async function load() {
            try {
                const [noteList, paperList] = await Promise.all([
                    NotesService.all(),
                    PaperService.all(),
                ])
                setNotes(noteList)
                setPapers(paperList)
            } catch (err) {
                toast.error("Notes load nahi hue")
                console.log("Error:", err)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    // Show the active tab, filtered by the search text, newest first
    const visible = useMemo(() => {
        const list = tab === "notes" ? notes : papers
        const q = search.trim().toLowerCase()

        return list
            .filter((item) => {
                if (!q) return true
                return [item.title, item.subject, item.description, item.year]
                    .some((v) => String(v || "").toLowerCase().includes(q))
            })
            .sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")))
    }, [tab, notes, papers, search])

    return (
        <>
            <div className="container-fluid bg-success page-header py-5">
                <h1 className="text-center text-white display-6">Notes & Question Papers</h1>
            </div>

            <div className="container mt-4 mb-5">
                {/* Tabs */}
                <div className="d-flex gap-2 mb-3">
                    <button
                        className={`btn ${tab === "notes" ? "btn-success" : "btn-outline-success"}`}
                        onClick={() => setTab("notes")}
                    >
                        Notes ({notes.length})
                    </button>
                    <button
                        className={`btn ${tab === "papers" ? "btn-success" : "btn-outline-success"}`}
                        onClick={() => setTab("papers")}
                    >
                        Question Papers ({papers.length})
                    </button>
                </div>

                {/* Search */}
                <input
                    type="search"
                    className="form-control border-success mb-4"
                    placeholder="Search by title, subject or year..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {loading && <p className="text-center">Loading...</p>}

                {!loading && visible.length === 0 && (
                    <p className="text-center">Nothing found.</p>
                )}

                {/* Cards */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {!loading && visible.map((item) => (
                        <div className="col" key={item.id}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title || "Untitled"}</h5>
                                    {item.subject && <p className="mb-1 text-muted">Subject: {item.subject}</p>}
                                    {item.year && <p className="mb-1 text-muted">Year: {item.year}</p>}
                                    {item.description && <p className="card-text small">{item.description}</p>}
                                    <small className="text-muted">
                                        {item.uploadedBy && `By ${item.uploadedBy} · `}
                                        {formatDate(item.createdAt)}
                                    </small>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    {item.fileUrl ? (
                                        <a
                                            href={item.fileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-success w-100"
                                        >
                                            Open / Download
                                        </a>
                                    ) : (
                                        <span className="text-muted">No file attached</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Notes