import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  const dataMenu = [{
    index : "Trang Chủ",
    name : "trend",
    icon : "fa-solid fa-house"
  }, 
  {index : "Âm Nhạc",name:"music",
  icon : "fa-solid fa-music"},
  {index : "Trò Chơi", name : "gaming",
  icon : "fa-solid fa-gamepad"},
  {index : "Live", name : "live",
  icon : "fa-solid fa-trophy"},
 ]
  function clickMenu(){

  }
  return (
    <div className='menu'>
        <ul className='menu-list'>
          {
            dataMenu.map(function(value,index){
              return(
                <Link to={`/${value.name}`}>
                  <li key={index} className='menu-list-item' onClick={clickMenu}> <i className={value.icon}></i><span>{value.index}</span></li>
                </Link>
              )
            })
          }
          
        </ul>
    </div>
  )
}

export default Menu