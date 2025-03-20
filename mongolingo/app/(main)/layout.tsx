import { Sidebar } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full ">
        <div className="bg-red-500 h-full">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
