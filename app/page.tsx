import Features from "./(landing)/Features";
import Footer from "./(landing)/Footer";
import Hero from "./(landing)/Hero";
import Navbar from "./(landing)/Navbar";
import Testimonials from "./(landing)/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
