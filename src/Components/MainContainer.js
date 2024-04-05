import React from "react";
import "./mystyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome"
import CreateGroup from "./CreateGroup";

import { Outlet } from "react-router-dom";
import Users from "./Users";
import Groups from "./Groups";


function MainContainer() {
  
  return (
  <div className="main-container" >

    <Sidebar />
    <Outlet />
    
    {/* <Welcome />  */}
    {/* <CreateGroup /> */}
     {/* <ChatArea props={conversations[0]} />   */}
    {/* <Users /> */}
    {/* <Groups /> */}

  </div>
  );   
  

}

export default MainContainer;