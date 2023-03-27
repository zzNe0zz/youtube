import React from 'react'
import { useRef } from 'react';
import {MenuFoldOutlined,SearchOutlined,MoreOutlined,UserOutlined} from "@ant-design/icons"
import { useNavigate } from 'react-router-dom';
function Header() {
   const inputSearch = useRef();
   const nav = useNavigate()
   function Search(){
      nav(`/?s=${inputSearch.current.value}`)
      inputSearch.current.value = ""
   }
  return (
    <div className='Header'>
    <div className='header-left'>
       <div className='header-left-img'>
        <img src="https://i.upimg.com/IPXbcCR5k" alt="" /><p>YouTubeCLone</p>
       </div>
    </div>
    <div className='header-search'>
       <div className='header-search-input'>
            <input type="text"  ref={inputSearch}/>
               <span onClick={Search}> <SearchOutlined /></span>
       </div>
    </div>
    <div className='header-right'>
       <p> <MoreOutlined /></p>
        <button>
            <UserOutlined height="200em"/> <span>Đăng nhập</span>
        </button>
    </div>
    </div>
  )
}

export default Header