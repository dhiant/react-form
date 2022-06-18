import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      label: "Username",
      type: "text",
      placeholder: "Username",
      name: "username",
    },
    {
      id: 2,
      label: "Email Address",
      type: "email",
      placeholder: "Email Address",
      name: "email",
    },
    {
      id: 3,
      label: "Phone Number",
      type: "text",
      placeholder: "Phone Number",
      name: "number",
    },
    {
      id: 4,
      label: "Password",
      type: "password",
      placeholder: "password",
      name: "password",
    },
    {
      id: 5,
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password",
      name: "confirmPassword",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  console.log(values);
  return (
    <div className="App">
      <form action="">
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
