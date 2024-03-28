import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import { IconButton } from "@mui/material";

function CreateGroup() {
    return (
        <div className="creategroups-container">
            <input placeholder="Enter Group Name" className="search-box" />
            <IconButton>
                <DoneIcon />
            </IconButton>
        </div>
    );
}
export default CreateGroup;