import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";
import ForgotPass from "./Page/ForgotPass";
import Home from "./Page/Home";
import CodeReset from "./Page/CodeResetPassword";
import ResetPassword from "./Page/ResetPassword";
import DetailChat from "./Page/DetailChat";
import Landing from "./Page/Landing";
import DetailRecipe from "./Page/DetailRecipe";
import NavNonLog from "./components/NavNonLog";
import AddRecipe from "./Page/AddRecipe";
import Profile from "./Page/Profile";
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

      <Route path="/DetailRecipe" element={<DetailRecipe />} />

      {/* <Route path="/DetailRecipe" element={<DetailRecipe />} /> */}

      <Route path="/AddRecipe" element={<AddRecipe />} />

      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
