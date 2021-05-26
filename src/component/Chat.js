import React from "react";
import "../css/chat.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Message from "./Message";
import { EmojiEmotions, MicNone, Style, Add } from "@material-ui/icons";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_header_left">
          <Avatar />
          <h5>Chat name</h5>
        </div>
        <div className="chat_header_right">
          <SearchIcon />
          <MoreHorizIcon />
        </div>
        </div>
        <div className="chat_body">
          <div className="message_header">
            <Avatar />
            <h3> Chat Name</h3>
          </div>
          <Message />
        </div>
        <div className="chat_footer">
          <EmojiEmotions />
          <form>
            <input placeholder="send a message" type="text" />
            <button type="submit">Send</button>
          </form>
          <div className="footer_icons">
            <Style />
            <MicNone />
            <Add />
          </div>
        </div>
    </div>
  );
}

export default Chat;
