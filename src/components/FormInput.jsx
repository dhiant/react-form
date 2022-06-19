import { useState } from "react";
import "./forminput.css";

const FormInput = (props) => {
  const { label, onChange, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label htmlFor="">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        blured={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
