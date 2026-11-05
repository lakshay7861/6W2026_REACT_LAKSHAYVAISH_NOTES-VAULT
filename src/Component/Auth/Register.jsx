import { useState } from "react";
import { useNavigate } from "react-router-dom"
import UsersServices from "../../Services/UsersServices";
import { toast } from "react-toastify";

function Register() {

    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');


    function getEmail(e) {
        setEmail(e.target.value)
    }
    function getpassword(e) {
        setPassword(e.target.value)
    }

 async function submitform(e) {
    e.preventDefault();

    let payload = {
        name: name,
        email: email,
        phone: phone,
        password: password
    }

    try {
        await UsersServices.register(payload)
        toast.success("Registration Successful")
        nav("/login")
    } catch (error) {
        toast.error(error.message || "Registration failed")
    }
}


    return (
        <>

            {/* Single Page Header start */}
            <div className="page-title bg-success-emphasis " >
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center ">
                            <div className="col-log-8">
                                <h1 className="font-monospace">Register
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
                            <li className=" justify-content-center current">Register
                                <br />
                            </li>
                        </ol>
                    </div>
                </nav>
            </div>
            {/* Single Page Header End */}

            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">
                    <form action="/" className="" onSubmit={submitform}>
                        <input
                            type="text"
                            className="w-100 form-control border-0  border-3  border-success py-3 mb-4"
                            placeholder="Enter Your Name" onChange={(e) => { setName(e.target.value) }}
                        />
                        <input
                            type="number"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Your Contact Number" onChange={(e) => { setPhone(e.target.value) }}
                        />
                        <input
                            type="email"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Your Email" onChange={getEmail}
                        />
                        <input
                            type="password"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Your Password" onChange={getpassword}
                        />

                        <button
                            className="w-100 btn form-control border-secondary py-3  mb-5 bg-white text-primary "
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
export default Register