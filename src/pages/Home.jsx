import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import properties from "../properties.json";
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Cards properties={properties} />
      <Footer />
    </div>
  );
}

export default Home;

