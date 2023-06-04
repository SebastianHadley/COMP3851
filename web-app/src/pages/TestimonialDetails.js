
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { TestimonialsContext } from '../App'; 
import { GetImage, GetJPG } from '../Helper';
function TestimonialDetails() {
    const testimonialData = useContext(TestimonialsContext)
  return (
    <section >
      <div className='testimonial-details-container'>
        <div className='testimonial-details-image-box'>
          <div className='testimonial-details-heading'>
            <h2>{testimonialData.SectionTitle}</h2>
            <h3> {testimonialData.SectionSubTitle}</h3>
          </div>
          <img src={GetJPG('TestimonialsBackground')} className= "testimonial-details-img"></img>
        </div>
        <div className='testimonial-questions-container'>
            {testimonialData.Paragraphs.map((paragraph, idx) => (
              <div key={idx} className='testimonial-details-content'>
                <p className='testimonial-question'>{paragraph.AdditionalText}</p>
                <p className='testimonial-answer'>{paragraph.ParagraphText}</p>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

export {TestimonialDetails}
