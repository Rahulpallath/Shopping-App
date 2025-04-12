import HeroSection from "./sections/HeroSection";
import FeaturedCollections from "./sections/FeaturedCollections";
import RunwaySection from "./sections/RunwaySection";
import ProductsGrid from "./sections/ProductsGrid";
import ParallaxSection from "./sections/ParallaxSection";
import BrandStory from "./sections/BrandStory";
import Lookbook from "./sections/Lookbook";
import Newsletter from "./sections/Newsletter";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCollections />
      <RunwaySection />
      <ProductsGrid />
      <ParallaxSection />
      <BrandStory />
      <Lookbook />
      <Newsletter />
      <ContactSection />
    </main>
  );
}
