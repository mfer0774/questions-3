import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

const NEXT_PUBLIC_URL = 'https://questions-3.vercel.app/';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  let text: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  if (body?.untrustedData?.inputText) {
    text = body.untrustedData.inputText;
  }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `submit`,
        },
      ],
      image: `${NEXT_PUBLIC_URL}/five.jpeg`,
      post_url: `${NEXT_PUBLIC_URL}/api/frame`,
      input: {
        text: 'answer carefully'
      }
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';