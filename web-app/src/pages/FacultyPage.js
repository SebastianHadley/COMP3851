
import 'bootstrap/dist/css/bootstrap.min.css';
import { FacultyInfo } from '../components/FacultyInfo';

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