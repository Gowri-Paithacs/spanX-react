import "./Hero.css";
import banner from "../assets/banner-bg.jpg";
function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${banner})` }}>
      <div className="overlay">
        <div className="container hero-content text-center">
          <h1>
            Enter a world of
            <span> Photos </span>& Amazing
            <span> Awards</span>
          </h1>
          <hr />
          <p className="ax-auto col-lg-8">
            SnapX Photography is a professional website template with 5
            different HTML pages for maximum customization. It is free for
            commercial usage.
          </p>
          <div className="hero-buttons d-flex fex-column flex-md-row justify-content-center align-items-center gap-3">
            <a href="#" className="btn btn-explore">
              Explore SnapX Contest
            </a>
            <a href="#" className="watch-video">
              <i className="fa-solid fa-play"></i> Watch Our Video Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
