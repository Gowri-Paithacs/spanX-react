import "./Pricing.css";
import plan1 from "../assets/pricing-01.jpg";
import plan2 from "../assets/pricing-02.jpg";
import plan3 from "../assets/pricing-03.jpg";

const plans = [
  {
    image: plan1,
    name: "Basic Plan",
    price: "$25 USD",
    features: [
      { text: "Lorem Ipsum Dolore Sente", active: true },
      { text: "Songo Lorem Ipsum Dol", active: true },
      { text: "Mattioo Vango Neptuno", active: true },
      { text: "Denim Stracha Kopi", active: false },
      { text: "Digital Photography Awards", active: false },
    ],
  },
  {
    image: plan2,
    name: "Standard Plan",
    price: "$45 USD",
    features: [
      { text: "Lorem Ipsum Dolore Sente", active: true },
      { text: "Songo Lorem Ipsum Dol", active: true },
      { text: "Mattioo Vango Neptuno", active: true },
      { text: "Denim Stracha Kopi", active: true },
      { text: "Digital Photography Awards", active: false },
    ],
  },
  {
    image: plan3,
    name: "Advanced Plan",
    price: "$85 USD",
    features: [
      { text: "Lorem Ipsum Dolore Sente", active: true },
      { text: "Songo Lorem Ipsum Dol", active: true },
      { text: "Mattioo Vango Neptuno", active: true },
      { text: "Denim Stracha Kopi", active: true },
      { text: "Digital Photography Awards", active: true },
    ],
  },
];
function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="pricing-tag">OUR PRICING</span>
          <h2 className="pricing-title">
            Photography <span>Contest Plans</span> And Price <span>Awards</span>
          </h2>
        </div>
        <div className="row g-4">
          {plans.map((plan, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="pricing-card text-center">
                <img src={plan.image} className="plan-img" alt={plan.name} />
                <h3 className="plan-name">{plan.name}</h3>
                <hr />
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={
                        feature.active ? "feature-blue" : "feature-gray"
                      }
                    >
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <div className="plan-price">{plan.price}</div>
                <a href="#" className="plan-btn">
                  Choose This Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Pricing;
