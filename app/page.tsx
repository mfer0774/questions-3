import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const NEXT_PUBLIC_URL = 'https://questions-3.vercel.app/';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'generate',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/start.jpeg`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`
});

export const metadata: Metadata = {
  title: 'questions-3',
  description: 'answer me these questions three',
  openGraph: {
    title: 'questions-3',
    description: 'answer me these questions three',
    images: [`${NEXT_PUBLIC_URL}/start.jpeg`],
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