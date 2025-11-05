import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const AboutContact = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-[#0a0f1c] via-[#0b1023] to-[#0a0f1c] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(169,134,255,0.10),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,132,196,0.10),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-white"
          >
            About — a story in blue
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 text-indigo-100/90 leading-relaxed"
          >
            I write to the hush between heartbeats — to the rooms where memories echo with
            soft neon and rain. JAYDN is a confession set to synth: quiet, romantic, a
            little haunted. If you’ve ever loved a ghost or danced with a shadow, you’ve
            already heard these songs.
          </motion.p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/15 bg-white/10 p-2 text-indigo-50 transition hover:bg-white/20"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="rounded-full border border-white/15 bg-white/10 p-2 text-indigo-50 transition hover:bg-white/20"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-white/15 bg-white/10 p-2 text-indigo-50 transition hover:bg-white/20"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Contact + Newsletter combined */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl text-white"
          >
            Join the community
          </motion.h3>
          <p className="mt-2 text-sm text-indigo-200/90">Get the latest releases, tour whispers, and midnight letters.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              form.reset();
              alert('Thank you for joining — see you under the violet lights.');
            }}
            className="mt-6 grid gap-4"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-indigo-50 placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-indigo-50 placeholder:text-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
            />
            <button
              type="submit"
              className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-indigo-50 backdrop-blur-md transition hover:bg-white/20"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="font-serif text-xl text-white">Contact</h4>
            <p className="mt-2 text-sm text-indigo-200/90">For bookings and collaborations:</p>
            <a href="mailto:hello@jaydn.art" className="mt-2 inline-flex items-center gap-2 text-indigo-100 underline-offset-4 hover:underline">
              <Mail className="h-4 w-4" /> hello@jaydn.art
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
