import { HotelCardList } from "./components/hotelCardsList/hotelCardsList";
import { Routes, Route } from "react-router-dom";
import "./global-styles/App.css";

export default function App() {
  return (
    <div className="app1Body">
      <HotelCardList />
      <p className="creator">
        <strong>Powered by Wohnungsfeier.at</strong>
      </p>
    </div>
  );
}
