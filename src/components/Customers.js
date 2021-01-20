import Customer from "./Customer";

const data = [
  {
    name: "Mike Statham",
    image: "images/customer-1.jpg",
    subtitle: `Founder of `,
    link: "tech-analysis.com",
    text:
      "Host helped me realize my project with a highly constrained budget in like no time.",
  },
  {
    name: "John Mellow",
    image: "images/customer-2.jpg",
    subtitle: "Hosts his private videos on uHost.",
    link: null,
    text:
      "I worked as a blogger and always looked for an integrated hosting and file storage solution. I found it in uHost!",
  },
];
const Customers = () => {
  return (
    <main>
      {data.map((customer, index) => (
        <Customer {...customer} key={index} index={index + 1} />
      ))}
    </main>
  );
};

export default Customers;
