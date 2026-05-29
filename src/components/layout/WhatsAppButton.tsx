'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '2347067604582';
  const defaultMessage = encodeURIComponent(
    'Hello HHAI! I would like to learn more about your humanitarian programs in Northeast Nigeria.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden animate-slide-up">
          <div className="bg-[#075E54] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden relative flex-shrink-0">
                  <Image src="/images/hhai-logo.png" alt="HHAI" fill className="object-contain p-0.5" sizes="40px" />
                </div>
                <div>
                  <div className="font-semibold text-sm">HHAI Support</div>
                  <div className="text-xs text-green-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                    Usually replies in minutes
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>
          </div>
          <div className="p-4 bg-[#ECE5DD]">
            <div className="bg-white rounded-xl p-3 shadow-sm max-w-[85%]">
              <p className="text-sm text-gray-700">
                👋 Hello! Welcome to <strong>Haske Humanitarian Aid Initiative</strong>.
                How can we help you today?
              </p>
              <span className="text-[10px] text-gray-400 mt-1 block text-right">HHAI</span>
            </div>
          </div>
          <div className="p-4 bg-white">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
            >
              <MessageCircle size={18} />
              Start a Conversation
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative hover:-translate-y-1"
        aria-label="Chat on WhatsApp"
      >
        {!isOpen ? (
          <>
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.73 5.476 2.008 7.784L0 32l8.43-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 01-6.782-1.862l-.485-.288-5.007 1.193 1.216-4.876-.317-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.28-9.93c-.4-.2-2.356-1.163-2.72-1.296-.365-.133-.63-.2-.895.2-.267.4-1.03 1.296-1.263 1.563-.232.267-.465.3-.864.1-.4-.2-1.687-.622-3.213-1.982-1.188-1.06-1.99-2.37-2.223-2.77-.232-.4-.025-.616.175-.815.18-.178.4-.465.6-.698.2-.232.267-.4.4-.664.133-.267.067-.5-.033-.698-.1-.2-.895-2.16-1.228-2.96-.323-.777-.65-.672-.895-.685l-.762-.013c-.267 0-.697.1-1.063.5-.365.4-1.395 1.362-1.395 3.322s1.428 3.855 1.628 4.122c.2.267 2.81 4.287 6.807 6.013.951.41 1.693.655 2.272.839.954.304 1.823.261 2.51.158.765-.114 2.356-.963 2.688-1.895.333-.932.333-1.73.233-1.895-.1-.167-.367-.267-.764-.465z"/>
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">1</span>
          </>
        ) : (
          <X size={22} />
        )}
      </button>
    </div>
  );
}
