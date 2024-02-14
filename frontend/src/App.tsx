import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import PrivateRoutes from "./routing/PrivateRoutes";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Error from "../src/pages/Error";
import OAuthCallback from "./components/auth/OAuthCallback";
import Tasks from "./pages/Tasks";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/error" element={<Error />} />

        <Route path={"/oauth-callback"} element={<OAuthCallback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
