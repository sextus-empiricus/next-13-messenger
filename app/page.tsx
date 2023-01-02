import React from 'react';

import { unstable_getServerSession } from 'next-auth';

import ChatInput from '../components/ChatInput';
import MessageList from '../components/MessageList';
import { EnvKeys } from '../types/envKeys.enum';

import { Providers } from './providers';

const HomePage = async () => {
  const session = await unstable_getServerSession();
  const { messages } = await fetch(
    `${
      process.env[EnvKeys.VERCEL_URL] || 'http://localhost:3000'
    }/api/get-messages`,
  ).then((res) => res.json());

  return (
    <main>
      <Providers session={session}>
        <MessageList initialMessages={messages} />
        <ChatInput session={session} />
      </Providers>
    </main>
  );
};

export default HomePage;
