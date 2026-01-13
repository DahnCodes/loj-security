import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { Services } from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Why } from "@/components/Whywestandout";

export default function Home() {
  return (
 <>
<NavBar/>
<HeroSection/>
<Services/>
<Why/>
<Testimonials/>
<Footer/>
 </>
  );
}
