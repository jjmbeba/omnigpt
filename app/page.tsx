import Features from "./(landing)/Features";
import Footer from "./(landing)/Footer";
import Hero from "./(landing)/Hero";
import Navbar from "./(landing)/Navbar";

export default function Home() {
  return (
    <div className="bg-[#111826] h-auto pt-[26px] md:pt-[47px] px-[21px] md:px-[55px] scroll-smooth">
      <Navbar />
      <Hero/>
      <Features/>
      <Footer/>
    </div>
  );
}
