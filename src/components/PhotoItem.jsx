import React from 'react'

const PhotoItem = ({ url, photoAbout }) => {
  return (
    <div className='col-4 my-3 mx-auto d-flex justify-content-center'>
      <img src={url} alt={`random photo about ${photoAbout}`} />
    </div>
  )
}

export default PhotoItem
