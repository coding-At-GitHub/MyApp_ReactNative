import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollCards() {
    return (
        <View>
            <Text style={styles.headingText}>Scroll Cards</Text>

            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>You</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>can</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>scroll</Text>
                    </View>
                    <View style={[styles.card, styles.cardFour]}>
                        <Text>these</Text>
                    </View>
                    <View style={[styles.card, styles.cardFive]}>
                        <Text>cards</Text>
                    </View>
                    <View style={[styles.card, styles.cardSix]}>
                        <Text>horizontally...</Text>
                    </View>
                    <View style={[styles.card, styles.cardSeven]}>
                        <Text>Thanks</Text>
                    </View>
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
