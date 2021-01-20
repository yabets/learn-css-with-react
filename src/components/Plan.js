import Button from "./Button";

const Plan = ({
  title,
  price,
  recommended,
  description,
  features,
  onClick,
}) => {
  return (
    <article className={`plan ${recommended ? "plan--highlighted" : ""}`}>
      {recommended ? <h1 className="plan__annotation">RECOMMENDED</h1> : null}
      <h1 className="plan__title">{title}</h1>
      <h2 className="plan__price">${price}/month</h2>
      <h3>{description}</h3>
      <ul className="plan__features">
        {features.map((feature, index) => (
          <li key={index} className="plan__feature">
            {feature}
          </li>
        ))}
      </ul>
      <div>
        <Button onClick={onClick}>CHOOSE PLAN</Button>
      </div>
    </article>
  );
};

export default Plan;
