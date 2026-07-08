import "./ContestCarousel.css";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import photo1 from "../assets/photo-video01.jpg";
import photo2 from "../assets/photo-video02.jpg";
import photo3 from "../assets/photo-video03.jpg";
import photo4 from "../assets/photo-video04.jpg";

function ContestCarousel() {
  return (
    <>
      <section className="contest-section">
        <div id="contestCarousel" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row justify-content-center align-items-center g-4">
                  {/* Slide 1 */}
                  <div className="col-lg-4 col-md-6">
                    <img
                      src={card1}
                      className="img-fluid rounded-4 shadow w-100 "
                      alt="img"
                    />
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="card contest-card border-0 shadow">
                      <div className="card-body text-center p-4">
                        <h4 className="text-info fw-bold mt-5">
                          Walk In The Nature
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <small className="text-secondary">(4.0)</small>
                        </h4>
                        <div className="mt-2">
                          <p>
                            <strong>Contest Winner:</strong> Tomino Boy
                          </p>
                          <p>
                            <strong>Contest Author:</strong> Anthony Bolt
                          </p>
                          <p>
                            <strong>Awards:</strong> Canon EOS R1
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <img
                      src={card2}
                      className="img-fluid rounded-4 shadow w-100 "
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* slide 2 */}
            <div className="carousel-item">
              <div className="container">
                <div className="row justify-content-center align-items-center g-4">
                  <div className="col-lg-4 col-md-6">
                    <img
                      src={photo1}
                      className="img-fluid rounded-4 shadow w-100 "
                      alt="img"
                    />
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="card contest-card border-0 shadow">
                      <div className="card-body text-center p-4">
                        <h4 className="text-info fw-bold mt-5">
                          Where The Magic Lives
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <small className="text-secondary">(4.0)</small>
                        </h4>
                        <div className="mt-2">
                          <p>
                            <strong>Contest Winner:</strong> Joseph Radhik
                          </p>
                          <p>
                            <strong>Contest Author:</strong> Mario Testino
                          </p>
                          <p>
                            <strong>Awards:</strong> Sony A7 IV
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <img
                      src={photo2}
                      className="img-fluid rounded-4 shadow w-100"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* SLIDE 3 */}
            <div className="carousel-item">
              <div className="container">
                <div className="row justify-content-center align-items-center g-4">
                  <div className="col-lg-4 col-md-6">
                    <img
                      src={photo3}
                      className="img-fluid rounded-4 shadow w-100 "
                      alt="img"
                    />
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="card contest-card border-0 shadow">
                      <div className="card-body text-center p-4">
                        <h4 className="text-info fw-bold mt-5">
                          Secrets Of The Deep
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <small className="text-secondary">(4.0)</small>
                        </h4>
                        <div className="mt-2">
                          <p>
                            <strong>Contest Winner:</strong> Peter Leibovitz
                          </p>
                          <p>
                            <strong>Contest Author:</strong> Ansel Adams
                          </p>
                          <p>
                            <strong>Awards:</strong> Nikon Z8
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <img
                      src={photo4}
                      className="img-fluid rounded-4 shadow w-100 "
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Button  */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#contestCarousel"
            data-bs-slide="prev"
          >
            <span className="custom-arrow">
              <i className="fa-solid fa-chevron-left"></i>
            </span>
          </button>
          {/* Next Button  */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#contestCarousel"
            data-bs-slide="next"
          >
            <span className="custom-arrow">
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
export default ContestCarousel;
