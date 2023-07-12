"use client";
import { ChatLayer } from "@/components/Chat/ChatLayer";
import { Drawer } from "@/components/Drawer";
import { OpenDrawer } from "@/components/Drawer/OpenDrawer";
import { Header } from "@/components/Header";
import { VideoElement } from "@/components/VideoElement";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen relative">
      <Header />
      <div
        className="flex w-full  relative"
        style={{ height: "calc(100% - 50px )" }}
      >
        <VideoElement />
        <Drawer drawerTitle="chat">
          <ChatLayer />
        </Drawer>
        <OpenDrawer drawerTitle="chat" />
      </div>
    </div>
  );
}
