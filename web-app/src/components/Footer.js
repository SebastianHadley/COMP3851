
import linkedin from "../assets/img/nav-icon1.svg";
import facebook from "../assets/img/nav-icon2.svg";
import instagram from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="Footer-center">
            <div className="social-icon">
              <a href="https://au.linkedin.com/school/university-of-newcastle/"><img src={linkedin} alt="Icon" /></a>
              <a href="https://www.facebook.com/TheUniversityofNewcastleAustralia/"><img src={facebook} alt="Icon" /></a>
              <a href="https://www.instagram.com/uni_newcastle/"><img src={instagram} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved by University of Newcastle</p>
    </footer>
  )
}