import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
     <Text>UI boxes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        // paddingBottom: 4,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        height:100,
        width: 100,
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin:3,
        paddingHorizontal: 2,
    },
    cardOne: {
        backgroundColor: 'red'
    },
    cardTwo: {
        backgroundColor: 'green'
    },
    cardThree: {
        backgroundColor: 'blue'
    },
    cardFour: {
        backgroundColor: 'orange'
    },
})