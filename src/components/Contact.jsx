import React, { useState } from 'react';
import { toast } from 'react-toastify';
import{motion} from 'framer-motion'

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Start submitting
    setResult("Sending....");
    setErrorMessage(""); // Clear any previous errors

    const formData = new FormData(event.target);
    formData.append("access_key", "e516e372-ad38-4238-89cc-8e51c3a98445");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully");
        event.target.reset(); // Reset the form after successful submission
      } else {
        setResult("");
        setErrorMessage(data.message || "Something went wrong");
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      setResult("");
      setErrorMessage("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.");
      console.log("Error:", error);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <motion.div
    
    initial={{ opacity: 0, x: -200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}

    
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact
        <span className='underline underline-offset-4 decoration-1 font-light'>With Us</span>
      </h1>

      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        {/* Name Field */}
        <div className='flex flex-wrap mb-4'>
          <div className='w-full md:w-1/2 text-left'>
            <label htmlFor='name' className='block mb-1 text-sm font-medium'>Your Name</label>
            <input
              id='name'
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
              type='text'
              name='Name'
              placeholder='Your Name'
              required
              aria-label="Your Name"
            />
          </div>

          {/* Email Field */}
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            <label htmlFor='email' className='block mb-1 text-sm font-medium'>Your Email</label>
            <input
              id='email'
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
              type='email'
              name='Email'
              placeholder='Your Email'
              required
              aria-label="Your Email"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className='my-6 text-left'>
          <label htmlFor='message' className='block mb-1 text-sm font-medium'>Message</label>
          <textarea
            id='message'
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
            name='Message'
            placeholder='Your Message'
            required
            aria-label="Your Message"
          ></textarea>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className='text-red-500 text-sm mb-4'>{errorMessage}</p>
        )}

        {/* Submit Button */}
        <button
          type='submit'
          className={`bg-blue-600 text-white py-2 px-12 mb-10 rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {result || (isSubmitting ? 'Sending...' : 'Send Message')}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
