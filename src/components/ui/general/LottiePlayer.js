"use client";
import { useEffect } from "react";

const LottiePlayer = ({ src, width = 60, height = 60, className = "mb-4" }) => {
  useEffect(() => {
    if (!customElements.get("dotlottie-player")) {
      import("@dotlottie/player-component");
    }
  }, []);

  return (
    <dotlottie-player
      src={src}
      background="transparent"
      speed="1"
      loop
      autoplay
      style={{ width: `${width}px`, height: `${height}px` }}
      class={className}
    ></dotlottie-player>
  );
};

export default LottiePlayer;
