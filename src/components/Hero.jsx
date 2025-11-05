import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0a0f1c] via-[#0b1023] to-[#0a0f1c]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#080a12]/70 via-[#0a0f1c]/40 to-[#0a0f1c]/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(141,117,255,0.20),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(245,132,196,0.15),transparent_40%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-white"
        >
          JAYDN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-indigo-100/90"
        >
          The Interactive Artist Hub — a midnight world of sound, memory, and soft neon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex w-full max-w-2xl flex-col items-center gap-6"
        >
          <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md">
            <iframe
              title="Latest Single"
              className="h-28 w-full"
              src="https://open.spotify.com/embed/track/11dFghVXANMlKmJXsNCbNl?utm_source=generator"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>

          <a
            href="#tour"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-medium text-indigo-50 shadow-[0_0_40px_rgba(145,122,255,0.15)] backdrop-blur-md transition hover:bg-white/20"
          >
            <Play className="h-5 w-5 text-indigo-200 transition group-hover:scale-110" />
            Listen & Explore
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
