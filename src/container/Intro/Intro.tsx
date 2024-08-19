import * as React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { mealVid } from '../../constants';
import './Intro.css';

const Intro = () => {
   const [playVideo, setPlayVideo] = React.useState(false);
   const vidRef = React.useRef<HTMLVideoElement>(null);

   //TS function type
   const handleVideo = (): void => {
      setPlayVideo((prevPlayVideo) => !prevPlayVideo);

      if (playVideo) {
         vidRef.current?.pause();
      } else {
         vidRef.current?.play();
      }
   };

   return (
      <div className="app__video">
         <video ref={vidRef} loop controls={false} muted>
            <source src={mealVid} type="video/mp4" />
         </video>
         <div className="app__video-overlay flex__center">
            <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
               {playVideo ? (
                  <BsPauseFill color="#fff" fontSize={30} />
               ) : (
                  <BsFillPlayFill color="#fff" fontSize={30} />
               )}
            </div>
         </div>
      </div>
   );
};

export default Intro;
