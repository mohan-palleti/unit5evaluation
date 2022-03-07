import "./App.css";
import { Books } from "./components/books";
import { Inkpens } from "./components/inkpen";
import { Pens } from "./components/pens";
import { Notebooks } from "./components/notebook";
import { Total } from "./components/total";
function App() {
  let books = 13;
  let pens = 10;
  let notebooks = 44;
  let inkpens = 78;
  return (
    <>
      <Books value={books} />
      <Pens value={pens} />
      <Notebooks value={notebooks} />
      <Inkpens value={inkpens} />
      <Total />
    </>
  );
}

export default App;
