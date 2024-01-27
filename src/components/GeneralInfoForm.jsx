function Input({label, type, id, value, onChange }) {
  return (
    <label htmlFor={id}>
      {label}
      <br />
      <input type={type} id={id} value={value} onChange={onChange} />
    </label>
  );
}

export default function GeneralInfoForm({ firstName,handleName, lastName, handleLastName }) {
  return (
    <form className="general-info-form">
      <h1>General Info</h1>
      <Input
        label={"First Name:"}
        type={"text"}
        id={"firstName"}
        value={firstName}
        onChange={handleName}
      />
      <Input
        label={"Last Name:"}
        type={"text"}
        id={"lastName"}
        value={lastName}
        onChange={handleLastName}
      />
    </form>
  );
}
