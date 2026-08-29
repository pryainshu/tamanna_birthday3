function PhotoCard({ image, compliment, number }) {
  return (
    <div className="photo-card">

      <div className="photo-number">
        {number}
      </div>

      <img
        src={image}
        alt="Tamanna"
      />

      <div className="photo-overlay">
        <div className="compliment">
          <span>❤️</span>
          <p>{compliment}</p>
        </div>
      </div>

    </div>
  );
}

export default PhotoCard;