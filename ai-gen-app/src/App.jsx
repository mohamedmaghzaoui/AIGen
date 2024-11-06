import aigenImage from './assets/Try our AiGen.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <>
      <div className="d-flex flex-column align-items-center text-center">
        <img
          className="img-fluid w-25 mt-5 mb-4"
          src={aigenImage}
          alt="Try our AiGen"
        />
        <p className="initial-text fs-5">
          Reach out, and create a universe of possibilities together!
        </p>
        <div className="main-content border rounded">
          <h1 className="text-white">hi how are you</h1>
        </div>
      </div>
    </>
  )
}

export default App
