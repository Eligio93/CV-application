import emailIcon from "/src/assets/email-icon.svg";
import phoneIcon from "/src/assets/phone-icon.svg";
import locationIcon from "/src/assets/location-icon.svg"

function Header({ firstName, lastName, email, phone, homeBase }) {
  return (
    <div className="header">
      <p>{firstName + " " + lastName}</p>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="" />
          {email}
        </div>
        <div>
        <img src={phoneIcon} alt="" />
          {phone}</div>
        <div>
        <img src={locationIcon} alt="" />
          {homeBase}</div>
      </div>
    </div>
  );
}

export default function RenderCV({
  firstName,
  lastName,
  email,
  phone,
  homeBase,
  school,
  certificate,
  subject,
}) {
  return (
    <>
      <Header
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        homeBase={homeBase}
      />
      <p>{school}</p>
      <p>{certificate}</p>
      <p>{subject}</p>
    </>
  );
}
