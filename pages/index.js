import React, {useContext} from "react";

import { Context } from "../context";

import {useRouter} from "next/router";

import axios from "axios"



export default function Auth() {

const {username, setUsername, secret, setSecret} = useContext(Context);

const router =useRouter();

function onSubmit(e) {
  e.preventDefault();

  if(username.length === 0 || secret.length === 0) return

  axios.put(
    "https://api.chatengine.io/users/",
    {username, secret},
    {headers:{"Private-key": "6d7cbf15-c9ac-4642-b291-d8b637e1a792"}}
  )

  .then(r => router.push("./chats"))
}

  return (
  
  <div className="background">
    <div className="auth-container">
      <div className="text-insp">
        <h1>
          <span className="share">Share!!!</span> <br />
          <span className="create">Create</span> <br />
          <span className="connect">Connect</span> <br />
        </h1>
      </div>
      <form action="" className="auth-form" onSubmit={e=> onSubmit(e)}>
      <div className="auth-title">GistMe Chat App</div>

      <div className="input-container">

        {/* Email address */}
          <input 
          type="email"
          placeholder="Enter your email"
          className="text-input"
          onChange={(e) => setUsername(e.target.value)}
          
          />
        {/* Email address */}
          <input 
          type="password"
          placeholder="Enter your password"
          className="text-input"
          onChange={(e) => setSecret(e.target.value)}
          
          />


      </div>

        <button
        type="submit"
        className="submit-button"
        >
          Login/Signup
        </button>

      </form>
    </div>
    
    </div>
    );
}
