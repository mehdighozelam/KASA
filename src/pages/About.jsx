import Collapse from "../components/Collapse";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutArray from "../data/aboutArray.json";
import AboutBanner from "../components/AboutBanner";

export default function About() {
  const formattedData = aboutArray.map((item) => ({
    title: item.aboutTitle,
    text: item.aboutText,
  }));

  return (
    <div className="flex-container">
      <Header />
      <AboutBanner />
      <Collapse data={formattedData} containerStyle={{maxWidth: '1200px', margin: 'auto', display: 'grid', gap: '20px', paddingBottom: '70px', paddingTop: '50px', gridTemplateColumns: 'repeat(1, 1fr)'}}/>
      <Footer />
    </div>
  );
}
