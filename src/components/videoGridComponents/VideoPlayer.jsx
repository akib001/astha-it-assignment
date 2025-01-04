const VideoPlayer = () => {
  return (
    <video
      controls
      autoPlay
      className="w-full aspect-video rounded-lg bg-black"
    >
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
