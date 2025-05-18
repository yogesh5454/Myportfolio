import emailjs from 'emailjs-com';
import { useRef } from 'react';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <div>

        
    </div>
   
  );
};

export default ContactForm;
