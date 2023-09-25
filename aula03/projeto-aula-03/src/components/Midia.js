import React from "react";
import audio from "../assets/audio/audio.mp3"; // Substitua pela URL do seu áudio MP3
import YouTubePlayer from "./YouTubePlayer"; // Importe o componente YouTubePlayer

function Midia() {
  const videoId = "x-GdKwYXUY0"; // Substitua pelo ID do vídeo do YouTube que você deseja incorporar
  // x-GdKwYXUY0
  // _0sFYMGpvDE

  return (
    <div>
      <h1>Page Midia</h1>
      <audio controls>
        <source src={audio} type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <div>
        <YouTubePlayer videoId={videoId} />
      </div>
    </div>
  );
}

export default Midia;
