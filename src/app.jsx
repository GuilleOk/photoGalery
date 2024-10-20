import React, { useState } from 'react'
import InputPhotoSearch from './components/InputPhotoSearch'
import PhotoGalery from './components/PhotoGalery'
const App = () => {
  const [photoToSearch, setPhotoToSearch] = useState('')

  return (
    <div>
      <InputPhotoSearch setPhotoToSearch={setPhotoToSearch} />
      <PhotoGalery photoToSearch={photoToSearch} />
    </div>
  )
}

export default App
