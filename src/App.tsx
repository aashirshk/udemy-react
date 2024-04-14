import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/HeaderComponent";
import { CoreConceptsData } from "./data";
import Example from "./components/Examples/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Time to get started!</h2>
          <div className="core-concepts-container">
            <div className="title">
              <h4>Core Concepts</h4>
            </div>
            <div className="core-concepts">
              {CoreConceptsData.map((data) => (
                <CoreConcepts key={data.title} {...data} />
              ))}
            </div>
          </div>
        </section>
        <section id="examples">
          <Example />
        </section>
      </main>
    </div>
  );
}

export default App;
