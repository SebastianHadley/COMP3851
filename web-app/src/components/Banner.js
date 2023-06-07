import { useEffect, useState } from 'react';

import 'animate.css';

export const Banner = () => {

  const [bannerResponse, setBanner] = useState([]);

  useEffect(() => {
    async function fetchBanner() {
      try {
        const response = await fetch("http://localhost:3001/BannerInformation");
        const data = await response.json();  
        setBanner(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBanner();
  }, []);

  return (
    <section className="banner" >
    <div className="banner-image">
      <div className="banner-information-card">
        <h3>{bannerResponse.ParagraphText}</h3>
        <p>{bannerResponse.AdditionalText}</p>
      </div>
    </div>
    </section>
  )
}
