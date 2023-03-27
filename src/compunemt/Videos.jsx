import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams,useLocation, useSearchParams } from 'react-router-dom'
import instance from './SettingAxios';
import { useEffect } from 'react';
import CardVideo from './CardVideo';
import { Col, Row } from 'antd';
import Header from "./Header/Header"
function Videos() {
    const  search  = useLocation();
    let idVideo  = useParams();
    const [infoVideo,setInfoVideo]=useState()
    const[authorId,setAuthorID]=useState(search.search.slice(1))
console.log(typeof idVideo.id);
    async function getVideos(){
        try {
            let video = await instance.get("/info",{params:{id:idVideo.id}})

            setInfoVideo(video.data[0]);
        } catch (error) {
           
        }
    }
    useEffect(() => {
        getVideos()
    }, [])
    
  return (
    <>
    <Header></Header>
    <div  className='ReactPlayer-main'>
    <Row >
      <Col span={16} className='videos-left'>
       <div className='ReactPlayer'>
           { infoVideo?<ReactPlayer url={infoVideo.url} controls={true}/>:""}
       </div>
      </Col>
      <Col span={8} className ="videos-right">
      <CardVideo infoData={infoVideo} authorId={authorId}></CardVideo>
      </Col>
    </Row>
       
    </div>
    </>
  )
}

export default Videos