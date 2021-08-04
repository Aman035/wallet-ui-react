import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TripleBedIcon from "../assets/icon/triple_bed";
import { Setting_Header } from "../components/header";
import MainContent from "../components/main-content";
import { BalanceLabel, BalanceLabelNumeral, SmallBalanceLabel } from "../components/label";
import { IconButton } from "../components/button";
import ArrowUpIcon from "../assets/icon/filled/ArrowUp";
import ArrowDownIcon from "../assets/icon/filled/ArrowDown";
import BitcoinIcon from "../assets/icon/filled/Bitcoin";
import { H4Text } from "../components/text";
import { color } from "../components/style";
import { LightFooter } from "../components/footer";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
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

const Multisig_Home = () => (
  <MainContent style={{ backgroundColor: color.bitcoin_blue }}>
    <Setting_Header></Setting_Header>
    <MainContent style={styles.container}>
      <TripleBedIcon height={40} fill="#fff" />
      <BalanceLabel style={styles.label}>
        <BalanceLabelNumeral style={{ color: color.white }}>
          <BitcoinIcon height={20} fill="#fff" />
          1.6240 2785
        </BalanceLabelNumeral>
      </BalanceLabel>
      <SmallBalanceLabel style={styles.smallabel}>$41,328.9</SmallBalanceLabel>
      <View style={{ flexDirection: "row" }}>
        <IconButton style={styles.button}>
          <ArrowUpIcon stroke="#fff" />
          <H4Text style={styles.btntext}>Send</H4Text>
        </IconButton>
        <IconButton style={styles.button}>
          <ArrowDownIcon stroke="#fff" />
          <H4Text style={styles.btntext}>Receive</H4Text>
        </IconButton>
      </View>
    </MainContent>
    <LightFooter>1 transaction today</LightFooter>
  </MainContent>
);

export default Multisig_Home;
