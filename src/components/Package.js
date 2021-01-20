const Package = ({ id, recommended, title, subtitle, description }) => {
  return (
    <section className="package" id={id}>
      <h1 className="package__header">{title}</h1>
      {recommended ? <h2 className="package__badge">RECOMMENDED</h2> : null}
      <h2 className="package__subheader">{subtitle}</h2>
      <p className="package__description">{description}</p>
    </section>
  );
};

export default Package;
