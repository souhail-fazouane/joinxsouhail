import { DrawerOpenAtom } from "@/components/Drawer/store";
import { useAtomValue } from "jotai";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CONNECTION_URL,
  EVENT_NAME,
  listEmoji,
  SEND_EVENT_NAME,
  SOCKET_PATH,
} from "./constants";
import io, { Socket } from "socket.io-client";
import { Message } from "./types";

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

export const useSocket = () => {
  const socket = useRef<Socket | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const [listMessage, setListMessage] = useState<Message[]>([]);

  const [stopScroll, setStopScroll] = useState(false);

  const drawerOpen = useAtomValue(DrawerOpenAtom("chat"));

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStopScroll(false);
          } else {
            setStopScroll(true);
          }
        },
        {
          threshold: 0.9,
        }
      ),
    []
  );

  const lastMessageElement = useRef<Element | null | undefined>(null);

  const unobserve = useCallback(() => {
    if (lastMessageElement.current && observer) {
      observer.unobserve(lastMessageElement.current);
    }
  }, [observer]);

  const [newMessage, setNewMessage] = useState("");

  const handleChangeMessage = (message: string) => {
    setNewMessage(message);
  };

  const sendMessage = (message: string) => {
    if (socket.current && newMessage !== "") {
      const template = {
        text: message,
        user: { username: "Souhail", color: "#9F2B68" },
      };
      socket.current.emit(SEND_EVENT_NAME, template);
      setNewMessage("");
    }
  };

  const scrollToLast = () => {
    lastMessageElement.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  useEffect(() => {
    if (typeof document !== undefined) {
      unobserve();

      lastMessageElement.current = container.current?.lastElementChild;

      if (lastMessageElement.current) {
        if (!stopScroll) {
          lastMessageElement.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        }
        setTimeout(() => {
          if (lastMessageElement.current) {
            observer.observe(lastMessageElement.current);
          }
        }, 1000);
      }
    }
  }, [lastMessageElement, listMessage, observer, unobserve]);

  useEffect(() => {
    if (!drawerOpen) {
      socket.current?.close();
    } else {
      socket.current = connectSocket();
      socket.current.on(EVENT_NAME, (args) => {
        setListMessage((p) => [
          ...p,
          {
            ...args,
            user: {
              username: `${
                listEmoji[Math.floor(Math.random() * listEmoji.length)]
              }${args.user.username}`,
              color: args.user.color,
            },
          },
        ]);
      });
    }
    return () => {
      socket.current?.close();
    };
  }, [drawerOpen]);

  return {
    socket,
    container,
    listMessage,
    stopScroll,
    scrollToLast,
    sendMessage,
    handleChangeMessage,
    message: newMessage,
  };
};
