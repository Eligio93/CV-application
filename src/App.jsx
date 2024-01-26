import {useState} from 'react';
import GeneralInfoForm from './components/GeneralInfoForm';
import RenderCV from './components/CvRender';
import "./App.css"

function App() {
  
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  function handleFirstName(e){
    setFirstName(e.target.value);
  }
  function handlelastName(e){
    setLastName(e.target.value);
  }

//importare gli states e suddividere la pagine in layout
return(
  <>
  <div className="input-section">
<GeneralInfoForm
  firstName={firstName}
  LastName={lastName}
  changeName={handleFirstName}
  changeLastName={handlelastName}

/>
</div>
<div className="rendering section">
<RenderCV 
  firstName={firstName}
  lastName={lastName}
  />
</div>
</>
)
}

export default App
