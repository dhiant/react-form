import "./forminput.css";

const FormInput = (props) => {
  const { label, onChange, ...inputProps } = props;
  return (
    <div className="formInput">
      <label htmlFor="">{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default FormInput;
