import {  useState, } from "react";
import { useAuth } from "../../contexts/AuthContext";
import './UploadForm.css'

const axios = require('axios').default;

const ax_instance = axios.create({
    baseURL: 'http://localhost:8000',
});




const HookUpload = () => {
    const { currentUser } = useAuth();
    const { id, user_metadata } = currentUser;

    async function  fileUpload(file,fileName,desc,altText) {
        const formData = new FormData();
            formData.append(
                "post-upload",
                file
            )
            formData.append(
                "UserID",
                id
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
            formData.append(
                "UserName",
                user_metadata.username
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
        <div className="form__container">
            <header className="form__header">
                <h2 className='form__header-title'>Upload Crowation</h2>
                <p className="form__header-desc">Showcase your beautiful art to the world!</p>
            </header>
            <div className="form__content-container">
                <form className="form__content-file">
                    <div className="file-upload-section form__item">
                        <label className="form__item-label" htmlFor="file-upload">File Upload </label>
                        <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={e => setFile(e.target.files[0])}/>
                    </div>
                    <div className="all-file-text">
                        <div className="form__item">
                            <label className="form__item-label">Post Title </label>
                            <input
                                className="form__item-input"
                                type="text" 
                                onChange={e => setName(e.target.value)} 
                            />
                        </div> 
                        <div className="form__item">
                            <label className="form__item-label">Description </label>
                            <input 
                                className="form__item-input"
                                type="text" 
                                onChange={e => setDesc(e.target.value)}
                            />
                        </div> 
                        <div className="form__item">
                            <label className="form__item-label">AltText </label>
                            <input 
                                className="form__item-input"
                                type="text" 
                                onChange={e => setAltText(e.target.value)}
                            />
                        </div>
                        <div className="form__item align_center">
                            <button 
                                className="form__button" 
                                type="button" 
                                onClick={e => fileUpload(file,name,desc,altText)}
                            >
                                Submit!
                            </button>
                        </div>
                    </div>                
                </form>
            </div>
        </div>
  );
}

export default HookUpload;
