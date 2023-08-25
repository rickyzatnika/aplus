import AnimateText from "@/components/AnimateText";
import Header from "@/components/Header";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <AnimateText />
      <section>
        <Services />
      </section>
    </>
  );
}
