// src/pages/TestPage.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TestPage() {
  useEffect(() => {
    if (location.hash == "#/test") {
      document.querySelector("title").textContent = "test jsx";
      return;
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="p-10 text-center"
    >
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        Ini Test Page 🚀
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Halaman ini muncul dengan animasi masuk & keluar pakai Framer Motion.
      </p>
      <Link to="/" className="text-blue-500 underline">
        Balik ke Home
      </Link>
    </motion.div>
  );
}
