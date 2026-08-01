import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PaperService from "../../../Services/PaperService"

function ManagePaper() {

    const [paper ,setPaper] = useState([])

async function getPaper() {
        const data = await PaperService.all()
        setPaper(data)

    }
    useEffect(() => {
      getPaper()
     }, [])

    async function deletepaper(id) {
        try {

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    NotesService.deleteCat(id)
                    fetchNotes();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });

        } catch (err) {
            toast.error("Error Deleting Notes")
            console.log("Error: ", err)
        }
    }


  

    return (
        <>
            <div className="container-fluid page-header bg-success py-5">
                <h1 className="text-center text-white display-6">Manage Paper</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="#">Pages</Link>
                    </li>
                    <li className="breadcrumb-item active text-white">Manage Paper</li>
                </ol>
            </div>


            <div className="container mt-5">
                <div className="d-flex justify-content-between">
                    <h1 className="text-center text-success">Paper List</h1>
                    <Link to="addpaper" >
                        <button
                            className=" bi bi-plus-square-fill  btn border-secondary py-3 bg-white text-primary "
                            type="button"
                        >
                            Add Paper
                        </button>
                    </Link>
                </div>
            </div>

            {/* Single Page Header End */}

            <div className="table-responsive m-5 ">
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
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                </table>
                <tbody>
                    {paper.map((Paper, index) => (
                        <tr>
                            <td>
                                <p className="mb-0 mt-4">{index + 1}</p>
                            </td>
                            <td>
                                <img className="img-fluid rounded-circle" style={{ width: "80px", height: "80px" }} src={Paper.image} alt="" />
                            </td>
                            <td>
                                <p className="mb-0 mt-4">{Paper.name}</p>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">{Paper.title}</p>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">{Paper.status ? "Active" : "Inactive"}</p>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">{new Date(Paper.createdAt).toLocaleTimeString()}</p>
                            </td>
                            <td>
                                <Link to={`/admin/Paper/edit/${Paper.id}`}>
                                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                                        <i className="bi bi-pencil text-danger" />
                                    </button>
                                </Link>
                                &nbsp;
                                <button //onClick={() => { deleteCategory(Paper.id) }} 
                                className="btn btn-md rounded-circle bg-light border mt-4">
                                    <i className="bi bi-trash text-danger" />
                                </button>
                            </td>
                        </tr>
                    ))

                    }

                </tbody>

            </div>



        </>
    )

}
export default ManagePaper