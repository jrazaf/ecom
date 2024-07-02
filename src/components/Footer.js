// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-6 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-bold">Mentions Légales</h4>
          <p className="text-sm">
            Ce site est un site ecommerce généraliste
            <br />
            Adresse : 123 Rue du Commerce, 75015 Paris
            <br />
            Téléphone : +33 1 23 45 67 89
            <br />
            Email : contact@ecommerce.com
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold">RGPD</h4>
          <p className="text-sm">
            <strong>Droit à l'oubli :</strong> Vous avez le droit de demander la suppression de vos données personnelles.
            <br />
            <strong>Portabilité des données :</strong> Vous pouvez demander à recevoir les données personnelles que nous avons collectées sur vous dans un format structuré.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold">Conditions Générales de Vente</h4>
          <p className="text-sm">
            <strong>Modalités de livraison :</strong> Nous livrons dans un délai de 3 à 5 jours ouvrables.
            <br />
            <strong>Modalités de remboursement :</strong> Vous pouvez retourner les produits dans un délai de 14 jours pour un remboursement complet.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaLinkedin />
          </a>
        </div>
        <div className="text-center text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} E-commerce. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
