import aigenImage from './assets/Try our AiGen.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Form } from './components/form'

function App() {
  return (
    <>
      <div className="d-flex flex-column align-items-center ">
        <img
          className="img-fluid w-25 mt-5 mb-4"
          src={aigenImage}
          alt="Try our AiGen"
        />
        <p className="initial-text fs-5">
          Reach out, and create a universe of possibilities together!
        </p>
        <div className="main-content border rounded">
          <Form />
        </div>
      </div>
    </>
  )
}

export default App
