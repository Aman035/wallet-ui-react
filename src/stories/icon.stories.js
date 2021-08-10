import React from "react";
import { storiesOf } from "@storybook/react";
import MainContent from "../components/main-content";
import MatressIcon from "../assets/img/Logo";
import SingleBedIcon from "../assets/icon/single_bed";
import DoubleBedIcon from "../assets/icon/double_bed";
import TripleBedIcon from "../assets/icon/triple_bed";
import * as AllFilled from "../assets/icon/filled";
import * as AllOutlined from "../assets/icon/outline";
import { View, StyleSheet } from "react-native";

const Filled = Object.values(AllFilled);
const Outline = Object.values(AllOutlined);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  icon: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

storiesOf("Icons/light", module)
  .addDecorator((story) => (
    <MainContent style={styles.container}>{story()}</MainContent>
  ))
  .add("Filled Icons", () =>
    Filled.map((Each, i) => (
      <View key={i} style={styles.icon}>
        <Each height="40" width="40" color="#000"/>
      </View>
    ))
  )
  .add("Outlined Icons", () =>
    Outline.map((Each, i) => (
      <View key={i} style={styles.icon}>
        <Each height="40" width="40" color="#000"/>
      </View>
    ))
  )
  .add("Matress", () => <MatressIcon />)
  .add("SingleBed ", () => <SingleBedIcon />)
  .add("DoubleBed ", () => <DoubleBedIcon />)
  .add("TripleBed ", () => <TripleBedIcon />);

storiesOf("Icons/dark", module)
  .addDecorator((story) => (
    <MainContent style={styles.container} theme="dark">
      {story()}
    </MainContent>
  ))
  .add("Filled Icons", () =>
    Filled.map((Each, i) => (
      <View key={i} style={styles.icon}>
        <Each height="40" width="40" color="#fff"/>
      </View>
    ))
  )
  .add("Outlined Icons", () =>
    Outline.map((Each, i) => (
      <View key={i} style={styles.icon}>
        <Each height="40" width="40" color="#fff"/>
      </View>
    ))
  );
