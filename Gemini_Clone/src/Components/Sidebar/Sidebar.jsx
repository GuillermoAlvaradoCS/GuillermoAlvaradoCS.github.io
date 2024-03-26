import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

function sidebar() {

    const [extended, setExtended] = useState(false)
    const {onSend,previousPrompt,setRecentPrompt,newChat} = useContext(Context)
    const [textState, setTextState] = useState(false)

    const loadPrompt = async (prompt)=>{
        setRecentPrompt(prompt)
        await onSend(prompt)
    }

    const mouseEnter = ()=>{
        setTextState(true)
    }
    const mouseLeave = ()=>{
        setTextState(false)
    }
    const showHelp = textState?'In Progress...':'Help'
    const showActivity = textState?'In Progress...':'Activity'
    const showSettings = textState?'In Progress...':'Settings'

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon_white} alt="" />
            <div onClick={()=>newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended
            ?<div className="recent">
                <p className='recent-title'>Recent</p>
                {previousPrompt.map((item,index)=>{
                    return(
                        <div onClick={()=>loadPrompt(item)} className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>{item.slice(0,18)}...</p>
                        </div> 
                    )
                })}
            </div>
            :null
            }
        </div>
        <div className="bottom">
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>{showHelp}</p>:null}
            </div>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>{showActivity}</p>:null}
            </div>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>{showSettings}</p>:null}
            </div>
        </div>
    </div>
  )
}

export default sidebar