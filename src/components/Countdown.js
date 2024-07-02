import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(80); // Inicializa com 80 segundos

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-blue-100 text-center p-2 text-xs md:text-sm fixed top-0 w-full z-50">
      <h2 className="font-bold text-xs md:text-sm">
        Seja rápido e veja se consegue <span className="text-red-500">PARTICIPAR DO QUIZ</span> e ganhe 100% OFF no seu pedido!
      </h2>
      <div className="flex justify-center items-center mt-1 text-red-500 text-xs md:text-sm">
        {timeLeft > 0 ? (
          <div className="text-center">
            <p className="font-bold">{formatTime(timeLeft)}</p>
          </div>
        ) : (
          <p>Tempo Esgotado!</p>
        )}
      </div>
    </div>
  );
};

export default Countdown;
