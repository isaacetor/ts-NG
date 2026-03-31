'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function WaitlistModal({ isOpen, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    email: '',
    phone: '',
    name: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  /* =========================
     Mount check (Next.js safe)
  ========================= */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* =========================
     Scroll lock
  ========================= */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* =========================
     Handlers
  ========================= */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.phone) {
      return 'All fields are required';
    }
    if (!form.email.includes('@')) return 'Enter a valid email';
    if (form.phone.length < 8) return 'Enter a valid phone number';
    return '';
  };

  const handleSubmit = async () => {
    const validationError = validate();
    if (validationError) return setError(validationError);

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await axios.post(
        'https://testapp.trybesave.com/api/user/join/waitlist',
        form,
      );
      setSuccess('You’ve been added to the waitlist 🎉');
      setForm({ email: '', phone: '', name: '' });
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  /* =========================
     Portal Render
  ========================= */
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-lg">
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#2D2A4A] mb-2">
              Join the Waitlist
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              Be the first to access TrybeSave 🚀
            </p>

            <div className="space-y-4">
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 text-gray-600"
              />
              <input
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 text-gray-600"
              />
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 text-gray-600"
              />
            </div>

            {success && <p className="text-green-600 mt-4">{success}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 w-full bg-[#FF00FF] text-white py-3 rounded-xl">
              {loading ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
