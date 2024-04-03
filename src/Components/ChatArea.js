
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from "./Messagethers";
import MessageSelf from "./MessageSelf";


function ChatArea() {
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
  var props=conversations[0];
  return (
    
    <div className="chatArea-container" >
    <div className="chatArea-header"> 
    <p className="con-icon">{props.name[0]}</p>
    <div className="header-text">
        <p className="con-title">{props.name}</p>
        <p className="con-timeStamp">{props.timeStamp}</p>

    </div>
    <IconButton>
    <DeleteIcon />
    </IconButton>

    </div>
    <div className="message-container" >
      
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf /> <MessageOthers />
        <MessageSelf /> <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf /> <MessageOthers />
        <MessageSelf /> <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf /> <MessageOthers />
        <MessageSelf /> <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf /> <MessageOthers />
        <MessageSelf /> <MessageOthers />
        <MessageSelf />
        

    </div>
    <div className="text-input-area">
        <input placeholder="Type a Message" className="search-box"/>
        <IconButton>
            <SendIcon />
        </IconButton>
    </div>
  </div>
  );  
}

export default ChatArea;