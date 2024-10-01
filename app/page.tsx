import Cards from "./component/cards";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Question from "./component/question";
import RenderComponent from "./component/renderComponent";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <RenderComponent />
      <Cards />
      <Question />
      <ContactUs />
      <Footer />
    </div>
  );
}
