import "./Play.css";
import Episode from "./Episode";
import Video from "./Video";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
const Play = () => {
  const [anime, setAnime] = useState([]);
  const [episodeNum, setEpisodeNum]=useState(null)
let {id}=useParams()
useEffect(()=>{
(async()=>{
  let {data}=await axios.get(
`http://localhost:8080/${id}`
    )
    setAnime(data)
})()  
},[])
useEffect(()=>{
 let gett=localStorage.getItem(id)
 if(!gett){
   localStorage.setItem(id,0)
   setEpisodeNum(0)
 }else{
 setEpisodeNum(parseInt(gett))
 }
 
},[])
console.log(episodeNum)
  return (
anime[0]?(
      <div className="Play">
      <Video anime={anime} episodeNum={episodeNum}/>
      <Episode anime={anime} episodeNum={episodeNum} 
      setEpisodeNum={setEpisodeNum}
      id={id}/>
    </div>
  ):(
    <div className="loading">
    <div className='load'></div>
    </div>
    
    )
  );
};
export default Play;
