import { useState } from "react";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import "./App.css";
import MailboxForm from "./components/MailboxForm";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addMailBox = (newMail) => {
    const id = mailboxes.length + 1;
    const MailboxId = { ...newMail, _id: id };
    setMailboxes([...mailboxes, MailboxId]);
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route
          path="new-mailbox"
          element={
            <MailboxForm setMailboxes={setMailboxes} addMailBox={addMailBox} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
