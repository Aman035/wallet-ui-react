import React from 'react';
import { StyleSheet } from 'react-native';
import MainContent from '../components/main-content';
import CarretUpIcon from '../assets/icon/filled/CaretUp';
import { H6Text } from '../components/text';
import Transaction from '../components/transaction';
import gStyle from '../components/globalStyleSheet';

const TransactionView = ({ store }) => {
  const color = store.theme.color;
  const gstyles = gStyle(color);
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    text: {
      marginTop: 10,
      marginBottom: 20,
    },
  });
  return (
    <MainContent style={[gstyles.container, styles.container]}>
      <CarretUpIcon color={color.stroke} height={25} width={25} />
      <H6Text style={[gstyles.text, styles.text]}>Transactions</H6Text>
      {store.transactions.map((each) => (
        <Transaction
          key={each.id}
          type={each.type}
          time={each.date}
          btc={each.amount}
          amt={each.fiatAmount}
          colors={store.theme.color}
        />
      ))}
    </MainContent>
  );
};
export default TransactionView;
