import React, { useEffect, useState} from 'react'
import axios from 'axios';
import validateInfo from './validateInfo.js';

const AnswerModal = ({open, questionId, productName, question, onClose, onSubmitAnswer}) => {

  if (!open) { return null }

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showUpload, setShowUpload] = useState(true);
  const [errors, setErrors] = useState({});


  const uploadImage = async e => {
    const file = e.target.files
    const data = new FormData()
    data.append('file', file[0])
    data.append('upload_preset', 'ketchup') //specific to cloudinary

    setLoading(true);
    const res  = await fetch('https://api.cloudinary.com/v1_1/dseonxo5o/image/upload',
      {
        method: "Post",
        body: data
      }
    )

    const resFile = await res.json()
    setPhotos([...photos, resFile.secure_url])
    setLoading(false)
    if (photos.length >= 4) {
      setShowUpload(false)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    let data = { body, name, email, photos }
    let errors = validateInfo(data)
    setErrors(errors);
    console.log('data and error', data, errors)
    if (Object.entries(errors).length == 0) {
      axios.post(`/qa/questions/${questionId}/answers`, data)
      .then((res)  => {
        onSubmitAnswer()// trigger a rerender
        onClose() //then close the window
      })
      .catch((err) => console.log(err))
    } else {

    }
  }

  return (
    <div className='qa-modal'>

      <div className='qa-modal-main'>
          <div className='qa-modal-header'>
              <h3>Submit your Answer</h3>
              <p> {productName}: {question} </p>
          </div>

        <form className='qa-form-control'>
          <div>
            <label htmlFor='answer'>Your Answer (mandatory)*</label>
            <textarea
              className='qa-input'
              id ='answer'
              name = 'body' //use for onChange
              type='textarea'
              rows="5" cols="33"
              maxLength='1000'
              autoComplete='off'
              onChange={(e)=> setBody(e.target.value)}
              required/>
          </div>
          <div className='qa-form-control'>
            <label htmlFor='nickname'>What is your nickname (mandatory)*</label>
            <input
              className='qa-input'
              id ='nickname'
              name = 'name' //use for onChange
              type='text'
              placeholder='Example: jackson543!'
              autoComplete='off'
              maxLength='60'
              onChange={(e)=> setName(e.target.value)}
              required
            />
            <span className='qa-instructions'> For privacy reasons, do not use your full name or email address</span>
          </div>
          <div className='qa-form-control'>
            <label htmlFor='email'>Your email (mandatory)*</label>
            <input
              className='qa-input'
              id='email'
              type='text'
              name = 'email' //use for onChange
              placeholder='Example: jack@email.com'
              autoComplete='off'
              maxLength='60'
              onChange={(e)=> setEmail(e.target.value)}
              required/>
            <span className='qa-instructions'> For authentication reasons, you will not be emailed</span>
          </div>
            <div className='qa-image-upload qa-form-control'>
              {showUpload ?
                <input
                  type='file'
                  name='file'
                  placeholder = 'Upload an image'
                  onChange={uploadImage}
                  multiple
                />
                : null
              }
              {loading ? (
                <h3>loading ... </h3>
              ) : (
              <div className="form-group multi-preview">
                {(photos || []).map((url,i) => (
                    <img key={i} src={url} alt="..." />
                ))}
              </div>

              )}
            </div>
          {Object.keys(errors).length ?
            (<div>You must enter the following:
              {Object.keys(errors).map(errorKey => {
                return (
                <div
                  key={errorKey}
                  style={{maxWidth: '600px', position: 'relative', paddingBottom:'20px'}}>
                  <small> {errors[errorKey].split(" ")[0]} </small>
                </div>)
              })}
             </div>
            )
            : null
          }
          <input type='submit' className='qa-form-btn' value='Submit' onClick={onSubmit} />
          <input type='submit' className='qa-form-btn' value='Close'  onClick={onClose} />
        </form>

      </div>

    </div>
  )
}
export default AnswerModal