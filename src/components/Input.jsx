export default function Input({ label, type, id, value, onChange,placeholder }) {
    let pattern;
    if(type=="tel"){
      pattern='/^+[0-9]+$/'
    }
  return (
    <label htmlFor={id}>
      {label}
      <br />
      <input type={type} id={id} value={value} onChange={onChange} pattern={pattern} placeholder={placeholder}/>
    </label>
  );
}