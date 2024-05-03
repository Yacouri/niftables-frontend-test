import Footer from "./components/atoms/footer";
import AiInfos from "./components/organisms/ai-infos";
import ComingSoon from "./components/organisms/coming-soon";
import CreonPass from "./components/organisms/creon-pass";
import Header from "./components/organisms/header";
import OurMission from "./components/organisms/our-mission";
import Profiting from "./components/organisms/profiting";

export default function Home() {
  return (
    <main>
      <Header />
      <CreonPass />
      <Profiting />
      <OurMission />
      <ComingSoon />
      <AiInfos />
      <Footer />
    </main>
  );
}
