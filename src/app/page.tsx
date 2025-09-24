import Image from "next/image";
import ViewPage from "./viewPage/page";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <ViewPage />
    </div>
  );
}
