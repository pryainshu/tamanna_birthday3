import { Heart, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      <div className="floating-heart h1">❤️</div>
      <div className="floating-heart h2">💕</div>
      <div className="floating-heart h3">💗</div>
      <div className="floating-heart h4">❤️</div>

      <div className="hero-content">

        <div className="sparkle">
          <Sparkles size={25} />
        </div>

        <p className="small-title">
          A little something for someone special
        </p>

        <h1>
          Happy Birthday
          <span>Tamanna ❤️</span>
        </h1>

        <div className="heart-line">
          <Heart fill="currentColor" size={24} />
        </div>

        <p className="hero-message">
          Tamanna, tumhare saath Delhi ki woh chhoti-chhoti
          walks, random conversations aur saath bitaye hue
          moments mere liye bahut special hain.
          Shayad har moment perfect nahi tha,
          lekin tumhare saath hone ki wajah se
          woh moments beautiful ban gaye.
        </p>

        <p className="hero-message">
          Aaj tumhare birthday par bas itna kehna hai
          ki tum hamesha smile karti raho, khush raho
          aur tumhari life mein hamesha woh saari
          khushiyan aayein jo tum deserve karti ho.
        </p>

        <p className="love-text">
          You are one of my favourite memories ❤️
        </p>

        <a href="#memories" className="scroll-button">
          Discover Our Memories ↓
        </a>

      </div>

    </section>
  );
}

export default Hero;