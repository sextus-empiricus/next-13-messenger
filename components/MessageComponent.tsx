// >>> client component <<< (child of <MessageList/> which is a client component);
import React from 'react';
import TimeAgo from 'react-timeago';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { Message } from '../types';

interface Props {
  message: Message;
  session?: any;
}

const MessageComponent = ({ message }: Props) => {
  const { data: session } = useSession();
  const isUser = session?.user?.email === message.email;

  return (
    <div className={`flex w-fit ${isUser && 'ml-auto'}`}>
      <div className={`flex-shrink-0 ${isUser && 'order-2'}`}>
        <Image
          className="rounded-full mx-2"
          height={10}
          width={50}
          src={message.profilePicture}
          alt="Profile Picture"
        />
      </div>

      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] ${
            isUser ? 'text-blue-400 text-right' : 'text-red-400 text-left'
          }`}
        >
          {message.username}
        </p>

        <div className="flex items-end">
          <div
            className={`px-2 py-2 rounded-lg w-fit text-white bg-red-400 ${
              isUser ? 'bg-blue-400 ml-auto order-2' : 'bg-red-400'
            }`}
          >
            <p>{message.message}</p>
          </div>
          <p
            className={`text-gray-300 px-2 text-[0.65rem] italic ${
              isUser && 'text-right'
            }`}
          >
            <TimeAgo date={new Date(message.createdAt)} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
