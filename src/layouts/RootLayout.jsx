import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";

const RootLayout = () => {
  return (
    <div>
      <Header></Header>
      <main className="overflow-x-clip">
        <Outlet></Outlet>
      </main>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
};

export default RootLayout;
