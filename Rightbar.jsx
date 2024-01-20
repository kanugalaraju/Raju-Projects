import "./rightbar.css"
function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="Birth.jpg" alt="" className="birthdayImg"/>
                    <span className="birthdayText"><b>Virat kohli and 7 other friens have a birthday today</b></span>
                </div>
                <img className="rightbarAd" src="add.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends </h4>
                <ul className="friendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImg">
                            <img src="Jaddu.jpg" alt="" className="rightbarprofileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jadeja </span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImg">
                            <img src="Rohit.jpg" alt="" className="rightbarprofileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Rohit Sharma </span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImg">
                            <img src="Kohli.jpg" alt="" className="rightbarprofileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Virat Kohili </span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImg">
                            <img src="Jaddu.jpg" alt="" className="rightbarprofileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jadeja </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Rightbar;