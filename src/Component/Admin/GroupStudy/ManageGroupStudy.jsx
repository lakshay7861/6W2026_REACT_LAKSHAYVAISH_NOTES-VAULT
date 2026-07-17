import { Link } from "react-router-dom"

function ManageGroupStudy() {
    return (
        <>
            <div className="container-fluid page-header bg-success py-5">
                <h1 className="text-center text-white display-6">Manage Group Study</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="#">Pages</Link>
                    </li>
                    <li className="breadcrumb-item active text-white">Manage Group Study</li>
                </ol>
            </div>


            <div className="container mt-5 ">
                <div className="d-flex justify-content-between ">
                    <h1 className="text-center  text-success">Group Study List</h1>
                    <Link to="/alumni/addnotes">
                        <button
                            className="  bi bi-plus-square-fill btn border-secondary py-3 bg-white text-primary "
                            type="button"
                        >
                            Add Group Study
                        </button>
                    </Link>
                </div>
            </div>

            < div className="table-responsive m-5" >
                <table className="table border border-success">
                    <thead>
                        <tr>
                            <th scope="col ">Sr No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Description</th>
                            <th scope="=col">CreatedAt</th>
                            <th scope="col">Updated by</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                </table>
                {/* <tbody>
                    {notes.map((notes, index) => (
                        <tr>
                            <td>
                                <p className="mb-0 mt-4">{index + 1}</p>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">{notes.name}</p>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">{notes.description}</p>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">{notes.status ? "Active" : "Inactive"}</p>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">{new Date(notes.createdAt).toLocaleTimeString()}</p>
                            </td>
                            <td>
                                <Link to={`/admin/notes/edit/${notes.id}`} >
                                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                                        <i className="bi bi-pencil text-danger" />
                                    </button>
                                </Link>
                                &nbsp;
                                <button className="btn btn-md rounded-circle bg-light border mt-4">
                                    <i className="bi bi-trash text-danger" />
                                </button>
                            </td>
                        </tr>
                    ))

                    }

                </tbody> */}


            </div >


        </>
    )
}
export default ManageGroupStudy