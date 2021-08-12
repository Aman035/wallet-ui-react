import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { dark, light } from "./themeColor";

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    alignItems: "center",
  },
  dark : {
    backgroundColor : dark.black
  }
});

const MainContent = ({ children, style, theme = "light" }) => (
  <ScrollView
    contentContainerStyle={[
      styles.content,
      style,
      theme === "dark" ? styles.dark : null,
    ]}
  >
    {children}
  </ScrollView>
);

MainContent.propTypes = {
  children: PropTypes.node,
};

export default MainContent;
