const Feature = ({ svg, description }) => {
  return (
    <>
      <div className="key-feature__image">
        <img src={svg} alt={description} />
      </div>
      <p className="key-feature__description">{description}</p>
    </>
  );
};

export default Feature;
