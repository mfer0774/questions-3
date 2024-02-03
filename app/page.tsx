import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const NEXT_PUBLIC_URL = 'https://frame-test-sepia.vercel.app/';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'generate',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/mfer-1.png`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`
});

export const metadata: Metadata = {
  title: 'mfers',
  description: 'always has been',
  openGraph: {
    title: 'mfers',
    description: 'always has been',
    images: [`${NEXT_PUBLIC_URL}/mfer-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>gm mfer</h1>
    </>
  );
}