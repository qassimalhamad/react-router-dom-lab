import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const mail = props.mailboxes.find((mail) => mail._id === Number(mailboxId));
  console.log("Selected Mailbox:", mail);
  return (
    <>
      <h1>Mail details</h1>
      <ul>
        <li>BoxHolder: {mail.boxholder}</li>
        <li>BoxSize: {mail.boxSize}</li>
      </ul>
    </>
  );
};

export default MailboxDetails;
