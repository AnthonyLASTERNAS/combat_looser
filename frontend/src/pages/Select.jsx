import { useEffect, useState } from "react";
import axios from "axios";
import Slide from "../components/Slide";

export default function Select() {
  const [slides, setSlides] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/slides`)
      .then((res) => {
        setSlides(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="carousel_wrapper">
      <div className="carousel">
        {slides
          ? slides.map((slide) => (
              <Slide
                key={slide.id}
                title={slide.title}
                src={slide.src}
                alt={slide.alt}
                imageLink={slide.imageLink}
                webLink={slide.webLink}
                order={slide.order}
              />
            ))
          : ""}
      </div>
    </div>
  );
}
