import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} // awal (masuk dari bawah)
      animate={{ opacity: 1, y: 0 }} // masuk normal
      exit={{ opacity: 0, y: 20 }} // keluar ke atas
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <header>
        <h1>halo</h1>
      </header>
      <main>
        <section>
          <div className="container">
            <Link to={"/test"}>test</Link>
          </div>
        </section>
      </main>
    </motion.section>
  );
}
