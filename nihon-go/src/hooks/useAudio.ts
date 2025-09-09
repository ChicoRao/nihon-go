import { useRef, useEffect } from "react";

export function useAudio(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
  }, [src]);

  const play = () => {
    console.log("PLayinng");
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // restart if already playing
      audioRef.current
        .play()
        .catch((err) => console.error("Audio error:", err));
    }
  };

  return play;
}
