import type { SVGProps } from 'react';

type ServiceIconProps = {
  variant: 'consulting' | 'acquisition' | 'genai' | 'analytics' | 'training' | 'strategic';
  className?: string;
};

const iconPaths = {
  consulting: (
    <>
      <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.6.11.82-.26.82-.57v-2.1c-2.78.6-3.37-1.34-3.37-1.34-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3 1.23-1.6-2.67-.3-5.46-1.34-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .31.22.69.83.57A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z" />
    </>
  ),
  acquisition: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  genai: (
    <>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </>
  ),
  analytics: (
    <>
      <path d="M3 3v18h18" />
      <path d="M18.7 8a5 5 0 0 1-6.6 0l-3.1 3.1a5 5 0 0 1-6.6 0" />
      <path d="M12.1 18.4a5 5 0 0 1-6.6 0" />
      <path d="M18.7 14.9a5 5 0 0 1-6.6 0" />
    </>
  ),
  training: (
    <>
      <path d="M22 10v6M2 10v6" />
      <path d="M12 2v20" />
      <path d="M4 10h16" />
      <path d="M4 18h16" />
    </>
  ),
  strategic: (
    <>
      <path d="m12 3-1.9 5.8-5.9 1.9 5.9 1.9L12 21l1.9-5.8 5.9-1.9-5.9-1.9L12 3z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </>
  ),
};

// A fallback icon for safety
const FallbackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);


export const ServiceIcon = ({ variant, className }: ServiceIconProps) => {
  const iconPath = iconPaths[variant] || <path />;
  const IconComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      {iconPath}
    </svg>
  );

  return <IconComponent className={className} />;
};
