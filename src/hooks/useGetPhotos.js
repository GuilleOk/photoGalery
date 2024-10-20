import { useState } from 'react'
import { createApi } from 'unsplash-js'

export const useGetPhotos = ({ photo, setPhotoToSearch, item, setPhotoGalery, photoGalery }) => {
  const [urlsItems, setUrlsItems] = useState([])
  const getPhotos = async () => {
    const api = createApi({
      // Don't forget to set your access token here!
      // See https://unsplash.com/developers
      accessKey: '1ZCUquZk1JuvhCb42d7g6FoSAO8ifPy8JHu_CVe_PvU'
    })
    try {
      const result = await api.search.getPhotos({ query: photo, orientation: 'landscape', per_page: 6 })
      if (result.response.results) {
        const urlsContainer = result.response.results.map(item => (
          { id: item.id, url: item.urls.small }
        ))
        if (urlsContainer.length === 0) {
          setPhotoToSearch('')
          const newPhotoGalery = [...photoGalery]
          newPhotoGalery.splice(item, 1)
          setPhotoGalery(newPhotoGalery)
        } else {
          setUrlsItems(urlsContainer)
        }
      }
    } catch (error) {
      console.error('something went wrong!', error)
    }
  }

  return { urlsItems, getPhotos }
}
