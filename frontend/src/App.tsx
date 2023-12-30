import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routing/PrivateRoutes";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Error from "../src/pages/Error";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<PrivateRoutes/>}>
          <Route path='/' element={<Home/>}/>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/error" element={<Error />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
