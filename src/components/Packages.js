import Package from "./Package";
import "./Package.css";

const data = [
  {
    id: "plus",
    title: "Our PLUS Plan",
    recommended: true,
    subtitle: "The most popular choice of  our customers.",
    description:
      "Benefit from increased storage and faster support to ensure that your mission-critical data and application are always available!",
  },
  {
    id: "free",
    title: "Our FREE Plan",
    subtitle: "An extremely solid start into our hosting world.",
    description: "Get started immediately at zero cost!",
  },
  {
    id: "premium",
    title: "Our PREMIUM Plan",
    subtitle: "All your enterprise needs. Instant support, guaranteed uptime.",
    description:
      "The best solution for small to large enterprises. Because hosting shouldn't be in the way!",
  },
];
const Packages = () => {
  return (
    <>
      <div className="background"></div>
      <main className="package__main">
        {data.map((item, index) => (
          <Package {...item} key={index} />
        ))}
      </main>
    </>
  );
};

export default Packages;
