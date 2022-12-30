import React from 'react';

import ChatInput from '../components/ChatInput';
import MessageList from '../components/MessageList';

const HomePage = () => {
  return (
    <main>
      <h1>Welcome on the Home Page🫡!</h1>
      <MessageList />
      <ChatInput />
    </main>
  );
};

export default HomePage;
