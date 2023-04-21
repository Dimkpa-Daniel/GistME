import React, {useState, useEffect, useContext} from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import dynamic from "next/dynamic";


const ChatEngine = dynamic( () => 
import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
import("react-chat-engine").then((module) => module.MessageFormSocial)
);




export default function Chats() {
const {username, secret} = useContext(Context);
const [showChat, setShowChat] = useState(false);
const router = useRouter();


useEffect(() =>{
  if(typeof document != null){
    setShowChat(true)
  }

});

useEffect(() =>{
  if(username.length === 0 || secret.length === 0) router.push("/")
});


if(!showChat) return <div />


  return (
  
    
    <div className="shadow">
      <ChatEngine
      className="chatEngine"
        projectID="b8ba520c-934f-4118-ad31-8b31bb8a7949"
        userName={username}
        userSecret={secret}
        renderNewMessageForm={() => <MessageFormSocial />}
        />
    </div>

  );
}
