import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routing/PrivateRoutes";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<PrivateRoutes/>}>
          <Route  path='/' element={<Home/>}/>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
