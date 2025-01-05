import React from "react";
import ReposServer from "@/components/ReposServer";
import AboutMeServer from "@/components/AboutMeServer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center p-6">
      <>
        {/* @ts-expect-error Server Component */}
        <AboutMeServer />
        {/* @ts-expect-error Server Component */}
        <ReposServer />
      </>
    </div>
  );
}
