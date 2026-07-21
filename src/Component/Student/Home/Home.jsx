function Home() {
    return (
        <>
            <main className="main">
                {/* Hero Section */}
                <section id="hero" className="hero section dark-background">
                    <img src="\assets\img\home image\fluid image 1st.avif" alt="" />
                    <div className="container">
                        <h2 >
                            Knowledge For Everyone
                            <br />
                            Share Notes Easily
                        </h2>
                        <p >
                            Empowering Students Through Smart Learning
                        </p>
                        <div className="d-flex mt-4">
                            <a href="courses.html" className="btn-get-started border-info-subtle border-4">
                                Explore Question Paper
                            </a>
                        </div>
                    </div>
                </section>
                {/* /Hero Section */}
                {/* About Section */}
                <section id="about" className="about section">
                    <div className="container">
                        <div className="row gy-4">
                            <div
                                className="col-lg-6 order-1 order-lg-2"

                            >
                                <img src="\assets\img\home image\2nd right image.avif" className="img-fluid" alt="" />
                            </div>
                            <div
                                className="col-lg-6 order-2 order-lg-1 content"

                            >
                                <h3>Everything You Need to Study, All in One Place</h3>
                                <p className="fst-italic">
                                    Our platform provides students with notes, question papers, PDFs,
                                    and useful learning resources to make studying easier, faster, and
                                    more effective.
                                </p>
                                <ul>
                                    <li>
                                        <i className="bi bi-check-circle" />{" "}
                                        <span>
                                            Organized notes and PDFs.
                                        </span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle" />{" "}
                                        <span>
                                            Previous year papers.
                                        </span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle" />{" "}
                                        <span>
                                            One platform for all your academic needs—explore study notes, previous year papers,
                                            valuable learning resources, and group study sessions to make learning easier,
                                            faster, and more effective.
                                        </span>
                                    </li>
                                </ul>
                                <a href="#" className="read-more">
                                    <span>Read More</span>
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /About Section */}
                {/* Counts Section */}
                <section id="counts" className="section counts light-background">
                    <div className="container" >
                        <div className="row gy-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span

                                    />
                                    <p>Students</p>
                                </div>
                            </div>
                            {/* End Stats Item */}
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span

                                        className="purecounter"
                                    />
                                    <p>Courses</p>
                                </div>
                            </div>
                            {/* End Stats Item */}
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span

                                    />
                                    <p>Events</p>
                                </div>
                            </div>
                            {/* End Stats Item */}
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span

                                    />
                                    <p>Trainers</p>
                                </div>
                            </div>
                            {/* End Stats Item */}
                        </div>
                    </div>
                </section>
                {/* /Counts Section */}
                {/* Why Us Section */}
                <section id="why-us" className="section why-us">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-4" >
                                <div className="why-box">
                                    <h3>Why Choose Our Platform?</h3>
                                    <p>
                                        Our platform provides everything students need in one place.
                                        Access quality study notes, previous year papers, useful learning resources,
                                        and collaborate through group study to improve your
                                        learning experience and exam preparation.
                                    </p>
                                    <div className="text-center">
                                        <a href="#" className="more-btn">
                                            <span>Learn More</span> <i className="bi bi-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End Why Box */}
                            <div className="col-lg-8 d-flex align-items-stretch">
                                <div className="row gy-4">
                                    <div className="col-xl-4">
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i className="bi bi-file-play " />
                                            <h4 className="fs-3">Video Lectures</h4>
                                            <p>
                                                Learn through high-quality educational videos that simplify concepts and enhance your academic understanding.
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Icon Box */}
                                    <div className="col-xl-4" >
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i className="bi bi-file-earmark-fill" />
                                            <h4 className="fs-3">Previous Papers and Notes</h4>
                                            <p>
                                                Explore organized study notes and previous year papers to strengthen concepts and boost exam performance.
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Icon Box */}
                                    <div className="col-xl-4" >
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i className="bi bi-people" />
                                            <h4 className="fs-3">Group Study</h4>
                                            <p>
                                                Collaborate with fellow students, share knowledge, and
                                                learn together through interactive group study sessions.
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Icon Box */}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Why Us Section */}
                {/* Features Section */}
                <section id="features" className="features section">
                    <div className="container">
                        <div className="row gy-4">
                            <div
                                className="col-lg-3 col-md-4"
                            >
                                <div className="features-item">
                                    <i className="bi bi-eye" style={{ color: "#ffbb2c" }} />
                                    <h3>
                                        <a href="" className="stretched-link">
                                            Study Notes
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            {/* End Feature Item */}
                            <div
                                className="col-lg-3 col-md-4"

                            >
                                <div className="features-item">
                                    <i className="bi bi-infinity" style={{ color: "#5578ff" }} />
                                    <h3>
                                        <a href="" className="stretched-link">
                                            Previous Paper
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            {/* End Feature Item */}
                            <div
                                className="col-lg-3 col-md-4"

                            >
                                <div className="features-item">
                                    <i className="bi bi-mortarboard" style={{ color: "#e80368" }} />
                                    <h3>
                                        <a href="" className="stretched-link">
                                            Student Community
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            {/* End Feature Item */}
                            <div
                                className="col-lg-3 col-md-4"

                            >
                                <div className="features-item">
                                    <i className="bi bi-nut" style={{ color: "#e361ff" }} />
                                    <h3>
                                        <a href="" className="stretched-link">
                                            Browse Paper
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            {/* End Feature Item */}
                            <div
                                className="col-lg-3 col-md-4"

                            >
                                <div className="features-item">
                                    <i className="bi bi-shuffle" style={{ color: "#47aeff" }} />
                                    <h3>
                                        <a href="" className="stretched-link">
                                            Group Study
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            {/* End Feature Item */}
                            <div
                                className="col-lg-3 col-md-4"

                            >
                                <div className="features-item">
                                    <i className="bi bi-star" style={{ color: "#ffa76e" }} />
                                    <h3>
                                        <a href="" className="stretched-link">
                                            Upload Notes  
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            {/* End Feature Item */}
                            <div
                                className="col-lg-3 col-md-4"

                            >
                                <div className="features-item">
                                    <i className="bi bi-x-diamond" style={{ color: "#11dbcf" }} />
                                    <h3>
                                        <a href="" className="stretched-link">
                                            Share Resource
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            {/* End Feature Item */}
                            <div
                                className="col-lg-3 col-md-4"

                            >
                                <div className="features-item">
                                    <i className="bi bi-camera-video" style={{ color: "#4233ff" }} />
                                    <h3>
                                        <a href="" className="stretched-link">
                                            Video Resource
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            {/* End Feature Item */}
                            <div
                                className="col-lg-3 col-md-4"

                            >
                                <div className="features-item">
                                    <i className="bi bi-command" style={{ color: "#b2904f" }} />
                                    <h3>
                                        <a href="" className="stretched-link">
                                        Join Group
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            {/* End Feature Item */}
                            <div
                                className="col-lg-3 col-md-4"

                            >
                                <div className="features-item">
                                    <i className="bi bi-dribbble" style={{ color: "#b20969" }} />
                                    <h3>
                                        <a href="" className="stretched-link">
                                         Learning Resource
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            {/* End Feature Item */}
                        
                        </div>
                    </div>
                </section>
                {/* /Features Section */}
                {/* Courses Section */}
                <section id="courses" className="courses section">
                    {/* Section Title */}
                    <div className="container section-title" >
                        <h2>Courses</h2>
                        <p>Popular Courses</p>
                    </div>
                    {/* End Section Title */}
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-4 col-md-6 d-flex align-items-stretch"

                            >
                                <div className="course-item">
                                    <img
                                        src="assets/img/course/course-1.webp"
                                        className="img-fluid"
                                        alt="..."
                                    />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <p className="category">Web Development</p>
                                            <p className="price">$169</p>
                                        </div>
                                        <h3>
                                            <a href="course-details.html">Website Design</a>
                                        </h3>
                                        <p className="description">
                                            Et architecto provident deleniti facere repellat nobis iste. Id
                                            facere quia quae dolores dolorem tempore.
                                        </p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img
                                                    src="assets/img/person/person-m-7.webp"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <a href="" className="trainer-link">
                                                    Antonio
                                                </a>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bi bi-person user-icon" />
                                                &nbsp;50 &nbsp;&nbsp;
                                                <i className="bi bi-heart heart-icon" />
                                                &nbsp;65
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* End Course Item*/}
                            <div
                                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"

                            >
                                <div className="course-item">
                                    <img
                                        src="assets/img/course/course-2.webp"
                                        className="img-fluid"
                                        alt="..."
                                    />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <p className="category">Marketing</p>
                                            <p className="price">$250</p>
                                        </div>
                                        <h3>
                                            <a href="course-details.html">Search Engine Optimization</a>
                                        </h3>
                                        <p className="description">
                                            Et architecto provident deleniti facere repellat nobis iste. Id
                                            facere quia quae dolores dolorem tempore.
                                        </p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img
                                                    src="assets/img/person/person-f-14.webp"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <a href="" className="trainer-link">
                                                    Lana
                                                </a>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bi bi-person user-icon" />
                                                &nbsp;35 &nbsp;&nbsp;
                                                <i className="bi bi-heart heart-icon" />
                                                &nbsp;42
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* End Course Item*/}
                            <div
                                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"

                            >
                                <div className="course-item">
                                    <img
                                        src="assets/img/course/course-3.webp"
                                        className="img-fluid"
                                        alt="..."
                                    />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <p className="category">Content</p>
                                            <p className="price">$180</p>
                                        </div>
                                        <h3>
                                            <a href="course-details.html">Copywriting</a>
                                        </h3>
                                        <p className="description">
                                            Et architecto provident deleniti facere repellat nobis iste. Id
                                            facere quia quae dolores dolorem tempore.
                                        </p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img
                                                    src="assets/img/person/person-m-12.webp"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <a href="" className="trainer-link">
                                                    Brandon
                                                </a>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bi bi-person user-icon" />
                                                &nbsp;20 &nbsp;&nbsp;
                                                <i className="bi bi-heart heart-icon" />
                                                &nbsp;85
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* End Course Item*/}
                        </div>
                    </div>
                </section>
                {/* /Courses Section */}
                {/* Trainers Index Section */}
                <section id="trainers-index" className="section trainers-index">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-4 col-md-6 d-flex"

                            >
                                <div className="member">
                                    <img
                                        src="assets/img/trainers/trainer-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="member-content">
                                        <h4>Walter White</h4>
                                        <span>Web Development</span>
                                        <p>
                                            Magni qui quod omnis unde et eos fuga et exercitationem. Odio
                                            veritatis perspiciatis quaerat qui aut aut aut
                                        </p>
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter-x" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Member */}
                            <div
                                className="col-lg-4 col-md-6 d-flex"

                            >
                                <div className="member">
                                    <img
                                        src="assets/img/trainers/trainer-2.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="member-content">
                                        <h4>Sarah Jhinson</h4>
                                        <span>Marketing</span>
                                        <p>
                                            Repellat fugiat adipisci nemo illum nesciunt voluptas
                                            repellendus. In architecto rerum rerum temporibus
                                        </p>
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter-x" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Member */}
                            <div
                                className="col-lg-4 col-md-6 d-flex"

                            >
                                <div className="member">
                                    <img
                                        src="assets/img/trainers/trainer-3.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="member-content">
                                        <h4>William Anderson</h4>
                                        <span>Content</span>
                                        <p>
                                            Voluptas necessitatibus occaecati quia. Earum totam consequuntur
                                            qui porro et laborum toro des clara
                                        </p>
                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter-x" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Member */}
                        </div>
                    </div>
                </section>
                {/* /Trainers Index Section */}
            </main>

        </>
    )
}
export default Home