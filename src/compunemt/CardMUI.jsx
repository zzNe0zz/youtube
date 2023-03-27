import React from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect,useState } from 'react';
function CardMUI(props) {
   const [titleChannel,setTitleChannel]=useState()
   const [decrepChannel,setDecrepChannel]=useState()
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: {part: 'contentDetails,snippet,statistics', id: props.idVD},
        headers: {
          'X-RapidAPI-Key': 'b5341c8ef2mshb7ae2bab0d2c987p1f6466jsn019113f5bfbd',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
  async function getChanel(){
     await axios.request(options).then(function (response) {
        setTitleChannel(response.data.items[0].snippet.channelTitle);
        setDecrepChannel((response.data.items[0].snippet.description))
    }).catch(function (error) {
        
    });
   
   }
   useEffect(() => {
    getChanel()
   },[])
   
  return (
    <Card sx={{ maxWidth: "100%" , display: "flex",}}>
      <CardMedia
       component="img"
        sx={{ height: 140 ,width:200,objectFit:"fill",marginBottom:"5px"}}
        title="green iguana"
        image= {props.img}
      />
      <CardContent sx={{paddingTop:0,width:"80%"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{marginBottom:0,}}>
          {props.title}
        </Typography>
        <Typography variant="body2" component="p" sx={{marginBottom:1,}} >
           {props.view<1000000?Math.round(props.view/1000):Math.round(props.view/1000000)}{props.view<1000000?"N ":"Tr"} Lượt xem - {props.upload}
        </Typography>
        <Typography variant="body2" component="p" sx={{display: "flex",alignItems:"center",gap:"5px"}} >
        <CardMedia
         component="img"
        sx={{ height: 30 ,width:30,borderRadius:"50%"}}
        title="green iguana"
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj94C9veqMfDmTRkqDtHJpn1qbGxXCrwT2Uo5axs363w&s'
        />
        <Typography variant="body2" component="p" sx={{}} >
             {titleChannel}
        </Typography>
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{textOverflow: "ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>
          {decrepChannel}
        </Typography>
      </CardContent>
     
    </Card>
  )
}

export default CardMUI