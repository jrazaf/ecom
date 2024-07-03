import React, { useState } from 'react';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    const phoneRegex = /^(0[1-9]\d{8})$/;
    if (value === '') {
      setError('Le numéro de téléphone est requis.');
    } else if (!phoneRegex.test(value)) {
      setError('Le numéro de téléphone doit être un nombre à 10 chiffres commençant par 0.');
    } else {
      setError('');
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">Numéro de téléphone</label>
      <input
        type="text"
        value={phoneNumber}
        onChange={handleChange}
        className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder="Entrez votre numéro de téléphone"
        maxLength="10"
        required
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;
