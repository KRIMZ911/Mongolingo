import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton,
  ClerkProvider,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = { className?: string };

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "bg-blue-500 h-full fixed w-fill lg:w-[256px] top-0 left-0 px-4 border-r-2 flex-col"
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Mongolingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="shop" href="/shop" iconSrc="/shop.svg" />
      </div>
      <div className="p-4 fixed bottom-0">
        <ClerkProvider>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
        </ClerkProvider>
      </div>
    </div>
  );
};
