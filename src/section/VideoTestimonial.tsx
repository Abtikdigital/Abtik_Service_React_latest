import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Assets ─── */
import Video1 from "../assets/ClientVideoTestimonials/Video1.mp4";
import Video2 from "../assets/ClientVideoTestimonials/Video2.mp4";
import Video3 from "../assets/ClientVideoTestimonials/Video3.mp4";
import Video4 from "../assets/ClientVideoTestimonials/Video4.mp4";
import Video5 from "../assets/ClientVideoTestimonials/Video5.mp4"

const videos = [
  { id: 1, src: Video1 },
  { id: 2, src: Video2 },
  { id: 3, src: Video3 },
  { id: 4, src: Video4 },
  {
    id:5,src:Video5
  }
];

const HIDE_DELAY = 2800;
const VIDEOS_PER_PAGE = 3;

/* ─── Icons ─── */
const PlayIcon = () => (
  <svg width="28" height="28" fill="white" viewBox="0 0 24 24" style={{ marginLeft: 3 }}>
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const PauseIcon = () => (
  <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

/* ─── Video Card Component ─── */
interface CardProps {
  src: string;
  isPlaying: boolean;
  onToggle: () => void;
  onEnded: () => void;
}

const VideoCard: React.FC<CardProps> = ({ src, isPlaying, onToggle, onEnded }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(true);
  const hideTimer = useRef<NodeJS.Timeout | null>(null);

  const resetHideTimer = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (isPlaying) {
      hideTimer.current = setTimeout(() => setShowControls(false), HIDE_DELAY);
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    } else {
      video.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    setShowControls(true);
    resetHideTimer();
    return () => { if (hideTimer.current) clearTimeout(hideTimer.current); };
  }, [isPlaying, resetHideTimer]);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black cursor-pointer group select-none"
      style={{ aspectRatio: "9/16" }}
      onMouseMove={() => { setShowControls(true); resetHideTimer(); }}
      onTouchStart={() => { setShowControls(true); resetHideTimer(); }}
      onClick={onToggle}
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 "
        onEnded={onEnded}
      />

      <motion.div
        className="absolute inset-0 z-10 bg-black/40 pointer-events-none"
        animate={{ opacity: !isPlaying || showControls ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <AnimatePresence>
        {(!isPlaying || showControls) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          >
            {/* Updated Play/Pause Button to Black/40 */}
            <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isPlaying ? "pause" : "play"}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Main Section Component ─── */
const VideoTestimonial: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [desktopPage, setDesktopPage] = useState(0);

  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setPlayingIndex(null);
    setDesktopPage(newPage);
  };

  const handleToggle = (index: number) => {
    setPlayingIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-16 bg-gradient-to-b from-[#052EAA] to-[#3CA2E2] bg-clip-text text-transparent">
          Hear From Our Successful Clients
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={desktopPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            >
              {videos
                .slice(desktopPage * VIDEOS_PER_PAGE, (desktopPage + 1) * VIDEOS_PER_PAGE)
                .map((video, idx) => {
                  const globalIdx = desktopPage * VIDEOS_PER_PAGE + idx;
                  return (
                    <motion.div
                      key={video.id}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <VideoCard
                        src={video.src}
                        isPlaying={playingIndex === globalIdx}
                        onToggle={() => handleToggle(globalIdx)}
                        onEnded={() => setPlayingIndex(null)}
                      />
                    </motion.div>
                  );
                })}
            </motion.div>
          </AnimatePresence>

          {/* Desktop Pagination Navigation */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-8 mt-16">
              {/* Left Button with Gradient */}
              <motion.button
                onClick={() => handlePageChange(desktopPage - 1)}
                disabled={desktopPage === 0}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-full bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] text-white shadow-xl disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110 transition-all"
              >
                <ChevronLeft />
              </motion.button>

              <div className="flex gap-4">
                {Array.from({ length: totalPages }).map((_, p) => (
                  <button
                    key={p}
                    onClick={() => handlePageChange(p)}
                    className={`h-3 rounded-full transition-all duration-500 ${
                      p === desktopPage ? "bg-[#052EAA] w-10" : "bg-gray-300 w-3 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Right Button with Gradient */}
              <motion.button
                onClick={() => handlePageChange(desktopPage + 1)}
                disabled={desktopPage === totalPages - 1}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-full bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] text-white shadow-xl disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110 transition-all"
              >
                <ChevronRight />
              </motion.button>
            </div>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10">
          {videos.map((video, i) => (
            <div key={video.id} className="snap-center min-w-[85vw] max-w-[320px]">
              <VideoCard
                src={video.src}
                isPlaying={playingIndex === i}
                onToggle={() => handleToggle(i)}
                onEnded={() => setPlayingIndex(null)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;