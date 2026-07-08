import "./Winners.css";
import bgImage from "../assets/slide3-bg.jpg";
import winner1 from "../assets/card-31.jpg";
import winner2 from "../assets/card-32.jpg";
import winner3 from "../assets/card-33.jpg";
const winners = [
  {
    image: winner1,
    participants: "96 Participants",
    pictures: "410 Pictures",
  },
  {
    image: winner2,
    participants: "74 Participants",
    pictures: "284 Pictures",
  },
  {
    image: winner3,
    participants: "88 Participants",
    pictures: "320 Pictures",
  },
];
function Winners() {
  return (
    <section
      className="winners-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="winner-tag">CLOSED PHOTOGRAPHY CONTESTS</span>
          <h2 className="winner-title mt-3">
            <span>Previous Contests</span> With Handpicked <span>Winners</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {winners.map((winner, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="winner-card">
                <img src={winner.image} className="winner-img" alt="winner" />
                <div className="winner-info">
                  <div>
                    <h4>{winner.participants}</h4>
                    <p>Number Of Awards</p>
                  </div>
                  <div>
                    <h4>{winner.pictures}</h4>
                    <p>Submitted Pics</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="#" className="winner-btn">
            Browse Open Contests
          </a>
        </div>
      </div>
    </section>
  );
}
export default Winners;
