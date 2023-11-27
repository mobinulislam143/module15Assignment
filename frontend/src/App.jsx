import { BrowserRouter, Route, Routes } from "react-router-dom"
import StdList from "./components/StdList"
import AppNavbar from "./components/AppNavbar"
import Registration from "./components/Registration"
import Footer from "./components/Footer"

const App = () => {
  return(
    <>
      <BrowserRouter>
        <AppNavbar/>
        <Routes>
          <Route path="/" element={<StdList/>} />
          <Route path="/registration" element={<Registration/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App