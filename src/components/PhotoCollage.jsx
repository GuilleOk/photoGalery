import React, { useEffect } from 'react'
import PhotoItem from './PhotoItem'
import { useGetPhotos } from '../hooks/useGetPhotos'

const PhotoCollage = ({ photo }) => {
  const { urlsItems, getPhotos } = useGetPhotos({ photo })
  useEffect(() => {
    getPhotos()
  }, [photo])

  return (
    <div className='row d-flex justify-content-around'>
      <h2 className='my-5'>{photo}</h2>
      {urlsItems.map(({ id, url }) => {
        return <PhotoItem key={id} url={url} photoAbout={photo} />
      })}
    </div>
  )
}

export default PhotoCollage
