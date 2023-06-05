import { useEffect, useState } from 'react';

import 'animate.css';

export const InformationSection = () => {

  const [informationResponse, setInformation] = useState([]);

  useEffect(() => {
    async function fetchInformation() {
      try {
        const response = await fetch("http://localhost:3001/InformationSection");
        const data = await response.json();  
        setInformation(data);
      } catch (error) {
        console.log(error);
      }
    }
fetchInformation();
  }, []);

  return (
    <section className="information-section" >
        <div className="information-block">
            <div className=" information-common information-block-one">
                <h3>Information Information </h3>
                <p>words words words words words</p>
            </div>
        </div>
        <div className="information-block">
            <div className="information-common information-block-two">
                <h3>Information Information </h3>
                <p>words words words words words</p>
            </div>
        </div>
    </section>
  )
}
