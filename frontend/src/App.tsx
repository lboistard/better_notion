import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Auth />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* ProtectedLayout */}
        <Route path="/" element={<Home />}>
 
        </Route>

        {/* Error handling */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}


// NotFound component for 404 errors
const NotFound = () => {
  return (
      <div>
          <h2>404 Not Found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
      </div>
  )
}

export default App
