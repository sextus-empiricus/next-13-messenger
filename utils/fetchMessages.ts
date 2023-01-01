import { Message } from '../types';

export const fetchMessages = async (): Promise<Message[]> => {
  const res = await fetch('/api/get-messages');
  const data = await res.json();
  return data.messages;
};
