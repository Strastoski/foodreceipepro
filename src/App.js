import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";
import ForgotPass from "./Page/ForgotPass";
import Home from "./Page/Home";
import CodeReset from "./Page/CodeResetPassword";
import ResetPassword from "./Page/ResetPassword";
import DetailChat from "./Page/DetailChat";
import Landing from "./Page/Landing";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/forgotpass" element={<ForgotPass />} />

      <Route path="/" element={<Home />} />

      <Route path="/codereset" element={<CodeReset />} />

      <Route path="/resetpassword" element={<ResetPassword />} />

      <Route path="/DetailChat" element={<DetailChat />} />

      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}

export default App;
