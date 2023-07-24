import './Episode.css'
  const Episode = ({anime,episodeNum,setEpisodeNum,id}) => {
    let changeVideo=(index)=>{
      setEpisodeNum(index)
      localStorage.setItem(id,index)
    }
  return (
   <div className="Episode">
    <span className='title'>
   {anime.title}
    </span>
    <div className='eph'>
 {
anime?.map((e,i)=>(
<div className={i===episodeNum?'ep acctive':'ep'}
key={i}
onClick={()=>{changeVideo(i)}}>
 <span>{e.ep}</span>
</div>

)) 
 }
 </div>
   </div>
)}
export default Episode