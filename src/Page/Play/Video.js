import "./Video.css";
import {useEffect,useRef} from 'react'
const Video = ({ anime, episodeNum }) => {
  return (
    <div className="Video">
      <iframe
        src={anime[episodeNum]?.link}
        frameBorder="0"
        referrerPolicy="strict-origin"
        allow="autoplay; fullscreen; geolocation; display-capture; picture-in-picture"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        className="frame"
      />
    </div>
  );
};
export default Video;
