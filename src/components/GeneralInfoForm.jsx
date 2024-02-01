import Input from "./Input";

function GeneralInfoForm({ firstName, lastName, email, phone, onChange }) {
  return (
    <form className="form" id="general-info-form">
      <h1>General Info</h1>
      <Input
        label={"First Name:"}
        type={"text"}
        placeholder={"John"}
        id={"firstName"}
        value={firstName}
        onChange={onChange}
      />
      <Input
        label={"Last Name:"}
        type={"text"}
        placeholder={"Smith"}
        id={"lastName"}
        value={lastName}
        onChange={onChange}
      />
      <Input
        label={"Email:"}
        type={"email"}
        placeholder={"example@example.com"}
        id={"email"}
        value={email}
        onChange={onChange}
      />
      <Input
        label={"Phone:"}
        type={"tel"}
        placeholder={"0123456789"}
        id={"phone"}
        value={phone}
        onChange={onChange}
      />
     
    </form>
  );
}

export{GeneralInfoForm, Input}