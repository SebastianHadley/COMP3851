import bannerImg from "../assets/img/banner-bg.png";
import 'animate.css';

export const Banner = () => {
  return (
    <section >
    <span className="tagline">Welcome to University of Newcastle.</span>
    <div>
      <img src={bannerImg} alt="../assets/img/banner-bg.png"/>
    </div>
    </section>
  )
}
