import React,{useEffect, useState} from 'react'
import './row.css'
import {  API_KEY, imageUrl} from '../../Constants/constant'
import axios from '../../axios'
import YouTube  from 'react-youtube';

function Row(props) {


    const [url, setUrl] = useState("");
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results);
        })
 
    },[])

    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

 let viewTrailer = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
       if(response.data.results.length !== 0){
        setUrl(response.data.results[0]);
       }else{
        console.log("something went wrong");
       }
    })
 }

  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
        {
        movies.map((movie)=>
        <div>
                 <img onClick={()=>{viewTrailer(movie.id)}} className={props.isAction ? 'small' :  'poster'} alt='poster' src={`${imageUrl+movie.backdrop_path}`} />
                 <h3 className='name'>{movie ? movie.title : "NILL"} </h3>
          </div>
        )}
       
        </div>
     {url &&   < YouTube  videoId={url.key} opts={opts} />}
</div>
  )
}

export default Row