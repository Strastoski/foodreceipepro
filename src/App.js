import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";
import ForgotPass from "./Page/ForgotPass";


function App() {  

  return (
    
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        /> 
        <Route
          path="/register"
          element={<Register />}
        />        

        <Route
         path="/forgotpass"
         element={<ForgotPass />}
        />
        
      </Routes>     
  );
}

export default App

