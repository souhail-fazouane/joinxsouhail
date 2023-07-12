import React, { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";
import { MessageElement } from "./MessageElement";

export type Message = {
  type: "text";
  text: string;
  user: { username: string; color: string };
  date: number;
};

const CONNECTION_URL = "wss://api.dev.stories.studio/";
const SOCKET_PATH = "/interview-test";
const SOCKET_TRANSPORTS = ["websocket"];
const EVENT_NAME = "new-message";
const SEND_EVENT_NAME = "send-message";

const connectSocket = () => {
  const socket = io(CONNECTION_URL, {
    path: SOCKET_PATH,
  });
  // onAny subscribes to every events
  socket.onAny((...args) => {
    console.log(...args);
  });

  return socket;
};

export function MessageContainer(): JSX.Element {
  const socket = useRef<Socket | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const [listMessage, setListMessage] = useState<Message[]>([]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = (message: string) => {
    if (socket.current) {
      const template = {
        text: message,
        user: { username: "Souhail", color: "#dadada" },
      };
      socket.current.emit(SEND_EVENT_NAME, template);
    }
  };

  useEffect(() => {
    const lastMessage = listMessage.at(-1);
    if (typeof document !== undefined && lastMessage) {
      const idElement = `${lastMessage.user.username}-${lastMessage.date}`;

      const lastDiv = document.getElementById(idElement);
      container.current?.lastElementChild?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      lastDiv?.scrollIntoView({ behavior: "smooth" });
    }
  }, [listMessage]);

  useEffect(() => {
    socket.current = connectSocket();
    socket.current.on(EVENT_NAME, (args) => {
      setListMessage((p) => [...p, args]);
    });
    return () => {
      socket.current?.close();
    };
  }, []);

  return (
    <div ref={container} className="flex flex-col overflow-auto h-full">
      {listMessage.map((message, index) => (
        <MessageElement key={index} message={message} />
      ))}
    </div>
  );
}
