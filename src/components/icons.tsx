import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 17c-2.29 0-4.43.9-6 2.36" />
    <path d="M12 12c-3.03 0-5.5 2.47-5.5 5.5 0 .22.02.44.05.65" />
    <path d="M12 12c3.03 0 5.5-2.47 5.5-5.5S15.03 1 12 1c-1.76 0-3.35.83-4.39 2.11" />
  </svg>
);
