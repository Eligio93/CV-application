import Input from "./Input"


export default function EducationForm({highSchool,subject,studyTitle,onChange}){

    return(
        <form id="education-form" className="form">
        <h1>Education</h1>
        <Input
          label={"School:"}
          type={"text"}
          placeholder={"New York University"}
          id={"School"}
          value={highSchool}
          onChange={onChange}
        />
        <Input
          label={"Study Title:"}
          type={"text"}
          placeholder={"Degree, Diploma, Phd, Certification"}
          id={"study-title"}
          value={studyTitle}
          onChange={onChange}
        />
        <Input
          label={"Subject:"}
          type={"text"}
          placeholder={"Computer Science"}
          id={"subject"}
          value={subject}
          onChange={onChange}
        />
        <button>Add</button>
        <button>Remove</button>
      </form>
       
    )
}