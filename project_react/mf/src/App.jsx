import { CityProvider } from "./components/cityEventDispatcher/cityProvider";
import { HotelCardList } from "./components/hotelCardsList/hotelCardsList";
import "./global-styles/App.css"

export default function App() {
  return (
    <div className="appBody">
      <HotelCardList></HotelCardList>
      <p className="creator"><strong>Powered by Wohnungsfeier.at</strong></p>
      <CityProvider></CityProvider>
    </div>
  );
}
