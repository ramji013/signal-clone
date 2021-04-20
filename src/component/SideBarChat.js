import React from 'react'
import { Avatar } from '@material-ui/core'
import '../css/SideBarChat.css';

function SideBarChat() {
    return (
        <div className="sideBarChat">
            <Avatar/>
            <div className="sideBarChat__Info">
            <small>Timestamp</small>
            <h3>Chat Name</h3>
            <p> Message</p>
            </div>
        </div>
    )
}

export default SideBarChat
