import "./Examples.css";
import Tab from "../Tab/Tab";
import ExampleDescription from "./ExampleDescription/ExampleDescription";
import { Examples } from "./example_data";
import { useState } from "react";
import ExampleType from "./example_data";

export default function Example() {
  const [currentTabIndex, setCurrentTabIndex] = useState(-1);

  let buttons: Array<string> = ["Components", "JSX", "Props", "State"];

  let currentTab = <p>Please select a topic</p>;

  if (currentTabIndex !== -1) {
    currentTab = <ExampleDescription {...Examples[currentTabIndex]} />;
  }

  function changeExample(selectedButton: number) {
    setCurrentTabIndex(selectedButton);
  }
  return (
    <>
      <h2>Examples</h2>
      <Tab onClick={changeExample} buttons={buttons} selectedIndex={currentTabIndex}/>
      <div className="content">
        {/* {currentTabIndex === -1 ? (
          <p>Please select a topic</p>
        ) : (
          <ExampleDescription {...Examples[currentTabIndex]} />
        )} */}
        {currentTab}
      </div>
    </>
  );
}
