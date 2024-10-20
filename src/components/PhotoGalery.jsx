import React, { useEffect, useState } from 'react'
import PhotoCollage from './PhotoCollage'

const PhotoGalery = ({ photoToSearch }) => {
  const [photoGalery, setPhotoGalery] = useState([])
  useEffect(() => {
    if (photoToSearch === '') return
    const newphotoGalery = [...photoGalery, photoToSearch]
    setPhotoGalery(newphotoGalery)
  }, [photoToSearch])

  return (
    <div>
      {photoGalery.map((photo, i) => {
        return <PhotoCollage photo={photo} key={`${photo}${i}`} />
      })}
    </div>
  )
}

export default PhotoGalery
