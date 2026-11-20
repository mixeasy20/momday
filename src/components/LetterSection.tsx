"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Feather } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthdayData";

export default function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { letter } = BIRTHDAY_DATA;

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto relative" id="letter">
      {/* Decorative Scrapbook Elements */}
      <div className="absolute top-10 left-6 select-none opacity-40 pointer-events-none text-2xl rotate-12">
        🌸
      </div>
      <div className="absolute top-16 right-8 select-none opacity-50 pointer-events-none text-2xl -rotate-12">
        ✨
      </div>

      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#FCECE8] text-[#C86D6B] font-medium text-sm tracking-wider mb-2 border border-[#F3D7D3]">
          💌 ข้อความพิเศษ
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#4A3837] mb-3">
          Your letter
        </h2>
      </div>

      {/* Interactive Envelope & Letter Container */}
      <div className="flex flex-col items-center justify-center">
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer relative w-full max-w-md bg-[#FFF7EE] border-2 border-[#E7D1C1] rounded-2xl p-8 scrapbook-card transition-all duration-300 flex flex-col items-center group"
          >
            {/* Washi Tape at Top */}
            <div className="absolute -top-3 w-28 h-6 tape rounded -rotate-2 border-dashed border-t border-b border-[#D5BEAC]" />

            {/* Envelope Illustration */}
            <div className="w-full h-44 bg-[#F7EBE1] rounded-xl border border-[#DFCCC0] relative overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 border-t-2 border-[#D8C2B3] [clip-path:polygon(0_0,50%_50%,100%_0)] bg-[#FAEEE4]" />
              
              {/* Wax Seal / Heart Sticker */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="relative z-10 w-14 h-14 rounded-full bg-[#E17A78] flex items-center justify-center shadow-md border-2 border-[#C8605E]"
              >
                <Heart className="w-7 h-7 text-white fill-white animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-[#FFFDF9] border border-[#E8DACD] rounded-3xl p-8 md:p-12 scrapbook-card"
            >
              {/* Washi Tapes at corners */}
              <div className="absolute -top-3 left-8 w-24 h-6 tape rounded -rotate-3 border-dashed border-t border-b border-[#D5BEAC]" />
              <div className="absolute -top-3 right-8 w-24 h-6 tape rounded 3 border-dashed border-t border-b border-[#D5BEAC]" />

              {/* Decorative Stamp */}
              <div className="absolute top-6 right-6 border-2 border-dashed border-[#DEB7B5] px-3 py-1.5 rounded rotate-6 text-sm text-[#C56B69] flex items-center gap-1 select-none font-medium">
                <Heart className="w-3.5 h-3.5 fill-current" /> ส่งตรงจากหัวใจ
              </div>

              {/* Letter Header */}
              <div className="flex items-center gap-2 mb-6 text-[#9A7D7A]">
                <Feather className="w-4 h-4 text-[#C56B69]" />
                <span className="text-sm font-semibold">จดหมายเขียนด้วยมือ</span>
              </div>

              {/* Letter Content: คำขึ้นต้น */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#4A3837] mb-6">
                {letter.salutation}
              </h3>

              {/* ข้อความครึ่งแรก */}
              <div className="space-y-4 text-lg md:text-xl text-[#584442] leading-relaxed">
                {letter.paragraphs.slice(0, Math.ceil(letter.paragraphs.length / 2)).map((p, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.15 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* 3 รูปถ่ายวางตรงกลางระหว่างจดหมาย (ไม่มีข้อความแทรกใดๆ ทั้งสิ้น) */}
              <div className="my-10 py-4 flex items-center justify-center gap-3 sm:gap-6 select-none overflow-visible">
                {/* รูปที่ 1 */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                  className="w-24 sm:w-36 bg-white p-2 pb-2 rounded-xl shadow-md border border-[#E9DED2] -rotate-4 transition-all duration-300"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#F5EFE8]">
                    <img
                      src="/letter_photo1.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* รูปที่ 2 (ตรงกลาง) */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                  className="w-26 sm:w-40 bg-white p-2 pb-2 rounded-xl shadow-lg border border-[#E9DED2] rotate-2 z-1 transition-all duration-300"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#F5EFE8]">
                    <img
                      src="/letter_photo2.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* รูปที่ 3 */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                  className="w-24 sm:w-36 bg-white p-2 pb-2 rounded-xl shadow-md border border-[#E9DED2] rotate-6 transition-all duration-300"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#F5EFE8]">
                    <img
                      src="/letter_photo3.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* ข้อความครึ่งหลัง */}
              <div className="space-y-4 text-lg md:text-xl text-[#584442] leading-relaxed">
                {letter.paragraphs.slice(Math.ceil(letter.paragraphs.length / 2)).map((p, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.15 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-dashed border-[#E3D1C5] flex flex-col items-end">
                <p className="text-lg text-[#7E6562]">
                  {letter.closing}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#C8605E] mt-1">
                  {letter.signOff}
                </p>
              </div>

              {/* Fold back button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-wider font-medium text-[#A08885] hover:text-[#5A4543] py-2 px-5 rounded-full border border-[#E2D2C5] hover:bg-[#F9EFE7] transition-all cursor-pointer"
                >
                  พับเก็บจดหมายไว้ในซอง
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
