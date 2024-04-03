import React from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import CreateGroup from "./Components/CreateGroup";
import Users_Groups from "./Components/Users_Groups";

function App() {
  return (
      <div className="App">
        
         {/* <MainContainer />  */}
        {/* <Login /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="app" element={<MainContainer />} >
            <Route path="welcome" element={<Welcome />} />
            <Route path="chat" element={<ChatArea />} />
            <Route path="users-groups" element={<Users_Groups />} />
            
            <Route path="create-groups" element={<CreateGroup />} />
            </Route>
        </Routes>
        

      </div>
  );
    
}

export default App;
