import React, { useState, } from 'react'
import { Container, Card, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
const axios = require('axios').default

const ax_instance = axios.create({
    baseURL: 'http://143.244.144.60:8000'
})



const UploadForm = () => {
    const [error, setError] = useState()
    const { currUser } = useAuth() 
    const [selectedFile, setFile] = useState('')

    const onFileChange = e => {
        setFile(e.target.files[0])
    }

    const onFileUpload = () => {
        const formData = new FormData()
        console.log('uploading')

        formData.append(
            "img-upload",
            selectedFile,
        )

        ax_instance.post("/post_upload", formData)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }




    return (
        <Container
            className='d-flex align-items-center justify-content-center'
            style={{minHeight: "100vh"}}
        >
            <div className='w-100' style={{maxWidth: "800px"}}>
                <Card>
                    <Card.Body>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <h2 className='text-center mb-4'>Upload Image</h2>
                        <form>
                            <div className="text-input">
                                <label htmlFor="name">File Name: </label>
                                <input type ="text"></input>
                            </div>
                            <label htmlFor="img">Select Image: </label>
        
                            <input type ="file" accept="image/png, image/jpeg" onChange={onFileChange}></input> 
                            <button onClick={onFileUpload}>Upload</button> 
                        </form>
                        <div className='w-100 text-center mt-3'>
                            Some link here?
                        </div>
                    </Card.Body>
                </Card>

            </div>
       </Container>
  )
}

export default UploadForm