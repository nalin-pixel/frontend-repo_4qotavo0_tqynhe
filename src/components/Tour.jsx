import React from 'react';
import { motion } from 'framer-motion';

const shows = [
  { date: 'Nov 22, 2025', city: 'Los Angeles, CA', venue: 'The Midnight Room', link: '#' },
  { date: 'Dec 03, 2025', city: 'New York, NY', venue: 'Velvet Hall', link: '#' },
  { date: 'Dec 15, 2025', city: 'Chicago, IL', venue: 'Echo Theater', link: '#' },
  { date: 'Jan 10, 2026', city: 'Seattle, WA', venue: 'Nebula Stage', link: '#' },
];

const Tour = () => {
  return (
    <section id="tour" className="relative w-full bg-gradient-to-b from-[#0a0f1c] to-[#0a0f1c] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_10%,rgba(115,98,202,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(230,154,195,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-white"
        >
          Tour — where the songs find their shadows
        </motion.h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {shows.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-5 text-indigo-100 shadow-xl backdrop-blur-md"
            >
              <div>
                <p className="text-sm text-indigo-200/80">{s.date}</p>
                <p className="mt-1 text-lg text-white">{s.city}</p>
                <p className="text-sm text-indigo-200/70">{s.venue}</p>
              </div>
              <a
                href={s.link}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-indigo-50 transition hover:bg-white/20"
              >
                Notify Me
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tour;
