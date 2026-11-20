"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthdayData";

export default function ReasonsSection() {
  const { reasonsToLove } = BIRTHDAY_DATA;

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto relative" id="reasons">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#F3F0FA] text-[#8467A6] font-medium text-xs tracking-wider uppercase mb-2 border border-[#E4DDF0]">
          ตอนที่ 03
        </span>
        <h2 className="text-3xl md:text-5xl font-serif-title text-[#4A3837] mb-3">
          สิ่งเล็กๆ ที่หนูรักในตัวแม่
        </h2>
        <p className="text-base text-[#856C69] text-lg">
          แผ่นโน้ตข้อความบอกรักและความประทับใจ
        </p>
      </div>

      {/* Sticky Note Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {reasonsToLove.map((reason, index) => (
          <motion.div
            key={reason.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 0, y: -6 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            style={{
              backgroundColor: reason.color,
              transform: `rotate(${reason.rotation}deg)`
            }}
            className="relative p-6 rounded-2xl scrapbook-card border border-[#EFE4DA] transition-shadow duration-300 hover:shadow-xl flex flex-col justify-between min-h-[200px]"
          >
            {/* Washi Tape Pin */}
            <div className="absolute -top-3 left-6 w-12 h-4 tape rounded -rotate-6 border-t border-b border-[#D8C7B8]/50" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl select-none">{reason.sticker}</span>
                <span className="text-[11px] font-semibold tracking-wider text-[#987F7C] bg-white/60 px-2 py-0.5 rounded-full">
                  โน้ตที่ #{index + 1}
                </span>
              </div>

              <h3 className="font-serif-title text-lg font-bold text-[#483735] mb-2 leading-snug">
                {reason.title}
              </h3>

              <p className="text-sm text-[#66504E] leading-relaxed">
                {reason.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#D9C8BE]/40 flex items-center justify-end">
              <Heart className="w-3.5 h-3.5 text-[#DE7A78] fill-[#DE7A78]/30" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
