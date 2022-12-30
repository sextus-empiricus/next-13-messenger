// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import redis from '../../redis';
import { Data, ErrorData } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>,
) {
  if (req.method !== 'POST') {
    res.status(405).json({ name: 'Method Not Allowed' });
    return;
  }

  const newMessage = {
    ...req.body.message,
    createdAt: Date.now(),
  };

  // push to redis;
  await redis.hset('messages', newMessage.id, JSON.stringify(newMessage));

  res.status(200).json({ message: newMessage });
}
