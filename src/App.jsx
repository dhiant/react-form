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
      required: true,
      errorMessage:
        "Username must be 3-16 characters and shouldn't include any special chacters!",
      pattern: "^[a-zA-Z0-9 ]*$",
    },

    {
      id: 2,
      label: "Email Address",
      type: "email",
      placeholder: "Email Address",
      name: "email",
      required: true,
      errorMessage: "Use valid email address",
    },
    {
      id: 3,
      label: "Phone Number",
      type: "text",
      placeholder: "Phone Number",
      name: "number",
      required: true,
      errorMessage:
        "Number format should be Country Code - Your Number (+977-9876543210)",
      pattern: "/^+?([0-9]{2}))?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/",
    },
    {
      id: 4,
      label: "Password",
      type: "text",
      placeholder: "Password",
      name: "password",
      required: true,
      errorMessage:
        "Password must be 8-20 characters and include at least 1 letter, 1 number and 1 special chacters",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      label: "Confirm Password",
      type: "text",
      placeholder: "Confirm Password",
      name: "confirmPassword",
      required: true,
      errorMessage: "Passwords didn't match",
      pattern: values.password,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
