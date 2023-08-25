import About from "@/components/Home/About";
import AnimateText from "@/components/AnimateText";
import Header from "@/components/Header";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <>
      <Header />
      <AnimateText />
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
    </>
  );
}
