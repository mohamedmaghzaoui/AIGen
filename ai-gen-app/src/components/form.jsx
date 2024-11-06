import './form.css'
export const Form = () => {
  return (
    <div className="ms-5 mt-5 row">
      <div className="col-6">
        <h3 className="text-light">Let s connect constellations</h3>
        <p style={{ color: '#cdd3d6' }}>
          Let s align our constellations! Reach out and let the magic of
          collaboration illuminate our skies.
        </p>
        <input
          type="text"
          className="custom-input text-light form-control"
          placeholder="fieldName"
        />
      </div>

      <div></div>
    </div>
  )
}
