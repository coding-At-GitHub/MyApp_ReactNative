import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards/FlatCards'
import ScrollCards from './Components/Scrollcards/ScrollCards'

export default function P2BasicUiLandingPage() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>My First Project</Text>
                </View>
                <FlatCards />
                <ScrollCards />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleBox: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 14,

    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        borderBottomWidth: 6,
        borderBottomColor: '#c0c0c0',

        // underline: true,
        // flex:1,
        // alignItems: 'center',
        // justifyContent: 'center',
    }
})
