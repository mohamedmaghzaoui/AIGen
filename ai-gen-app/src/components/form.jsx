import { useState } from 'react'
import './form.css'
import { Popup } from './popup'
import { MdEdit } from 'react-icons/md'
import { IoIosAddCircleOutline } from 'react-icons/io'

export const Form = () => {
  const [fields, setFields] = useState([
    { id: 1, name: 'Field 1', value: '', children: [] },
  ])
  const [showPopUp, setshowPopUp] = useState(false)
  const [activeField, setActiveField] = useState(null)
  {
    console.log(fields)
  }

  const hidePopUp = () => {
    setshowPopUp(false)
  }

  // Add a new nested field below the parent field
  const addField = (parentId = null) => {
    const newField = {
      id: Date.now(),
      name: `Field ${fields.length + 1}`,
      value: '',
      children: [],
    }

    if (parentId === null) {
      setFields([...fields, newField])
    } else {
      setFields((prevFields) =>
        prevFields.map((field) =>
          field.id === parentId
            ? { ...field, children: [...field.children, newField] }
            : field
        )
      )
    }
  }

  // Handle field input change
  const handleInputChange = (id, newValue) => {
    const updateFields = (items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, value: newValue }
          : { ...item, children: updateFields(item.children) }
      )

    setFields(updateFields(fields))
  }

  // Open popup to edit field properties
  const openPopup = (field) => {
    setActiveField(field)
    setshowPopUp(true)
  }

  // Handle popup form submission to update field data
  const updateFieldData = (data) => {
    const updateFields = (items) =>
      items.map((item) =>
        item.id === activeField.id
          ? { ...item, ...data }
          : { ...item, children: updateFields(item.children) }
      )

    setFields(updateFields(fields))
    hidePopUp()
  }

  // Recursive rendering of fields with nested inputs below
  const renderFields = (fields, nested = false) => {
    return fields.map((field) => (
      <div key={field.id} className={`${nested ? 'ms-5 col-6' : 'col-10'}`}>
        <div className="d-flex align-items-center mt-2">
          <input
            type="text"
            className="custom-span h-75 fs-5 flex-grow-1"
            value={field.value}
            placeholder={field.name}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            style={{ cursor: 'pointer' }}
          />
          <button
            onClick={() => openPopup(field)}
            className="btn btn-outline-warning btn-sm ms-2"
          >
            <MdEdit />
          </button>
          <button
            onClick={() => addField(field.id)}
            className="btn btn-outline-primary btn-sm ms-2"
          >
            <IoIosAddCircleOutline />
          </button>
        </div>
        {field.children.length > 0 && (
          <div className="mt-2">{renderFields(field.children, true)}</div>
        )}
      </div>
    ))
  }

  return (
    <div className="ms-5 mt-5 row">
      <div className="col">
        <h3 className="text-light">Let's connect constellations</h3>
        <p style={{ color: '#b2becd' }}>
          Let's align our constellations! Reach out and let the magic of
          collaboration illuminate our skies.
        </p>

        <div className="row">{renderFields(fields)}</div>

        <button
          onClick={() => addField()}
          className="btn btn-outline-success mt-3"
        >
          Add Field
        </button>
      </div>

      {showPopUp && (
        <Popup
          fieldName={activeField.name}
          hidePopUp={hidePopUp}
          updateFieldData={updateFieldData}
        />
      )}
    </div>
  )
}
