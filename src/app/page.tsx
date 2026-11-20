"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import LetterSection from "@/components/LetterSection";
import WishesSection from "@/components/WishesSection";
import MusicPlayer from "@/components/MusicPlayer";
import { Heart } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthdayData";

export default function Home() {
  return (
    <main className="min-h-screen paper-texture relative selection:bg-[#FAD9D5] selection:text-[#5B3936]">
      {/* Background Floating Music Widget */}
      <MusicPlayer />

      {/* Main Hero Screen */}
      <HeroSection />

      {/* Section 1: จดหมายถึงคุณแม่ */}
      <LetterSection />

      {/* Section 5: อธิษฐานเป่าเทียนเค้กวันเกิดและคำอวยพร */}
      <WishesSection />

      {/* Cozy Scrapbook Footer */}
      <footer className="py-12 text-center text-base text-[#937C79] border-t border-[#E8DCD1] bg-[#FAF5EE]/70 backdrop-blur-xs">
        <p className="flex items-center justify-center gap-1.5 text-2xl font-bold text-[#6D5553]">
          สร้างขึ้นด้วยความรักทั้งหมดที่มีเพื่อ {BIRTHDAY_DATA.momName}
          <Heart className="w-5 h-5 text-[#D8706E] fill-[#D8706E]" />
        </p>
        <p className="text-sm text-[#A89491] mt-2">
          ของขวัญวันเกิดดิจิทัลชิ้นพิเศษ &bull; อยู่ในใจเสมอตลอดไป
        </p>
      </footer>
    </main>
  );
}
