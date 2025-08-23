const WebsiteOfferBanner = () => {
  const message = "Our 3rd Year of Togetherness, Forever to Go";

  return (
    <div className="relative bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] text-white py-3 overflow-hidden shadow-[0_0_20px_rgba(60,162,226,0.6)]">
      {/* Mobile: Show once */}
      <div className="flex justify-center items-center gap-3 md:hidden">
        <span className="animate-bounce">🎉</span>
        <span
          className="relative inline-block text-lg text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#3CA2E2] to-white animate-blink"
          style={{ fontFamily: "Playfair Display" }}
        >
          {message}
        </span>
        <span className="animate-bounce">🎉</span>
      </div>

      {/* Desktop: Show 3 times */}
      <div className="hidden md:flex flex-row justify-center items-center gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="animate-bounce">🎉</span>
            <span
              className="relative inline-block text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#3CA2E2] to-white animate-blink"
              style={{ fontFamily: "Playfair Display" }}
            >
              {message}
            </span>
            <span className="animate-bounce">🎉</span>
          </div>
        ))}
      </div>

      <style>
        {`
          /* Blinking Effect */
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 2s step-start infinite;
          }

          /* Shine Effect */
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
