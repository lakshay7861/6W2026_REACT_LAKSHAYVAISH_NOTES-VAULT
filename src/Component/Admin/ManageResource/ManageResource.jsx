import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ResourceService from "../../../Services/ResourceService"

function ManageResource() {
    const [resources, setResources] = useState([])
    const [loading, setLoading] = useState(true)

    async function load() {
        try {
            setLoading(true)
            setResources(await ResourceService.all())
        } catch (err) {
            toast.error("Resources load nahi hue")
            console.log("Error:", err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        load()
    }, [])

    async function removeResource(id) {
        if (!window.confirm("Ye resource delete karna hai?")) return
        try {
            await ResourceService.delete(id)
            toast.success("Deleted")
            load()
        } catch (err) {
            toast.error("Delete nahi hua")
        }
    }

    return (
        <>
            <div className="container-fluid page-header bg-success py-5">
                <h1 className="text-center text-white display-6">Manage Resource</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
                    <li className="breadcrumb-item active text-white">Resources</li>
                </ol>
            </div>

            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-success mb-0">Resource List</h2>
                    <Link to="/admin/manageresource/addresource" className="btn btn-success">
                        + Add Resource
                    </Link>
                </div>
            </div>

            <div className="table-responsive m-4 mt-4">
                <table className="table border border-success align-middle">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Semester</th>
                            <th>Subject</th>
                            <th>Topic</th>
                            <th>Title</th>
                            <th>Video</th>
                            <th>Added by</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && (
                            <tr><td colSpan="8" className="text-center">Loading...</td></tr>
                        )}
                        {!loading && resources.length === 0 && (
                            <tr><td colSpan="8" className="text-center">Abhi koi resource nahi hai</td></tr>
                        )}
                        {!loading && resources.map((r, index) => (
                            <tr key={r.id}>
                                <td>{index + 1}</td>
                                <td>{r.semester}</td>
                                <td>{r.subject}</td>
                                <td>{r.topic}</td>
                                <td>{r.title}</td>
                                <td>
                                    <a href={r.videoUrl} target="_blank" rel="noopener noreferrer">Open</a>
                                </td>
                                <td>{r.uploadedBy}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-light border"
                                        onClick={() => removeResource(r.id)}
                                        aria-label="Delete"
                                    >
                                        <i className="bi bi-trash text-danger" /> Delete
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

export default ManageResource