import React from "react";
import "./Customer.css";

const Customer = ({ index, image, name, subtitle, link, text }) => {
  const imageContainer = (
    <div className="testimonial__image-container">
      <img
        src={image}
        alt={`${name}- Customer`}
        className="testimonial__image"
      />
    </div>
  );
  return (
    <div className="testimonial" id={`customer-${index}`}>
      {index % 2 === 1 ? imageContainer : null}
      <div className="testimonial__info">
        <h1 className="testimonial__name">{name}</h1>
        <h2 className="testimonial__subtitle">
          {subtitle} {link ? <a href={link}>{link}</a> : null}
        </h2>
        <p className="testimonial__text">{text}</p>
      </div>
      {index % 2 === 0 ? imageContainer : null}
    </div>
  );
};

export default Customer;
