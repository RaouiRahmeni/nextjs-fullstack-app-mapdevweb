import React from 'react';

const Widgets = () => {
  return (
    <div className="flex bg-gray-500 w-11/12 p-2 m-5 rounded">
      <div className="w-1/3 h-40 rounded-2xl border shadow-lg ms-5 p-5">
        <p>Total Day Consumption</p>
        <div className="flex items-center m-1">
          <div className="bg-green-100 rounded-full p-0.5 me-1">icon</div>
          <p>2% Than your average</p>
        </div>
        <div>
          <p className="font-bold text-4xl">8L</p>
        </div>
      </div>
      <div className="w-1/3 h-40 rounded-2xl border shadow-lg ms-5 p-5">
        <p>Current Quarter Consumption</p>
        <div className="flex items-center m-1">
          <div className="bg-green-100 rounded-full p-0.5 me-1">jijij</div>
          <p>Decrease of A with x25 L</p>
        </div>
        <div>
          <p className="font-bold text-4xl">541 L</p>
        </div>
      </div>
      <div className="w-1/3 h-40 text-sm rounded-2xl border shadow-lg ms-5 p-5">
        <p>Total Fees</p>

        <div>
          <p className="font-bold text-4xl">54 TND</p>
          <p>SONEDE Fees 45 TND</p>
          <p>ONAS Fees 9 TND</p>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
