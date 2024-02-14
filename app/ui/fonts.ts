import localFont from 'next/font/local';

export const spaceGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/static/SpaceGrotesk-Medium.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/static/SpaceGrotesk-Bold.ttf",
      weight: "700",
    }
  ],
  display: 'swap'
});
