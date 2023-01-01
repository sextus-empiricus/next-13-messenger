// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { serverPusher } from '../../pusher';
import redis from '../../redis';
import { AddMessageResponse, ErrorData } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AddMessageResponse | ErrorData>,
) {
  if (req.method !== 'POST') {
    res.status(405).json({ name: 'Method Not Allowed' });
    return;
  }

  const newMessage = {
    ...req.body.message,
    createdAt: Date.now(),
  };

  await redis.hset('messages', newMessage.id, JSON.stringify(newMessage));
  await serverPusher.trigger('messages', 'new-message', newMessage);

  res.status(200).json({ message: newMessage });
}
