import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ProvinceDropdown() {
  const provinces = [
    'Badakhshan',
    'Badghis',
    'Baghlan',
    'Balkh',
    'Bamyan',
    'Daykundi',
    'Farah',
    'Faryab',
    'Ghazni',
    'Ghor',
    'Helmand',
    'Herat',
    'Jowzjan',
    'Kabul',
    'Kandahar',
    'Kapisa',
    'Khost',
    'Kunar',
    'Kunduz',
    'Laghman',
    'Logar',
    'Nangarhar',
    'Nimroz',
    'Nuristan',
    'Paktia',
    'Paktika',
    'Panjshir',
    'Parwan',
    'Samangan',
    'Sar-e Pol',
    'Takhar',
    'Uruzgan',
    'Wardak',
    'Zabul',
  ];

  const [selectedProvince, setSelectedProvince] = useState('');

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  const handleButtonClick = () => {
    // Send selectedProvince to the server
    console.log(`Selected Province: ${selectedProvince}`);
  };

  return (
    <div className="d-flex">
      <select className="form-select me-2" value={selectedProvince} onChange={handleProvinceChange}>
        <option value="">Select Province</option>
        {provinces.map((province, index) => (
          <option key={index} value={province}>
            {province}
          </option>
        ))}
      </select>
      <Button variant="primary" onClick={handleButtonClick}>Send</Button>
    </div>
  );
}

export default ProvinceDropdown;