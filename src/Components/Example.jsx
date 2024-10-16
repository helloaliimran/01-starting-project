import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Example() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(topic) {
    setSelectedTopic(topic);
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
       
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic == "components"}
              onClick={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!selectedTopic && <p>select the topic please. </p>}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
