import React, { useState } from 'react';

const PostalCodeInput = () => {
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setPostalCode(value);

    if (!/^\d{0,5}$/.test(value)) {
      setError('Le code postal doit contenir uniquement des chiffres (maximum 5).');
    } else if (value.length === 5 && !/^\d{5}$/.test(value)) {
      setError('Le code postal doit être un nombre à 5 chiffres.');
    } else {
      setError('');
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">Code Postal</label>
      <input
        type="text"
        value={postalCode}
        onChange={handleChange}
        className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder="Entrez votre code postal"
        maxLength="5"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PostalCodeInput;
