import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollCards() {
    return (
        <View>
            <Text style={styles.headingText}>Scroll Cards</Text>

            <ScrollView horizontal={true}>
              <View>
                <Text>Ui </Text>
              </View>

            </ScrollView>
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
        height: 100,
        width: 100,
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        paddingHorizontal: 2,
    },
    cardOne: {
        backgroundColor: '#808080'
    },
    cardTwo: {
        backgroundColor: '#800000'
    },
    cardThree: {
        backgroundColor: '#808000'
    },
    cardFour: {
        backgroundColor: '#008000'
    },
    cardFive: {
        backgroundColor: '#800080'
    },
    cardSix: {
        backgroundColor: '#008080'
    },
    cardSeven: {
        backgroundColor: '#000080'
    },
})