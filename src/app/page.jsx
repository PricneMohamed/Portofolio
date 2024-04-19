import HomePage from "./__components/Home/HomePage";

export const metadata = {
  title: "Home",
  description: "Welcome in Home Section",
};
export default function Home() {
  return (
    <div className="App">
        <HomePage />
      </div>
  );
}
