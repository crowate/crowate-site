import { useState,useEffect } from "react";

const axios = require('axios').default;

const ax_instance = axios.create({
    baseURL: 'http://localhost:8000',
});



const UpdateProfile = (props) =>{
    const [userName,setUserName] = useState("")
    const [descript,setDescript] = useState("")

    let baseUserName = "";
    let baseDescription = "";

    const getData = (userID) => {
        ax_instance.get(`/get_profile?UserID=${userID}`)
        .then((response) =>{
            console.log(response.data)
            baseUserName= response.data.Username
            baseDescription= response.data.Description
        })
    }

    useEffect(async ()=>{ // on page load call the api to get the current text 
        getData(props.userID)
    },[])



    return (
        <>
        <h2>Profile retrival</h2>
        <form>
            <div className="username">
                <label>User Name </label>
                <input type="text" onChange={e=> setUserName(e.target.value)} placeholder="User Name"/>
            </div>
        </form>
        
        
        </>
    )





}

export default UpdateProfile;