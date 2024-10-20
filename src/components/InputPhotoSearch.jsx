/* eslint-disable no-undef */
import React, { useState } from 'react'

const InputPhotoSearch = ({ setPhotoToSearch }) => {
  const [photoType, setPhotoType] = useState('')
  const handlerChange = (e) => {
    setPhotoType(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (photoType.trim() === '') {
      alert('Introduzca un valor válido')
    } else {
      setPhotoToSearch(photoType.trim().toUpperCase())
    }
  }
  return (
    <div className='row my-5'>
      <div className='col-6 d-flex justify-content-center align-content-center'>
        <h1>Type photo topic</h1>
      </div>
      <div className='col-6 d-flex justify-content-center align-content-center'>
        <form>
          <div className='input-group w-100 align-items-center'>
            <input type='text' className='form-control' onChange={handlerChange} placeholder='Type photo topic' aria-label='Type photo topic' aria-describedby='button-addon2' />
            <button className='btn btn-primary' onClick={handlerSubmit} type='submit' id='button-addon2'>Button</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InputPhotoSearch
