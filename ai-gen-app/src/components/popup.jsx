import './popup.css'

export const Popup = ({ hidePopUp }) => {
  return (
    <div className="overlay">
      <div className="content">
        <span
          onClick={() => hidePopUp()}
          className=" close px-2 py-1 offset-xl-11 "
        >
          close
        </span>
        <h1 className="text-center text-white">user</h1>

        <form>
          <div className="custom-select-wrapper mb-5 mt-3">
            <select
              className="form-select custom-select"
              aria-label="Default select example"
            >
              <option selected>Fiel type</option>
              <option value="1">String</option>
              <option value="2">Number</option>
              <option value="3">boolean</option>
            </select>
          </div>

          <div className="mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Default Value"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Data Range"
            />
          </div>
          <div>
            <input type="text" className="form-control" placeholder="Regex" />
          </div>
        </form>
      </div>
    </div>
  )
}
