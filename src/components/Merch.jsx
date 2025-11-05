import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';

const catalog = [
  { id: 'tee-aurora', name: 'Aurora Tee', price: 35, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop' },
  { id: 'poster-moon', name: 'Moonlit Poster', price: 20, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
  { id: 'vinyl-blue', name: 'Blue Hour Vinyl', price: 42, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop' },
  { id: 'dl-echoes', name: 'Echoes (Digital)', price: 9, image: 'https://images.unsplash.com/photo-1750688649553-f7919e59eeeb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJvcmElMjBUZWV8ZW58MHwwfHx8MTc2MjM3NjEzNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

const Merch = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);

  const total = useMemo(() => items.reduce((sum, it) => sum + it.price * it.qty, 0), [items]);

  const addToCart = (product) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
    );
  };

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id));

  return (
    <section id="merch" className="relative w-full bg-gradient-to-b from-[#0a0f1c] via-[#0b1023] to-[#0a0f1c] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(169,134,255,0.10),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(245,132,196,0.10),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl md:text-4xl text-white">Merch — artifacts from the blue hour</h2>
          <button
            onClick={() => setCartOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-indigo-50 backdrop-blur-md transition hover:bg-white/20"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="text-sm">Cart ({items.reduce((s, i) => s + i.qty, 0)})</span>
          </button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {catalog.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between p-4 text-indigo-100">
                <div>
                  <p className="text-white">{p.name}</p>
                  <p className="text-sm text-indigo-200/80">${p.price}</p>
                </div>
                <button
                  onClick={() => addToCart(p)}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-indigo-50 transition hover:bg-white/20"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cart Panel */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-[#0b1023]/95 text-indigo-50 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <h3 className="font-serif text-2xl text-white">Your Cart</h3>
              <button onClick={() => setCartOpen(false)} className="rounded-full border border-white/15 p-2 hover:bg-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex h-[calc(100%-180px)] flex-col gap-3 overflow-y-auto p-4">
              {items.length === 0 ? (
                <p className="text-indigo-200/80">It’s quiet here. Add something you love.</p>
              ) : (
                items.map((it) => (
                  <div key={it.id} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                    <img src={it.image} alt={it.name} className="h-14 w-14 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className="text-white">{it.name}</p>
                      <p className="text-sm text-indigo-200/80">${it.price} • Qty {it.qty}</p>
                      <div className="mt-2 inline-flex items-center gap-2">
                        <button onClick={() => updateQty(it.id, -1)} className="rounded-full border border-white/15 px-2 py-1 text-sm hover:bg-white/10">-</button>
                        <button onClick={() => updateQty(it.id, +1)} className="rounded-full border border-white/15 px-2 py-1 text-sm hover:bg-white/10">+</button>
                        <button onClick={() => removeItem(it.id)} className="rounded-full border border-white/15 px-2 py-1 text-sm hover:bg-white/10">Remove</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-4">
              <div className="flex items-center justify-between text-white">
                <span>Subtotal</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <button
                className="mt-4 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-indigo-50 backdrop-blur-md transition hover:bg-white/20"
                onClick={() => alert('This is a visual-only checkout. Thank you for supporting the art.')}
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={() => setCartOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Merch;
