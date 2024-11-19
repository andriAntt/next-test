import { useHttp } from "@/hooks/useHttp"



// services for work with backend
const CinemaServices = () => {

// base url for request to backend 
// start in localhost 3001
  const _baseUrl = 'http://localhost:3001/'
  const {request} = useHttp()


  const getFilms = async ( method?: string, body?: BodyInit, header?: object) => {
    const req = await request(`${_baseUrl}allFilms`, method, body, header)
    
    return req.json()
  }

  const getOneFilm = async (id: string, method?: string, body?: BodyInit, header?: object) => {
    const req = await request(`${_baseUrl}allFilms/${id}`, method, body, header)
    
    return req.json()
  }

  const postOneFilm = async (body?: BodyInit, header?: object) => {
    const req = await request(`${_baseUrl}allFilms`, "POST", body, header)
    
    return req.json()
  }

  return {
    getFilms,
    getOneFilm,
    postOneFilm
  }
}

export default CinemaServices;