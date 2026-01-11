import { EventCard } from "./components/eventCardList/eventCard";
import { EventsCardList } from "./components/eventCardList/eventCardList";
import ModalSetter from "./components/modalWindow/embMW";
import "./global-styles/App.css";

export default function App2() {
  return (
    <div className="app2Body">
      <EventsCardList/>
      <ModalSetter/>
      <p className="creator">
        <strong>Powered by LustFänger.at</strong>
      </p>
    </div>
  );  
}

