import PhotoCard from "./photocard";

const photos = [
  {
    image: "/photos/tamanna1.jpg",
    compliment: "Your smile makes everything brighter ✨",
  },
  {
    image: "/photos/tamanna2.jpg",
    compliment: "You look beautiful without even trying ❤️",
  },
  {
    image: "/photos/tamanna3.jpg",
    compliment: "Those eyes have their own beautiful story 👀❤️",
  },
  {
    image: "/photos/tamanna4.jpg",
    compliment: "Simply beautiful, just like you 🌸",
  },
  {
    image: "/photos/tamanna5.jpg",
    compliment: "My favourite view will always be you 💕",
  },
  {
    image: "/photos/tamanna6.jpg",
    compliment: "You make ordinary moments special 🫶",
  },
];

function PhotoGallery() {
  return (
    <section className="gallery-section" id="memories">

      <div className="section-heading">

        <p>OUR BEAUTIFUL MOMENTS</p>

        <h2>
          Six reasons to <span>smile ❤️</span>
        </h2>

        <div className="heading-line"></div>

        <span>
          Every picture holds a little piece of a memory.
        </span>

      </div>

      <div className="photo-grid">

        {photos.map((photo, index) => (
          <PhotoCard
            key={index}
            image={photo.image}
            compliment={photo.compliment}
            number={`0${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
}

export default PhotoGallery;