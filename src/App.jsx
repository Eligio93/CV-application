import { useState } from "react";
import {GeneralInfoForm} from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import RenderCV from "./components/CvRender";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email:"",
    phone:"",
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
        
        />
        
      </div>
      <div className="rendering section">
        <RenderCV
          firstName={formValues.firstName}
          lastName={formValues.lastName}
          email={formValues.email}
          phone={formValues.phone}
        />
      </div>
    </>
  );
}

export default App;
