import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import Hero from "./components/pages/Hero";

const App = () => {
  return (
    <div className="p-0 m-0 box-border min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
