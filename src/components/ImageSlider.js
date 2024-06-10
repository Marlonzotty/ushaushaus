import React from 'react';

const StoreInfo = () => (
  <div className="bg-blue-200 text-center p-6">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://luunabrasil.vtexassets.com/assets/vtex.file-manager-graphql/images/07f89113-53c6-4318-b175-b5db654642d0___18b2f435256bee09ffaf88a6e68e5967.png"
          />
          <a href="https://www.google.com/maps/place/Luuna+Colch%C3%B5es/@-23.5763293,-46.6820688,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x94ce576590129011:0x92ad8767713133f1!2sAv.+Europa,+660+-+Jardim+Europa,+S%C3%A3o+Paulo+-+SP,+01449-000!3b1!8m2!3d-23.5763017!4d-46.6795218!16s%2Fg%2F11c29j5shv!3m5!1s0x94ce57a2c4e121d3:0xe533f866c63cea73!8m2!3d-23.5763293!4d-46.6794939!16s%2Fg%2F11vwv6bb2x?entry=ttu">
            <img
              src="https://luunabrasil.vtexassets.com/assets/vtex.file-manager-graphql/images/4fb1de8a-23d1-4fae-ab48-c3abfcb77526___566a8feca0a2faff01914a2e8e9cc1dc.png"
              alt="Loja Luuna"
              className="object-cover w-full h-96"
            />
          </a>
        </picture>
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
