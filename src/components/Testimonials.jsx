import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import{motion} from'framer-motion'

const Testimonials = () => {
  return (


    <motion.div

        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        
     className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id="Testimonials">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer <span className="underline underline-offset-4 decoration-1 font-light">Testimonials</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real stories from Those Who Found Home With Us
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center">
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image || '/default-avatar.png'} // Fallback image if image is not provided
              alt={testimonial.alt || 'Customer image'} // Fallback alt text
            />

            <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>

            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {/* Ensure rating is a valid number, and handle the case when rating is missing */}
              {testimonial.rating && testimonial.rating > 0 ? (
                Array.from({ length: testimonial.rating }, (_, index) => (
                  <img key={index} src={assets.star_icon} alt="Star" />
                ))
              ) : (
                <p>No rating available</p> // Fallback if no rating is provided
              )}
            </div>

            <p className="text-gray-600">{testimonial.text || 'No testimonial available.'}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
