import Input from "./Input";
import addIcon from "/src/assets/add-icon.svg";


export default function EducationForm({
  school,
  subject,
  certificate,
  onChange,
  addEducation,
}) {
  return (
    <form id="education-form" className="form">
      <h1>Education</h1>
      <Input
        label={"School:"}
        type={"text"}
        placeholder={"New York University"}
        id={"school"}
        value={school}
        onChange={onChange}
      />
      <Input
        label={"Study Title:"}
        type={"text"}
        placeholder={"Degree, Diploma, Phd, Certification"}
        id={"certificate"}
        value={certificate}
        onChange={onChange}
      />
      <Input
        label={"Subject:"}
        type={"text"}
        placeholder={"Computer Science"}
        id={"subject"}
        value={subject}
        onChange={onChange}
      />
      <button onClick={addEducation}>
        <img className="btnIcon" src={addIcon} alt="" />
        Add</button>
    </form>
  );
}
