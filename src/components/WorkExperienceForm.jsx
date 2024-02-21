import Input from "./Input";
import addIcon from "/src/assets/add-icon.svg";

export default function WorkExperienceForm({
  company,
  position,
  responsabilities,
  dateFrom,
  dateTo,
  onChange,
  addExperience,
  stillWorking,
  checkStillWorking,
}) {
  return (
    <form className="form" id="work-experience-form" onSubmit={addExperience}>
      <h1>Work Experience</h1>
      <Input
        label={"Company Name:"}
        type={"text"}
        placeholder={"Google"}
        id={"company"}
        value={company}
        onChange={onChange}
      />
      <Input
        label={"Position:"}
        type={"text"}
        placeholder={"Front End Developer"}
        id={"position"}
        value={position}
        onChange={onChange}
      />
      {/* <Input
        label={"Responsabilities:"}
        type={"textarea"}
        id={"responsabilities"}
        value={responsabilities}
        onChange={onChange}
      /> */}
      <label htmlFor="responsabilities">Responsabilities:</label>
      <textarea
        id="responsabilities"
        name="responsabilities"
        rows="5"
        cols="33"
        value={responsabilities}
        onChange={onChange}
      ></textarea>
      <Input
        label={"From:"}
        type={"date"}
        id={"dateFrom"}
        value={dateFrom}
        onChange={onChange}
      />
      <Input
        label={"To:"}
        type={"date"}
        id={"dateTo"}
        value={dateTo}
        onChange={onChange}
        disabled={stillWorking}
      />
      <Input
        label={"Still working here?"}
        type={"checkbox"}
        id={"stillWorking"}
        checked={stillWorking}
        onChange={checkStillWorking}
      />
      <button type="submit">
        <img className="btnIcon" src={addIcon} alt="" />
        Add Work Experience
      </button>
    </form>
  );
}
