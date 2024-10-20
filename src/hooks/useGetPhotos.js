import { createApi } from 'unsplash-js'

export const useGetPhotos = ({ photo }) => {
  let urlsContainer = []
  const getPhotos = () => {
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
      })
      .catch(() => {
        console.error('something went wrong!')
      })
  }
  return { urlsContainer, getPhotos }
}
