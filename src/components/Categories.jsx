import "./Categories.css";

import icon1 from "../assets/icon-01.png";
import icon2 from "../assets/icon-02.png";
import icon3 from "../assets/icon-03.png";
import icon4 from "../assets/icon-04.png";
import popular1 from "../assets/popular-01.png";
import popular2 from "../assets/popular-02.png";
import popular3 from "../assets/popular-03.png";
import popular4 from "../assets/popular-04.png";

function Categories() {
  return (
    <section className="category-section">
      <div className="container">
        {/* Heading */}
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-5">
          <div>
            <span className="section-tag">OUR CATEGORIES</span>
            <h2 className="section-title mt-2">
              Check Out <span>Popular</span> Contest <span>Categories</span>
            </h2>
          </div>
          <a href="#" className="discover-btn mt-3 mt-lg-0">
            Discover All Categories
          </a>
        </div>
        {/* Cards */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-3 col-md-6">
            <div className="category-card">
              <div className="card-top">
                <div className="icon-box">
                  <img src={icon1} alt="Nature Icon" />
                </div>
                <div>
                  <h5>Nature Pic Contest</h5>
                  <p>
                    <span>120</span> Available Contests
                  </p>
                </div>
              </div>
              <img
                src={popular1}
                className="category-img"
                alt="Nature Contest"
              />
              <a href="#" className="card-btn">
                Browse Nature Pic Contests
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-lg-3 col-md-6">
            <div className="category-card">
              <div className="card-top">
                <div className="icon-box">
                  <img src={icon2} alt="Random Icon" />
                </div>
                <div>
                  <h5>Random Pic Contest</h5>
                  <p>
                    <span>110</span> Available Contests
                  </p>
                </div>
              </div>
              <img
                src={popular2}
                className="category-img"
                alt="Random Contest"
              />
              <a href="#" className="card-btn">
                Browse Random Pic Contests
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-lg-3 col-md-6">
            <div className="category-card">
              <div className="card-top">
                <div className="icon-box">
                  <img src={icon3} alt="Portrait Icon" />
                </div>
                <div>
                  <h5>Portrait Pic Contest</h5>
                  <p>
                    <span>164</span> Available Contests
                  </p>
                </div>
              </div>
              <img
                src={popular3}
                className="category-img"
                alt="Portrait Contest"
              />
              <a href="#" className="card-btn">
                Browse Portrait Pic Contests
              </a>
            </div>
          </div>
          {/* Card 4 */}
          <div className="col-lg-3 col-md-6">
            <div className="category-card">
              <div className="card-top">
                <div className="icon-box">
                  <img src={icon4} alt="Space Icon" />
                </div>
                <div>
                  <h5>Space Pic Contest</h5>
                  <p>
                    <span>135</span> Available Contests
                  </p>
                </div>
              </div>
              <img
                src={popular4}
                className="category-img"
                alt="Space Contest"
              />
              <a href="#" className="card-btn">
                Browse Space Pic Contests
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Categories;
