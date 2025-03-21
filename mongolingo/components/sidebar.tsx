import { cn } from "@/lib/utils";
import Image from "next/image";
type Props = { className?: string };

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "bg-blue-500 h-full fixed w-fill lg:w-[256px] top-0 left-0 px-4 border-r-2 flex-col"
      )}
    >
      <div className="pt-8 pl-7 flex items-center gap-x-3">
        <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
        <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
          Mongolingo
        </h1>
      </div>
    </div>
  );
};
