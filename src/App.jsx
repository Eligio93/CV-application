import { useState } from "react";
import { GeneralInfoForm } from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import RenderCV from "./components/CvRender";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    certificate: "",
    subject: "",
    company:"",
    position:"",
    responsabilities:"",
    dateFrom:"",
    dateTo:"",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };
  //importare gli states e suddividere la pagine in layout
  return (
    <>
      <div className="input-section">
        <GeneralInfoForm
          firstName={formValues.firstName}
          lastName={formValues.lastName}
          email={formValues.email}
          phone={formValues.phone}
          onChange={handleChange}
        />
        <EducationForm
          school={formValues.school}
          certificate={formValues.certificate}
          subject={formValues.subject}
          onChange={handleChange}
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
      <div className="rendering section">
        <RenderCV
          firstName={formValues.firstName}
          lastName={formValues.lastName}
          email={formValues.email}
          phone={formValues.phone}
          school={formValues.school}
          certificate={formValues.certificate}
          subject={formValues.subject}
        />
      </div>
    </>
  );
}

export default App;
