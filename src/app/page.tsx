import BottomStories from "@src/components/BottomStory";
import SurprisingOffer from "@src/components/SurprisingOffer";
import SwiperComponent from "@src/components/SwiperBanner";
import TopStories from "@src/components/TopStory";

export default function Home() {
  return (
    <main>
      <TopStories/>
      <SwiperComponent/>
      <BottomStories/>
      {/* <SurprisingOffer/> */}
    </main>
  )
}
