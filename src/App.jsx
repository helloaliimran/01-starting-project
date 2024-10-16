import Header from "./Components/Header/Header.jsx";
import Example from "./Components/Example.jsx";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import CoreConcepts from "./Components/CoreConcepts.jsx";

function App() {
  
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts/>
        <Example/>
      </main>
    </div>
  );
}

export default App;
