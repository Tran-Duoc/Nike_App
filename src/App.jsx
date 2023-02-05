import {
   heroapi,
   popularsales,
   toprateslaes,
   sneaker,
   highlight,
   story,
   footerAPI,
} from "./data/data.js";
import "./index.css";
import Hero from "./components/Hero/Hero";
import Sale from "./components/Sales/Sale";
import FlexContent from "./components/FlexContent/FlexContent.jsx";
import Stories from "./components/Stories/Stories.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
   return (
      <>
         <Navbar />
         <Cart />
         <main className="flex flex-col gap-16  relative">
            <Hero heroapi={heroapi} />
            <Sale endpoint={popularsales} ifExists />
            <FlexContent endpoint={highlight} ifExists />
            <Sale endpoint={toprateslaes} />
            <FlexContent endpoint={sneaker} />
            <Stories story={story} />
         </main>
         <Footer footerAPI={footerAPI} />
         <ToastContainer />
      </>
   );
}

export default App;
