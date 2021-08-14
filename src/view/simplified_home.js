import React from "react";
import { View, StyleSheet } from "react-native";
import SingleBedIcon from "../assets/icon/myMattress/singleBed";
import { Setting_Header } from "../components/header";
import MainContent from "../components/main-content";
import { BalanceLabel, BalanceLabelNumeral, SmallBalanceLabel } from "../components/label";
import { IconButton } from "../components/button";
import ArrowUpIcon from "../assets/icon/filled/ArrowUp";
import ArrowDownIcon from "../assets/icon/filled/ArrowDown";
import BitcoinIcon from "../assets/icon/filled/Bitcoin";
import { H3Text, H4Text } from "../components/text";
import { color } from "../components/style";
import Footer from "../components/footer";

const Simplified_Home = ({store}) => {
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor : store.theme.color.fill
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

  return(
  <MainContent style={styles.container}>
    <Setting_Header color={store.theme.color.stroke}/>
    <MainContent>
      <SingleBedIcon height={60} width={60} color={store.theme.color.stroke}/>
      <BalanceLabel style={styles.label}>
        <BalanceLabelNumeral>
          <H3Text><BitcoinIcon color={store.theme.color.stroke}/>1.6240 2785</H3Text>
          
        </BalanceLabelNumeral>
      </BalanceLabel>
      <SmallBalanceLabel style={styles.smallabel}>$41,328.9</SmallBalanceLabel>
      <View style={{ flexDirection: "row" }}>
        <IconButton style={styles.button}>
          <ArrowUpIcon color={store.theme.color.stroke}/>
          <H4Text style={styles.btntext}>Send</H4Text>
        </IconButton>
        <IconButton style={styles.button}>
          <ArrowDownIcon color={store.theme.color.stroke}/>
          <H4Text style={styles.btntext}>Receive</H4Text>
        </IconButton>
      </View>
    </MainContent>
    <Footer>1 transaction today</Footer>
  </MainContent>
)};

export default Simplified_Home;
