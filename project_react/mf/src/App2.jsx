import ModalSetter from "./components/modalWindow/embMW";

export default function App2() {

  const events = localStorage.getItem("Events");
  const parsed = JSON.parse(events);
  console.log(parsed)
  return (
  <>
    <div>
      {parsed.map((event, i) => (
        <div key={i}>
          {event.eventName}/{event.eventDate}
        </div>
      ))}
    </div>
    <ModalSetter/>
  </>
  );  
}
