import { EventsProvider } from "./components/eventDispatcher/eventsProvider";
import { HotelCardList } from "./components/hotelCardsList/hotelCardsList";
import "./global-styles/App.css";

export default function App() {
  return (
    <EventsProvider>
    <div className="appBody">
      <HotelCardList />
      <p className="creator">
        <strong>Powered by Wohnungsfeier.at</strong>
      </p>
    </div>
    </EventsProvider>
  );
}
