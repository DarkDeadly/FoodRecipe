import {BrowserRouter , Route , Routes} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/Register" element = {<Register/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
