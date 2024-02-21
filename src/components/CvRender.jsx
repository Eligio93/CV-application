import emailIcon from "/src/assets/email-icon.svg";
import phoneIcon from "/src/assets/phone-icon.svg";
import locationIcon from "/src/assets/location-icon.svg";
import deleteIcon from "/src/assets/delete-icon.svg";
import editIcon from "/src/assets/edit-icon.svg";
import { format } from "date-fns";

function Sidebar({ educationList, deleteEdu, editEdu, formValues }) {
  return (
    <div className="sidebar">
      <h1>
        {formValues.firstName} <br /> {formValues.lastName}
      </h1>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="" />
          {formValues.email}
        </div>
        <div>
          <img src={phoneIcon} alt="" />
          {formValues.phone}
        </div>
        <div>
          <img src={locationIcon} alt="" />
          {formValues.homeBase}
        </div>
      </div>
      {educationList.length > 0 && <h2>Education</h2>}
      {educationList.map((education, index) => (
        <div className="education-item" key={index}>
          <p>
            <b>{education.certificate + " in " + education.subject}</b>
          </p>
          <p>
            <i>{education.school}</i>
          </p>
          <div className="edu-item-btns">
            <button onClick={() => deleteEdu(index)}>
              <img src={deleteIcon} alt="" />
            </button>
            <button onClick={() => editEdu(index)}>
              <img src={editIcon} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
function Content({ experienceList, deleteExperience, editExperience }) {
  return (
    <div className="content">
      {experienceList.length > 0 && <h2>Work Experiences</h2>}
      {experienceList.map((experience, index) => (
        <div className="experience-item" key={index}>
          <div className="exp-item-header">
            <p>
              <b>{experience.position + " at " + experience.company}</b>
            </p>

            <div className="exp-item-date">
              <p>{format(experience.dateFrom, "dd/MM/yyyy")}</p>-
              <p>
                {experience.dateTo === ""
                  ? "Current"
                  : format(experience.dateTo, "dd/MM/yyyy")}
              </p>
            </div>
          </div>
          <div className="exp-item-description">
            <p style={{ whiteSpace: "pre-line" }}>
              {experience.responsabilities}
            </p>
          </div>

          <div className="exp-item-btns">
            <button onClick={() => deleteExperience(index)}>
              <img src={deleteIcon} alt="" />
            </button>
            <button onClick={() => editExperience(index)}>
              <img src={editIcon} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RenderCV({
  formValues,
  educationList,
  deleteEdu,
  editEdu,
  experienceList,
  deleteExperience,
  editExperience,
}) {
  return (
    <>
      {/* <Header {...formValues} /> */}

      <Sidebar
        educationList={educationList}
        deleteEdu={deleteEdu}
        editEdu={editEdu}
        formValues={formValues}
      />
      <Content
        experienceList={experienceList}
        deleteExperience={deleteExperience}
        editExperience={editExperience}
      />
    </>
  );
}
