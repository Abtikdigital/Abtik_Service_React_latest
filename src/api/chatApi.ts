import axios from "axios";

const back_end_url = import.meta.env.VITE_BACK_END_URL;

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatResponse = {
  reply: string;
};

export const sendChatMessages = async (
  messages: ChatMessage[],
): Promise<ChatResponse> => {
  const response = await axios.post<ChatResponse>(`${back_end_url}/chat`, {
    messages,
  });

  return response.data;
};

