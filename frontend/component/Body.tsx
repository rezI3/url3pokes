import { Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import TabContent from "./Body/TabContent";
import { css } from "@emotion/react";

const Body = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div css={styles.container}>
      <div css={styles.subContainer}>
        <div css={styles.content}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ style: { background: "blue" } }}
            variant="fullWidth"
          >
            <Tab
              label="From Poke"
              css={value === 0 ? styles.onButton : styles.offButton}
            />
            <Tab
              label="To Poke"
              css={value === 1 ? styles.onButton : styles.offButton}
            />
          </Tabs>
          <div css={styles.tabContent}>
            <TabContent value={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: css`
    width: 100vw;
    height: 65vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  subContainer: css`
    width: 80vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 15px solid #2d6cb5;
  `,
  content: css`
    width: 78vw;
    height: 55vh;
    align-items: center;
    justify-content: center;
    background-color: rgba(254, 212, 47, 0.4);
  `,
  onButton: css`
    background-color: rgba(254, 212, 47, 0.4);
  `,
  offButton: css`
    background-color: white;
  `,
  tabContent: css`
    height: 45vh;
    width: 70vw;
    margin: 0 auto;
  `,
};

export default Body;
