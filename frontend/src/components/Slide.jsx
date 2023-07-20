function Slide({ title, src, alt, link, order }) {
  return (
    <section className={`SlideComponent slide ${order}`}>
      <h1>{title}</h1>

      <img
        src={src}
        alt={alt}
        onClick={() => window.open({ link }, "_blank")}
      />
    </section>
  );
}

export default Slide;
