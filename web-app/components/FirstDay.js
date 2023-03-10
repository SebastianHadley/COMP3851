
import pngegg from "../assets/img/pngegg.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import card from "../assets/img/card.png";
import map  from "../assets/img/map.png";
import tour from "../assets/img/tour.png";
import explore from "../assets/img/explore.png";

export const FirstDay = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="first" id="first">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="first-bx wow zoomIn">
                        <h2>First Day List!</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme first-slider">
                            <div className="item">
                            <img src={tour} alt="Image" />
                                <h5>Attending in the Uni Orientation Week.</h5>
                            </div>
                            <div className="item">
                            <img src={explore} alt="Image" />
                                <h5>Exploring the Campus with Orientation Tour.</h5>
                            </div>
                            <div className="item">
                            <img src={card} alt="Image" />
                                <h5>Pick Up Student Card from Student Hub.</h5>
                            </div>
                            <div className="item">
                            <img src={map} alt="Image" />
                                <h5>Download The Lost on Campus App.</h5>
                            </div>
                            <div className="item">
                            <img src={pngegg} alt="Image" />
                                <h5>Check the Course Timetable.</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
