import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SingleBedIcon from "../assets/icon/single_bed";
import { Setting_Header } from "../components/header";
import MainContent from "../components/main-content";
import { BalanceLabel, BalanceLabelNumeral, SmallBalanceLabel } from "../components/label";
import { IconButton } from "../components/button";
import ArrowUpIcon from "../assets/icon/filled/ArrowUp";
import ArrowDownIcon from "../assets/icon/filled/ArrowDown";
import ArrowRightIcon from "../assets/icon/filled/ArrowRight";
import BitcoinIcon from "../assets/icon/filled/Bitcoin";
import { H3Text, H4Text } from "../components/text";
import { color } from "../components/style";
import Footer from "../components/footer";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  button: {
    borderColor: color.neutral3,
    borderRadius: 5,
    borderWidth: 2,
    width: 120,
    height: 70,
    marginHorizontal: 8,
  },
  label: {
    paddingVertical: 10,
  },
  smallabel: {
    color: color.neutral7,
    paddingBottom: 40,
  },
  btntext: {
    color: color.neutral7,
    paddingTop: 5,
  },
});

const Simplified_Home2 = () => (
  <MainContent>
    <Setting_Header>
      <Text>Back</Text>
    </Setting_Header>
    <MainContent style={styles.container}>
      <SingleBedIcon height={40} />
      <BalanceLabel style={styles.label}>
        <BalanceLabelNumeral>
          <BitcoinIcon height={20} />
          1.6240 2785
        </BalanceLabelNumeral>
      </BalanceLabel>
      <SmallBalanceLabel style={styles.smallabel}>$41,328.9</SmallBalanceLabel>
      <View style={{ flexDirection: "row" }}>
        <IconButton style={styles.button}>
          <ArrowUpIcon color="#000"/>
          <H4Text style={styles.btntext}>Send</H4Text>
        </IconButton>
        <IconButton style={styles.button}>
          <ArrowDownIcon color="#000"/>
          <H4Text style={styles.btntext}>Receive</H4Text>
        </IconButton>
      </View>
      <View style={{ flexDirection: "row", padding: 30 }}>
        <View style={{ flex: 3 }}>
          <H3Text>Set A recovery email and sleep peacefully. </H3Text>
        </View>
        <ArrowRightIcon color="#000"/>
        
      </View>
    </MainContent>
    <Footer>
      Receiving <BitcoinIcon color="#000" />
      1.6240 2785
    </Footer>
  </MainContent>
);

export default Simplified_Home2;
