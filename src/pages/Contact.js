// src/pages/Contact.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send the form data to an API or email service)
    alert('Merci, votre message a été pris en compte');
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">Nos coordonnées</h2>
          <p className="mb-2"><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          <p className="mb-2"><strong>Email :</strong> contact@ecommerce.com</p>
          <p className="mb-2"><strong>Instagram :</strong> <a href="https://www.instagram.com/ecommerce" className="text-blue-500">ecommerce</a></p>
          <p className="mb-2"><strong>Facebook :</strong> <a href="https://www.facebook.com/ecommerce" className="text-blue-500">ecommerce</a></p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999211011043!2d2.294481415674999!3d48.85884437928785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf9f1b1e9b%3A0xdcbf2bdecbf6b39d!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1630849469405!5m2!1sen!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Formulaire de contact</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Prénom</label>
              <input
                type="text"
                name="firstName"
                value={contactForm.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Nom</label>
              <input
                type="text"
                name="lastName"
                value={contactForm.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Objet</label>
              <input
                type="text"
                name="subject"
                value={contactForm.subject}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 w-full hover:bg-blue-700 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
