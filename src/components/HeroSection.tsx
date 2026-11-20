"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ChevronDown } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthdayData";

export default function HeroSection() {
  const { momName, subtitle } = BIRTHDAY_DATA;

  const scrollToJourney = () => {
    const el = document.getElementById("letter");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-12 pb-16 overflow-hidden">
      {/* Floating Scrapbook Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-12 left-8 md:left-24 text-4xl select-none opacity-80 pointer-events-none"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], rotate: [8, -8, 8] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-20 right-10 md:right-28 text-3xl select-none opacity-80 pointer-events-none"
      >
        🎀
      </motion.div>

      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-24 left-10 md:left-32 text-3xl select-none opacity-70 pointer-events-none"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8], rotate: [5, -5, 5] }}
        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
        className="absolute bottom-20 right-12 md:right-36 text-4xl select-none opacity-80 pointer-events-none"
      >
        🌷
      </motion.div>

      {/* Main Card Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-2xl w-full bg-[#FFFDF9]/95 backdrop-blur-xs border border-[#E9DCD1] rounded-3xl p-6 sm:p-12 scrapbook-card"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-40 h-6 tape rounded -rotate-1 border-dashed border-t border-b border-[#D5BEAC]" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF2F0] border border-[#F3D5CE] text-[#C46865] text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> สร้างขึ้นด้วยความรักเพื่อคุณแม่
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#4A3735] leading-tight mb-4">
          สุขสันต์วันเกิดนะ{momName} ♡
        </h1>

        <p className="text-lg sm:text-xl text-[#7C6360] max-w-md mx-auto mb-6 leading-relaxed">
          {subtitle}
        </p>

        {/* 3 Real Polaroid Photos */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 my-6 py-2 select-none">
          {/* Photo 3: วัยเด็กกับคุณแม่ */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
            className="w-24 sm:w-32 bg-white p-2 pb-4 rounded-lg shadow-lg border border-[#E8DDD2] -rotate-6 transition-all duration-300"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-[#F3ECE4]">
              <img
                src="/photo3.jpg"
                alt="ความทรงจำวัยเด็กกับแม่"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] sm:text-xs text-[#7B6260] font-bold text-center mt-2 truncate">
            
            </p>
          </motion.div>

          {/* Photo 2: ไปเที่ยวด้วยกัน (รูปหลักตรงกลาง) */}
          <motion.div
            whileHover={{ scale: 1.12, rotate: 0, zIndex: 20 }}
            className="w-28 sm:w-36 bg-white p-2 pb-5 rounded-lg shadow-xl border border-[#E8DDD2] rotate-2 z-10 transition-all duration-300"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-[#FAECE7]">
              <img
                src="/photo2.jpg"
                alt="ทริปความสุขกับครอบครัว"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] sm:text-xs text-[#7B6260] font-bold text-center mt-2 truncate">
            
            </p>
          </motion.div>

          {/* Photo 1: กอดอบอุ่นบนโซฟา */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
            className="w-24 sm:w-32 bg-white p-2 pb-4 rounded-lg shadow-lg border border-[#E8DDD2] rotate-8 transition-all duration-300"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-[#EBF3ED]">
              <img
                src="/photo1.jpg"
                alt="กอดอุ่นๆ ของแม่"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] sm:text-xs text-[#7B6260] font-bold text-center mt-2 truncate">
           
            </p>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={scrollToJourney}
          className="mt-6 px-8 py-3.5 rounded-full bg-[#E58380] text-white font-medium text-lg shadow-md hover:bg-[#D97370] transition-colors inline-flex items-center gap-2 group cursor-pointer"
        >
          <span>เปิดของขวัญเซอร์ไพรส์</span>
          <Heart className="w-4 h-4 fill-white group-hover:animate-ping" />
        </motion.button>
      </motion.div>

      {/* Down indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        onClick={scrollToJourney}
        className="mt-10 cursor-pointer text-[#A18683] hover:text-[#5E4745] transition-colors flex flex-col items-center gap-1"
      >
        <span className="text-sm tracking-wider font-semibold">เลื่อนลงเพื่อดูต่อ</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
