import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Video1 from "../assets/ClientVideoTestimonials/Video1.mp4";
import Video2 from "../assets/ClientVideoTestimonials/Video2.mp4";
import Video3 from "../assets/ClientVideoTestimonials/Video3.mp4";
import Video4 from "../assets/ClientVideoTestimonials/Video4.mp4";
import Video5 from "../assets/ClientVideoTestimonials/Video5.mp4";

// New Testimonials
import NewVideo1 from "../assets/Video/At Abtik Services  Hyperspace Technologies, Sucess Story (1).mp4";
import NewVideo2 from "../assets/Video/At Abtik Services  Sai Diagnostic, Success Story.mp4";
import NewVideo3 from "../assets/Video/At Abtik Services Precast india connections private limited Sucess (1).mp4";
import NewVideo4 from "../assets/Video/Client Sucess Of Bharat Capital (1).mp4";
import NewVideo5 from "../assets/Video/From Vision to Reality_ Meet Mr.Rajan Sharma Founder of Infinito Comics Pvt Ltd with Abtik Services. (1).mp4";

const videos = [
  { id: 1, src: NewVideo1 },
  { id: 2, src: NewVideo2 },
  { id: 3, src: NewVideo3 },
  { id: 4, src: NewVideo4 },
  { id: 5, src: NewVideo5 },
  { id: 6, src: Video1 },
  { id: 7, src: Video2 },
  { id: 8, src: Video3 },
  { id: 9, src: Video4 },
  { id: 10, src: Video5 },
];

const HIDE_DELAY    = 2800;
const VIDEOS_PER_PAGE = 3;
// Sequential progress now handles autoplay one-by-one.

const PlayIcon = () => (
  <svg width="30" height="30" fill="white" viewBox="0 0 24 24" style={{ marginLeft: 4 }}>
    <polygon points="5,3 19,12 5,21" />
  </svg>
);
const PauseIcon = () => (
  <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);
const SoundOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
  </svg>
);
const SoundOnIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
  </svg>
);
const ChevronLeft = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRight = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);


interface CardProps {
  src: string;
  isPlaying: boolean;
  isMuted: boolean;
  onPlayToggle: () => void;
  onMuteToggle: () => void;
  onEnded: () => void;
}

