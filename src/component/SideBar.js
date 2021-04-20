import React from 'react'
import '../css/SideBar.css'
import {Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {Add, Search} from '@material-ui/icons';
import SideBarChat from './SideBarChat';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

function SideBar() {
    return (
        <div className= "sidebar">
           <div className="sidebar__header">
           <Avatar style={{cursor: "pointer"}}/>
           <div className="sidebar__input">
           <SearchIcon/>
           <input type="text" placeholder="search"/>
           </div>
           <Add style= {{color:"white", paddingLeft: "10px", fontSize: "xx-large"}}/>
           </div>
           <div className="sidebar__chats">
           <SideBarChat/>
           <SideBarChat/>
           <SideBarChat/>
           </div>
           <div className="sidebar__notes">
           <div className="sidebar__notesIcon"><SpeakerNotesIcon/></div>
                
                <p>Note to Self</p>
           </div>
        </div>
    )
}

export default SideBar
