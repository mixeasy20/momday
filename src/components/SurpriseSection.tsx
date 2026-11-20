"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Sparkles, Check, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { BIRTHDAY_DATA } from "@/data/birthdayData";

export default function SurpriseSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [redeemed, setRedeemed] = useState<{ [key: number]: boolean }>({});
  const { surprise } = BIRTHDAY_DATA;

  const handleOpenBox = () => {
    if (!isOpen) {
      setIsOpen(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F9C5D1", "#FEE180", "#C8E7F5", "#D8B4F8", "#FFABAB"]
      });
    }
  };

  const handleRedeem = (idx: number) => {
    setRedeemed((prev) => ({ ...prev, [idx]: true }));
    confetti({
      particleCount: 30,
      spread: 45,
      origin: { y: 0.7 },
      colors: ["#FF8DA1", "#FFDEB4"]
    });
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center relative" id="surprise">
      <div className="mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF9E6] text-[#A67E2E] font-medium text-xs tracking-wider uppercase mb-2 border border-[#F4E3BA]">
          ตอนที่ 04
        </span>
        <h2 className="text-3xl md:text-5xl font-serif-title text-[#4A3837] mb-3">
          ของขวัญเซอร์ไพรส์วันเกิด
        </h2>
        <p className="text-base text-[#856C69] text-lg">
          แตะที่กล่องของขวัญเพื่อเปิดดูของขวัญสุดพิเศษ
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        {!isOpen ? (
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenBox}
            className="cursor-pointer relative p-8 bg-[#FFF8F0] border-2 border-dashed border-[#E4C8B5] rounded-3xl scrapbook-card max-w-sm w-full flex flex-col items-center group"
          >
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#FFD3DA] to-[#FFB7B2] flex items-center justify-center shadow-md relative group-hover:shadow-lg transition-shadow">
              <Gift className="w-16 h-16 text-white stroke-[1.5]" />
              <div className="absolute -top-3 w-10 h-6 bg-[#E87A82] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                🎀
              </div>
            </div>

            <div className="mt-6">
              <p className="font-serif-title text-xl font-bold text-[#553E3C]">
                {surprise.boxLabel}
              </p>
              <p className="text-xs text-[#9E8380] mt-1 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#E87A82]" />
                คลิกเพื่อแกะกล่องของขวัญ!
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full bg-[#FFFDF9] border border-[#E9DCD1] rounded-3xl p-6 sm:p-10 scrapbook-card relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 tape rounded border-dashed border-t border-b border-[#D5BEAC]" />

            <div className="text-center mb-8">
              <span className="text-4xl inline-block mb-2">🎁</span>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#4F3937]">
                {surprise.greeting}
              </h3>
              <p className="text-base text-[#7C6360] mt-2 max-w-lg mx-auto">
                {surprise.message}
              </p>
              <p className="text-sm text-[#A88C88] font-medium mt-1">
                {surprise.subtext}
              </p>
            </div>

            {/* Coupons List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {surprise.coupons.map((coupon, idx) => {
                const isRedeemed = redeemed[idx];
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl border border-dashed transition-all relative overflow-hidden flex flex-col justify-between ${
                      isRedeemed
                        ? "bg-[#F3EFEA] border-[#D9CBC0] opacity-80"
                        : "bg-[#FFF9F5] border-[#F0CEBD] hover:shadow-md"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-2xl">{coupon.icon}</span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white text-[#987570] border border-[#EBD6CA]">
                          คูปองคนพิเศษ
                        </span>
                      </div>
                      <h4 className="font-serif-title font-bold text-[#4F3B39] text-base">
                        {coupon.title}
                      </h4>
                      <p className="text-xs text-[#7A6461] mt-1">
                        {coupon.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-dashed border-[#ECDCD0] flex justify-end">
                      <button
                        onClick={() => handleRedeem(idx)}
                        disabled={isRedeemed}
                        className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors flex items-center gap-1 ${
                          isRedeemed
                            ? "bg-[#D8CEC6] text-[#695754] cursor-default"
                            : "bg-[#E68886] text-white hover:bg-[#D97674] shadow-xs active:scale-95"
                        }`}
                      >
                        {isRedeemed ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> ใช้สิทธิ์แล้วด้วยรัก
                          </>
                        ) : (
                          <>
                            <Heart className="w-3.5 h-3.5 fill-current" /> แตะเพื่อใช้คูปองนี้
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
