import { useState } from "react";
import { GeneralInfoForm } from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import RenderCV from "./components/CvRender";
import "./App.css";

function App() {
  const [educationList, setEducationList] = useState([]);
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

  //manage the changes of the input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };
  const addEducation = (e) => {
    e.preventDefault();
    setEducationList([...educationList, 
      {
        school: formValues.school,
        certificate: formValues.certificate,
        subject: formValues.subject,
      },
    ]);
    setFormValues({ ...formValues, school: "", certificate: "", subject: "" });
    console.log(educationList);
  };

  const deleteEdu=(index)=>{
    setEducationList(educationList.filter((education,eindex)=>index!== eindex))
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
        />
      </div>
      <div className="rendering-section">
        <RenderCV 
        formValues={formValues}
        educationList={educationList}
        deleteEdu={deleteEdu}
         />
      </div>
    </>
  );
}

export default App;
