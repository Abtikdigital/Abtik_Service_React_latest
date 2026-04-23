"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { sendChatMessages, type ChatMessage } from "../api/chatApi";

type ChatbotStatus = "idle" | "loading" | "error";

const initialAssistantMessage: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm your Abtik Startup Advisor pvt ltd assistant. Ask me anything about our services, funding options, or registration and compliance.",
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    initialAssistantMessage,
  ]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<ChatbotStatus>("idle");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed || status === "loading") return;

    const userMessage: ChatMessage = {
      role: "user",
      content: trimmed,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setStatus("loading");

    try {
      const { reply } = await sendChatMessages(updatedMessages);

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: reply || "Sorry, I could not generate a response.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setStatus("idle");
    } catch (error) {
      console.error("Chatbot error:", error);
      setStatus("error");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I ran into a technical issue. Please try again in a moment.",
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={handleToggle}
        className="fixed bottom-4 right-4 z-2147483600 flex items-center gap-2 rounded-full bg-[#052EAA] text-white px-4 py-3 shadow-xl hover:bg-[#031f73] transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-medium">
          Chat with us
        </span>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-2147483600 w-[320px] sm:w-[380px] h-[420px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-linear-to-r from-[#052EAA] to-[#3CA2E2] text-white">
            <div>
              <div className="text-sm font-semibold">Abtik Assistant</div>
              <div className="text-[11px] opacity-80">
                Ask about services, funding, or registration
              </div>
            </div>
            <button
              type="button"
              onClick={handleToggle}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 px-3 py-2 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed ${
                    message.role === "user"
                      ? "bg-[#052EAA] text-white rounded-br-sm"
                      : "bg-white text-gray-800 rounded-bl-sm border border-gray-200"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {status === "loading" && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-3 py-2 text-[12px] text-gray-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-200" />
                  <span className="ml-2">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 bg-white px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 text-sm px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!input.trim() || status === "loading"}
                className="p-2 rounded-full bg-[#052EAA] text-white hover:bg-[#031f73] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            {status === "error" && (
              <p className="mt-1 text-[11px] text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;

