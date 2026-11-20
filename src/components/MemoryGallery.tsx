"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { BIRTHDAY_DATA, MemoryPhoto } from "@/data/birthdayData";

export default function MemoryGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);
  const { memories } = BIRTHDAY_DATA;

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative" id="memories">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF0E6] text-[#C9704F] font-medium text-xs tracking-wider uppercase mb-2 border border-[#F8DCCB]">
          ตอนที่ 02
        </span>
        <h2 className="text-3xl md:text-5xl font-serif-title text-[#4A3837] mb-3">
          ความทรงจำอันแสนอบอุ่นของเรา
        </h2>
        <p className="text-base text-[#856C69] text-lg">
          รวมภาพถ่ายและช่วงเวลาที่มีค่าในสมุดบันทึกเล่มนี้
        </p>
      </div>

      {/* Polaroid Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {memories.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
            transition={{ duration: 0.3 }}
            style={{ transform: `rotate(${photo.rotation}deg)` }}
            onClick={() => setSelectedPhoto(photo)}
            className="cursor-pointer group relative bg-white p-4 pb-6 rounded-lg scrapbook-card border border-[#E9DFD5] transition-all"
          >
            {/* Washi Tape Strip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 tape rounded -rotate-1 border-t border-b border-[#D8C7B8]/60 z-10" />

            {/* Photo Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-[#F2EDE8]">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-2 right-2 text-xs font-medium px-2 py-0.5 rounded-full bg-white/90 text-[#6B5553] shadow-sm">
                {photo.tag}
              </span>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-lg font-medium text-[#4F3C3A] leading-snug">
                {photo.caption}
              </p>
              {photo.date && (
                <p className="text-xs text-[#9B8582] mt-1 flex items-center justify-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {photo.date}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Modal for Polaroid Details */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-[#282120]/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 scrapbook-card border border-[#E4D5C8]"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F4EBE2] text-[#6C5553] flex items-center justify-center hover:bg-[#EBDDCF] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F0EBE5] mb-5 border border-[#ECE0D5]">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FCECE8] text-[#C86D6B] text-xs font-semibold">
                  {selectedPhoto.tag}
                </span>
                <h3 className="text-xl font-bold text-[#4A3837]">
                  {selectedPhoto.caption}
                </h3>
                {selectedPhoto.note && (
                  <p className="text-sm text-[#745E5B] italic pt-1">
                    "{selectedPhoto.note}"
                  </p>
                )}
                {selectedPhoto.date && (
                  <p className="text-xs text-[#9E8B88] pt-2">
                    วันที่/ช่วงเวลา: {selectedPhoto.date}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
