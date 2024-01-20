import { BsQuestionSquare } from "react-icons/bs";
import {FaGraduationCap } from "react-icons/fa";
import "./leftbar.css"
import { MdRssFeed, MdOutlineChat, MdOutlineVideoSettings, MdGroups2, MdBookmark, MdWorkOutline, MdOutlineEvent } from "react-icons/md";
function Leftbar(){
    return(
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItems">
                        <MdRssFeed className="leftbarIcon"/>
                        <span className="leftbarListItemText">Feed</span>
                        </li>
                        <li className="leftbarListItems">
                        <MdOutlineChat className="leftbarIcon"/>
                        <span className="leftbarListItemText"> Chat</span>
                        </li>
                        <li className="leftbarListItems">
                        <MdOutlineVideoSettings className="leftbarIcon"/>
                        <span className="leftbarListItemText">Videos</span>
                        </li>
                        <li className="leftbarListItems">
                        <MdGroups2 className="leftbarIcon"/>
                        <span className="leftbarListItemText">Groups</span>
                        </li>
                        <li className="leftbarListItems">
                        <MdBookmark className="leftbarIcon"/>
                        <span className="leftbarListItemText">BookMarks</span>
                        </li>
                        <li className="leftbarListItems">
                        <BsQuestionSquare className="leftbarIcon"/>
                        <span className="leftbarListItemText"> Questions</span>
                        </li>
                        <li className="leftbarListItems">
                        <MdWorkOutline className="leftbarIcon"/>
                        <span className="leftbarListItemText">Jobs</span>
                        </li>
                        <li className="leftbarListItems">
                        <MdOutlineEvent className="leftbarIcon"/>
                        <span className="leftbarListItemText">Event</span>
                        </li>
                        <li className="leftbarListItems">
                        <FaGraduationCap className="leftbarIcon"/>
                        <span className="leftbarListItemText">Courses</span>
                        

                    </li>

                </ul>
                <button className="leftbatButton">Show More </button>
                <hr className="leftbarhe"/>
                <ul className="leftbarFriendList">
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="Kohli.jpg" alt="kohli" />
                        <span className="leftbarFriendName"> Virat Kohili</span>

                        </li> 
                        <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="Jaddu.jpg" alt="jaddu" />
                        <span className="leftbarFriendName"> Ravindra Jadeja </span>

                        </li> 
                        <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="Rohit.jpg" alt="rohit" />
                        <span className="leftbarFriendName"> Rohit Sharma </span>

                        </li> 
                        <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="Kohli.jpg" alt="kohli" />
                        <span className="leftbarFriendName"> Virat Kohili</span>

                        </li> 
                        <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="Jaddu.jpg" alt="jaddu" />
                        <span className="leftbarFriendName"> Ravindra Jadeja </span>

                        </li> 
                        <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="Rohit.jpg" alt="rohit" />
                        <span className="leftbarFriendName"> Rohit Sharma </span>

                        </li>     
    

                </ul>

            </div>
        </div>
    )
}
export default Leftbar;