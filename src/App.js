import { useSelector } from "react-redux";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

function App() {
  const items = useSelector((state) => state.notes.items);
  return (
    <>
      <div className="justify-content-center d-flex mt-3">
        <h1>Note Taking App</h1>
      </div>
      <div>
        <NoteInput />
      </div>
      <div>
        <NoteList />
      </div>
    </>
  );
}

export default App;
