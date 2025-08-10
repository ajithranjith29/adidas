import '../styles/Content.css';


import logoPng from '../../public/images/adidass_white.png'
import Modal from './Modal';
import '../styles/Content.css';

export default function Content({isModalOpen,openModal,closeModal}) {
  

  return (
    <div className="content">
      <div className="head">
        <h1>STORIES, STYLES AND SPORTSWEAR AT <br /> ADIDAS, SINCE 1949</h1>
        <p>
          Sport keeps us fit. Keeps you mindful. Brings us together. Through
          sport we have the power to change lives. Whether it is through stories
          of inspiring athletes. Helping you to get up and get moving.
          Sportswear featuring the latest technologies, to up your performance.
          Beat your PB. adidas offers a home to the runner, the basketball
          player, the soccer kid, the fitness enthusiast. The weekend hiker that
          loves to escape the city. The yoga teacher that spreads the moves. The
          3-Stripes are seen in the music scene. On stage, at festivals. Our
          sports clothing keeps you focused before that whistle blows. During
          the race. And at the finish lines. We’re here to support creators.
          Improve their game. Their lives. And change the world. adidas is about
          more than sportswear and workout clothes. We partner with the best in
          the industry to co-create. This way we offer our fans the sports
          apparel and style that match their athletic needs, while keeping
          sustainability in mind. We’re here to support creators. Improve their
          game. Create change. And we think about the impact we have on our
          world.
        </p>
        <img src= {logoPng}alt='logo' />
      </div>
      <div className="bottom">
        <h1>Join adidas and get 10% OFF</h1>
        <button onClick={openModal} > 
          Sign Up For Free <span className="arrow">→</span>
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}
