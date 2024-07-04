import React, { useState } from 'react';

const luhnCheck = (num) => {
    let arr = (num + '')
      .split('')
      .reverse()
      .map((x) => parseInt(x));
    let lastDigit = arr.shift();
    let sum = arr.reduce(
      (acc, val, i) =>
        i % 2 === 0
          ? acc + (val * 2 > 9 ? val * 2 - 9 : val * 2)
          : acc + val,
      0
    );
    sum += lastDigit;
    return sum % 10 === 0;
  };

const NumCarteControle = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [error, setError] = useState('');
  
    const handleChange = (e) => {
      const value = e.target.value.replace(/\D/g, '');
      setCardNumber(value);
  
      if (value === '') {
        setError('Le numéro de carte est requis.');
      } else if (!luhnCheck(value)) {
        setError('Le numéro de carte est invalide.');
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
          maxLength="19"
          required
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  };
  
export default NumCarteControle;
