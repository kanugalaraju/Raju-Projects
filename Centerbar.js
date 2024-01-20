import Post from "../post/Post";
import Rightbar from "../rightbar/Rightbar";
import Share from "../share/Share";
import "./center.css"
import { Posts } from "../../Data";

function Centerbar(){
    return(
        <div className="centerbar">
            <div className="centerbarWrapper">
                <Share />
                {Posts.map((p)=>(<Post key={p.id} post={p} />))}
                <Post />
                

                <Rightbar />
                </div> 
        </div>
    )
}
export default Centerbar;