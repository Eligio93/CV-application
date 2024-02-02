import Input from "./Input";


export default function WorkExperienceForm({company,position,responsabilities,dateFrom,dateTo,onChange}){
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
        //   placeholder={"example@example.com"}
          id={"responsabilities"}
          value={responsabilities}
          onChange={onChange}
        />
        <Input
          label={"From:"}
          type={"date"}
        //   placeholder={"0123456789"}
          id={"dateFrom"}
          value={dateFrom}
          onChange={onChange}
        />
        <Input
          label={"To:"}
          type={"date"}
        //   placeholder={"0123456789"}
          id={"dateTo"}
          value={dateTo}
          onChange={onChange}
        />
       
       
      </form>
    )
}