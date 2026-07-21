function AdDashBoard() {
    return (
        <>
            <h1>
                <div className="container mt-5">

                    <h2 className="text-success fw-bold fs-1">Welcome Back, Admin !</h2>
                    <p className="text-successn fw-bold fs-1">Manage your study platform efficiently.</p>

                    <div className="row mt-4">

                        <div className="col-md-3">
                            <div className="card shadow p-3">
                                <h5>Total Users</h5>
                                <h2>0</h2>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow p-3">
                                <h5>Total Notes</h5>
                                <h2>0</h2>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow p-3">
                                <h5>Total Papers</h5>
                                <h2>0</h2>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow p-3">
                                <h5>Total Resources</h5>
                                <h2>0</h2>
                            </div>
                        </div>

                    </div>

                </div>
            </h1>

        </>
    )

}
export default AdDashBoard