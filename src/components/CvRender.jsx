import emailIcon from "/src/assets/email-icon.svg";
import phoneIcon from "/src/assets/phone-icon.svg";
import locationIcon from "/src/assets/location-icon.svg"

function Header({...formValues}) {
  return (
    <div className="header">
      <p>{formValues.firstName + " " + formValues.lastName}</p>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="" />
          {formValues.email}
        </div>
        <div>
        <img src={phoneIcon} alt="" />
          {formValues.phone}</div>
        <div>
        <img src={locationIcon} alt="" />
          {formValues.homeBase}</div>
      </div>
    </div>
  );
}
function Sidebar({educationList,deleteEdu}){

  return(
    <div className="sidebar">
       {educationList.map((education,index)=>(
        <div className="education-item" key={index}>
        <button onClick={()=>deleteEdu(index)}>Delete</button>
        <button >Edit</button>
        <p>{education.certificate +' in '+education.subject}</p>
        <p>{education.school}</p>
        </div>
      ))}

    </div>
  )
  }

export default function RenderCV({formValues,educationList,deleteEdu}) {
  return (
    <>
      <Header
       {...formValues}
      />
      <Sidebar
      educationList={educationList}
      deleteEdu={deleteEdu}
      />
     
     
    </>
  );
}
