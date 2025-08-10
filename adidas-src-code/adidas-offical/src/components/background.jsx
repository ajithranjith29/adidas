import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";

export default function BackgroundSlider() {
  const slides = [
    {
      url: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_00_standard.jpg",
      caption: "New Collection 2025",
      subtitle: "Adidas Samba OG Shoes",
      button: "Shop Now",
      link: "/samba",
    },
    {
      url: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5643ea9848e94c1da869fd176bd19128_9366/Superstar_II_Shoes_White_IH8659_01_standard.jpg",
      caption: "Summer Edition",
      subtitle: "Adidas Superstar II Shoes",
      button: "View Collection",
      link: "/superstar",
    },
    {
      url: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d62884026e05447ea7e08a9b9fb602b7_9366/Gazelle_Indoor_Shoes_Red_IE2946_01_standard.jpg",
      caption: "Limited Edition",
      subtitle: "Adidas Gazelle Indoor Shoes",
      button: "Learn More",
      link: "/gazelle",
    },
  ];

  const slideProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };

  return (
    <div className="background-slider">
      <Fade {...slideProperties}>
        {slides.map((slide, index) => (
          <div className="slide-container" key={index}>
            <div
              className="slide-content"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className="slide-text">
                <h2>{slide.caption}</h2>
                <p>{slide.subtitle}</p>
                <Link to={slide.link} className="slide-button">
                  {slide.button}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
