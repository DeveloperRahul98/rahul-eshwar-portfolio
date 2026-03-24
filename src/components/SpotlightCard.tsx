import { ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
