/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom'
import PostPreview from '../../components/PostPreview/PostPreview'
import logo from '../../assets/the_crow.svg'
import { useState,useEffect } from 'react'
import './Post.css'
import { Navbar } from '../../components/'
import ScrollContainer from 'react-indiana-drag-scroll'
const axios = require('axios').default;



const ax_instance = axios.create({
    baseURL: 'https://api.crowate.net/',
});

const Post = () => {
    const [post,setPost] = useState({})
    const [newPost,setNewPosts] = useState([]);
    const { postID } = useParams()
    const navigate = useNavigate()
    const [postIDState, setPostIDState] = useState(postID)

    useEffect( async()=>{
        await ax_instance.get(`/get_post?postID=${postID}`)
        .then(Response =>{
            console.log(Response.data[0])
            setPost(Response.data[0])
        })
        await ax_instance.get("/get_new")
        .then(Response =>{
            console.log(Response.data)
            setNewPosts(Response.data)
        })
    },[])

    useEffect(() => {
        console.log("change")
        navigate(`/post/${postID}`)
        setPostIDState(postID)
    }, [postID])

    return(
        <>
            <Navbar />
            <div className="post-body">
                <div className="post-data">
                    <div className="img-container">
                        <img className = "post-img" src={post.Image_Link} alt={post.Alt_Text}/>
                    </div>
                    <div className="post-desc">
                        <h2 className="post-name">{post.Name}</h2>
                        <h3 className="post-user">By {post.UserName}</h3>
                        <p className="description">{post.Description}</p>
                    </div>
                </div>
                <div className="r-feed">
                    <h2>Recent Posts</h2>
                    <ScrollContainer className="r-display" hideScrollbars={false}>
                        {newPost.map((post)=> {
                            return <PostPreview className="img-preview" key={post.Post_ID} {...post}/>
                        })}
                    </ScrollContainer>
                </div>
            </div>
        </>
    )
}


export default Post;