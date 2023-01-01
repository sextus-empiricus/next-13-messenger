import React from 'react';

import ChatInput from '../components/ChatInput';
import MessageList from '../components/MessageList';
import { EnvKeys } from '../utils/envKeys.enum';

const HomePage = async () => {
  const { messages } = await fetch(
    `${
      process.env[EnvKeys.VERCEL_URL] || 'http://localhost:3000'
    }/api/get-messages`,
  ).then((res) => res.json());

  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  );
};

export default HomePage;
