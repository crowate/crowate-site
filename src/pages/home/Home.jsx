import './Home.css'

import PostPreview from '../../components/PostPreview/PostPreview'
import Navbar from '../../components/navbar/Navbar'
import { useState, useEffect } from 'react';

const axios = require('axios').default;

const ax_instance = axios.create({
    baseURL: 'http://localhost:8000',
});

const photo = {
    Image_Link: 'https://f004.backblazeb2.com/file/Crowate/1649183519209f0UNYVqwl-ftBqRfTYcQv.jpeg',
    Name: 'test name',
    Alt_Text: 'test description',
    UserName: 'test username'
}


function Home() {
    const [newPost, setNewPosts] = useState([]);

    useEffect(async () => {
        await ax_instance.get("/get_new")
            .then(Response => {
                console.log(Response.data)
                setNewPosts(Response.data)
            })
    }, [])



    const preview_temp = () => {

        return (
            newPost.map((post) => {
                return <PostPreview key={post.Post_ID} {...post} />
            })
        )

    }

    return (
        <div className='home'>
            <div className='header'>
                <Navbar />
            </div>
            <div className="main-body">
                <div className="new-posts">
                    <h2 className='category'>Curated Posts</h2>
                    <div className="post-display">
                        {newPost.map((post) => {
                            return <PostPreview key={post.Post_ID} {...post} />
                        })}
                    </div>
                    <h2 className='category'>Top Posts</h2>
                    <div className="post-display">
                        {newPost.map((post) => {
                            return <PostPreview key={post.Post_ID} {...post} />
                        })}
                    </div>
                    <h2 className='category'>New Posts</h2>
                    <div className="post-display">
                        {newPost.map((post) => {
                            return <PostPreview key={post.Post_ID} {...post} />
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home