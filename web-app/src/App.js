
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import {Banner} from "./components/Banner";
import {FirstDay} from "./components/FirstDay";
import { FacultyInfo } from './components/FacultyInfo';
import { Footer } from './components/Footer';
import {Testimonial} from "./components/Testimonial"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <FirstDay />
      <FacultyInfo />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
