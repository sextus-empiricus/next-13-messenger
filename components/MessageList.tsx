'use client';

import React, { useEffect } from 'react';
import useSWR from 'swr';

import { clientPusher } from '../pusher';
import { Message } from '../types';
import { fetchMessages } from '../utils/fetchMessages';

import MessageComponent from './MessageComponent';

interface Props {
  initialMessages: Message[];
}

const MessageList = ({ initialMessages }: Props) => {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>('/api/get-messages', fetchMessages);

  useEffect(() => {
    const channel = clientPusher.subscribe('messages');

    channel.bind('new-message', async (data: Message) => {
      if (messages?.find((message) => message.id === data.id)) return;

      if (!messages) {
        await mutate(fetchMessages);
      } else {
        await mutate(fetchMessages, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate]);

  return (
    <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {(messages || initialMessages).map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
