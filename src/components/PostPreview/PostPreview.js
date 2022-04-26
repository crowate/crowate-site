import { useNavigate } from 'react-router-dom'
import './PostPreview.css'





const PostPreview = (postData) =>{
    const {Name,Image_Link,Alt_Text,UserName, Post_ID } = postData;
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/post/${Post_ID}`)

    }

    return(
        <button onClick={handleClick} className='prv-btn'>
            <div className='preview-window'>
                <img className='preview-img' src={Image_Link} alt={Alt_Text} />
                
                <div className="text">
                    <h3 className='preview-text'>Title: {Name}</h3>
                    <h4 className='preview-text'>By: {UserName}</h4>
                </div>
            </div>
        </button>
    )
}

export default PostPreview;