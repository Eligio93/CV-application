export default function GeneralInfoForm({firstName,LastName,changeName,changeLastName}){
    return(
        <form className="general-info-form">
             <h1>General Info</h1>
             <label htmlFor="firstName">
                First Name:
                <input type="text" id="firstName" value={firstName} onChange={changeName}/>
             </label>
             <label htmlFor="lastName">
                Last Name:
                <input type="text" id="lastName" value={LastName} onChange={changeLastName}/>
             </label>
        </form>
    )
}