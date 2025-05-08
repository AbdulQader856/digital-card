"use client";
import { useEffect } from "react";

const LottiePlayer = ({ src, width = 80, height = 80, className = "mb-4" }) => {
  useEffect(() => {
    if (!customElements.get("dotlottie-player")) {
      import("@dotlottie/player-component");
    }
  }, []);

  return (
    <div
      className={`${className}`}
      style={{ width: `${width}px`, height: `${height}px`, overflow: "hidden" }}
    >
      <dotlottie-player
        src={src}
        background="transparent"
        speed="1"
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
        class={className}
      ></dotlottie-player>
    </div>
  );
};

export default LottiePlayer;
