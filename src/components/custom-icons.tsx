import React from 'react';

export const BlueGradientIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#blueGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="url(#blueGradient)"/>
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
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#bwGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="url(#bwGradient)" />
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
      <path d="M7 12l5-5 5 5-5 5-5-5z" fill="white" fillOpacity="0.5"/>
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
    </svg>
);

export const MulticoloredIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#F87171"/>
        <path d="M2 17l10 5 10-5-10-5-10 5z" fill="#60A5FA"/>
        <path d="M2 12l10-5 10 5-10 5-10-5z" fill="#34D399"/>
    </svg>
);
