import PropTypes from "prop-types";

function Slide({ title, src, alt, imageLink, webLink, order }) {
  return (
    <section className={`SlideComponent slide ${order}`}>
      <h1>{title}</h1>

      {webLink ? (
        <a href={webLink} target="_blank" rel="noreferrer">
          <img src={src} alt={alt} />
        </a>
      ) : (
        <a href={imageLink}>
          <img src={src} alt={alt} />
        </a>
      )}
    </section>
  );
}

Slide.defaultProps = { imageLink: "", webLink: "" };
Slide.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imageLink: PropTypes.string,
  webLink: PropTypes.string,
  order: PropTypes.string.isRequired,
};
export default Slide;
