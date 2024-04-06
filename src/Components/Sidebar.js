import React, { useState } from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";
import ChatArea from "./ChatArea";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";


function Sidebar() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themekey.showChange);  
  console.log(lightTheme)
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
  return ( <div className="Sidebar-container">
    <div className={"sb-header" + (lightTheme ? "" : " dark")}>
      <div>
        <IconButton>
          <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
        </IconButton>
      </div>
      <div>
        <IconButton onClick={()=> {navigate("users");}}>
          <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")}/>
        </IconButton>
        <IconButton onClick={()=> {navigate("groups");}}>
          <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")}/>
        </IconButton>
        <IconButton onClick={()=> {navigate("create-groups");}}>
          <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
        </IconButton>
        <IconButton onClick={() => {dispatch(toggleTheme())}}>
          {lightTheme &&  <NightlightIcon className={"icon" + (lightTheme ? "" : " dark")}/>}
          {!lightTheme &&  <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")}/>} 
        </IconButton>
      </div>
      
      
      
    </div>
    <div className={"sb-search" + (lightTheme ? "" : " dark")}>
      <SearchIcon />
      <input placeholder="search" className="search-box"/>
    </div>
    <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
      {conversations.map((conversation) => {
         return <ConversationsItem props={conversation} key={conversation.name}
        
        />;
      })}
    </div>
  </div>
  );    
}

export default Sidebar;