
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState, setData } from 'react';
import { GetImage } from "../Helper";

//Component For The First Day List
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

  const [OWeek, setListItems] = useState([]);
  useEffect(() => {
    async function fetchOWeek() {
      try {
        const response = await fetch("http://localhost:3001/Week-O");
        const data = await response.json();        
        setListItems(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchOWeek();
  }, []);

  return (
    <section className="first" id="first">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="first-bx wow zoomIn">

                        <h2>{OWeek.SectionTitle}</h2>
                        {OWeek.Paragraphs ? (
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme first-slider">
                            {OWeek.Paragraphs.map((item, index) => (
                              <div key={index} className="item">
                                <img src={GetImage(item.ImageID)} />
                                <h5>{item.ParagraphText}</h5> 
                              </div>
                          ))}
                        </Carousel>
                        ) : (
                          <p>Loading ... </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}



