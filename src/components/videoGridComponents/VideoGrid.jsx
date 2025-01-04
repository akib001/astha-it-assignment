import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import VideoCard from "./VideoCard";
import { videoData } from "./videoData";

const VideoGrid = () => {
  const navigate = useNavigate();
  const [focusedIndex, setFocusedIndex] = useState(0);
  const gridRef = useRef(null);
  const [cols, setCols] = useState(4);

  const videos = videoData;

  useEffect(() => {
    const updateCols = () => {
      if (window.matchMedia("(max-width: 640px)").matches) setCols(1);
      else if (window.matchMedia("(max-width: 768px)").matches) setCols(2);
      else if (window.matchMedia("(max-width: 1024px)").matches) setCols(3);
      else setCols(4);
    };

    updateCols();

    window.addEventListener("resize", updateCols);

    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const handleKeyDown = (e) => {
    e.preventDefault();

    switch (e.key) {
      case "ArrowRight":
        setFocusedIndex((prev) => Math.min(prev + 1, videos.length - 1));
        break;
      case "ArrowLeft":
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "ArrowUp":
        setFocusedIndex((prev) => Math.max(prev - cols, 0));
        break;
      case "ArrowDown":
        setFocusedIndex((prev) => Math.min(prev + cols, videos.length - 1));
        break;
      case "Enter":
        navigate(`/watch/${videos[focusedIndex].id}`);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.focus();
    }
  }, [cols]);

  return (
    <div
      ref={gridRef}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 focus:outline-none"
    >
      {videos.map((video, index) => (
        <VideoCard
          key={video.id}
          {...video}
          index={index}
          isFocused={focusedIndex === index}
          onFocus={setFocusedIndex}
        />
      ))}
    </div>
  );
};

export default VideoGrid;
