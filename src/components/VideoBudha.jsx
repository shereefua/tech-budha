import React from 'react'

const VideoBudha = () => {
  return (
      <div className="flex justify-center items-center">
          <video
              src={"/techbuda.mp4"} // Path to the video file in the public folder
              controls
              width="100%" // Set this to control video width, adjust as needed
              className="rounded-lg shadow-lg max-w-4xl" // Style as desired
              preload="auto" // Optional: Preloads video metadata for faster load
          />
      </div>
  );
}

export default VideoBudha