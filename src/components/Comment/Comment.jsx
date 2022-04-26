import './Comment.css'


const Comment = ({User_ID,Username,Comment,Profile_Pic}) => {
    return(
        <div className="Comment-Body">
            <div className="Comment-spacer">
                <div className="user-info">
                <img src={Profile_Pic} alt={Username + " profile picture"} className="cmnt-profile-pic"/>
                <h2>{Username}</h2>
                </div>
                <div className="comment-text">
                    <p>{Comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment