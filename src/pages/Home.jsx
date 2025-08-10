import { Helmet } from "react-helmet";
import Banner2 from "../components/Banner2";
import FeaturedFoods from "../components/home/FeaturedFoods";
import HowItWorks from "../components/home/HowItWorks";
import ExtraSection2 from "../components/home/ExtraSection2";
import ExtraSection1 from "../components/home/ExtraSection1";
import Footer from "../components/Footer";
import Photo_Gallery from "../components/ui/Photo_Gallery";
import OurApps from "../components/home/OurApps";
import Loading from "./Loading";
import CustomerReview from "../test/CustomerReview";

const Home = () => {

  
  return (
    <div className="bg-white dark:bg-[#18122B] transition-colors duration-300">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | ShareBite</title>
        <meta name="description" content="Share more, waste less with ShareBite." />
      </Helmet>

      {/* Banner Section */}
      <Banner2 />

      {/* Slogan Section */}
      {/* <section className="max-w-4xl mx-auto py-10 text-center">
        <h2 className="text-2xl md:text-3xl px-4 font-bold text-[#18122B] dark:text-white">
          Don’t buy it, or bin it, <span className="text-orange-500">ShareBite it!</span>
        </h2>
      </section> */}

      {/* Featured Foods */}
      <FeaturedFoods />
      <OurApps/>

      {/* How It Works */}
      <HowItWorks />
      <Photo_Gallery/>

      {/* Extra Sections */}
      <ExtraSection2 />
      <ExtraSection1 />

      <CustomerReview/>


      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;