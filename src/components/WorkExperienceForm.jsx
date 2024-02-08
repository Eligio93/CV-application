import { useState } from "react";
import Input from "./Input";


export default function WorkExperienceForm({company,position,responsabilities,dateFrom,dateTo,onChange,addExperience}){
   
    const [showDate,setShowDate]=useState(true)
    return(
        <form className="form" id="work-experience-form">
        <h1>Work Experience</h1>
        <Input
          label={"Company Name:"}
          type={"text"}
          placeholder={"Google"}
          id={"company"}
          value={company}
          onChange={onChange}
        />
        <Input
          label={"Position:"}
          type={"text"}
          placeholder={"Front End Developer"}
          id={"position"}
          value={position}
          onChange={onChange}
        />
        <Input
          label={"Responsabilities:"}
          type={"textarea"}
          id={"responsabilities"}
          value={responsabilities}
          onChange={onChange}
        />
        <Input
          label={"From:"}
          type={"date"}
          id={"dateFrom"}
          value={dateFrom}
          onChange={onChange}
        />
        <Input
          label={"To:"}
          type={"date"}
          id={"dateTo"}
          value={dateTo}
          onChange={onChange}
          disabled={showDate}
        />
        <Input
        label={"Still working here"}
        type={"checkbox"}
        id={"stillHere"}
        checked={showDate}
        onChange={(e)=>setShowDate(e.target.checked)}
        />
        <button onClick={addExperience}>Add Work Experience</button>
       
       
      </form>
    )
}