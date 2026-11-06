import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import ResourceService from "../../Services/ResourceService"
import AuthService from "../../Services/AuthService"

const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"]

function AddResource() {
    const nav = useNavigate()
    const [title, setTitle] = useState("")
    const [semester, setSemester] = useState("")
    const [subject, setSubject] = useState("")
    const [topic, setTopic] = useState("")
    const [description, setDescription] = useState("")
    const [videoUrl, setVideoUrl] = useState("")
    const [loading, setLoading] = useState(false)

    async function addResource(e) {
        e.preventDefault()

        if (!semester) return toast.error("Please select a semester")
        if (!subject.trim()) return toast.error("Please enter a subject")
        if (!topic.trim()) return toast.error("Please enter a topic")
        if (!/^https?:\/\//i.test(videoUrl.trim())) return toast.error("Please enter a valid video link (starting with https://)")

        try {
            setLoading(true)
            const currentUser = AuthService.getData()
            await ResourceService.add({
                title: title.trim() || topic.trim(),
                semester,
                subject: subject.trim(),
                topic: topic.trim(),
                description: description.trim(),
                videoUrl: videoUrl.trim(),
                uploadedBy: currentUser?.name || currentUser?.email || "Unknown",
            })
            toast.success("Resource added")
            nav("/admin/manageresource")
        } catch (err) {
            toast.error("Failed to add resource")
            console.log("Error:", err)
        } finally {
            setLoading(false)
        }
    }

    const inputClass = "w-100 form-control border-1 py-3 mb-4 border-success"

    return (
        <>
            <div className="container-fluid bg-success page-header py-5">
                <h1 className="text-center text-white display-6">Add Resource</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
                    <li className="breadcrumb-item"><Link to="/admin/manageresource">Resources</Link></li>
                    <li className="breadcrumb-item active text-white">Add Resource</li>
                </ol>
            </div>

            <div className="d-flex justify-content-center mt-5 mb-5">
                <div className="col-lg-7">
                    <form onSubmit={addResource}>
                        <select className={inputClass} value={semester} onChange={(e) => setSemester(e.target.value)}>
                            <option value="">Select Semester</option>
                            {semesters.map((s) => (
                                <option key={s} value={s}>Semester {s}</option>
                            ))}
                        </select>

                        <input
                            type="text"
                            className={inputClass}
                            placeholder="Subject (e.g. Data Structures)"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />

                        <input
                            type="text"
                            className={inputClass}
                            placeholder="Topic (e.g. Linked List)"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />

                        <input
                            type="text"
                            className={inputClass}
                            placeholder="Title (optional, topic is used if left blank)"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <input
                            type="url"
                            className={inputClass}
                            placeholder="Video link (https://...)"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                        />

                        <textarea
                            className={inputClass}
                            rows={3}
                            placeholder="Short description (optional)"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <button
                            className="w-100 btn form-control border-1 border-success bg-success py-3 text-white"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddResource