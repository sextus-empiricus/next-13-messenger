// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import redis from '../../redis';
import { ErrorData, GetMessagesResponse, Message } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetMessagesResponse | ErrorData>,
) {
  if (req.method !== 'GET') {
    res.status(405).json({ name: 'Method Not Allowed' });
    return;
  }

  // get from redis;
  const messagesRes = await redis.hvals('messages');
  const messages: Message[] = messagesRes
    .map((msg) => JSON.parse(msg))
    .sort((a, b) => b.createdAt - a.createdAt);

  res.status(200).json({ messages });
}
