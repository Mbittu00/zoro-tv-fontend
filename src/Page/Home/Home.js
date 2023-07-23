import "./Home.css";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
const Home = () => {
  let history=useNavigate()
  const [id, setId]=useState('')
  let play=()=>{
    if(!id){
      alert('Pleace Enter Id For Watching')
    }else{
      history(`/play/${id}`)
    }
  }
  return (
    <div className="Home">
      <div className="main">
      <span>enter zoro anime id to watch</span>
        <input type="text" className="input"
        placeholder='anime id'
        onChange={(e)=>{setId(e.target.value)}}/>
        <button onClick={play}>watch</button>
      </div>
    </div>
  );
};
export default Home;
