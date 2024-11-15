import React from 'react';
import SignUp from '../src/components/SignUp';
import videoBg from '../src/assets/img/videoRock.mp4';
import './App.css';

const Mock = () => {
  
  return (
    <div className='main'>
      <video src={videoBg} autoPlay loop muted className='background-video'></video>
      <div className="dpeoverlay">
        <SignUp />
      </div>
    </div>
  );
};

export default Mock;