import { useEffect, useState } from "react";


const fileTypes = ["JPG","PNG","JPEG"];
const axios = require('axios').default;

const ax_instance = axios.create({
    baseURL: 'http://localhost:8000',
});





function HookUpload() {
    async function  fileUpload(file,fileName,desc,altText) {
        const formData = new FormData();
            formData.append(
                "post-upload",
                file
            )
            formData.append(
                "UserID",
                "e6acafb0-a8b1-11ec-b909-0242ac120002"
            )
            formData.append(
                "PostName",
                fileName
            )
            formData.append(
                "Description",
                desc
            )
            formData.append(
                "altText",
                altText
            )
            await ax_instance.post("/post_upload", formData)
            .then(response => {
            console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
            return false;
        
    }

    const [desc,setDesc] = useState("")
    const [file,setFile] = useState(0)
    const [name,setName] = useState("")
    const [altText,setAltText] = useState("")
    
    

    

  return (
    <div className="App">
      <header className="App-header">
        <div className="top-text">
            <h2 className='Header'>Upload Crowation </h2>
            <h4> Upload image</h4>
        </div>
        <div className="file-upload-form">
            <form>
                
                <div className="file-upload-section">
                    <label htmlFor="file-upload">File Upload: </label>
                    <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={e => setFile(e.target.files[0])}/> !
                </div>
                <div className="all-file-text">
                    <div >
                        <label>File Name: </label>
                        <input type="text" onChange={e => setName(e.target.value)}/>
                    </div> 
                    <div >
                        <label>Description: </label>
                        <input type="text" onChange={e => setDesc(e.target.value)}/>
                    </div> 
                    <div >
                        <label>AltText: </label>
                        <input type="text" onChange={e => setAltText(e.target.value)}/>
                    </div>
                    <div>
                        <button type="button" onClick={e => fileUpload(file,name,desc,altText)}>submit</button>
                    </div>
                
                </div>                
            </form>
        </div>
        
      </header>
    </div>
  );
}

export default HookUpload;
