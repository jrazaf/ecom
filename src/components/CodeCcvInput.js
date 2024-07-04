import React, { useState } from 'react';

const CodeCcvInput = () => {
  const [codeCcv, setCodeCcv] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setCodeCcv(value);

    if (!/^\d{0,3}$/.test(value)) {
      setError('Le code CCV doit contenir uniquement des chiffres.');
    } else if (value.length === 3 && !/^\d{3}$/.test(value)) {
      setError('Le code CCV doit être un nombre à 3 chiffres.');
    } else {
      setError('');
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">Numéro à 3 chiffres (CVV)</label>
      <input
        type="text"
        value={codeCcv}
        onChange={handleChange}
        className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder="Entrez votre code CCV"
        maxLength="3"
        minLength="3"
        required
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CodeCcvInput;
