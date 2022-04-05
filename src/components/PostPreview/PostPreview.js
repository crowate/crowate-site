import { useState, useEffect } from 'react';

// const axios = require('axios').default;

// const ax_instance = axios.create({
//     baseURL: 'http://localhost:8000',
// });



// const TestPost = () =>{
//     const [posts,setPosts] = useState([]);

//     const getData = async (userID) => {
//         ax_instance.get(`/get_posts?UserID=${userID}`)
//         .then((response) =>{
//             setPosts(response.data)
//             console.log(response.data)
//         })
//     }
//     useEffect(()=>{
//         getData('027aa419-9d79-477b-a8b9-3fd5713e8c75');
//     },[])

//     return (
//         <div>
//             <h2>Pot roast Preview</h2>
//             <div className="">
//                 {
//                     posts.map((post)=>{
//                         return <PostPreview key={post.Post_ID} {...post}/>
//                     })
//                 }
//             </div> 
//         </div>
//     )
// }







const PostPreview = (postData) =>{
    const {Name,Image_Link,Alt_Text,UserName} = postData;

    return(
        <div>
            <img src={Image_Link} alt={Alt_Text} />
            <h3>Title: {Name}</h3>
            <h4>By {UserName}</h4>
        </div>
    )
}

export default PostPreview;