const VideoCard: React.FC<CardProps> = ({
  src,
  isPlaying,
  isMuted,
  onPlayToggle,
  onMuteToggle,
  onEnded,
}) => {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const [showCtrl, setShowCtrl] = useState(true);
  const hideRef    = useRef<NodeJS.Timeout | null>(null);

  
  const resetHide = useCallback(() => {
    if (hideRef.current) clearTimeout(hideRef.current);
    if (isPlaying) {
      hideRef.current = setTimeout(() => setShowCtrl(false), HIDE_DELAY);
    }
  }, [isPlaying]);

  useEffect(() => {
    setShowCtrl(true);
    resetHide();
    return () => { if (hideRef.current) clearTimeout(hideRef.current); };
  }, [isPlaying, resetHide]);

  /* ── Local Video Sync ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      const doPlay = () => {
        video.play().catch((err) => {
          if (!video.muted) {
            console.warn("Unmuted play blocked, falling back to muted:", err);
            video.muted = true;
            video.play().catch((e2) => console.error("Muted play also blocked:", e2));
          } else {
            console.error("Muted play blocked:", err);
          }
        });
      };

      if (video.readyState >= 2) {
        doPlay();
      } else {
        video.addEventListener("loadeddata", doPlay, { once: true });
        return () => video.removeEventListener("loadeddata", doPlay);
      }
    } else {
      video.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      video.volume = 1.0;
      if (!isMuted && isPlaying) {
        video.play().catch((e) => console.warn("Unmuted play re-trigger failed:", e));
      }
    }
  }, [isMuted, isPlaying]);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black select-none"
      style={{ aspectRatio: "9/16" }}
      onMouseMove={() => { setShowCtrl(true); resetHide(); }}
      onTouchStart={() => { setShowCtrl(true); resetHide(); }}
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        muted
        preload="auto"
        loop={false}
        className="absolute inset-0 w-full h-full object-cover"
        onEnded={onEnded}
      />

      <motion.div
        className="absolute inset-0 z-10 bg-black/40 pointer-events-none"
        animate={{ opacity: !isPlaying || showCtrl ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div
        className="absolute inset-0 z-20 cursor-pointer"
        onClick={onPlayToggle}
      />

      <AnimatePresence>
        {(!isPlaying || showCtrl) && (
          <motion.div
            key="ctrl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isPlaying ? "pause" : "play"}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.15 }}
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="absolute top-3 right-3 z-40 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-colors"
        onClick={(e) => { e.stopPropagation(); onMuteToggle(); }}
        whileTap={{ scale: 0.85 }}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <SoundOffIcon /> : <SoundOnIcon />}
      </motion.button>
    </div>
  );
};

/* ─── Main Component ─── */
const VideoTestimonial: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused,   setIsPaused]   = useState(false);
  const [isMuted,    setIsMuted]    = useState(true);   
  const [desktopPage, setDesktopPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    handler(mql);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const currentIdxRef = useRef(0);
  useEffect(() => { currentIdxRef.current = currentIdx; }, [currentIdx]);

  useEffect(() => {
    const unlockAudio = () => {
      setIsMuted(false);
      window.removeEventListener("mouseup", unlockAudio);
      window.removeEventListener("touchend", unlockAudio);
    };
    window.addEventListener("mouseup", unlockAudio);
    window.addEventListener("touchend", unlockAudio);
    return () => {
      window.removeEventListener("mouseup", unlockAudio);
      window.removeEventListener("touchend", unlockAudio);
    };
  }, []);

  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  const goTo = useCallback((idx: number, shouldMute?: boolean) => {
    setCurrentIdx(idx);
    setDesktopPage(Math.floor(idx / VIDEOS_PER_PAGE));
    if (typeof shouldMute === "boolean") setIsMuted(shouldMute);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768 && mobileScrollRef.current) {
      const activeCard = mobileScrollRef.current.children[currentIdx] as HTMLElement;
      if (activeCard) {
        activeCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [currentIdx]);

  const handleVideoEnd = useCallback(() => {
    const next = (currentIdxRef.current + 1) % videos.length;
    goTo(next, isMuted);
    setIsPaused(false);
  }, [goTo, isMuted]);

  const handlePlayToggle = (idx: number) => {
    if (idx !== currentIdx) {
      goTo(idx, false);
      setIsMuted(false);
      setIsPaused(false);
    } else {
      setIsPaused((prev) => !prev);
    }
  };

  const handleMuteToggle = () => setIsMuted((prev) => !prev);

  const handlePageChange = (page: number) => {
    const firstOnPage = page * VIDEOS_PER_PAGE;
    goTo(firstOnPage, isMuted);
    setIsPaused(false);
  };

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-16 bg-gradient-to-b from-[#052EAA] to-[#3CA2E2] bg-clip-text text-transparent">
          Hear From Our Successful Clients
        </h2>

        {/* ── Desktop ── */}
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
                .map((video, i) => {
                  const globalIdx = desktopPage * VIDEOS_PER_PAGE + i;
                  return (
                    <motion.div
                      key={video.id}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <VideoCard
                        src={video.src}
                        isPlaying={!isMobile && currentIdx === globalIdx && !isPaused}
                        isMuted={isMuted}
                        onPlayToggle={() => handlePlayToggle(globalIdx)}
                        onMuteToggle={handleMuteToggle}
                        onEnded={handleVideoEnd}
                      />
                    </motion.div>
                  );
                })}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-2 mt-8">
            {videos.map((_, i) => (
              <motion.button
                key={i}
                className="h-1.5 rounded-full"
                animate={{
                  backgroundColor: currentIdx === i ? "#052EAA" : "#d1d5db",
                  width: currentIdx === i ? 32 : 10,
                }}
                transition={{ duration: 0.4 }}
                onClick={() => { goTo(i, true); setIsPaused(false); }}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-8 mt-6">
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

        {/* ── Mobile ── */}
        <div 
          ref={mobileScrollRef}
          className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
        >
          {videos.map((video, i) => (
            <div key={video.id} className="snap-center min-w-[85vw] max-w-[320px]">
              <VideoCard
                src={video.src}
                isPlaying={isMobile && currentIdx === i && !isPaused}
                isMuted={isMuted}
                onPlayToggle={() => handlePlayToggle(i)}
                onMuteToggle={handleMuteToggle}
                onEnded={handleVideoEnd}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;

