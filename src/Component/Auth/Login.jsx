import { useState } from "react";
import { useNavigate } from "react-router-dom"
import UsersServices from "../../Services/UsersServices";
import { toast } from "react-toastify";

function Login() {

    const nav = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function getEmail(e) {
        setEmail(e.target.value)
    }
    function getPassword(e) {
        setPassword(e.target.value)
    }

    async function submitform(e) {
    e.preventDefault()

    try {
        const user = await UsersServices.login({ email, password })

        toast.success("Login successful")

        if (Number(user.userType) === 1) {
            nav("/admin", { replace: true })
        } else {
            nav("/", { replace: true })
        }
    } catch (error) {
        toast.error(error.message)
    }
}

    return (
        <>
            <div className="page-title bg-success-emphasis " >
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center ">
                            <div className="col-log-8">
                                <h1 className="font-monospace">Login
                                    <br />
                                </h1>

                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs justify-content-center align-items-center">
                    <div className="container justify-content-center">
                        <ol>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about" >About </a>

                            </li>
                            <li className=" justify-content-center current">Login
                                <br />
                            </li>
                        </ol>
                    </div>
                </nav>
            </div>


            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">
                    <form action="" className="" onSubmit={submitform}>


                        <input
                            type="email"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Your Email" onChange={getEmail}
                        />
                        <input
                            type="password"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Your Password" onChange={getPassword}
                        />

                        <button
                            className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                            type="submit "
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>

        </>
    )
}
export default Login