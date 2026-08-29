import { Play } from "lucide-react";

const videos = [
  {
    src: "/videos/video1.mp4",
    title: "A Little Memory ❤️",
  },
  {
    src: "/videos/video2.mp4",
    title: "Moments With You 💕",
  },
  {
    src: "/videos/video3.mp4",
    title: "Our Beautiful Memories ✨",
  },
];

function VideoSection() {
  return (
    <section className="video-section">

      <div className="section-heading">

        <p>OUR MEMORIES</p>

        <h2>
          Moments worth <span>remembering 🎥</span>
        </h2>

        <div className="heading-line"></div>

        <span>
          Some moments deserve to be watched again and again.
        </span>

      </div>

      <div className="video-grid">

        {videos.map((video, index) => (
          <div className="video-card" key={index}>

            <div className="video-number">
              0{index + 1}
            </div>

            <video
              src={video.src}
              controls
              preload="metadata"
            />

            <div className="video-title">
              <Play size={18} fill="currentColor" />
              <span>{video.title}</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default VideoSection;