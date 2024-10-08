import { useState } from "react";

const intialMailboxForm = { _id: 1, boxSize: "", boxholder: "" };

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(intialMailboxForm);
  const handleSumbit = (e) => {
    e.preventDefault();
    props.addMailBox(formData);
    setFormData(intialMailboxForm);
  };
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.id]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSumbit}>
        <label htmlFor="boxholder">Enter A boxholder</label>
        <input
          type="text"
          id="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Enter A boxholder</label>
        <select
          name="boxSize"
          id="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option hidden disabled value="">
            Select one
          </option>

          <option value="Small">Small</option>
          <option value="Mid">Mid</option>
          <option value="Large">Large</option>
        </select>
        {/* <input
          type="text"
          id="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        /> */}

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
