import React from "react";

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
];

function Gallery() {
  return (
    <div id="gallery-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={`${process.env.PUBLIC_URL}/images/${img}`}
          alt={`Gallery ${index}`}
          className="gallery-img"
        />
      ))}
    </div>
  );
}

export default Gallery;
