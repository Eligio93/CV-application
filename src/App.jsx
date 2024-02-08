import { useState } from "react";
import { GeneralInfoForm } from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import RenderCV from "./components/CvRender";
import "./App.css";

function App() {
  const [stillWorking, setStillWorking] = useState(true);
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    homeBase: "",
    school: "",
    certificate: "",
    subject: "",
    company: "",
    position: "",
    responsabilities: "",
    dateFrom: "",
    dateTo: "",
  });
  const checkStillWorking=(e)=>{
    setStillWorking(e.target.checked)
    if(e.target.checked){
      setFormValues({...formValues,dateTo:""})
    }
  }

  //manage the changes of the input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };
  const addEducation = (e) => {
    e.preventDefault();
    setEducationList([
      ...educationList,
      {
        school: formValues.school,
        certificate: formValues.certificate,
        subject: formValues.subject,
      },
    ]);
    setFormValues({ ...formValues, school: "", certificate: "", subject: "" });
    console.log(educationList);
  };

  const deleteEdu = (index) => {
    setEducationList(
      educationList.filter((education, eindex) => index !== eindex)
    );
  };
  const editEdu = (index) => {
    deleteEdu(index);
    setFormValues({
      ...formValues,
      school: educationList[index].school,
      certificate: educationList[index].certificate,
      subject: educationList[index].subject,
    });
  };
  const addExperience = (e) => {
    e.preventDefault();
    console.log(formValues.dateTo)
    setExperienceList([
      ...experienceList,
      {
        company: formValues.company,
        position: formValues.position,
        responsabilities: formValues.responsabilities,
        dateFrom: formValues.dateFrom,
        dateTo: formValues.dateTo,
      },
    ]);
    setFormValues({
      ...formValues,
      company: "",
      position: "",
      responsabilities: "",
      dateFrom: "",
      dateTo: "",
    });
  };
  const deleteExperience=(index)=>{
    setExperienceList(experienceList.filter((experience,eindex)=> index !== eindex))
  }

  return (
    <>
      <div className="input-section">
        <GeneralInfoForm
          firstName={formValues.firstName}
          lastName={formValues.lastName}
          email={formValues.email}
          phone={formValues.phone}
          homeBase={formValues.homeBase}
          onChange={handleChange}
        />
        <EducationForm
          school={formValues.school}
          certificate={formValues.certificate}
          subject={formValues.subject}
          onChange={handleChange}
          addEducation={addEducation}
        />

        <WorkExperienceForm
          company={formValues.company}
          position={formValues.position}
          responsabilities={formValues.responsabilities}
          dateFrom={formValues.dateFrom}
          dateTo={formValues.dateTo}
          onChange={handleChange}
          addExperience={addExperience}
          stillWorking={stillWorking}
          checkStillWorking={checkStillWorking}
        />
      </div>
      <div className="rendering-section">
        <RenderCV
          formValues={formValues}
          educationList={educationList}
          deleteEdu={deleteEdu}
          editEdu={editEdu}
          experienceList={experienceList}
          deleteExperience={deleteExperience}
        />
      </div>
    </>
  );
}

export default App;
