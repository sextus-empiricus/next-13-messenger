'use client';

import React, { FormEvent, useState } from 'react';
import { nanoid } from 'nanoid';
import useSWR from 'swr';

import { images } from '../constants';
import { Message } from '../types';
import { fetchMessages } from '../utils/fetchMessages';

import Button from './ui/Button';

const disabledStyle = 'disabled:opacity-50 disabled:cursor-not-allowed';

const ChatInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>('/api/get-messages', fetchMessages);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue('');

    if (!inputValue) return;

    const message: Message = {
      id: nanoid(),
      message: inputValue,
      createdAt: Date.now(),
      userName: 'Elon Musk',
      profilePicture: images.dummyAvatar,
      email: 'test@test.test',
    };

    const updateMessageToUpstash = async () => {
      const res = await fetch('api/add-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();

      return [data.message, ...messages!];
    };

    await mutate(updateMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 w-full flex py-5 px-10 space-x-2 border-t border-gray-100 bg-white"
    >
      <input
        type="text"
        placeholder="Enter your message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`flex-1 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 ${disabledStyle}`}
      />

      <Button disabled={!inputValue} className={disabledStyle}>
        send
      </Button>
    </form>
  );
};

export default ChatInput;
