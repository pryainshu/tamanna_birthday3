import "./birthdaypage.css";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

import Hero from "../components/Hero";
import PhotoGallery from "../components/PhotoGallery";
import VideoSection from "../components/VideoSection";
import MessageForm from "../components/MessageForm";


function BirthdayPage() {

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);


  // Music setup
  useEffect(() => {

    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.5;

      // Browser autoplay ko block kar sakta hai
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          console.log("Click the music button to start music ❤️");
        });
    }

  }, []);


  // Mute / Unmute
  const toggleMusic = async () => {

    const audio = audioRef.current;

    if (!audio) return;

    try {

      if (audio.paused) {

        await audio.play();

        setIsPlaying(true);

      } else {

        audio.pause();

        setIsPlaying(false);

      }

    } catch (error) {

      console.log("Music error:", error);

    }
  };


  return (
    <div className="birthday-page">

      {/* =========================
          BACKGROUND MUSIC
      ========================= */}

      <audio
        ref={audioRef}
        src="/music/birthday-song.mp3"
        loop
      />


      {/* =========================
          MUSIC BUTTON
      ========================= */}

      <button
        className={`music-button ${
          isPlaying ? "music-playing" : "music-muted"
        }`}
        onClick={toggleMusic}
        aria-label={
          isPlaying
            ? "Mute music"
            : "Unmute music"
        }
      >

        <div className="music-icon">

          {isPlaying ? (
            <Volume2 size={24} />
          ) : (
            <VolumeX size={24} />
          )}

        </div>

        <div className="music-text">

          <span>
            {isPlaying
              ? "Tap to Mute"
              : "Tap to Unmute"}
          </span>

          <small>
            {isPlaying
              ? "Music is playing ❤️"
              : "Music is muted"}
          </small>

        </div>

      </button>


      {/* =========================
          WEBSITE CONTENT
      ========================= */}

      <Hero />

      <PhotoGallery />

      <VideoSection />

      <MessageForm />


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <p>
          Made with ❤️ for Tamanna
        </p>

        <span>
          Every moment with you is a beautiful memory.
        </span>

      </footer>

    </div>
  );
}

export default BirthdayPage;
