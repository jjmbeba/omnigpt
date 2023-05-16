import Features from "./(landing)/Features";
import Footer from "./(landing)/Footer";
import Hero from "./(landing)/Hero";
import Navbar from "./(landing)/Navbar";
import Testimonials from "./(landing)/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#111826] h-auto pt-[26px] md:pt-[47px]  scroll-smooth">
      <Navbar />
      <Hero/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
