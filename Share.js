import { MdLocationPin, MdOutlineEmojiEmotions, MdOutlinePermMedia } from "react-icons/md";
import { AiOutlineTags } from "react-icons/ai";
import "./share.css"
function Share(){
    var Style1={color:"blue"};
    var Style2={color:"red"};
    var Style3={color:"pink"};
    var Style4={color:"yellow"};
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="Dhoni.jpg" alt="" className="shareProfileImg"/>
                    <input placeholder="What's in your mind raju ? " className="shareInput"/>

                </div>
                <hr className="shareHr"/>
                <div className="shareBotton">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <MdOutlinePermMedia style={Style1} className="shareIcon" />
                            <span className="shareOptionText">Photo/video</span>

                        </div>
                        <div className="shareOptions">
                        <div className="shareOption">
                            <MdLocationPin style={Style2} className="shareIcon" />
                            <span className="shareOptionText">Location</span>

                        </div>
                        <div className="shareOptions">
                        <div className="shareOption">
                            <AiOutlineTags style={Style3} className="shareIcon" />
                            <span className="shareOptionText"> Tag</span>

                        </div>
                        <div className="shareOptions">
                        <div className="shareOption">
                            <MdOutlineEmojiEmotions style={Style4} className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>

                        </div>

                    </div>


                    </div>


                    </div>
                    <button className="shareButton">Share</button>

                    </div>
                    

                </div>
                
                </div> 
        </div>
    )
}
export default Share;