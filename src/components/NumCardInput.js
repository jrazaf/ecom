import React, { useState } from 'react';

const NumCardInput = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [error, setError] = useState('');
  
    const handleChange = (e) => {
      const value = e.target.value;
      setCardNumber(value);
  
      if (!/^\d{0,16}$/.test(value)) {
        setError('Le numéro de carte contenir uniquement des chiffres');
      } else if (value.length === 16 && !/^\d{16}$/.test(value)) {
        setError('Le numéro de carte doit être un nombre à 16 chiffres.');
      } else {
        setError('');
      }
    };
  
    return (
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Numéro de carte bancaire</label>
        <input
          type="text"
          value={cardNumber}
          onChange={handleChange}
          className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Entrez votre numéro de carte"
          maxLength="16"
          minLength="16"
          required
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  };
  
export default NumCardInput;
