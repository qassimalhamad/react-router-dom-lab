import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <ul>
      {props.mailboxes.map((mail) => (
        <li>
          <Link to={`/mailboxes/${mail._id}`}>Mailbox {mail._id}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MailboxList;
