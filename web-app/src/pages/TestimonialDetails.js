
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { TestimonialsContext } from '../App'; 

function TestimonialDetails() {
    const testimonialData = useContext(TestimonialsContext)
  return (
    <section >
        <div className='testimonial-details'>
            <h1>{testimonialData}</h1>
        </div>
    </section>
  );
}

export {TestimonialDetails}
