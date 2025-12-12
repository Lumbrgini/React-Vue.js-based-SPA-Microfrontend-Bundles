import { EventsProvider } from "./components/eventDispatcher/eventsProvider";
import { HotelCardList } from "./components/hotelCardsList/hotelCardsList";
import { RequestForm } from "./components/requestBookingForm/requestForm";
import { Routes, Route } from "react-router-dom";
import "./global-styles/App.css";

function MF1() {
  return (
    <div className="app1Body">
      <HotelCardList />
      <p className="creator">
        <strong>Powered by Wohnungsfeier.at</strong>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <EventsProvider>
      <Routes>
        <Route path="/" element={<MF1 />} />
        <Route path="/request-booking" element={<RequestForm />} />
      </Routes>
    </EventsProvider>
  );
}
