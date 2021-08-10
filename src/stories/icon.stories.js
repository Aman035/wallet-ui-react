import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react";
import MainContent from "../components/main-content";
import * as AllFilled from "../assets/icon/filled";
import * as AllOutlined from "../assets/icon/outline";
import * as Hardware from "../assets/icon/myMattress/hardware_illustrations";
import SingleBedIcon from "../assets/icon/myMattress/singleBed";
import DoubleBedIcon from "../assets/icon/myMattress/doubleBed";
import TripleBedIcon from "../assets/icon/myMattress/tripleBed";
import MatressIcon from "../assets/icon/myMattress/Logo";

const Filled = Object.values(AllFilled);
const Outline = Object.values(AllOutlined);
const Illustration = Object.values(Hardware);

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

storiesOf("Icons/Light", module)
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
  );

storiesOf("Icons/Dark", module)
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

storiesOf("Icons/Mattress/Icons", module)
  .addDecorator((story) => (
    <MainContent style={styles.container} >
      {story()}
    </MainContent>
  ))
  .add("SingleBed ", () => <SingleBedIcon color="#000"/>)
  .add("DoubleBed ", () => <DoubleBedIcon color="#000"/>)
  .add("TripleBed ", () => <TripleBedIcon color="#000"/>)
  .add("SingleBed_D ", () => <SingleBedIcon color="#fff" fill="#000"/>)
  .add("DoubleBed_D ", () => <DoubleBedIcon color="#fff" fill="#000"/>)
  .add("TripleBed_D ", () => <TripleBedIcon color="#fff" fill="#000"/>);

storiesOf("Icons/Mattress/Logo", module)
  .addDecorator((story) => (
    <MainContent style={styles.container} >
      {story()}
    </MainContent>
  ))
  .add("Matress", () => <MatressIcon />);

storiesOf("Icons/Mattress/Hardware/Light", module)
  .addDecorator((story) => (
    <MainContent style={styles.container}>
      {story()}
    </MainContent>
  ))
  .add("Hardware", () =>
    Illustration.map((Each, i) => (
      <View key={i} style={styles.icon}>
        <Each  color="#000"/>
      </View>
    ))
  );

storiesOf("Icons/Mattress/Hardware/Dark", module)
  .addDecorator((story) => (
    <MainContent style={styles.container} theme='dark'>
      {story()}
    </MainContent>
  ))
  .add("Hardware", () =>
    Illustration.map((Each, i) => (
      <View key={i} style={styles.icon}>
        <Each  color="#fff"/>
      </View>
    ))
  );