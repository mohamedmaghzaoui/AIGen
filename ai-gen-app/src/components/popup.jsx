import { useState } from 'react'
import './popup.css'

export const Popup = ({ fieldName, hidePopUp, updateFieldData }) => {
  const [formData, setFormData] = useState({
    type: '',
    defaultValue: '',
    dataRange: '',
    format: '',
    regex: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateFieldData(formData)
  }

  return (
    <div className="overlay">
      <div className="content">
        <span onClick={hidePopUp} className="close px-2 py-1 offset-xl-11">
          close
        </span>
        <h1 className="text-center text-white">{fieldName}</h1>

        <form onSubmit={handleSubmit}>
          <div className="custom-select-wrapper mb-5 mt-3">
            <select
              required
              className="form-select custom-select"
              aria-label="Default select example"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="" disabled>
                Field type (required)
              </option>
              <option value="string">String</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
              <option value="array">Array</option>
              <option value="null">Null</option>
            </select>
          </div>

          <div className="mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Default Value (optional)"
              name="defaultValue"
              value={formData.defaultValue}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Data Range (optional, e.g., 1-100)"
              name="dataRange"
              value={formData.dataRange}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Format (optional, e.g., yyyy-mm-dd)"
              name="format"
              value={formData.format}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Regex (optional, e.g., ^[A-Za-z0-9]+$)"
              name="regex"
              value={formData.regex}
              onChange={handleChange}
            />
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
