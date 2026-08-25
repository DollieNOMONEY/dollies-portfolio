import localFont from 'next/font/local';


export const anton = localFont({
  src: [
    {
      path: '../fonts/Anton-Regular.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-anton',
});

export const bodoniModa = localFont({
  src: [
    {
      path: '../fonts/BodoniModa_9pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-bodoniModa',
});

export const bellota = localFont({
  src: [
    {
      path: '../fonts/BellotaText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-bellota',
});