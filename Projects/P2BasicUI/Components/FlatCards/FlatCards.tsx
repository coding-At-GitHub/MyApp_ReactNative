import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
            <Text>Orange</Text>
        </View>
      </View>
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
