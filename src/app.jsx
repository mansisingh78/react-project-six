import "./app.css";
import Nav from "./Components/Nav";
import Middle from "./Components/Middle";
import Section from "./Components/Section";
import Design from "./Components/Design";
import Services from "./Components/Services";
import Awesome from "./Components/Awesome";
import About from "./Components/About";
import Footer from "./Components/Footer";

export function App() {
  return (
    <>
      <Nav />
      <Middle />
      <Section />
      <Design />
      <Services />
      <Awesome />
      <About />
      <Footer />
    </>
  );
}
