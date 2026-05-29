import Link from 'next/link';
import Image from 'next/image';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-24 h-24 relative mx-auto mb-6">
          <Image src="/images/hhai-logo.png" alt="HHAI Logo" fill className="object-contain drop-shadow-md" sizes="96px" />
        </div>
        <h1 className="text-6xl font-black text-brand-blue font-serif mb-4">404</h1>
        <h2 className="text-2xl font-bold text-brand-dark font-serif mb-3">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} /> Return Home
          </Link>
          <Link href="/contact" className="btn-outline-blue">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
