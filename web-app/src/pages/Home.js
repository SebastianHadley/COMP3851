
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from "../components/Banner";
import {FirstDay} from "../components/FirstDay";
import {Testimonial} from "../components/Testimonial"
import {FAQ} from "../components/FAQ"
import { InformationSection } from '../components/InformationSection';

function Home({ onPageChange, onTestimonialsDataUpdate}) {
    
    const handleTestimonialsFormSubmit = (newData) => {
        onTestimonialsDataUpdate(newData)
        console.log(newData);
        onPageChange('Testimonials')
    };
    return (
        <div>
            <Banner />
            <FirstDay />
            <InformationSection/>
            <Testimonial setStudent={handleTestimonialsFormSubmit}/>
            <FAQ />
        </div>
    );  
}

export {Home}