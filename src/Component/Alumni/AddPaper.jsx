import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import PaperService from "../../Services/PaperService"
import CloudinaryService from "../../Services/Cloudinary"

function AddPaper() {
    const [title, setTitle] = useState("")
    const [subject, setSubject] = useState("")
    const [year, setYear] = useState("")
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const nav = useNavigate()

    async function addPaper(e) {
        e.preventDefault()

        if (!file) {
            toast.error("Please select a PDF file first")
            return
        }

        try {
            setLoading(true)
            const fileUrl = await CloudinaryService.upload(file)

            await PaperService.add({
                title,
                subject,
                year,
                fileUrl,
            })

            toast.success("Question paper added successfully")
            nav(-1)
        } catch (err) {
            toast.error("Failed to add question paper")
            console.log("Error:", err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="container-fluid bg-success page-header py-5">
                <h1 className="text-center text-white display-6">Add Question Paper</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                    <li className="breadcrumb-item active text-white">Add Paper</li>
                </ol>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <div className="col-lg-7">
                    <form onSubmit={addPaper}>
                        <input
                            type="text"
                            className="w-100 form-control border-1 py-3 mb-4 border-success"
                            placeholder="Enter Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-1 py-3 mb-4 border-success"
                            placeholder="Enter Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <input
                            type="number"
                            className="w-100 form-control border-1 py-3 mb-4 border-success"
                            placeholder="Enter Year (e.g. 2024)"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                        <input
                            type="file"
                            accept="application/pdf"
                            className="w-100 form-control border-1 py-3 mb-4 border-success"
                            onChange={(e) => setFile(e.target.files[0] || null)}
                        />

                        <button
                            className="w-100 btn form-control border-1 border-success bg-success py-3 bg-white text-primary"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Uploading..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddPaper