import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: '300',
    width: '480',
    playerVars: {
      autoplay: 0, // Altere para 1 se quiser que o vídeo inicie automaticamente
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;
