import "./App.css";
import { useState } from "react";
import Contacts from "./components/Contacts";

function App() {
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      Please enter a name: <br />
      <input name="name" value={form.name} onChange={onChangeInput} /> <br />
      <input
        name="surname"
        value={form.surname}
        onChange={onChangeInput}
      />{" "}
      <br />
      {form.name} {form.surname}
      <Contacts />
    </div>
  );
}

export default App;
