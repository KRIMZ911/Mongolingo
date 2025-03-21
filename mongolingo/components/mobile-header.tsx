import { MobileSideBar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center bg-green-500 bordoer-b fixed top-0 w-full z-50">
      <MobileSideBar />
    </nav>
  );
};
