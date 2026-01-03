import { HotelCardList } from "./components/hotelCardsList/hotelCardsList";
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
      <Routes>
        <Route path="/" element={<MF1 />} />
      </Routes>
  );
}
