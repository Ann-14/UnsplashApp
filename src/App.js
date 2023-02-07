import { useEffect, useRef, useState } from 'react';
import { Photo } from './components/Photo';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = 'https://api.unsplash.com/photos'
const searchUrl = 'https://api.unsplash.com/search/photos'

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [newPhotos, setNewPhotos] = useState(false)

  const fetchImg = async () => {
    setLoading(true)
    let url;
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()

      setPhotos((prevPhotos) => {
        if (query && page === 1) {
          return data.results
        }
        else if (query) {
          return [...prevPhotos, ...data.results]
        } else {
          return [...prevPhotos, ...data]
        }
      })
      setNewPhotos(false)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchImg()
// eslint-disable-next-line
  }, [page]);

  useEffect(() => {

  if(!newPhotos)return
  if(loading)return
  setPage((prevPage)=>prevPage +1)
  }, [newPhotos])
  
  const event = () =>{
    if(window.innerHeight + window.scrollY  >= document.body.scrollHeight -2){
      setNewPhotos(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',event)
    return () =>window.removeEventListener('scroll', event)
  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!query)return
    if(page === 1){
      fetchImg()
      return
    }
    setPage(1)
  }

  return (
    <>
      <main>
        <section>
          <form>
            <input type='text' placeholder='search' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type='submit' onClick={handleSubmit}>search</button>
          </form>
        </section>
        <section>
          <div>

            {photos.map((photo,index) => {
              return <Photo key={index} {...photo} />
            })}
          </div>
          {loading && <h3>Loading...</h3>}
        </section>
      </main>

    </>
  );
}

export default App;
