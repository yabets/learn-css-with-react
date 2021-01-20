import Title from "./Title";
import Plan from "./Plan";
import data from "./plans.json";
import AppContext from "../AppContext";
import { useContext } from "react";
import "./Plan.css";

const Plans = () => {
  const { toggleModal } = useContext(AppContext);
  return (
    <section id="plans">
      <Title>Choose Your Plan</Title>
      <div className="plan__list">
        {data.map((plan, index) => (
          <Plan key={index} {...plan} onClick={() => toggleModal()} />
        ))}
      </div>
    </section>
  );
};

export default Plans;
