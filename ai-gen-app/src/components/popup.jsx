import './popup.css'

export const Popup = () => {
  return (
    <div className="overlay">
      <div className="content">
        <span className=" close px-2 py-1 offset-xl-11 ">close</span>
        <h1 className="text-center text-white">user</h1>

        <form>
          <div className="mb-5">
            {/* Correctly apply the "form-control" class */}
            <input
              type="text"
              className="form-control"
              placeholder="Field Type"
            />
          </div>
          <div className="mb-5">
            {/* Correctly apply the "form-control" class */}
            <input
              type="text"
              className="form-control"
              placeholder="Default Value"
            />
          </div>
          <div>
            {/* Correctly apply the "form-control" class */}
            <input
              type="text"
              className="form-control"
              placeholder="Data Range"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
