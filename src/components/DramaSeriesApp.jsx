import { useEffect, useRef, useState } from "react";

const DramaSeriesApp = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [selectedDrama, setSelectedDrama] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  // Sample drama data
  const dramas = [
    {
      id: 1,
      title: "Drama 1",
      thumbnail: "/images/drama.png",
      videoUrl: "https://example.com/video1",
    },
    {
      id: 2,
      title: "Drama 2",
      thumbnail: "/images/drama.png",
      videoUrl: "https://example.com/video2",
    },
    {
      id: 3,
      title: "Drama 3",
      thumbnail: "/images/drama.png",

      videoUrl: "https://example.com/video3",
    },
    {
      id: 4,
      title: "Drama 4",
      thumbnail: "/images/drama.png",
      videoUrl: "https://example.com/video4",
    },
    {
      id: 5,
      title: "Drama 5",
      thumbnail: "/images/drama.png",
      videoUrl: "https://example.com/video5",
    },
    {
      id: 6,
      title: "Drama 6",
      thumbnail: "/images/drama.png",
      videoUrl: "https://example.com/video6",
    },
    {
      id: 7,
      title: "Drama 7",
      thumbnail: "/images/drama.png",
      videoUrl: "https://example.com/video7",
    },
    {
      id: 8,
      title: "Drama 8",
      thumbnail: "/images/drama.png",
      videoUrl: "https://example.com/video8",
    },
  ];

  const GRID_COLUMNS = 4;

  //   useEffect(() => {
  //     const handleKeyDown = (e) => {
  //       if (showPlayer) return;

  //       const handleArrowNavigation = (e) => {
  //         e.preventDefault();
  //         let newIndex = focusedIndex;

  //         switch (e.key) {
  //           case "ArrowUp":
  //             newIndex =
  //               focusedIndex >= GRID_COLUMNS
  //                 ? focusedIndex - GRID_COLUMNS
  //                 : focusedIndex;
  //             break;
  //           case "ArrowDown":
  //             newIndex =
  //               focusedIndex + GRID_COLUMNS < dramas.length
  //                 ? focusedIndex + GRID_COLUMNS
  //                 : focusedIndex;
  //             break;
  //           case "ArrowLeft":
  //             newIndex = focusedIndex > 0 ? focusedIndex - 1 : focusedIndex;
  //             break;
  //           case "ArrowRight":
  //             newIndex =
  //               focusedIndex < dramas.length - 1
  //                 ? focusedIndex + 1
  //                 : focusedIndex;
  //             break;
  //         }

  //         if (newIndex !== focusedIndex) {
  //           setFocusedIndex(newIndex);
  //           cardRefs.current[newIndex]?.focus();
  //         }
  //       };

  //       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
  //         handleArrowNavigation(e);
  //       }
  //     };

  //     window.addEventListener("keydown", handleKeyDown);
  //     return () => window.removeEventListener("keydown", handleKeyDown);
  //   }, [focusedIndex, dramas.length, showPlayer]);

  useEffect(() => {
    cardRefs.current[0]?.focus();
  }, []);

  const handleCardKeyDown = (e, drama, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedDrama(drama);
      setShowPlayer(true);
    }
  };

  const VideoPlayer = ({ drama, onClose }) => (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-title"
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          aria-label="Close video player"
        >
          <button size={24} />
        </button>
        <video
          className="w-full aspect-video"
          controls
          autoPlay
          src={drama.videoUrl}
          aria-label={`Playing ${drama.title}`}
        />
      </div>
    </div>
  );

  const DramaCard = ({ drama, index }) => (
    <div
      //   ref={(el) => (cardRefs.current[index] = el)}
      role="button"
      tabIndex={1}
      className={`relative group cursor-pointer transition-all duration-200 rounded-lg
        ${focusedIndex === index ? "ring-4 ring-purple-500 scale-105 z-10" : ""}
        hover:ring-4 hover:ring-purple-500 hover:scale-105 hover:z-10
        focus:ring-4 focus:ring-purple-500 focus:scale-105 focus:z-10`}
      onClick={() => {
        setFocusedIndex(index);
        setSelectedDrama(drama);
        setShowPlayer(true);
      }}
      onKeyDown={(e) => handleCardKeyDown(e, drama, index)}
      onFocus={() => setFocusedIndex(index)}
      aria-label={`Play ${drama.title}`}
    >
      <img
        src={drama.thumbnail}
        alt={`${drama.title} thumbnail`}
        className="w-full aspect-video object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 rounded-lg">
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-semibold">{drama.title}</h3>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100">
        <button className="text-white w-12 h-12" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black p-8">
      <header>
        <h1 className="text-3xl font-bold text-white mb-8">Dramas & Series</h1>
      </header>

      <main>
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          role="grid"
        >
          {dramas.map((drama, index) => (
            <DramaCard key={drama.id} drama={drama} index={index} />
          ))}
        </div>

        {showPlayer && selectedDrama && (
          <VideoPlayer
            drama={selectedDrama}
            onClose={() => {
              setShowPlayer(false);
              setSelectedDrama(null);
              //   cardRefs.current[focusedIndex]?.focus();
            }}
          />
        )}
      </main>
    </div>
  );
};

export default DramaSeriesApp;
