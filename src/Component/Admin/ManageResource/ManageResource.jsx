import { Link } from "react-router-dom"

function ManageResource() {
    return (
        <>

            <div className="container-fluid page-header bg-success py-5">
                <h1 className="text-center text-white display-6">Manage Resource</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="#">Pages</Link>
                    </li>
                    <li className="breadcrumb-item active text-white">Manage  Resource</li>
                </ol>
            </div>


            <div className="container mt-5 ">
                <div className="d-flex justify-content-between ">
                    <h1 className="text-center  text-success">Resource List</h1>
                    <Link to="">
                        <button
                            className="bi bi-plus-square-fill g-3  p-2 btn border-secondary py-3 bg-white text-primary "
                            type="button"

                        >

                            Add Resource
                        </button>

                    </Link>
                </div>
            </div >

            {/* Single Page Header End */}

            < div className="table-responsive m-5" >
                <table className="table border border-success">
                    <thead>
                        <tr>
                            <th scope="col ">Sr No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Description</th>
                            <th scope="col">File URL</th>
                            <th scope="=col">CreatedAt</th>
                            <th scope="col">Uploaded by</th>
                            <th scope="col">Updated by</th>
                            <th scope="col">Action</th>


                        </tr>
                    </thead>
                </table>
                <tbody>
                  {resource .map((resource, index) => (
                    <tr>
                      <td>
                        <p className="mb-0 mt-4">{index + 1}</p>
                      </td>
                      <td>
                        <img className="img-fluid rounded-circle" style={{width: "80px", height: "80px"}} src={resource.image} alt="" />
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{resource.name}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{resource.description}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{resource.status ? "Active" : "Inactive"}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{new Date(resource.createdAt).toLocaleTimeString()}</p>
                      </td>
                      <td>
                        <Link to={`/admin/resource/edit/${resource.id}`}>
                          <button className="btn btn-md rounded-circle bg-light border mt-4">
                            <i className="bi bi-pencil text-danger" />
                          </button>
                        </Link>
                        &nbsp;
                        <button onClick={() => { deleteCategory(resource.id) }} className="btn btn-md rounded-circle bg-light border mt-4">
                          <i className="bi bi-trash text-danger" />
                        </button>
                      </td>
                    </tr>
                  ))

                  }

                </tbody>


            </div >



        </>
    )
}
export default ManageResource