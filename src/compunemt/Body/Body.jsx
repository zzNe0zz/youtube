import React, { useState } from 'react'
import { useEffect } from 'react';
import instance from "../../compunemt/SettingAxios"
import { useNavigate } from 'react-router-dom';
import { Card ,Pagination } from 'antd';
import { useParams } from 'react-router-dom';
const { Meta } = Card;
function Body() {
  const [bigData,setBigData] = useState([])
  const [ cloneData,setCloneData] = useState([])
  const nav = useNavigate()
  let param = useParams()
async function getData(){

  try {
    let data = await instance.get("/trending",{params: {location: 'VN'},})
    setBigData(data.data)
    setCloneData(data.data.slice(0,12))
  } catch (error) {
    
  }

}
function changePage(page){
let start =(page-1)*12
var cutData = bigData.slice(start,page*12)
setCloneData(cutData);
(window.scrollTo(0,0));
}
 useEffect(() => {
   
  getData()
  
 }, [])

  return (
    <>
    <div className="body" >
    <div className="body-card" >
    {
      cloneData.map(function(value,index){
        return(
          <div key={index} className="body-card-item" onClick={()=> nav(`/video/${value.videoId}?${value.authorId}`)}>
            <Card
              style={{ width: 250,padding:0 }}
              cover={
                <img
                  alt="example"
                  src={value.videoThumbnails[3].url}
                />
              }>
             <Meta
              style={{ fontWeight:"bold",padding:"0" ,}}
             title={value.title}
            
           />
            <Meta
              title={value.author}
              description={value.viewCount+":Lượt xem"}
            >
            </Meta>   
          
            </Card>
          </div>
        )
      })
    }
    </div>
      <div style={{  margin: "auto"}}>
      <Pagination 
      total={bigData.length} 
      onChange={changePage} 
      showSizeChanger={false}
      />
      </div>
    </div>
    </>
  )
}

export default Body