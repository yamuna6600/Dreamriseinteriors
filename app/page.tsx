import Image from "next/image";
import Header from "./components/header"
import HeroSlider from './components/HeroSlider'
import GallerySection from './components/gallerysection'
import ServicesPage from "./components/servicepage"
import Footer from "./components/footer"
import ContactSec from "./components/ContactSec"
import FooterContact from "./components/footercontact"

export default function Home() {
  return (
   <><HeroSlider />
   <GallerySection/>
   <ServicesPage/>
   <ContactSec/>
   <FooterContact/>
</>
  );
}
