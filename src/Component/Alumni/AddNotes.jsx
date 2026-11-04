import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import NotesService from "../../Services/NotesService"
import CloudinaryService from "../../Services/Cloudinary"

function AddNotes() {
    const [title, setTitle] = useState('')
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const nav = useNavigate()

    async function addnotes(e) {
        e.preventDefault()

        if (!file) {
            toast.error("Please select a file first!")
            return
        }

        try {
            setLoading(true)
            const fileUrl = await CloudinaryService.upload(file)

            await NotesService.add({
                name: title,
                subject: subject,
                description: description,
                fileUrl: fileUrl,
            })

            toast.success("Notes Added")
            nav(-1)
        } catch (err) {
            toast.error("Error Adding Notes")
            console.log("Error:", err)
           
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="container-fluid bg-success page-header py-5">
                <h1 className="text-center text-white display-6">Add Notes</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                    <li className="breadcrumb-item active text-white">Add Notes</li>
                </ol>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <div className="col-lg-7">
                    <form onSubmit={addnotes}>
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
                            type="text"
                            className="w-100 form-control border-1 py-3 mb-4 border-success"
                            placeholder="Enter Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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

export default AddNotes