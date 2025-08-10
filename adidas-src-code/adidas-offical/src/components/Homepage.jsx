import { useOutletContext } from "react-router-dom";
import BackgroundSlider from "./background.jsx";
import CardAll from "./CardAll";
import Content from "./Content";
import CricBack from "./CricBack";

export default function HomePage() {
  const { openModal } = useOutletContext();

  return (
    <div className="homepage">
      <main className="main-content">
        <section className="hero-section">
          <BackgroundSlider />
        </section>

        <section className="card-section">
          <CardAll />
        </section>

        <section className="cric-section">
          <CricBack
            image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/PLP_2880x720_100_8941975f51.jpg"
            alt="CricBackground"
            caption="You Got This!.."
            button="Shop Cricket"
          />
        </section>

        <section className="content-section">
          <Content openModal={openModal} />
        </section>
      </main>
    </div>
  );
}