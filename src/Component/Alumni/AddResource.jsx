import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ResourceService from "../../../Services/ResourceService"

function AddResource() {


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [resource, setResource] = useState('')
    const [uploadedby, setUploaded] = useState('')


    const nav = useNavigate()
    async function addresource(e) {
        e.preventDefault()
        try {
            let payload = {
                name: title,
                description: description,
                resource: resource

            }
            await ResourceService.add(payload)


        } catch (error) {

        }
    }




    return (
        <>
            <div className="container-fluid bg-success page-header py-5">
                <h1 className="text-center text-white display-6">Add Resource</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="#">Pages</Link>
                    </li>
                    <li className="breadcrumb-item active text-white">Add Resource</li>
                </ol>
            </div>

            {/* Single Page Header End */}
            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">
                    <form action="/admin/manageresource" className="" onSubmit={addresource} >

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4 border-success"
                            placeholder="Enter Title" onChange={(e) => { setTitle(e.target.value) }}
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4 border-success"
                            placeholder="Enter description" onChange={(e) => { setDescription(e.target.value) }}
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4 border-success"
                            placeholder="Enter resource " onChange={(e) => { setResource(e.target.files[0]) }}
                        /> 
                        

                        <button
                            className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddResource