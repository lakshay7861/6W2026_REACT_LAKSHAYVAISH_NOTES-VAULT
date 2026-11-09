import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
import NotesService from "../../../Services/NotesService"

function ManageNotes() {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)
    const [deletingId, setDeletingId] = useState(null)

    async function getNotes() {
        try {
            setLoading(true)
            const data = await NotesService.all()
            setNotes(data)
        } catch (err) {
            toast.error("Failed to load notes")
            console.log("Error:", err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getNotes()
    }, [])

    async function deleteNote(id) {
        if (deletingId) return

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This note will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#198754",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        })

        if (!result.isConfirmed) return

        try {
            setDeletingId(id)
            await NotesService.deletenotes(id)
            toast.success("Notes deleted successfully")
            await getNotes()
        } catch (err) {
            toast.error("Failed to delete note")
            console.log("Error:", err)
        } finally {
            setDeletingId(null)
        }
    }

    function formatDate(value) {
        if (!value) return "-"
        const date = new Date(value)
        return isNaN(date) ? "-" : date.toLocaleString()
    }

    return (
        <>
            <div className="container-fluid page-header bg-success py-5">
                <h1 className="text-center text-white display-6">Manage Notes</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                    <li className="breadcrumb-item active text-white">Manage Notes</li>
                </ol>
            </div>

            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="text-success">Notes List</h1>
                    <Link to="/admin/managenotes/addnotes">
                        <button className="btn border-secondary py-2 px-3 bg-white text-primary" type="button">
                            <i className="bi bi-plus-square-fill me-2" />
                            Add Notes
                        </button>
                    </Link>
                </div>
            </div>

            <div className="table-responsive m-5">
                <table className="table table-bordered border-success align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Description</th>
                            <th scope="col">File</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && (
                            <tr>
                                <td colSpan="7" className="text-center">Loading...</td>
                            </tr>
                        )}

                        {!loading && notes.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center">No notes available.</td>
                            </tr>
                        )}

                        {!loading && notes.map((note, index) => (
                            <tr key={note.id}>
                                <td>{index + 1}</td>
                                <td>{note.title}</td>
                                <td>{note.subject}</td>
                                <td>{note.description}</td>
                                <td>
                                    {note.fileUrl ? (
                                        <a href={note.fileUrl} target="_blank" rel="noopener noreferrer">
                                            View PDF
                                        </a>
                                    ) : (
                                        <span className="text-danger">No file (re-upload)</span>
                                    )}
                                </td>
                                <td>{formatDate(note.createdAt)}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-light border"
                                        type="button"
                                        disabled={deletingId === note.id}
                                        onClick={() => deleteNote(note.id)}
                                    >
                                        <i className="bi bi-trash text-danger" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ManageNotes