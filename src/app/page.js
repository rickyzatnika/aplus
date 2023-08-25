import About from "@/components/Home/About";
import AnimateText from "@/components/AnimateText";
import Header from "@/components/Header";
import Services from "@/components/Home/Services";
import Portfolio from "@/components/Home/Portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <AnimateText>
        <div className="w-full relative bg-[#000] overflow-hidden py-8 lg:py-12 ">
          <div className="h-full w-24 md:w-96 absolute top-0 left-0 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="h-full w-24 md:w-96 absolute top-0 right-0 bg-gradient-to-l from-black to-transparent z-10" />
          <div className="target block  relative text-5xl lg:text-7xl  font-bold text-center  py-6 w-full  ">
            <span className="hidden">APLUS MEDIA KREASI</span>
            <div className="absolute z-5 top-[50%] right-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-100 transition-opacity duration-300 text-transparent bg-clip-text bg-gradient-to-tr from-black to-red-600/90 ">
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
              <span className="ml-10 md:ml-14 uppercase ">
                APLUS Media Kreasi
              </span>
            </div>
          </div>
        </div>
      </AnimateText>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Portfolio />
      </section>
    </>
  );
}
