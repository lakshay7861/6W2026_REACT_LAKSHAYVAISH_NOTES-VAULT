import { Link } from "react-router-dom"

function Upload() {
    const options = [
        { to: "/upload/notes", title: "Upload Notes", text: "Share handwritten or typed notes (PDF) for a subject." },
        { to: "/upload/papers", title: "Upload Question Paper", text: "Share a previous year question paper (PDF)." },
        { to: "/upload/resources", title: "Add Video Link", text: "Share a YouTube or other video link for a topic." },
    ]

    return (
        <div className="container my-5">
            <h2 className="text-success mb-1">Upload</h2>
            <p className="text-muted mb-4">Choose what you want to share with other students.</p>
            <div className="row g-4">
                {options.map((o) => (
                    <div className="col-md-4" key={o.to}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{o.title}</h5>
                                <p className="card-text text-muted">{o.text}</p>
                                <Link to={o.to} className="btn btn-success">Continue</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Upload