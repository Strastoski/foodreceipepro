import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";


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
      </Routes>     
  );
}

export default App
