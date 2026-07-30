import Image from 'next/image';

interface Props {
  size?: number;
  /** Retained for backward compatibility with earlier SVG mark; unused. */
  idSuffix?: string;
  className?: string;
}

/** Official HHAI badge — green hands cradling a tree of purple hearts. */
export default function Logo({ size = 44, className }: Props) {
  return (
    <Image
      src="/images/hhai-badge.png"
      alt="Haske Humanitarian Aid Initiative logo"
      width={size}
      height={size}
      priority
      className={className}
      style={{ display: 'block', width: size, height: size, objectFit: 'contain' }}
    />
  );
}
