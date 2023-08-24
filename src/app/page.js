import AnimateText from "@/components/AnimateText";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section className="relative w-full">
        <AnimateText />
      </section>
      <section>
        <div className="w-full h-full px-4 lg:px-8 py-8">
          <div className="w-full h-full">
            <span className="text-zinc-500 text-[18px]">01 — Our Services</span>
            <p className=" text-[24px] md:text-[28px] lg:text-[36px] text-zinc-500 w-full lg:w-[75%] pt-4">
              As a tight-knit team of experts, we create memorable and emotional
              event, production, and branding.
            </p>
          </div>
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center justify-center text-white text-center pt-12">
            <Link href="/">
              <div className="w-full rounded-lg bg-red-500 py-40 px-6">
                Link 1
              </div>
            </Link>
            <Link href="/">
              <div className="w-full rounded-lg bg-blue-500 py-40 px-6">
                Link 2
              </div>
            </Link>
            <Link href="/">
              <div className="w-full rounded-lg bg-orange-500 py-40 px-6">
                Link 3
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
