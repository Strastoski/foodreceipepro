import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";
import ForgotPass from "./Page/ForgotPass";
import Home from "./Page/Home";
import CodeReset from "./Page/CodeResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/forgotpass" element={<ForgotPass />} />

      <Route path="/home" element={<Home />} />

      <Route path="/codereset" element={<CodeReset />} />
    </Routes>
  );
}

export default App;
