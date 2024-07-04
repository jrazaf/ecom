
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import PostalCodeInput from '../components/PostalCodeInput';
import PhoneNumberInput from '../components/PhoneNumberInput';
import NumCardInput from '../components/NumCardInput';

const Checkout = () => {

  const { cart } = useCart();

  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    postalCode: '',
    city: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleContactChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardInfoChange = (e) => {
    setCardInfo({
      ...cardInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle payment and order processing
    alert('Commande effectuée avec succès!');
    navigate('/');
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="border p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Nom</label>
              <input
                type="text"
                name="name"
                value={contactInfo.name}
                onChange={handleContactChange}
                className="w-full p-2 border border-gray-300"
                placeholder="Entrez votre nom"
                required
              />
            </div>
            <PhoneNumberInput />
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={contactInfo.email}
                onChange={handleContactChange}
                className="w-full p-2 border border-gray-300"
                placeholder="Entrez votre email"
                required
              />
            </div>
          </div>
          <div className="border p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Adresse de livraison</h2>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Adresse</label>
              <input
                type="text"
                name="address"
                value={shippingAddress.address}
                onChange={handleAddressChange}
                className="w-full p-2 border border-gray-300"
                placeholder="Entrez votre adresse"
                required
              />
            </div>
            <PostalCodeInput />
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Ville</label>
              <input
                type="text"
                name="city"
                value={shippingAddress.city}
                onChange={handleAddressChange}
                className="w-full p-2 border border-gray-300"
                placeholder="Entrez votre ville"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <div className="border p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Résumé de la commande</h2>
            <ul>
              {cart.map((product) => (
                <li key={product.id} className="flex justify-between mb-2">
                  <span>{product.title} (x{product.quantity})</span>
                  <span>{product.price * product.quantity} €</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>{totalPrice} €</span>
            </div>
          </div>
          <div className="border p-4">
            <h2 className="text-xl font-bold mb-2">Paiement</h2>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Mode de paiement</label>
              <select
                name="paymentMethod"
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                className="w-full p-2 border border-gray-300"
                required
              >
                <option value="">Sélectionnez un mode de paiement</option>
                <option value="card">Carte Bleue</option>
                <option value="paypal">PayPal</option>
                <option value="stripe">Stripe</option>
              </select>
            </div>
            {paymentMethod === 'card' && (
              
              <div className="mb-4">
                
                <NumCardInput />

                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2">Date de fin</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={cardInfo.expiryDate}
                    onChange={handleCardInfoChange}
                    className="w-full p-2 border border-gray-300"
                    placeholder="MM/AA"
                    required
                  />
                </div>

                <CodeCcvInput />

              </div>
              
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 mt-4 w-full hover:bg-blue-700 transition-colors"
            >
              Payer
            </button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Checkout;
