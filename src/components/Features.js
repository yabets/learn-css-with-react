import Feature from "./Feature";
import "./Features.css";
import Title from "./Title";

const data = [
  {
    description: "3,857,000 Trusting Customers",
    svg: "images/trust.svg",
  },
  {
    description: "99.999% uptime Guarantee",
    svg: "images/guarentee.svg",
  },
  {
    description: "Lighting Fast CDN",
    svg: "images/cdn.svg",
  },
];
const Features = () => {
  return (
    <section className="key-features">
      <Title style={{ color: "white", margin: "32px" }}>
        Many Good Reasons to Stick Around
      </Title>
      <ul className="key-features__list">
        {data.map((feature, index) => (
          <li key={index} className="key-feature">
            {<Feature {...feature}></Feature>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
