import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import PostPreview from '../PostPreview/PostPreview';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';


import './gallery.css';
const axios = require('axios').default;
const ax_gallery = axios.create({
    baseURL: 'http://localhost:8000'
});

const Gallery = ({user_id}) => {
    const [posts,setPosts] = useState([])
    useEffect(async () => {
        await ax_gallery.get(`/get_user_posts?UserID=${user_id}`)
        .then(Response => {
            setPosts(Response.data);
        }).catch(() => {
            console.log('There is an error!\n')
        })
    }, [])
    return (
        <div className='gallery'>
            {posts.map((post) => {
                return <PostPreview key={post.Post_ID} {...post} />
            })}
        </div>
    )
}

export default Gallery