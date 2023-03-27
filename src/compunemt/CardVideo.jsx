
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import CardVD from './Card';
function CardVideo(props) {
  const [dataCard,setDataCard]= useState([])
  const options = {
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      channelId: props.authorId,
      part: 'snippet,id',
      order: 'date',
      maxResults: '12'
    },
    headers: {
      'X-RapidAPI-Key': 'b5341c8ef2mshb7ae2bab0d2c987p1f6466jsn019113f5bfbd',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  async function getVideoChanel(){
    
    try {
      let data = await axios.request(options)
      setDataCard(data.data.items)
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getVideoChanel()
  }, [])
  
  return (
    <>
        {
          dataCard.map(function(value,id){

            return(
               <CardVD 
               url={value.snippet.thumbnails.default.url}
               title={value.snippet.title}
               nameChannel={value.snippet.channelTitle}
               idVD={value.id.videoId}
               >

               </CardVD>
            )
          })
        }
    </>
  )
}

export default CardVideo