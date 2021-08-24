import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Button, { Button2_Small } from '../../components/button';
import Header from '../../components/header';
import { H3Text, H6Text, H2Text } from '../../components/text';
import { CircularContainer } from '../../components/container';
import WalletIcon from '../../assets/icon/filled/Wallet';
import CloudIcon from '../../assets/icon/filled/Cloud';
import SafeIcon from '../../assets/icon/filled/Safe';
import gStyle from '../../components/globalStyleSheet';
import { PinBubble } from '../../components/pin';

const ProductView = ({ store }) => {
  const scrollRef = React.useRef(null);
  const color = store.theme.color;
  const primary = store.theme.primary;
  const [progress, setprogress] = useState(0);
  const [xPos , setPos] = useState(0);

  const gstyle = gStyle(color);
  const cstyle = StyleSheet.create({
    iconContainer: {
      backgroundColor: primary.green,
      alignItems: 'center',
      justifyContent: 'center',
      height: 90,
      width: 90,
    },
    header: {
        alignItems : 'flex-end',
        height : 30
    },
    text: {
      textAlign: 'center',
      paddingTop: 40,
      paddingBottom: 30,
    },
    secText: {
      textAlign: 'center',
      paddingBottom: 20,
    },
    viewContainer: {
      width: '100vw',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      marginVertical : 'auto'
    },
    btn: {
      backgroundColor: primary.bitcoin_orange,
      margin: 20,
    },
    pinContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      
    },
    pinView: {
      height: 15,
      width: 15,
    },
  });

  return (
    <ScrollView style={gstyle.container}>
        <View style={{ minHeight : '100vh'}}>
      <Header style={cstyle.header}>
        <Button>
          <H3Text style={[gstyle.text, cstyle.text]}>Skip</H3Text>
        </Button>
      </Header>

      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ overflow: 'hidden'  , flex : 5}}
        ref={scrollRef}
      >
        <View style={cstyle.viewContainer}>
          <CircularContainer style={cstyle.iconContainer}>
            <WalletIcon color={color.fill} height={70} width={70} />
          </CircularContainer>
          <H6Text style={[gstyle.text, cstyle.text]}>
            Manage your Bitcoin
          </H6Text>
          <H2Text style={[gstyle.secText, cstyle.secText]}>
            Take full control with this completely self-custodied wallet.
          </H2Text>
          <H2Text style={[gstyle.secText, cstyle.secText]}>
            Your keys, your coins.
          </H2Text>
        </View>
        <View style={cstyle.viewContainer}>
          <CircularContainer style={cstyle.iconContainer}>
            <CloudIcon color={color.fill} height={70} width={70} />
          </CircularContainer>
          <H6Text style={[gstyle.text, cstyle.text]}>
            Convenient backups with cloud storage
          </H6Text>
          <H2Text style={[gstyle.secText, cstyle.secText]}>
            Your recovery phrase will be encrypted and backed up to your cloud
            provider, only you will be able to access it.
          </H2Text>
        </View>
        <View style={cstyle.viewContainer}>
          <CircularContainer style={cstyle.iconContainer}>
            <SafeIcon color={color.fill} height={70} width={70} />
          </CircularContainer>
          <H6Text style={[gstyle.text, cstyle.text]}>
            Keep your wallet and bitcoin secure
          </H6Text>
          <H2Text style={[gstyle.secText, cstyle.secText]}>
            Enable face detection or set a pin for extra security.
          </H2Text>
        </View>
      </ScrollView>

        <View>
      <View style={cstyle.pinContainer}>
        <PinBubble
          style={cstyle.pinView}
          stroke={primary.bitcoin_orange}
          secondary={color.neutral4}
          pin_num={progress === 0 ? '1' : null}
          border={color.fill}
        />
        <PinBubble
          style={cstyle.pinView}
          stroke={primary.bitcoin_orange}
          secondary={color.neutral4}
          pin_num={progress === 1 ? '1' : null}
          border={color.fill}
        />
        <PinBubble
          style={cstyle.pinView}
          stroke={primary.bitcoin_orange}
          secondary={color.neutral4}
          pin_num={progress === 2 ? '1' : null}
          border={color.fill}
        />
      </View>

      <Button2_Small
        style={cstyle.btn}
        onPress={() => {
          if (progress < 2) {
            const windowWidth = Dimensions.get('window').width;
            scrollRef.current.scrollTo({ x: xPos + windowWidth });
            setPos(xPos + windowWidth);
            setprogress(progress + 1);
          }
        }}
      >
        <H3Text style={gstyle.btnText}>Next</H3Text>
      </Button2_Small>
      </View>
      </View>
    </ScrollView>
    
  );
};

export default ProductView;
