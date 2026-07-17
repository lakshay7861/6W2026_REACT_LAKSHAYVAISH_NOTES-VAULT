import React from "react";
function About() {
    return (
        <>
            {/* Page Tittle */}
            <div className="page-title bg-success-emphasis " >
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center ">
                            <div className="col-log-8">
                                <h1 className="font-monospace">About Us
                                    <br />
                                </h1>
                                <p className="mb-0">
                                    "Builted by students, for students! 💻 We know the struggle of hunting for reliable study material right
                                    before minor or major exams. That’s why NotesVault brings together handwritten faculty notes, solved PYQs,
                                    and official reference documents under one clean dashboard. Select your track, download your materials,
                                    and clear your reappears or ace your internals with confidence! 💯"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs justify-content-center">
                    <div className="container justify-content-center">
                        <ol>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li className=" justify-content-center current">About
                                <br />
                            </li>
                        </ol>
                    </div>
                </nav>
            </div>
            {/* End Page Title */}
            {/* About Section */}


           

            {/* About Us Section */}
            <section id="about-us" className="section about-us">
                <div className="container">
                    <div className="row gy-4">
                        <div
                            className="col-lg-6 order-1 order-lg-2"

                        >
                            <img
                                src="assets/img/about/about-1.webp"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div
                            className="col-lg-6 order-2 order-lg-1 content"

                        >
                            <h2>Why Choose Us?</h2>
                            <p className="fst-italic">
                                "NotesVault started as a simple hostel-room idea to end the last-minute exam panic. Instead of scrolling through chaotic WhatsApp and Telegram groups,
                                we built this digital library to help students save time, study smart, and clear their internals, majors, and reappear exams with confidence. 💻✨"
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check-circle" />{" "}
                                    <span>
                                        🔒 100% Verified Content: "Every question paper and syllabus PDF is cross-checked with official university guidelines before uploading."
                                    </span>
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" />{" "}
                                    <span>
                                        ⚡ 3-Click Download: "No annoying ads, no redirection links. Just click your Branch, select your Semester, and open your PDF instantly."
                                    </span>
                                </li>
                                <li>
                                    <i className="bi bi-check-circle" />{" "}
                                    <span>
                                        🧠 High-Quality Notes: "Handwritten notes from top faculty members and peer toppers, structured module-by-module."
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* /About Us Section */}
            {/* Counts Section */}
            <section id="counts" className="section counts light-background">
                <div className="container">
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
            {/* Testimonials Section */}
            <section id="testimonials" className="testimonials section">
                {/* Section Title */}
                <div className="container section-title" >
                    <h2>Testimonials</h2>
                    <p>What are they saying</p>
                </div>
                {/* End Section Title */}
                <div className="container" >
                    <div className="swiper init-swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img
                                            src="assets/img/person/person-m-9.webp"
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Rohan Sharma</h3>
                                        <h4>rB.Tech (CSE), 4th Sem</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                        </div>
                                        <p>
                                            <i className="bi bi-quote quote-icon-left" />
                                            <span>
                                                "Hunting for Data Structures notes one night before the exam used to be a nightmare.
                                                Thanks to NotesVault, I found module-wise handwritten notes and the last 3 years' PYQs all in one clean place.
                                                Literally saved my internals! 🚀"
                                            </span>
                                            <i className="bi bi-quote quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End testimonial item */}
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img
                                            src="assets/img/person/person-f-5.webp"
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                        </div>
                                        <p>
                                            <i className="bi bi-quote quote-icon-left" />
                                            <span>
                                                Export tempor illum tamen malis malis eram quae irure esse
                                                labore quem cillum quid cillum eram malis quorum velit fore
                                                eram velit sunt aliqua noster fugiat irure amet legam anim
                                                culpa.
                                            </span>
                                            <i className="bi bi-quote quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End testimonial item */}
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img
                                            src="assets/img/person/person-f-12.webp"
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                        </div>
                                        <p>
                                            <i className="bi bi-quote quote-icon-left" />
                                            <span>
                                                Enim nisi quem export duis labore cillum quae magna enim
                                                sint quorum nulla quem veniam duis minim tempor labore quem
                                                eram duis noster aute amet eram fore quis sint minim.
                                            </span>
                                            <i className="bi bi-quote quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End testimonial item */}
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img
                                            src="assets/img/person/person-m-12.webp"
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                        </div>
                                        <p>
                                            <i className="bi bi-quote quote-icon-left" />
                                            <span>
                                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                                                multos export minim fugiat minim velit minim dolor enim duis
                                                veniam ipsum anim magna sunt elit fore quem dolore labore
                                                illum veniam.
                                            </span>
                                            <i className="bi bi-quote quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End testimonial item */}
                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img
                                            src="assets/img/person/person-m-13.webp"
                                            className="testimonial-img"
                                            alt=""
                                        />
                                        <h3>Rohan Sharma</h3>
                                        <h4>B.Tech (CSE), 4th Sem</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                        </div>
                                        <p>
                                            <i className="bi bi-quote quote-icon-left" />
                                            <span>
                                                Quis quorum aliqua sint quem legam fore sunt eram irure
                                                aliqua veniam tempor noster veniam enim culpa labore duis
                                                sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                                                fore nisi cillum quid.
                                            </span>
                                            <i className="bi bi-quote quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End testimonial item */}
                        </div>
                        <div className="swiper-pagination" />
                    </div>
                </div>
            </section>
            {/* /Testimonials Section */}
        </>

    )
}
export default About