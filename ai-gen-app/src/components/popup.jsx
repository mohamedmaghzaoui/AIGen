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
          <div className="mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Field Type"
            />
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
