import { useState } from 'react'

export default function TextInput({ type = 'text', label, isRequired = false }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="form-group">
      <input type={type} value={value} onChange={handleChange} className="form-field" name="formTitle" id="formTitle" required={isRequired} />
      <label className={"form-label " + (value.length > 0 ? "float-label" : "")} htmlFor="formTitle">{label}</label>
    </div>
  );
}
