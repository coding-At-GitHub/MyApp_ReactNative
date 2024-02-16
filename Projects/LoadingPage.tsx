import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoadingPage() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Test</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})