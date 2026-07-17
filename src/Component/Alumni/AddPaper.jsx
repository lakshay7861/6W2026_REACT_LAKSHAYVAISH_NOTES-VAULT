import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import PaperService from "../../../Services/PaperService"
import { toast } from "react-toastify"

function AddPaper() {

    const [title, setTitle] = useState('')
    const [subject, setSubject] = useState('')
    const [year, setYear] = useState('')
    const nav = useNavigate()

   

     async function addpaper(e) {
        e.preventDefault()
        try {

            let payload = {
                name: title,
                subject: subject,
                year: year
            }
         
           await PaperService.add(payload)
            nav(-1)
            toast.success("Paper Added")

        } catch (err) {
            toast.success("Error adding Paper")
            console.log("Error", err)
        }
    }
    return (
        <>

            <div className="container-fluid bg-success page-header py-5">
                <h1 className="text-center text-white display-6">Add Paper</h1>
                <ol className="breadcrumb justify-content-center mb-1">
                    <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="#">Pages</Link>
                    </li>
                    <li className="breadcrumb-item active text-white">Add Paper</li>
                </ol>
            </div>

            {/* Single Page Header End */}
            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">
                    <form action="/" className="" onSubmit={addpaper} >

                        <input
                            type="text"
                            className="w-100 form-control border-1 py-3 mb-4 border-success"
                            placeholder="Enter Title" onChange={(e) => { setTitle(e.target.value) }}
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-1 py-3 mb-4 border-success"
                            placeholder="Enter Subject" onChange={(e) => { setSubject(e.target.value) }}
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-1 py-3 mb-4 border-success"
                            placeholder="Enter Year" onChange={(e) => { setYear(e.target.value) }}
                        />
                        <input type="file"
                        className="w-100 form-control border-1 py-3 mb-4 border-success"
                        
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
export default AddPaper