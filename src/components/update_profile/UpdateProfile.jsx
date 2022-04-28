import {  useState, } from "react";
import { useAuth } from "../../contexts/AuthContext";

import './UpdateProfile.css'

const axios = require('axios').default;

const ax_instance = axios.create({
    baseURL: 'https://api.crowate.net',
});


const UpdateProfile = () => {

  const { currentUser } = useAuth();
  const { id } = currentUser;

  async function bannerUpload(file) {
    
    const formData = new FormData();
    
    formData.append(
        "banner-upload",
        file
    )
    formData.append(
        "UserID",
        id
    )
    

    await ax_instance.post("/banner_upload", formData)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
    return false; 
  }

  async function profileImageUpload(file) {
    
    const formData = new FormData();
    
    formData.append(
        "profile-upload",
        file
    )
    formData.append(
        "UserID",
        id
    )
    

    await ax_instance.post("/profile_image_upload", formData)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
    return false; 
  }

  const [bannerFile, setBannerFile] = useState(0)
  const [profileImageFile, setProfileImageFile] = useState(0)

  
  return (
    <div className="form__container">
            <header className="form__header">
                <h2 className='form__header-title'>Customize your Profile</h2>
                <p className="form__header-desc">Time for a new look!</p>
            </header>
            <div className="form__content-container">
                <form className="form__content-file">
                    <div className="file-upload-section form__item">
                        <label className="form__item-label" htmlFor="banner-upload">Banner Upload </label>
                        <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={e => setBannerFile(e.target.files[0])}/>
                    </div>
                    <div className="file-upload-section form__item">
                        <label className="form__item-label" htmlFor="profile-upload">Profile Image Upload </label>
                        <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={e => setProfileImageFile(e.target.files[0])}/>
                    </div>
                    <div className="form__item">
                            <label className="form__item-label">Bio </label>
                            <textarea 
                                className="form__item-input"
                                onChange={()=> console.log("change")}
                            />
                        </div>
                    <div className="all-file-text">
                        <div className="form__item align_center">
                            <button 
                              className="form__button" 
                              type="button" 
                              onClick={() => {
                                  if (bannerFile) { bannerUpload(bannerFile) }
                                  if (profileImageFile) { profileImageUpload(profileImageFile) }
                                }
                              }
                            >
                                Submit!
                            </button>
                        </div>
                    </div>                
                </form>
            </div>
        </div>
  )
}

export default UpdateProfile