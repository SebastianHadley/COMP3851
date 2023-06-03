
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from "../components/Banner";
import {FirstDay} from "../components/FirstDay";
import { FacultyInfo } from '../components/FacultyInfo';
import { Footer } from '../components/Footer';
import {Testimonial} from "../components/Testimonial"
import {FAQ} from "../components/FAQ"
import { GetImage } from '../Helper';

function FacultyPage({onPageChange}) {

    return (
        <div>
            <div className='faculty-page-banner'>
                <div className='faculty-page-title-box'>
                    <h2>School Of Information and Physical Sciences</h2>
                    <p></p>
                </div>
            </div>
            <FacultyInfo />
        </div>
    );  
}

export {FacultyPage}