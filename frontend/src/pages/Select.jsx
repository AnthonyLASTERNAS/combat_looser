import Logo from "../assets/Github_logo.jpg";
import Game from "../assets/Battle_fight.png";
import Linkedin from "../assets/Linkedin.png";
import Badges from "../assets/Badges.jpg";
import Nutri from "../assets/nutridrive.jpg";
import Afac from "../assets/afac.jpg";
import Hackathon from "../assets/Hackathon.jpg";
import Close from "../assets/close.jpg";
import YouTube from "../assets/Youtube.png";
import MyBadges from "../assets/mes_badges.png";
import Slide from "../components/Slide";
import { useEffect, useState } from "react";
import axios from "axios";

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
                link={slide.link}
                order={slide.order}
              />
            ))
          : ""}

        <div className="slide three">
          <p>Mon Linkedin</p>
          <img
            src={Linkedin}
            alt="Linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/anthony-lasternas-208379269/",
                "_blank"
              )
            }
          />
        </div>
        <div className="slide four">
          <p>Mes Badges</p>
          <img
            src={Badges}
            alt="Mes Badges"
            onClick={() => window.open(MyBadges, "_blank")}
          />
        </div>
        <div className="slide five">
          <p>Projet 2 en équipe</p>
          <img
            src={Nutri}
            alt="Projet 2"
            onClick={() =>
              window.open("https://nutri-drive.vercel.app/", "_blank")
            }
          />
        </div>
        <div className="slide six">
          <p>Projet 3 en équipe</p>
          <img
            src={Afac}
            alt="Projet 3"
            onClick={() => window.open(lien, "_blank")}
          />
        </div>
        <div className="slide seven">
          <p>Hackathon en équipe</p>
          <img
            src={Hackathon}
            alt="Hackathon"
            onClick={() =>
              window.open(
                "https://github.com/AnthonyLASTERNAS/Hackathon2",
                "_blank"
              )
            }
          />
        </div>
        <div className="slide eight">
          <p>Zone 51 des Projets</p>
          <img
            src={Close}
            alt="en construction"
            onClick={() => window.open(lien, "_blank")}
          />
        </div>
        <div className="slide nine">
          <p>Mon Talent</p>
          <img
            src={YouTube}
            alt="youtube"
            onClick={() =>
              window.open("https://www.youtube.com/@calouchedeno8771", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
}
