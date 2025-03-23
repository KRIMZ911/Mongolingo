import { StickyWrapper } from "@/components/sticky-wrapper";

const LearnPage = () => {
  return (
    <div>
      <div className="flex flex-row-reverse gap-[48px] px-6">
        <StickyWrapper>Learn page sticky</StickyWrapper>
        <FeedWrapper>My feedwrapper</FeedWrapper>
      </div>
    </div>
  );
};

export default LearnPage;
