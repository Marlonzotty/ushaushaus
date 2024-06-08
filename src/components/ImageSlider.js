// src/components/StoreInfo.js
import React from 'react';

const StoreInfo = () => (
  <div className="bg-blue-200 text-center p-6">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src="https://luunabrasil.vtexassets.com/assets/vtex.file-manager-graphql/images/4fb1de8a-23d1-4fae-ab48-c3abfcb77526___566a8feca0a2faff01914a2e8e9cc1dc.png"
          alt="Loja Luuna 1"
          className="object-cover w-full h-96"
        />
       
        <img
        
        />
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold">Av. Europa, 660 Jardim Europa, São Paulo</p>
        <p className="text-lg font-semibold">SEG A SÁB 10h às 19h</p>
        <p className="text-lg font-semibold">DOM 10h às 18h</p>
      </div>
    </div>
  </div>
);

export default StoreInfo;
