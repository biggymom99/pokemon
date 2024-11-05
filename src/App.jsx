import './App.scss'
import { fetchMultiplePokemonById } from './RTK/thunk'
import {Link, Route, Routes, useNavigate} from 'react-router-dom'

import Main from './pages/Main'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Favorite from './pages/Favorite'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


function App() {
  //처음 데이터를 받아와서 상태를 업데이트 하는 정도
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
   dispatch(fetchMultiplePokemonById(151))
  }, [])

  return (
  <>
    <h1 className='text-[40px] text-center'>포켓몬 도감</h1>
    <nav className='flex gap-[10px] justify-center'>
      <Link to={'/'}>메인</Link>
      <Link to={'/favorite'}>찜 목록</Link>
      
    <div>
      <input onChange={(e)=>navigate(`/search?pokemon=${e.target.value}`)}className="w-[120px] border-b border-[darkgray] px-2"/>
      <span>🔍</span>
    </div> 

    </nav>

    <main className='flex flex-wrap gap-[20px] justify-center pt-[20px]'>
      <Routes>
        <Route path={'/'} element={ <Main/>}/>
        <Route path={'/detail/:pokemonId'} element={ <Detail/>}/>
        <Route path={'/search'} element={ <Search/>}/>
        <Route path={'/favorite'} element={ <Favorite/>}/>
      </Routes>
    </main>

  </>
  )
}

export default App
