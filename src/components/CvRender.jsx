import emailIcon from "/src/assets/email-icon.svg";
import phoneIcon from "/src/assets/phone-icon.svg";
import locationIcon from "/src/assets/location-icon.svg"

function Header({ ...formValues/*firstName, lastName, email, phone, homeBase */}) {
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

export default function RenderCV({formValues,educationList}) {
  return (
    <>
      <Header
       {...formValues}
      />
      {educationList.map(education=>(
        <>
        <p>{education.school}</p>
        <p>{education.certificate}</p>
        <p>{education.subject}</p>
        </>
      ))}
     
    </>
  );
}
