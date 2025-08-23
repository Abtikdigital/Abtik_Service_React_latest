const WebsiteOfferBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] text-white py-3 overflow-hidden shadow-[0_0_20px_rgba(60,162,226,0.6)]">
      <div className="whitespace-nowrap animate-marquee font-1 font-bold text-lg flex items-center gap-4">
        <span className="animate-bounce">🎉</span>
        <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-[#3CA2E2] to-white animate-shine">
          Celebrating 3 Wonderful Years With You
        </span>
        <span className="animate-bounce">🎉</span>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 12s linear infinite;
          }

          /* Shine effect */
          @keyframes shine {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .animate-shine {
            background-size: 200% auto;
            animation: shine 4s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default WebsiteOfferBanner;
