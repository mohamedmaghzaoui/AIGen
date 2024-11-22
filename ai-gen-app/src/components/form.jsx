import './form.css'
import { Popup } from './popup'
export const Form = () => {
  return (
    <div className="ms-5 mt-5 row">
      <div className="col">
        <h3 className="text-light">Let s connect constellations</h3>
        <p style={{ color: '#b2becd' }}>
          Let s align our constellations! Reach out and let the magic of
          collaboration illuminate our skies.
        </p>
        <div className="row">
          <div className="col-4 ">
            <span
              style={{ cursor: 'pointer' }}
              className="custom-span h-75 fs-5"
            >
              user
            </span>
            <Popup />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  )
}
