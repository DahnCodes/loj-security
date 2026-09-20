import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { Services } from "@/components/Services";
import { Why } from "@/components/Whywestandout";

export default function Home() {
  return (
 <>
<NavBar/>
<main>
<HeroSection/>
<Services/>
<Why/>
</main>
<Footer/>
 </>
  );
}
