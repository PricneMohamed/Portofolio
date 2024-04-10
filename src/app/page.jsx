import Go_shopping from "./__components/Button Go/Go_shopping";
import Banner from "./__components/Home/Banner";
import FeedBack from "./__components/Home/FeedBack";
import Slider from "./__components/Home/Slider";

export const metadata = {
  title: "Home",
  description: "Welcome in Home Section",
};
export default function Home() {
  return (
    <div className="App">
      <Banner />
      <FeedBack />
      <Slider />
      <Go_shopping />
    </div>
  );
}
