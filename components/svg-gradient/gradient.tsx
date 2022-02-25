import { ReactNode } from 'react';

interface GradientProps {
  size?: number,
  rotation?: string,
  startColor?: string,
  endColor?: string,
  children: ReactNode,
}

function Gradient({
  size = 24,
  rotation = 'rotate(115.16)',
  startColor = 'rgb(73, 102, 242)',
  endColor = 'rgb(151, 46, 234)',
  children,
}: GradientProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <linearGradient id="gradient" gradientTransform={rotation}>
          <stop offset="0%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

export default Gradient;
