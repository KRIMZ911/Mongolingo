import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
  activeCourse: { imageSrc: string; title: string };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({ activeCourse }: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant={"ghost"}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-mb border"
            width={32}
            height={32}
          ></Image>
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500"></Button>
      </Link>
    </div>
  );
};
