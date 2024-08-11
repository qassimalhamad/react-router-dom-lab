import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="mailboxes">Mailboxes</Link>
        <Link to="new-mailbox">New Mailbox</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
