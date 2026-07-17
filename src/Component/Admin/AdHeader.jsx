import { Link } from "react-router-dom"

function AdHeader() {
    return (
        <>
            <header id="header" className="header d-flex align-items-center sticky-top ">
                <div className="container-fluid container-xl position-relative d-flex align-items-center  g-2">
                    <Link to="index.html" className=" text-decoration-none logo d-flex align-items-center me-auto">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.webp" alt=""> */}
                        <h1 className="sitename me-3 pe-2">Admin Panel</h1>
                    </Link>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li>
                                <Link to="admindashboard" className=" p-1 m-1 text-decoration-none active">
                                    Dashboard
                                    <br />
                                </Link>
                            </li>
                            <li>
                                <Link to="managenotes" className=" p-1 m-1 text-decoration-none">ManageNotes</Link>
                            </li>

                            <li>
                                <Link to="managepaper" className="  p-1  m-1 text-decoration-none">ManagePaper</Link>
                            </li>
                            <li>
                                <Link to="manageresource" className=" p-1  m-1 text-decoration-none">Resources</Link>
                            </li>
                            <li>
                                <Link to="managegroupstudy" className=" p-1 m-1 text-decoration-none">Group Study</Link>
                            </li>

                            <li className="dropdown text-decoration-none">
                                <Link to="#">
                                    <span>Account</span>{" "}
                                    <i className="bi bi-chevron-down toggle-dropdown text-decoration-none" />
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="#">Dropdown 1</Link>
                                    </li>

                                    <li>
                                        <Link to="#">Dropdown 2</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Dropdown 3</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Dropdown 4</Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                    </nav>
                    <Link className="btn-getstarted" to="login">
                        Login
                    </Link>
                </div>
            </header>

        </>
    )
}
export default AdHeader