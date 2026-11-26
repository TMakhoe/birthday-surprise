import "./ImageAutoSlider.css";

// Loads every image in src/assets/images automatically.
// To add or remove photos, just add or delete files in that folder.
const imageModules = import.meta.glob("../../assets/images/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const images = Object.keys(imageModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path) => imageModules[path]);

function ImageAutoSlider() {
  if (images.length === 0) return null;

  // Two copies back to back so the loop is seamless
  const duplicatedImages = [...images, ...images];

  return (
    <div className="slider">
      <div className="slider-track">
        {duplicatedImages.map((image, index) => (
          <div className="slider-item" key={index} aria-hidden={index >= images.length}>
            <img
              src={image}
              alt={`Memory ${(index % images.length) + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageAutoSlider;
