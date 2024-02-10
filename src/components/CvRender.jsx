import emailIcon from "/src/assets/email-icon.svg";
import phoneIcon from "/src/assets/phone-icon.svg";
import locationIcon from "/src/assets/location-icon.svg";

function Header({ ...formValues }) {
  return (
    <div className="header">
      <p>{formValues.firstName}<br />{formValues.lastName}</p>
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
    </div>
  );
}
function Sidebar({ educationList, deleteEdu, editEdu }) {
  return (
    <div className="sidebar">
      {educationList.length>0 && <h2>Education</h2>}
      {educationList.map((education, index) => (
        <div className="education-item" key={index}>
          
          <p>
            <b>{education.certificate + " in " + education.subject}</b>
          </p>
          <p>
            <i>{education.school}</i>
          </p>
          <button onClick={() => deleteEdu(index)}>Delete</button>
          <button onClick={() => editEdu(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
function Content({ experienceList, deleteExperience, editExperience }) {
  return (
    <div className="content">
      {experienceList.map((experience, index) => (
        <div className="experience-item" key={index}>
          <button onClick={() => deleteExperience(index)}>Delete</button>
          <button onClick={() => editExperience(index)}>Edit</button>
          <p>
            <b>{experience.position + " at " + experience.company}</b>
          </p>
          <p style={{ whiteSpace: 'pre-line' }}>{experience.responsabilities}</p>
          {experience.dateTo === "" ? "Still working" : experience.dateTo}
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
  editExperience
}) {
  return (
    <>
      <Header {...formValues} />
      <div id="main">
        <Sidebar
          educationList={educationList}
          deleteEdu={deleteEdu}
          editEdu={editEdu}
        />
        <Content
          experienceList={experienceList}
          deleteExperience={deleteExperience}
          editExperience={editExperience}
        />
      </div>
    </>
  );
}
