"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { BIRTHDAY_DATA } from "@/data/birthdayData";

export default function WishesSection() {
  const { wishes, momName } = BIRTHDAY_DATA;
  const [blownCandles, setBlownCandles] = useState<{ [key: number]: boolean }>({});

  const allCandlesBlown = [0, 1, 2].every((idx) => blownCandles[idx]);

  const handleBlowCandle = (idx: number) => {
    if (blownCandles[idx]) return;

    const nextState = { ...blownCandles, [idx]: true };
    setBlownCandles(nextState);

    if ([0, 1, 2].every((i) => nextState[i])) {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 },
        colors: ["#FFD1DC", "#FFE4E1", "#D8B4F8", "#FFF275", "#FF6B8B"]
      });
    }
  };

  const handleBlowAll = () => {
    setBlownCandles({ 0: true, 1: true, 2: true });
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
      colors: ["#FFD1DC", "#FFE4E1", "#D8B4F8", "#FFF275", "#FF6B8B"]
    });
  };

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto text-center relative" id="wishes">
      <div className="mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#EBF7EE] text-[#558D60] font-medium text-sm tracking-wider mb-2 border border-[#D5EBDB]">
          🎂 ร่วมอธิษฐาน
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#4A3837] mb-3">
          อธิษฐานวันเกิด
        </h2>
        <p className="text-xl text-[#856C69]">
          {wishes.prompt}
        </p>
      </div>

      {/* Birthday Cake Interactive Illustration */}
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="relative w-64 h-56 flex flex-col items-center justify-end select-none">
          {/* Candles */}
          <div className="flex justify-center gap-7 mb-2 relative z-10">
            {[0, 1, 2].map((idx) => {
              const isBlown = blownCandles[idx];
              return (
                <div
                  key={idx}
                  onClick={() => handleBlowCandle(idx)}
                  className="cursor-pointer flex flex-col items-center group"
                  title="แตะเพื่อเป่าดับเทียน"
                >
                  {/* Candle Flame */}
                  <div className="h-6 flex items-center justify-center">
                    {!isBlown ? (
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 0.95, 1],
                          rotate: [-3, 3, -2, 3]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "easeInOut"
                        }}
                        className="w-4 h-6 rounded-full bg-gradient-to-t from-[#FFA726] via-[#FFD54F] to-[#FFF9C4] shadow-[0_0_12px_#FFA726] border border-amber-200"
                      />
                    ) : (
                      <motion.span
                        initial={{ opacity: 0, y: -2 }}
                        animate={{ opacity: 1, y: -10 }}
                        className="text-base text-[#9E908D]"
                      >
                        💨
                      </motion.span>
                    )}
                  </div>

                  {/* Candle Body */}
                  <div
                    className={`w-3.5 h-12 rounded-t-sm shadow-xs transition-colors ${
                      idx === 1
                        ? "bg-[#F7C6D2] border-r-2 border-[#E9A9B9]"
                        : idx === 0
                        ? "bg-[#D2E4F6] border-r-2 border-[#ABC6E2]"
                        : "bg-[#F9E6B3] border-r-2 border-[#E4CE93]"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Cake Top Tier */}
          <div className="w-48 h-16 bg-[#FFF2E2] rounded-t-2xl border-2 border-b-0 border-[#E5D4C3] relative flex items-center justify-center shadow-inner">
            <div className="absolute -bottom-2 inset-x-0 h-4 bg-[#FFE4E1] rounded-b-xl border-b border-[#EABBB6]" />
            <span className="text-xl">🍓 🫐 🍓</span>
          </div>

          {/* Cake Bottom Tier */}
          <div className="w-60 h-20 bg-[#FFF7EE] rounded-t-lg border-2 border-[#E5D4C3] relative flex items-center justify-center shadow-sm">
            <span className="text-xl font-bold text-[#8E7572]">
              สุขสันต์วันเกิด {momName}! ♡
            </span>
          </div>

          {/* Cake Plate */}
          <div className="w-72 h-4 bg-[#EBDDD2] rounded-full border border-[#DAC4B4] shadow-md" />
        </div>

        {/* Quick button to blow all candles */}
        {!allCandlesBlown ? (
          <button
            onClick={handleBlowAll}
            className="mt-6 text-base font-medium text-[#8F6A67] hover:text-[#5F4846] py-2 px-6 rounded-full border border-dashed border-[#DDCBC0] hover:bg-[#FAF0E6] transition-all cursor-pointer shadow-xs"
          >
            💨 แตะเพื่อเป่าเทียนทั้งหมดพร้อมกัน
          </button>
        ) : (
          <span className="mt-4 text-base text-[#528A59] font-medium flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> เทียนดับหมดแล้ว!
          </span>
        )}
      </div>

      {/* Heartfelt Wish Card */}
      <AnimatePresence>
        {allCandlesBlown && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#FFFDF9] border border-[#E9DDD1] rounded-3xl p-8 sm:p-12 scrapbook-card relative max-w-2xl mx-auto"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6 tape rounded -rotate-1 border-dashed border-t border-b border-[#D5BEAC]" />

            <div className="text-center space-y-4">
              <span className="text-4xl inline-block">✨ 🌸 ✨</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4B3634]">
                {wishes.wishTitle}
              </h3>
              <p className="text-lg sm:text-xl text-[#624D4B] leading-relaxed max-w-lg mx-auto">
                {wishes.wishMessage}
              </p>
              <div className="pt-4 border-t border-dashed border-[#E3D1C5]">
                <p className="text-2xl sm:text-3xl font-bold text-[#C8605E]">
                  {wishes.closingBlessing}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
