'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        'transition-colors text-sm duration-200 text-gray-600 hover:text-violet-500',
        className,
        isActive && 'text-violet-500'
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
