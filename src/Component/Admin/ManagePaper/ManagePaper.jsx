import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { toast } from "react-toastify"
import PaperService from "../../../Services/PaperService"

function ManagePaper() {
    const [papers, setPapers] = useState([])
    const [loading, setLoading] = useState(true)
    const [deletingId, setDeletingId] = useState(null)

    async function getPapers() {
        try {
            setLoading(true)
            const data = await PaperService.all()
            setPapers(data)
        } catch (err) {
            toast.error("Failed to load question papers")
            console.log("Error:", err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPapers()
    }, [])

    async function deletePaper(id) {
        if (deletingId) return

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This paper will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        })

        if (!result.isConfirmed) return

        try {
            setDeletingId(id)
            await PaperService.delete(id)
            toast.success("Question paper deleted successfully")
            await getPapers()
        } catch (err) {
            toast.error("Failed to delete question paper")
            console.log("Error:", err)
        } finally {
            setDeletingId(null)
        }
    }

    return (
        <>
            <div className="container-fluid page-header bg-success py-5">
                <h1 className="text-center text-white display-6">Manage Question Papers</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                    <li className="breadcrumb-item active text-white">Manage Papers</li>
                </ol>
            </div>

            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="text-success">Question Paper List</h1>
                    <Link to="/admin/managepaper/addpaper">
                        <button className="btn border-secondary py-2 px-3 bg-white text-primary" type="button">
                            <i className="bi bi-plus-square-fill me-2" />
                            Add Paper
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
                            <th scope="col">Year</th>
                            <th scope="col">File</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && (
                            <tr>
                                <td colSpan="6" className="text-center">Loading...</td>
                            </tr>
                        )}

                        {!loading && papers.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center">No question papers available.</td>
                            </tr>
                        )}

                        {!loading && papers.map((paper, index) => (
                            <tr key={paper.id}>
                                <td>{index + 1}</td>
                                <td>{paper.title}</td>
                                <td>{paper.subject}</td>
                                <td>{paper.year}</td>
                                <td>
                                    {paper.fileUrl ? (
                                        <a href={paper.fileUrl} target="_blank" rel="noopener noreferrer">
                                            View PDF
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-light border"
                                        type="button"
                                        disabled={deletingId === paper.id}
                                        onClick={() => deletePaper(paper.id)}
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

export default ManagePaper