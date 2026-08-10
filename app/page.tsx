import Header from "@/components/Header";
import ZoomScroll from "@/components/ZoomScroll";
import Services from "@/components/sections/Services";
import Advantages from "@/components/sections/Advantages";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      {/* Фіксована навігаційна панель */}
      <Header />

      {/* Перший екран: Інтро зум-скрол + автомобіль та послуги з боків */}
      <ZoomScroll />

      {/* Основний контент сайту */}
      <div className="relative z-10 bg-neutral-950">
        <Services />
        <Advantages />
        <Contacts />
        <Footer />
      </div>
    </main>
  );
}
