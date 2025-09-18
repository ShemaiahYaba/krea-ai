import React from 'react';

export const BlueGradientIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#blueGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const BlackToWhiteGradientIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="bwGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="black" />
            <stop offset="100%" stopColor="white" />
            </linearGradient>
        </defs>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#bwGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DarkPurpleGradientIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B21B6" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="4" fill="url(#purpleGradient)" />
      <path d="M7 12l5-5 5 5-5 5-5-5z" stroke="white" strokeOpacity="0.8" strokeWidth="1.5"/>
    </svg>
  );

export const BlackTealGradientIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="blackTealGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#blackTealGradient)" />
      <path d="M8 12h8M12 8v8" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" />
    </svg>
);

export const MulticoloredIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#F87171"/>
        <path d="M2 17l10 5 10-5-10-5-10 5z" fill="#60A5FA"/>
        <path d="M2 12l10-5 10 5-10 5-10-5z" fill="#34D399"/>
    </svg>
);

export const DraftingCompassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3L5 21" />
            <path d="M12 3L19 21" />
            <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
            <path d="M5 21a2 2 0 100-4 2 2 0 000 4z" />
            <path d="M19 21a2 2 0 100-4 2 2 0 000 4z" />
        </g>
    </svg>
);
