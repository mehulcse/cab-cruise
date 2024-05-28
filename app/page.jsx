import Process from "@/components/common/process/Process";
import Footer9 from "@/components/footers/Footer8";
import Header2 from "@/components/headers/Header2";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Cities from "@/components/homes/common/cities/Cities";
import Features from "@/components/homes/common/features/Features";
import Facts from "@/components/homes/home-8/Facts";
import Features1 from "@/components/homes/home-8/Features";
import Feet from "@/components/homes/home-8/Feet";
import Hero from "@/components/homes/home-8/Hero";
import Services from "@/components/homes/home-8/Services";
import Testimonials from "@/components/homes/home-8/Testimonials";
import Icons from "@/components/icons/icons";

export const metadata = {
  title: "CAB CRUISE",
  description:
    "Book premium cab and car rental services with Lixride. Experience reliable, luxurious transportation with our chauffeur-driven limousines and car hire options, perfect for all your travel needs.",
  keywords: [
    "Cab Booking",
    "Car Rental",
    "Chauffeur Service",
    "Limousine Hire",
    "Luxury Transportation",
    "Car Hire",
    "Rent a Car",
    "Reliable Cab Services",
    "Premium Car Rental",
    "Airport Transfers",
  ],
};

export default function page() {
  return (
    <>
      <Header2 /> <MobailHeader1 />
      <main className="main">
        <Hero />
        <Features1 />
        <Feet />
        <Process />
        <Cities />
        <Services />
        <Features />
        <Facts />
        <Testimonials />
        {/*<Blogs />*/}
        <div className="border-bottom" />
        {/*<Partners />*/}
        {/* </div> */}
      </main>
      <Footer9 />
      <Icons />
    </>
  );
}
