import Hero from "../Components/Hero";
import "../Css/Home.css";
import TabSearch from "../Components/TabSearch";
import PopularDestination from "../Components/PopularDestination";
import ExploreServices from "../Components/ExploreServices";
import WhyChooseRoomly from "../Components/WhyChooseRoomly";
import CTA from "../Components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TabSearch/>
      <PopularDestination/>
      <ExploreServices/>
      <WhyChooseRoomly/>
      <CTA/>
    </main>
  );
}