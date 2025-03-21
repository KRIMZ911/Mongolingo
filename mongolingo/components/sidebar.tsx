import { cn } from "@/lib/utils";

type Props = { className?: string };

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "bg-blue-500 h-full fixed w-[256px] top-0 left-0 px-4 border-r-2 flex-col"
      )}
    >
      Sidebar
    </div>
  );
};
