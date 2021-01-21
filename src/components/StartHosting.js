import Button from "./Button";
import "./StartHosting.css";

const StartHosting = () => {
  return (
    <main className="signup-main">
      <h1 className="signup-title">Awesome! Let's dive right in!</h1>
      <form action="/" className="signup-form">
        <label htmlFor="title">Title</label>
        <select id="title">
          <option value="mr">Mr.</option>
          <option value="ms">Ms.</option>
        </select>
        <label htmlFor="first-name">First name</label>
        <input type="text" id="first-name" required />
        <label htmlFor="last-name">Last name</label>
        <input type="text" id="last-name" />
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <input type="checkbox" id="agree-terms" />
        <label htmlFor="agree-terms">
          Agree to <a href="#/">Term &amp; Conditions</a>
        </label>
        <Button disabled type="submit" className="button">
          Sign Up
        </Button>
      </form>
    </main>
  );
};

export default StartHosting;
