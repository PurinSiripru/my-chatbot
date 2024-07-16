import React, { useContext } from "react"
import './Main.css'
import { assets } from "../../assets/assets"
import { Context } from "../../content/Context";
const Main = () => {
    
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);
    
    return (
        <div className="main">
        <div className="nav">
            <p>Go Korat Chatbot</p>
            <li><a href="home.html">หน้าแรก</a></li>
            <k><li><a href="expo.html">Korat Expo 2029</a></li></k>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ?<>
            <div className="greet">
                <p><span>สวัสดี, ยินดีต้อนรับนักท่องเที่ยวทุกๆท่าน</span></p>
                <p>ฉันเป็นแชทบอทที่เชี่ยวชาญ<p></p>ในการชวนเที่ยวโคราช</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>-วางแผนเที่ยว<p></p>ในโคราชให้ที</p>
                    <k><img src={assets.maps_icon} alt="" /></k>
                </div>
                <div className="card">
                    <p>-อาหารชื่อดัง<p></p>ในโคราช</p>
                    <l><img src={assets.foods_icon} alt="" /></l>
                </div>
                <div className="card">
                    <p>-ที่เที่ยวชื่อดัง<p></p>ในโคราช</p>
                    <m><img src={assets.tour_icon} alt="" /></m>
                </div>
                <div className="card">
                    <p>-ห้างสรรพสินค้า<p></p>ชื่อดังในโคราช</p>
                    <n><img onClick ={()=>onSent()}src={assets.mall_icon} alt="" /></n>
                </div>
            </div>
            </>
            :<div className="result">
                <div className="result-title">
                    <i><img src={assets.user_icon} alt="" /></i>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className="loader">
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
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="คุณต้องการจะถามอะไร?"/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img  onClick ={()=>onSent()}src={assets.send_icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Main