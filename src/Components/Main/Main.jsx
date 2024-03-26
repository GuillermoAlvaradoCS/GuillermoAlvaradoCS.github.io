import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

function Main() {

  const {onSend, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  const handleKeyPress = (e)=>{
    if(e.key==='Enter'){
      onSend()
    }
  }


  return (
    <div className='main'>
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.profile_icon} alt="" />
        </div>
        <div className="main-container">

          {!showResult
          ?<>
          <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest places to see on an upcomnig road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Suggest places to visit on an upcomnig road trip</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Suggest restaurants for an upcomnig road trip</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Suggest hotels for an upcomnig road trip</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div> 
          </>
          :<div className='result'>
            <div className='result-title'>
              <img src={assets.profile_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ?<div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>
              :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
              
            </div>
          </div>
          }
          <div className="main-bottom">
            <div className="search-box">
              <input onKeyPress={handleKeyPress} onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
              <div>
                {input?<img onClick={()=>onSend()} src={assets.send_icon_white} alt="" />:null}
              </div>
            </div>
            <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so double-check its responses.
              </p>
          </div>
        </div>
    </div>
  )
}

export default Main