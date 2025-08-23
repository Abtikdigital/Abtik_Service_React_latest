const WebsiteOfferBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] text-white py-3 overflow-hidden shadow-[0_0_20px_rgba(60,162,226,0.6)]">
      {/* Wrapper for infinite loop */}
      <div className="flex w-max animate-marquee gap-12">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="whitespace-nowrap font-1 font-bold text-lg flex items-center gap-4"
          >
            <span className="animate-bounce"></span>
            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-[#3CA2E2] to-white animate-shine"
            style={{fontFamily:"Playfair Display"}}
            >
            Marking the 3rd Year of Our Beautiful Journey
            </span>
            <span className="animate-bounce"></span>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
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
