import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-full">
      <MobileHeader />
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main className=" h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1050px] mx-auto pt-6 flex flex-col lg:ml-[256px] h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
