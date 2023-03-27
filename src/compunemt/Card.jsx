
import React, { useState } from 'react'
import instance from './SettingAxios'
import { useEffect } from 'react'
function CardVD(props) {
    const [view,SetView ]= useState()
    const [puBlic,setPuBlic] = useState()
    async function getID(){
        try {
           let data = await instance.get("/info",{params: {id:props.idVD}})
            SetView(data.data[0].views)
            setPuBlic(data.data[0].snippet.publishedAt)
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getID()
     
    }, [])

  
   
  return (
    <div>
        <div className='card-video'>
                    <div className='card-video-img'>
                        <img src={props.url} alt="" />
                    </div>  
                    <div className='card-video-title'>
                          <h4>{props.title}</h4>
                         <div>
                            <p>{props.nameChannel}</p>
                          <p><span>{
                              props.view? props.view:view<1000000? Math.round(view/1000):Math.round(view/1000000)
                            }</span> <span>{view<1000000?"N Lượt Xem":"Tr Lượt Xem"}</span> <span>{puBlic}</span></p>
                          
                         </div>
                    </div>
                   
                    
         </div>
         {/* <img src={url.url} alt="" /> */}
    </div>
  )
}

export default CardVD