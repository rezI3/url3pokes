import { Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import TabContent from "./Body/TabContent";

const Body = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'yellow'}}} >
        <Tab label="From Poke"
        // style={{backgroundColor: 'blue'}}
        />
        <Tab label="To Poke" />
      </Tabs>
      <TabContent value={value}/>
    </>
  );
};

export default Body;
