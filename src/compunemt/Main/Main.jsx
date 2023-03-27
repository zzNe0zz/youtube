import React from 'react'
import "./Main.css"
import Header from '../Header/Header'
import Body from '../Body/Body'
import Menu from '../Menu/Menu'
import { useLocation  } from "react-router-dom";
import SearchVD from '../SearchVD'
function Main() {
  let searchParams = useLocation();
 
  return (
  <><div className='main-conten'>
       <Header></Header>
       <div className='main-conten-body'>
           <Menu></Menu>
         {searchParams.search? <SearchVD search={searchParams.search}></SearchVD> :<Body></Body>}  
       </div>
  </div>
  </>
  )
}

export default Main
