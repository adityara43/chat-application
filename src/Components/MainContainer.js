import React, { useState } from "react";
import "./mystyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome"
import CreateGroup from "./CreateGroup";
import Users_Groups from "./Users_Groups";


function MainContainer() {
  const [conversations,setConversations]=useState([
    {
      name:"Test#1",
      lastMessage:"Last Message #1",
      timeStamp:"Today",
    },
    {
      name:"Test#2",
      lastMessage:"Last Message #2",
      timeStamp:"Today",
    },
    {
      name:"Test#3",
      lastMessage:"Last Message #3",
      timeStamp:"Today",
    },
  ]);
  return (
  <div className="main-container" >

    <Sidebar />
    
    {/* <Welcome />  */}
    {/* <CreateGroup /> */}
     <ChatArea props={conversations[0]} />  
    {/* <Users_Groups /> */}

  </div>
  );   
  

}

export default MainContainer;