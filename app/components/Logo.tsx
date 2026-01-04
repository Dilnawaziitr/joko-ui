import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center group text-xl font-bold ${className}`}>
      <span className='text-foreground font-medium'>Joko</span>
      <span className="text-primary font-bold">UI</span>
    </Link>
  );
}
