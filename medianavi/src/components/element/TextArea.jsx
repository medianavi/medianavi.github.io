import { useState } from 'react'

export default function TextArea({ rows = 6, label, isRequired }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="form-group">
      <textarea name="formContent" id="formContent" className="form-field" rows={rows} onChange={handleChange} required={isRequired} value={value}></textarea>
      <label className={"form-label " + (value.length > 0 ? "float-label" : "")} htmlFor="formTitle">{label}</label>
    </div>
  )
}
