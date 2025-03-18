import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Loader } from "lucide-react";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedOut,
  SignedIn,
  SignUpButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Lear, pracice and master class with Mongolingo
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            {" "}
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                aftersignUpUrl="/learn"
              >
                <Button size="lg" variant="secindary" className="w-full">
                  Get Stared
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn></SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
