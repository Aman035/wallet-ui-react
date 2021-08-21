import React from 'react';
import { StyleSheet } from 'react-native';
import MainContent from '../components/main-content';
import Footer from '../components/footer';
import CarretUpIcon from '../assets/icon/filled/CaretUp';
import { H6Text } from '../components/text';
import Transaction from '../components/transaction';

const TransactionView = ({store})=>{

    const stroke = store.theme.color.stroke;
    const styles = StyleSheet.create({
        container : {
            backgroundColor : store.theme.color.fill
        },
        text : {
            color : stroke,
            paddingVertical : 5
        }
    })

    return(
        <MainContent style={styles.container}>
            <Footer>
                <CarretUpIcon color={stroke} height={25} width={25}/>
                <H6Text style={styles.text}>
                    Transactions
                </H6Text>
            </Footer>
            {store.transactions.map((each) =>(
                <Transaction key={each.id} type = {each.type} time={each.date} btc={each.amount} amt = {each.fiatAmount} colors = {store.theme.color}/>
            ))}
        </MainContent>
    )
}
export default TransactionView;