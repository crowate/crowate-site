import { useRef, useState } from 'react'
import './CreateComment.css'
const axios = require('axios').default;

const ax_instance = axios.create({
    baseURL: 'https://api.crowate.net',
});

const CreateComment = (props) =>{
    const [text,setText] = useState(null)
    const {postID,userID,userName} = props

    const fileUpload = async () =>{
        const formData = new FormData();
        formData.append(
            "comment",
            text
        )
        formData.append(
            "UserID",
            userID
        )
        formData.append(
            "postID",
            postID
        )
        formData.append(
            "username",
            userName
        )

        await ax_instance.post('/post_comment',formData)
        .then(response =>{
            console.log("here")
            console.log(response)
            window.location.reload(false)
        })
        .catch(error => {
            console.log(error);
        })
        return false;

    }

    return(
        <div className="Create-Body">
            <div className="Create-Spacer">
                <h4>Enter Comment</h4>
                <textarea  onChange={(e)=> setText(e.target.value)} placeholder="Enter a comment"/>
                <div className="comment-button-holder">
                    <button className="submit-comment" onClick={()=>fileUpload()}>
                        Submit Comment
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default CreateComment