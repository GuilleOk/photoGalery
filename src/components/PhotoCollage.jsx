import React, { useEffect, useState } from 'react'
import { createApi } from 'unsplash-js'
import PhotoItem from './PhotoItem'

const PhotoCollage = ({ photo }) => {
  const [urlsItems, setUrlsItems] = useState([])
  let urlsContainer = []
  useEffect(() => {
    const api = createApi({
      // Don't forget to set your access token here!
      // See https://unsplash.com/developers
      accessKey: '1ZCUquZk1JuvhCb42d7g6FoSAO8ifPy8JHu_CVe_PvU'
    })
    api.search
      .getPhotos({ query: photo, orientation: 'landscape', per_page: 6 })
      .then(result => {
        const urlsResults = result.response.results
        // eslint-disable-next-line array-callback-return
        urlsResults.map(item => {
          urlsContainer = [...urlsContainer, { id: item.id, url: item.urls.small }]
        })
        setUrlsItems(urlsContainer)
      })
      .catch(() => {
        console.log('something went wrong!')
      })
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
