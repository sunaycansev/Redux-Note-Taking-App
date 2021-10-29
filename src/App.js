import Form from "./components/Form";
import NoteList from "./components/NoteList";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <div className="justify-content-center d-flex mt-3">
        <h1>Note Taking App</h1>
      </div>
      <Filter />
      <div>
        <Form />
      </div>
      <div>
        <NoteList />
      </div>
    </>
  );
}

export default App;
