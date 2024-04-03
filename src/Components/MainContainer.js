import React from "react";
import "./mystyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome"
import CreateGroup from "./CreateGroup";
import Users_Groups from "./Users_Groups";
import { Outlet } from "react-router-dom";


function MainContainer() {
  
  return (
  <div className="main-container" >

    <Sidebar />
    <Outlet />
    
    {/* <Welcome />  */}
    {/* <CreateGroup /> */}
     {/* <ChatArea props={conversations[0]} />   */}
     {/* <Users_Groups />  */}

  </div>
  );   
  

}

export default MainContainer;