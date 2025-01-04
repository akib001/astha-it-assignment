import { useParams } from "react-router";
import VideoPlayer from "../components/videoGridComponents/VideoPlayer";
import { videoData } from "../components/videoGridComponents/videoData";

const WatchPage = () => {
  const { videoId } = useParams();
  const video =
    videoData.find((v) => v.id === parseInt(videoId)) || videoData[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">{video.title}</h1>
        <div className="text-sm text-foreground/60">{video.tag}</div>
      </div>

      <VideoPlayer />

      <div className="space-y-4 text-foreground/80">
        <h2 className="text-lg font-semibold text-foreground">
          About this video
        </h2>
        <p className="leading-relaxed">
          This is a sample video stream of &quot;Big Buck Bunny&quot;. This is a
          placeholder description that would normally contain details about the
          drama episode, including the plot summary, cast information, and other
          relevant details about {video.title}.
        </p>
      </div>
    </div>
  );
};

export default WatchPage;
